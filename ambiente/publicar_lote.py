#!/usr/bin/env python3
"""Única ruta de publicación: manifiesto explícito, SHA, lock y push a dev."""
from pathlib import Path
import argparse
import fcntl
import hashlib
import json
import subprocess

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument("manifest", help="JSON con message y files:[{path,sha256}]")
args = parser.parse_args()
manifest = json.loads(Path(args.manifest).read_text(encoding="utf-8"))
message = manifest["message"]
items = manifest["files"]
if not isinstance(message, str) or not message.strip() or not items:
    raise SystemExit("Manifiesto vacío o sin mensaje.")

def git(*arguments, timeout=45):
    return subprocess.check_output(["git", *arguments], cwd=ROOT, text=True, timeout=timeout).strip()

lock = ROOT / ".agentes-local/publicacion-git.lock"
lock.parent.mkdir(exist_ok=True)
with lock.open("a") as stream:
    fcntl.flock(stream, fcntl.LOCK_EX)
    if git("branch", "--show-current") != "dev":
        raise SystemExit("La rama actual debe ser dev. No se cambia ni reescribe otra rama.")
    paths = []
    for item in items:
        relative = Path(item["path"])
        full = (ROOT / relative).resolve()
        if relative.is_absolute() or ".." in relative.parts or not full.is_relative_to(ROOT):
            raise SystemExit("Ruta fuera del repositorio.")
        if relative.parts[0] not in ("README.md", "caso", "entregables", "site", "ambiente", "insumos"):
            raise SystemExit("Ruta fuera de las áreas publicables.")
        if any(part in (".git", ".vercel", "node_modules", ".codex", "public", "historial", "remoto") or part.startswith(".env") for part in relative.parts):
            raise SystemExit("Ruta privada/generada excluida.")
        if relative.name in ("auth.json", "credentials.json") or relative.suffix in (".pem", ".key", ".log", ".zip"):
            raise SystemExit("Credencial, log u original no aprobado.")
        if hashlib.sha256(full.read_bytes()).hexdigest() != item["sha256"]:
            raise SystemExit("El escritor modificó un archivo después de congelar el lote; pedir nuevo SHA.")
        paths.append(relative.as_posix())
    git("add", "--", *paths)
    changed = git("diff", "--cached", "--name-only", "--", *paths)
    if changed:
        git("commit", "--only", "-m", message, "--", *paths)
    commit = git("rev-parse", "HEAD")
    push = subprocess.run(["git", "push", "origin", "dev"], cwd=ROOT, capture_output=True, text=True, timeout=45)
    if push.returncode:
        print(json.dumps({"commit_local": commit, "push": "failed", "error": push.stderr[-700:]}, ensure_ascii=False))
        raise SystemExit(push.returncode)
    print(json.dumps({"branch": "dev", "commit": commit, "paths": paths, "push": "confirmed", "receipt": push.stderr.strip()}, ensure_ascii=False))
