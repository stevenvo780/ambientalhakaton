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
cargarEstado();cargarVersion();setInterval(cargarEstado,25000);
