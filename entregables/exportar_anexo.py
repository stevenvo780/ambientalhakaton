#!/usr/bin/env python3
"""Exporta el borrador de anexo y acredita su paginado, sin instalaciones."""
from pathlib import Path
import hashlib
import html
import json
import re
import shutil
import subprocess
import tempfile
from datetime import datetime, timezone

directory = Path(__file__).resolve().parent
source = directory / "ANEXO_BORRADOR.md"
office = shutil.which("libreoffice") or shutil.which("soffice")
pdfinfo = shutil.which("pdfinfo")
if not office or not pdfinfo:
    raise SystemExit("Se requieren LibreOffice y pdfinfo existentes; este script no instala paquetes.")
blocks = []
for block in source.read_text(encoding="utf-8").split("\n\n"):
    text = html.escape(block.replace("**", "").replace("\n", " "))
    if block.startswith("# "):
        blocks.append("<h1>" + text[2:] + "</h1>")
    elif block.startswith("## "):
        style = ' style="page-break-before:always"' if block.startswith("## Elegibilidad") else ""
        blocks.append("<h2" + style + ">" + text[3:] + "</h2>")
    else:
        blocks.append("<p>" + text + "</p>")
style = "@page{size:A4;margin:14mm 16mm}body{font-family:Arial,sans-serif;font-size:11pt;line-height:1.23;color:#192e40}h1{font-size:15pt;margin:0 0 8pt}h2{font-size:11pt;margin:9pt 0 4pt;page-break-after:avoid}p{margin:0 0 6pt}"
with tempfile.TemporaryDirectory(prefix="cornare-anexo-") as temp:
    temporary = Path(temp)
    document = temporary / "ANEXO_BORRADOR.html"
    document.write_text('<!doctype html><html lang="es"><head><meta charset="utf-8"><style>' + style + "</style></head><body>" + "".join(blocks) + "</body></html>", encoding="utf-8")
    subprocess.run([office, "-env:UserInstallation=" + (temporary / "office-profile").as_uri(), "--headless", "--convert-to", "pdf", "--outdir", str(directory), str(document)], check=True, capture_output=True, text=True)
pdf = directory / "ANEXO_BORRADOR.pdf"
info = subprocess.check_output([pdfinfo, str(pdf)], text=True)
pages = int(re.search(r"^Pages:\s*(\d+)", info, re.MULTILINE).group(1))
if not 1 <= pages <= 2:
    raise SystemExit(f"El borrador exportó {pages} páginas; ajustar formato antes de entregar.")
receipt = {"verified_at_utc": datetime.now(timezone.utc).isoformat(), "status": "borrador_no_anexo_final", "source": source.name, "source_sha256": hashlib.sha256(source.read_bytes()).hexdigest(), "pdf": pdf.name, "pdf_sha256": hashlib.sha256(pdf.read_bytes()).hexdigest(), "pages": pages, "page_limit": 2, "environmental_portfolio_approved": False, "final_requires_new_verification": True}
(directory / "verificacion_anexo_borrador.json").write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(json.dumps(receipt, ensure_ascii=False))
