"use strict";
const el = id => document.getElementById(id);
const fecha = value => new Intl.DateTimeFormat("es-CO", {dateStyle:"medium", timeStyle:"short", timeZone:"America/Bogota"}).format(new Date(value)) + " · Bogotá";
let ultimaFuente = null;
async function cargarEstado(){
  try {
    const response = await fetch("estado.json", {cache:"no-store"});
    if (!response.ok) throw new Error("Estado no disponible");
    const state = await response.json();
    if (!state.updated_at || !Array.isArray(state.hitos)) throw new Error("Estado inválido");
    ultimaFuente = state.updated_at;
    el("estado-titulo").textContent = state.titulo;
    el("estado-detalle").textContent = state.detalle;
    el("fecha-fuente").textContent = fecha(state.updated_at);
    el("fecha-fuente").dateTime = state.updated_at;
    el("refresh").textContent = " · Se consulta cada 25 segundos.";
    const items = state.hitos.map(hito => { const item=document.createElement("li"), titulo=document.createElement("strong"), texto=document.createElement("p"); titulo.textContent=hito.titulo; texto.textContent=hito.detalle; item.append(titulo,texto); return item; });
    el("hitos").replaceChildren(...items);
    if (state.publicacion) el("publicacion").textContent = state.publicacion;
  } catch (_) { el("refresh").textContent = ultimaFuente ? " · No se pudo consultar una nueva versión; se conserva la última fuente." : " · Consulta no disponible; se muestra el estado inicial."; }
}
async function cargarVersion(){
  try {const response=await fetch("deployment.json",{cache:"no-store"});if(!response.ok)throw new Error();const meta=await response.json();const sha=meta.deployment_commit;if(sha&&/^[a-f0-9]{40}$/.test(sha)){const link=document.createElement("a");link.href="https://github.com/stevenvo780/ambientalhakaton/commit/"+sha;link.textContent=sha.slice(0,12);el("commit").replaceChildren("Commit del despliegue: ",link);}else el("commit").textContent="Publicación directa de Vercel · aún sin commit de despliegue Git.";}catch(_){el("commit").textContent="Commit de despliegue no disponible.";}
}
let requisitos=[];
function nodo(tag,texto,clase){const n=document.createElement(tag);n.textContent=texto;if(clase)n.className=clase;return n;}
function pintarRequisitos(){const term=el("buscar").value.toLocaleLowerCase("es"),group=el("grupo").value;const filtered=requisitos.filter(row=>(!group||row.id.startsWith(group))&&Object.values(row).join(" ").toLocaleLowerCase("es").includes(term));el("conteo").textContent=filtered.length+" de 75 obligaciones visibles. Abrir una fila muestra acción, evidencia, validación y responsable.";el("lista-requisitos").replaceChildren(...filtered.map(row=>{const d=document.createElement("details"),s=document.createElement("summary");s.append(nodo("span",row.id,"id"),nodo("span",row.regla_fuente),nodo("span",row.estado,"badge"));d.append(s);const dl=document.createElement("dl");for(const [key,label]of[["accion","Acción concreta"],["evidencia","Evidencia exigida"],["validacion","Validación inequívoca"],["responsable","Responsable delegado propuesto"]])dl.append(nodo("dt",label),nodo("dd",row[key]));d.append(dl);return d;}));}
async function cargarRequisitos(){try{const r=await fetch("requisitos.json",{cache:"no-store"});if(!r.ok)throw new Error();const data=await r.json();if(data.items.length!==75||new Set(data.items.map(i=>i.id)).size!==75)throw new Error();requisitos=data.items;pintarRequisitos();el("lista-criterios").replaceChildren(...requisitos.filter(row=>row.id.startsWith("C")).map(row=>{const article=document.createElement("article");article.append(nodo("h3",row.regla_fuente.split(". E ")[0]),nodo("p",row.accion));const d=document.createElement("details");d.append(nodo("summary","Evidencia y comprobación pendientes"),nodo("p","Salida: "+row.evidencia),nodo("p","Validación: "+row.validacion));article.append(d);return article;}));}catch(_){el("conteo").textContent="No se pudo cargar la matriz. Consultar el documento del repositorio o requisitos.json.";}}
el("buscar").addEventListener("input",pintarRequisitos);el("grupo").addEventListener("change",pintarRequisitos);
cargarEstado();cargarVersion();cargarRequisitos();setInterval(cargarEstado,25000);
