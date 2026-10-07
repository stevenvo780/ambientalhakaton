import {mkdir,copyFile,writeFile,readFile,cp,access} from "node:fs/promises";
const files=["index.html","styles.css","app.js","estado.json","requisitos.json"];
await mkdir(new URL("public/",import.meta.url),{recursive:true});
const state=JSON.parse(await readFile(new URL("estado.json",import.meta.url),"utf8"));
for(const file of files) await copyFile(new URL(file,import.meta.url),new URL("public/"+file,import.meta.url));
const matrix=JSON.parse(await readFile(new URL("requisitos.json",import.meta.url),"utf8"));
if(matrix.items.length!==75||new Set(matrix.items.map(r=>r.id)).size!==75)throw new Error("La matriz debe conservar 75 IDs únicos.");
const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
const requisitos=matrix.items.map(r=>`<details><summary><span class="id">${esc(r.id)}</span><span>${esc(r.regla_fuente)}</span><span class="badge">${esc(r.estado)}</span></summary><dl>${[["accion","Acción concreta"],["evidencia","Evidencia exigida"],["validacion","Validación inequívoca"],["responsable","Responsable delegado propuesto"]].map(([key,label])=>`<dt>${label}</dt><dd>${esc(r[key])}</dd>`).join("")}</dl></details>`).join("");
const criterios=matrix.items.filter(r=>r.id.startsWith("C")).map(r=>`<article><h3>${esc(r.id+" · "+r.regla_fuente.split(". E ")[0])}</h3><p>${esc(r.accion)}</p><details><summary>Evidencia y comprobación pendientes</summary><p>Salida: ${esc(r.evidencia)}</p><p>Validación: ${esc(r.validacion)}</p></details></article>`).join("");
let html=await readFile(new URL("index.html",import.meta.url),"utf8");
html=html.replace(/<div id="lista-criterios" class="criterios">[\s\S]*?<\/div>/,`<div id="lista-criterios" class="criterios">${criterios}</div>`).replace('<div id="lista-requisitos" class="requisitos"></div>',`<div id="lista-requisitos" class="requisitos">${requisitos}</div>`).replace("Cargando matriz…","75 de 75 obligaciones visibles. Abrir una fila muestra acción, evidencia, validación y responsable.");
const date=value=>new Intl.DateTimeFormat("es-CO",{dateStyle:"medium",timeStyle:"short",timeZone:"America/Bogota"}).format(new Date(value))+" · Bogotá";
html=html.replace(/<time id="fecha-fuente">[\s\S]*?<\/time>/,`<time id="fecha-fuente" datetime="${esc(state.updated_at)}">${esc(date(state.updated_at))}</time>`);
html=html.replace(/<ol id="hitos" class="hitos">[\s\S]*?<\/ol>/,`<ol id="hitos" class="hitos">${state.hitos.map(h=>`<li><strong>${esc(h.titulo)}</strong><p>${esc(h.detalle)}</p></li>`).join("")}</ol>`);
await writeFile(new URL("public/index.html",import.meta.url),html);
const candidate=process.env.VERCEL_GIT_COMMIT_SHA;
const deployment_commit=candidate&&/^[a-f0-9]{40}$/.test(candidate)?candidate:null;
await writeFile(new URL("public/deployment.json",import.meta.url),JSON.stringify({schema:"corredor-vivo.deployment.v1",deployment_commit},null,2)+"\n");
// La publicación CLI usa únicamente el resultado estático; el proyecto Git conserva rootDirectory=site.
await mkdir(new URL(".vercel/output/static/",import.meta.url),{recursive:true});
await writeFile(new URL(".vercel/output/config.json",import.meta.url),JSON.stringify({version:3,routes:[{src:"^/presentacion/?$",dest:"/presentacion/index.html"},{src:"^/metodologia/?$",dest:"/metodologia/index.html"},{handle:"filesystem"}]})+"\n");
for(const file of [...files,"deployment.json"])await copyFile(new URL("public/"+file,import.meta.url),new URL(".vercel/output/static/"+file,import.meta.url));
// Vistas independientes: conservan el sitio raíz y comparten el mismo despliegue.
for(const directory of ["presentacion","metodologia","exposicion-assets"]){
  const source=new URL(directory+"/",import.meta.url);
  try{await access(source);}catch{continue;}
  await cp(source,new URL("public/"+directory+"/",import.meta.url),{recursive:true});
  await cp(source,new URL(".vercel/output/static/"+directory+"/",import.meta.url),{recursive:true});
}
const finalPdf=new URL("../entregables/ANEXO_METODOLOGICO.pdf",import.meta.url);
try{
  await access(finalPdf);
  for(const base of ["public/",".vercel/output/static/"]){
    await mkdir(new URL(base+"entregables/",import.meta.url),{recursive:true});
    await copyFile(finalPdf,new URL(base+"entregables/ANEXO_METODOLOGICO.pdf",import.meta.url));
  }
}catch(error){if(error.code!=="ENOENT")throw error;}
console.log("Sitio estático generado: raíz, metadatos y vistas independientes disponibles.");
