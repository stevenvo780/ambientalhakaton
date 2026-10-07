#!/usr/bin/env python3
"""Actualizar solo los diez archivos autorizados del plan y comprobar SHA256 remoto."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib, json, subprocess, sys

base = Path(__file__).resolve().parent.parent
paths = ["README.md", "caso/plan_ejecucion.md", "caso/seleccion_propuestas.md", "caso/decision_y_ambiente.md", "caso/revision_excel.md", "caso/revision_documentos.md", "caso/catalogo_costos_reto.csv", "insumos/texto/presentacion_pptx.json", "ambiente/estado_entorno.md", "ambiente/verificacion_entorno.json"]
out_path = base / "ambiente/actualizacion_plan.json"
missing = [p for p in paths if not (base / p).is_file() or (base / p).is_symlink()]
if missing:
    print(json.dumps({"status": "waiting_for_complete_inputs", "missing": missing}, ensure_ascii=False))
    sys.exit(2)

manifest = {"updated_at_utc": datetime.now(timezone.utc).isoformat(), "host": "ws-steven", "target_path": "/home/dev/hackathon-ambiental-20261007/paquete", "historical_verification_preserved": "ambiente/verificacion_paquete_remoto.json", "files": [{"path": p, "size": (base / p).stat().st_size, "sha256": hashlib.sha256((base / p).read_bytes()).hexdigest()} for p in paths]}
list_path = base / "ambiente/actualizacion_plan_paths.txt"
list_path.write_text("\n".join(paths) + "\n", encoding="utf-8")
remote_code = r"""from pathlib import Path
from datetime import datetime, timezone
import hashlib, json
m=json.loads(MANIFEST)
root=Path(m['target_path'])
checks=[]
for f in m['files']:
 p=root/f['path']
 okfile=p.is_file() and not p.is_symlink()
 size=p.stat().st_size if okfile else None
 sha=hashlib.sha256(p.read_bytes()).hexdigest() if okfile else None
 checks.append({'path':f['path'],'exists':okfile,'actual_size':size,'actual_sha256':sha,'ok':okfile and size==f['size'] and sha==f['sha256']})
result={'verified_at_utc':datetime.now(timezone.utc).isoformat(),'checks':checks,'file_count':len(checks),'ok_count':sum(c['ok'] for c in checks),'all_ok':all(c['ok'] for c in checks)}
Path('/home/dev/hackathon-ambiental-20261007/verificacion_actualizacion_plan.json').write_text(json.dumps({'manifest':m,'verification':result},ensure_ascii=False,indent=2)+'\n')
print(json.dumps(result,ensure_ascii=False))
""".replace("MANIFEST", repr(json.dumps(manifest, ensure_ascii=False)))
try:
    subprocess.run(["rsync", "-rtzc", "--protect-args", "--files-from=" + str(list_path), "--timeout=40", "-e", "ssh -o ConnectTimeout=12 -o ServerAliveInterval=10 -o ServerAliveCountMax=3", "./", "ws-steven:" + manifest["target_path"] + "/"], cwd=base, check=True, timeout=55, capture_output=True, text=True)
    reply = subprocess.run(["ssh", "-o", "ConnectTimeout=12", "ws-steven", "python3", "-"], input=remote_code, text=True, check=True, timeout=30, capture_output=True)
    verification = json.loads(reply.stdout)
    out_path.write_text(json.dumps({"manifest": manifest, "verification": verification}, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"file_count": verification["file_count"], "ok_count": verification["ok_count"], "all_ok": verification["all_ok"], "result": str(out_path)}, ensure_ascii=False))
    sys.exit(0 if verification["all_ok"] else 1)
except (subprocess.CalledProcessError, subprocess.TimeoutExpired, ValueError) as exc:
    out_path.write_text(json.dumps({"manifest": manifest, "verification": {"all_ok": False, "status": "failed", "error_type": type(exc).__name__}}, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"status": "failed", "error_type": type(exc).__name__, "result": str(out_path)}))
    sys.exit(1)
