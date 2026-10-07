/* Motor de láminas y componentes interactivos sin dependencias.
   Teclado, táctil, notas, modo estudio, pausa de movimiento, cronómetro de ensayo y pantalla completa. */
(() => {
  "use strict";
  const D = window.EXPO_DATOS;
  const body = document.body;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const NS = "http://www.w3.org/2000/svg";
  const el = (tag, attrs = {}, html) => { const e = document.createElement(tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); if (html !== undefined) e.innerHTML = html; return e; };
  const sv = (tag, attrs = {}) => { const e = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); return e; };
  const fmt = n => n.toLocaleString("es-CO");
  const dec = (n, d = 3) => n.toFixed(d).replace(".", ",");
  const pct = c => `${Math.round(c / 50)} %`;
  const cat = id => D.catalogo[id.slice(0, 2)];
  const color = id => `var(--u${id.slice(0, 2)})`;
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Barra apilada con transición, compartida por tablero y reapertura ---------- */
  const ORDEN = ["01", "03", "04", "05", "07", "08", "09", "12", "13", "14", "15", "14G", "14M"];
  const clave = id => (id === "14R" ? "14" : id);
  function crearPila(cont, alSeleccionar) {
    const pila = el("div", { class: "pila", role: "group", "aria-label": "Presupuesto a escala de 0 a 5.000 millones" });
    const segs = {};
    for (const k of ORDEN) {
      const b = el("button", { type: "button", class: "seg", "data-k": k, "data-m": "0", "aria-expanded": "false", tabindex: "-1" });
      b.style.setProperty("--c", color(k));
      b.addEventListener("click", () => alSeleccionar?.(b.dataset.id));
      segs[k] = b; pila.append(b);
    }
    const saldo = el("div", { class: "seg saldo", "data-m": "0" });
    pila.append(saldo);
    const eje = el("div", { class: "eje", "aria-hidden": "true" }, ["0", "1.000", "2.000", "3.000", "4.000", "5.000 M"].map(t => `<span>${t}</span>`).join(""));
    cont.append(pila, eje);
    return {
      pintar(cartera) {
        const presentes = new Map(cartera.unidades.map(x => [clave(x.id), x]));
        for (const k of ORDEN) {
          const s = segs[k], x = presentes.get(k);
          const m = x ? cat(x.id).c : 0;
          s.style.setProperty("--m", m);
          s.dataset.m = String(m);
          s.dataset.id = x ? x.id : "";
          s.tabIndex = x ? 0 : -1;
          s.classList.toggle("hipo", !!x?.hipo);
          s.innerHTML = x ? `<b>${x.id}</b><span>${fmt(m)}</span>` : "";
          s.setAttribute("aria-label", x ? `${x.id} ${cat(x.id).n}, ${fmt(m)} millones, ${pct(m)} del fondo` : "");
          s.setAttribute("aria-hidden", String(!x));
          if (!x) s.setAttribute("aria-expanded", "false");
        }
        const sal = D.fondo - cartera.total;
        saldo.style.setProperty("--m", sal);
        saldo.dataset.m = String(sal);
        saldo.innerHTML = sal ? `<b>${fmt(sal)}</b><span>saldo</span>` : "";
        saldo.setAttribute("aria-hidden", String(!sal));
        const suma = [...presentes.values()].reduce((s, x) => s + cat(x.id).c, 0);
        if (suma !== cartera.total || suma + sal !== D.fondo) { pila.style.outline = "3px solid red"; console.error("Barra inconsistente", cartera.nombre); }
      },
      marcar(id) { for (const s of Object.values(segs)) s.setAttribute("aria-expanded", String(!!id && s.dataset.id === id)); }
    };
  }
  const leyendaUnidades = (cartera) => cartera.unidades.map(x => {
    const c = cat(x.id).c;
    return `<li style="--c:${color(x.id)}"><i></i><b>${x.id}</b><span>${cat(x.id).n}<small>${x.nota}</small></span><span class="num">${fmt(c)} M<small> · ${pct(c)}</small></span></li>`;
  }).join("");

  /* ---------- Río del fondo (Sankey): grosor de cada brazo proporcional al costo ---------- */
  function rio(cont) {
    const cartera = D.carteras[cont.dataset.cartera || D.principal];
    const k = 0.1, x0 = 140, x1 = 700, gap = 16, top = 40;
    const alto = D.fondo * k + gap * (cartera.unidades.length - 1);
    const svg = sv("svg", { class: "sankey", viewBox: `0 0 1000 ${alto + top + 30}`, role: "img", "aria-label": `Presupuesto de 5.000 millones (no agua ni caudal) repartido en ${cartera.unidades.length} unidades; grosor proporcional al costo` });
    const off = (alto - D.fondo * k) / 2;
    svg.append(sv("rect", { class: "fuente-caudal", x: 100, y: top + off, width: 40, height: D.fondo * k, rx: 4 }));
    const t0 = sv("text", { x: 0, y: top + off - 12, "font-size": 24, "font-weight": 700 }); t0.textContent = "Fondo 5.000 M"; svg.append(t0);
    let sy = top + off, ty = top;
    cartera.unidades.forEach((x, i) => {
      const h = cat(x.id).c * k, cx = (x0 + x1) / 2;
      const d = `M${x0},${sy} C${cx},${sy} ${cx},${ty} ${x1},${ty} L${x1},${ty + h} C${cx},${ty + h} ${cx},${sy + h} ${x0},${sy + h} Z`;
      const p = sv("path", { class: "brazo", d, fill: color(x.id) }); svg.append(p);
      const cl = sv("path", { class: "corriente", d: `M${x0},${sy + h / 2} C${cx},${sy + h / 2} ${cx},${ty + h / 2} ${x1},${ty + h / 2}`, "stroke-width": Math.max(2, h * 0.18) });
      cl.style.animationDelay = `${-i * 0.37}s`; svg.append(cl);
      svg.append(sv("rect", { x: x1, y: ty, width: 14, height: h, fill: color(x.id), rx: 2 }));
      const t = sv("text", { x: x1 + 26, y: ty + h / 2 + 9, "font-size": 26, "font-weight": 700 }); t.textContent = `${x.id}  ${fmt(cat(x.id).c)}`; svg.append(t);
      const t2 = sv("text", { x: x1 + 150, y: ty + h / 2 + 9, "font-size": 22, class: "t2", fill: "currentColor", opacity: .75 }); t2.textContent = pct(cat(x.id).c); svg.append(t2);
      sy += h; ty += h + gap;
    });
    cont.append(svg);
    const ul = el("ul", { class: "leyenda-unidades" }, leyendaUnidades(cartera));
    cont.append(ul);
  }

  /* ---------- Tablero: cartera × municipio, barra, esquema territorial y cadena ---------- */
  const EVIDENCIA = {
    R: ["Sitio y estado del suelo para 07", "Programa completo y custodio de 14", "Acuerdos de 03 y usuarios de 04"],
    G: ["UPA, prácticas y basal de 08", "Sitio, función y mantenimiento de 09", "Activo crítico de infraestructura"],
    M: ["Usuarios y demanda física de 04", "Acuerdos y custodia de 03", "Problema sanitario propio para 15"]
  };
  /* Residual de N1 según P3 (CSV de residual, cruces N1): documental, no ausencia institucional. */
  const RESIDUAL_N1 = {
    R: ["Sin unidades propias 07, 08, 09, SAT 13, SUDS 10, 11/12 ni 15", "01/05 con ubicación pendiente", "No significa ausencia institucional"],
    M: ["Sin 14 municipal propia ni 07, 08, 09", "Transferencia de 14: potencial, no cobertura", "01/05 con ubicación pendiente"],
    G: ["Sin unidad propia financiada: 02, 07, 08, 09, 14, 13, 10, 11, 12, 15", "01/05 con ubicación pendiente", "No significa ausencia institucional"]
  };
  function tablero(cont) {
    let carteraK = cont.dataset.cartera || D.principal, muni = "";
    const opciones = cont.dataset.opciones ? cont.dataset.opciones.split(",") : ["M62", "D6", "N1", "SAT", "SERV", "HIP7"];
    const selC = el("fieldset", { class: "selector" }, `<legend>Cartera</legend>${opciones.map(k => `<button type="button" data-c="${k}" class="${D.carteras[k].hipotesis ? "hipo" : ""}" aria-pressed="false">${D.carteras[k].nombre}</button>`).join("")}`);
    const conMuni = cont.dataset.municipios !== "no";
    const selM = el("fieldset", { class: "selector" }, `<legend>Municipio</legend><button type="button" data-m="" aria-pressed="true">Los tres</button>${["R", "G", "M"].map(m => `<button type="button" data-m="${m}" aria-pressed="false">${D.municipios[m].nombre}</button>`).join("")}`);
    const estado = el("p", { class: "fuente", "aria-live": "polite" });
    const kpis = el("div", { class: "kpis" });
    const barra = el("div");
    const desg = el("div", { class: "desglose", hidden: "" });
    const esquema = el("div", { class: "esquema" });
    const cadena = el("div");
    cont.append(selC);
    if (conMuni) cont.append(selM);
    cont.append(kpis, barra, desg, estado);
    if (conMuni) cont.append(esquema, cadena);
    const pila = crearPila(barra, id => {
      const x = D.carteras[carteraK].unidades.find(u => u.id === id);
      if (!x) return;
      const abierto = !desg.hidden && desg.dataset.id === id;
      desg.hidden = abierto; desg.dataset.id = abierto ? "" : id; pila.marcar(abierto ? "" : id);
      const c = cat(id).c;
      desg.style.setProperty("--c", color(id));
      desg.innerHTML = `<h4>${id} · ${cat(id).largo}</h4><p><b>${fmt(c)} M</b>, ${pct(c)} del fondo: asignación, no eficacia.</p><p>Lugar: ${x.nota}.</p>${x.hipo ? "<p>Unidad hipotética: programa municipal propio no acreditado.</p>" : ""}${id.startsWith("14") && !x.hipo ? "<p>Solo 14R tiene 12 meses operativos propuestos desde una futura acta.</p>" : ""}`;
    });
    const ficha = x => `<span class="ficha${x.hipo ? " hipo" : ""}" style="--c:${color(x.id)}">${x.id}</span>`;
    const pintar = () => {
      const c = D.carteras[carteraK];
      $$("button", selC).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.c === carteraK)));
      $$("button", selM).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.m === muni)));
      pila.pintar(c); pila.marcar(""); desg.hidden = true;
      const sal = D.fondo - c.total;
      kpis.innerHTML = `<p><b>${c.unidades.length}</b>unidades completas</p><p><b>${fmt(c.total)}</b>millones asignados</p><p><b>${fmt(sal)}</b>saldo${sal ? ", no es reserva obligada" : ""}</p>`;
      estado.textContent = `${c.nombre}: ${c.estado}. Porcentajes = asignación del presupuesto, no eficacia.${c.hipotesis ? " Contar más unidades no es más eficacia." : ""}`;
      if (!conMuni) return;
      const enM = m => c.unidades.filter(x => !x.corredor && !x.compartida && !x.prioridad && x.ubic.includes(m));
      const corr = c.unidades.filter(x => x.corredor), comp = c.unidades.filter(x => x.compartida), pend = c.unidades.filter(x => !x.ubic.length);
      const prior = c.unidades.filter(x => x.prioridad);
      esquema.innerHTML = `<p class="rotulo">Esquema territorial rotulado: no es un mapa; no indica posición, superficie ni cobertura.</p>
        <div class="grid3">
          ${prior.length ? `<div class="banda">${prior.map(ficha).join("")} prioridad territorial Rionegro–Marinilla; sitios pendientes</div>` : ""}
          ${corr.length ? `<div class="banda">${corr.map(ficha).join("")} corredor, prioridad Rionegro–Marinilla</div>` : ""}
          ${comp.length ? `<div class="banda mr">${comp.map(ficha).join("")} compartida Marinilla–Rionegro</div>` : ""}
          ${["G", "M", "R"].map(m => `<div class="muni${muni && muni !== m ? " apagado" : ""}${muni === m ? " activo" : ""}"><h4>${D.municipios[m].nombre}</h4>${enM(m).map(ficha).join("") || `<small>${m === "M" ? "Sin obra física propia acreditada" : "Sin unidad municipal propia en esta cartera"}</small>`}</div>`).join("")}
        </div>
        ${pend.length ? `<p class="bandeja">Localización pendiente, no se dibuja cobertura: ${pend.map(ficha).join("")}</p>` : ""}`;
      if (!muni) { cadena.innerHTML = `<p class="razon">Elija un municipio para ver la cadena factor → función propuesta → evidencia faltante → residual.</p>`; return; }
      const M = D.municipios[muni];
      const fun = M.funcion[carteraK === "N1" ? "N1" : "D6"];
      const funTxt = carteraK === "D6" || carteraK === "N1" ? fun : c.unidades.filter(x => x.ubic.includes(muni)).map(x => `${x.id} ${cat(x.id).n}${x.hipo ? " (hipótesis)" : ""}${x.prioridad ? " (prioridad; sitios pendientes)" : ""}`);
      /* Residual propio de cada cartera: D6 y N1 según P3; M6-2 en BORRADOR hasta P3 POST-14; las demás no heredan el de D6. */
      const resid = carteraK === "D6" ? M.residual : carteraK === "N1" ? RESIDUAL_N1[muni] : carteraK === "M62" ? (D.residualM62?.[muni] || [D.BORRADOR_RESIDUAL]) : ["Residual territorial pendiente de validación para esta cartera; no se hereda el de D6."];
      const tiene = id => c.unidades.some(x => x.id === id && x.ubic.includes(muni));
      const evid = carteraK === "D6" ? EVIDENCIA[muni] : ["Sitio, actor, adicionalidad y custodio de cada unidad propuesta", ...(tiene("01") ? ["Sitios y acuerdos de 01 PSA (pendientes)"] : []), ...(tiene("15") ? ["Problema sanitario propio y capacidad para 15"] : []), ...(pend.length ? [`Localización de ${pend.map(x => x.id).join(", ")}`] : [])];
      cadena.innerHTML = `<ol class="cadena-r" aria-label="Cadena de razonamiento para ${M.nombre}">
        <li style="--c:var(--agua)"><h4>Factor (P1)</h4><ul>${M.factor.map(t => `<li>${t}</li>`).join("")}</ul></li>
        <li style="--c:var(--bosque)"><h4>Función propuesta</h4><ul>${funTxt.map(t => `<li>${t}</li>`).join("") || "<li>Sin unidad localizada</li>"}</ul></li>
        <li style="--c:var(--ocre)"><h4>Evidencia faltante</h4><ul>${evid.map(t => `<li>${t}</li>`).join("")}</ul></li>
        <li style="--c:var(--coral)"><h4>Residual</h4><ul>${resid.map(t => `<li>${t}</li>`).join("")}</ul></li>
      </ol><p class="razon">Las flechas muestran el orden del razonamiento propuesto, no causalidad ni efecto medido.</p>`;
    };
    selC.addEventListener("click", e => { const b = e.target.closest("[data-c]"); if (b) { carteraK = b.dataset.c; pintar(); } });
    selM.addEventListener("click", e => { const b = e.target.closest("[data-m]"); if (b) { muni = b.dataset.m; pintar(); } });
    pintar();
  }

  /* ---------- Matriz de hallazgos con recorrido H1–H5 ---------- */
  function matriz(cont) {
    const catN = t => ({ "Muy bajo": 1, "Bajo": 2, "Medio": 3, "Alto": 4, "Alto*": 4, "Muy alto": 5 })[t];
    const tabla = el("table", { class: "matriz" });
    tabla.innerHTML = `<caption class="oculto">Vulnerabilidad de referencia por dimensión y municipio (índice 0–1 y categoría). No es un mapa.</caption>
      <thead><tr><th scope="col">V de referencia</th><th scope="col">Guarne</th><th scope="col">Marinilla</th><th scope="col">Rionegro</th></tr></thead>
      <tbody>${D.dims.map(d => `<tr><th scope="row">${d}</th>${D.V[d].map(([v, t], j) => `<td class="cat${catN(t)}" data-d="${d}" data-j="${j}">${t}<small>${dec(v)}</small><span class="rel" aria-hidden="true"><i style="--v:${v}"></i></span></td>`).join("")}</tr>`).join("")}</tbody>`;
    const sel = el("fieldset", { class: "selector" }, `<legend>Recorrer hallazgos</legend><button type="button" data-h="" aria-pressed="true">Todo</button>${D.hallazgos.map(h => `<button type="button" data-h="${h.id}" aria-pressed="false">${h.id}</button>`).join("")}`);
    const lect = el("div", { class: "lectura-h", "aria-live": "polite" });
    const nota = el("p", { class: "fuente" }, "P1, matriz M-E-2411, hoja Regional Valles SN, AJ/AK, filas 15–79. Barra interior = índice 0–1, no porcentaje. *Agua Rionegro: Alto en la matriz ampliada, Medio en la lámina 12; el enunciado prevalece y P1 registra otras discrepancias (p. ej., Guarne desastres, salud y alimentos).");
    if (cont.dataset.modo === "oral") {
      /* Modo oral: estado final = todas las celdas H marcadas; H3 es riesgo y queda fuera de la tabla.
         Al entrar, recorrido automático breve (≤ 7 s, sin clics): 21 perfiles → H1…H5 → estado final fijo. */
      const celdasH = h => h.celdas.map(([d, j]) => $(`td[data-d="${d}"][data-j="${j}"]`, tabla)).filter(Boolean);
      for (const h of D.hallazgos) for (const td of celdasH(h)) td.dataset.h = td.dataset.h ? `${td.dataset.h}·${h.id}` : h.id;
      const items = $$(".hallazgos li", cont.closest(".lamina") || document);
      const final = () => {
        tabla.classList.add("foco");
        $$("td", tabla).forEach(td => td.classList.toggle("on", !!td.dataset.h));
        items.forEach(li => li.classList.remove("activo"));
      };
      cont.append(tabla, nota);
      final();
      let pasos = [];
      cont.addEventListener("lamina:entra", () => {
        pasos.forEach(clearTimeout); pasos = [];
        if (reducido) { final(); return; }
        tabla.classList.remove("foco"); $$("td", tabla).forEach(td => td.classList.remove("on"));
        D.hallazgos.forEach((h, k) => pasos.push(setTimeout(() => {
          tabla.classList.add("foco");
          $$("td", tabla).forEach(td => td.classList.toggle("on", celdasH(h).includes(td)));
          items.forEach((li, n) => li.classList.toggle("activo", n === k));
        }, 900 + k * 1100)));
        pasos.push(setTimeout(final, 900 + D.hallazgos.length * 1100));
      });
      return;
    }
    cont.append(sel, tabla, lect, nota);
    const ver = id => {
      $$("button", sel).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.h === id)));
      const h = D.hallazgos.find(x => x.id === id);
      tabla.classList.toggle("foco", !!h);
      $$("td", tabla).forEach(td => td.classList.toggle("on", !!h && h.celdas.some(([d, j]) => d === td.dataset.d && j === Number(td.dataset.j))));
      lect.innerHTML = h ? `<b>${h.id}</b> ${h.t}${h.riesgo ? `<br><span class="chip-riesgo">Riesgo Rionegro 0,283 Bajo → 0,321 Medio</span>` : ""}<span class="f">${h.f}</span>` : "Cinco hallazgos: cada uno orienta una función. No elegimos automáticamente el índice mayor.";
    };
    sel.addEventListener("click", e => { const b = e.target.closest("[data-h]"); if (b) ver(b.dataset.h); });
    ver("");
  }

  /* ---------- Siete máximas de seis unidades ---------- */
  function maximas(cont) {
    const filas = D.maximas.map(m => ({ ...m, unidades: m.u.map(id => ({ id })) }));
    const hip = D.carteras.HIP7;
    const fila = (rot, unidades, total, cls) => `<div class="max ${cls}"><span class="rot">${rot}</span><div class="pila">${unidades.map(x => `<span class="seg${x.hipo ? " hipo" : ""}" style="--m:${cat(x.id).c};--c:${color(x.id)}"><b>${x.id}</b></span>`).join("")}${total < 5000 ? `<span class="seg saldo" style="--m:${5000 - total}"></span>` : ""}</div><span class="tot">${fmt(total)} · ${unidades.length} u.</span></div>`;
    cont.innerHTML = `<div class="maximas" role="img" aria-label="Siete carteras de seis unidades factibles con una unidad por entrada; D6 es una de ellas; HIP7 es hipótesis no oficial">
      ${filas.map(m => fila(m.historica ? `${m.id} (histórica)` : m.principal ? `${m.id} principal` : m.id, m.unidades, m.total, m.principal ? "d6" : "")).join("")}
      ${fila("HIP7", hip.unidades, hip.total, "hip")}
    </div><div class="eje" aria-hidden="true" style="margin-left:5.9rem;margin-right:5.1rem"><span>0</span><span>2.500</span><span>5.000 M</span></div>`;
    $$(".max .pila .seg", cont).forEach((s, i) => { s.style.transitionDelay = `${(i % 7) * 40 + Math.floor(i / 6) * 90}ms`; });
    cont.addEventListener("lamina:entra", () => { const m = $(".maximas", cont); m.classList.remove("visto"); requestAnimationFrame(() => requestAnimationFrame(() => m.classList.add("visto"))); });
    if (reducido) $(".maximas", cont).classList.add("visto");
  }

  /* ---------- Escenario: referencia ↔ SSP3-7.0/2060 ↔ SSP2-4.5/2040 exploratorio ---------- */
  function escenario(cont) {
    /* Con data-cartera, solo filas de unidades de esa cartera con celda publicada; las demás se declaran pendientes. */
    const k = cont.dataset.cartera, idsC = k ? D.carteras[k].unidades.map(x => x.id.slice(0, 2)) : null;
    const filas = idsC ? D.escenarios.filter(f => f.residual || f.u.split("/").some(x => idsC.includes(x))) : D.escenarios;
    const sinCelda = idsC ? [...new Set(idsC)].filter(id => !D.escenarios.some(f => f.u.split("/").includes(id))) : [];
    const X = v => 230 + v * 1000, h = 40, top = 50;
    const svg = sv("svg", { class: "ssp", viewBox: `0 0 900 ${top + filas.length * h + 40}`, role: "img", "aria-label": "Amenaza institucional publicada por unidad, independiente de la cartera y no resultado de intervención; referencia frente al escenario elegido" });
    const rej = sv("g", { class: "rej" });
    for (let v = 0; v <= 6; v++) {
      rej.append(sv("line", { x1: X(v / 10), x2: X(v / 10), y1: top - 20, y2: top + filas.length * h }));
      const t = sv("text", { x: X(v / 10), y: top + filas.length * h + 24, "text-anchor": "middle", "font-size": 15, class: "t2" }); t.textContent = v ? `0,${v}` : "0"; rej.append(t);
    }
    svg.append(rej);
    const movs = filas.map((f, i) => {
      const y = top + i * h;
      const g = sv("g", { class: f.residual ? "resid" : "" });
      const et = sv("text", { x: 0, y: y + 6, "font-size": 17 }); et.textContent = `${f.u === "—" ? "" : f.u + " "}${f.p}`; g.append(et);
      g.append(sv("circle", { class: "fantasma", cx: X(f.ref), cy: y, r: 8 }));
      const tr = sv("line", { class: "traza", x1: X(f.ref), x2: X(f.ref), y1: y, y2: y }); g.append(tr);
      const mv = sv("g", { class: "mov" });
      mv.append(sv("circle", { class: "punto", cx: 0, cy: y, r: 9 }));
      const val = sv("text", { x: 14, y: y - 12, "font-size": 15, "font-weight": 700 }); mv.append(val);
      g.append(mv); svg.append(g);
      return { f, mv, tr, val };
    });
    const leyenda = sv("g"); leyenda.append(sv("circle", { class: "fantasma", cx: 240, cy: 18, r: 7 }));
    const lt = sv("text", { x: 254, y: 23, "font-size": 15 }); lt.textContent = "referencia 1981–2010"; leyenda.append(lt);
    leyenda.append(sv("circle", { class: "punto", cx: 470, cy: 18, r: 7 }));
    const lt2 = sv("text", { x: 484, y: 23, "font-size": 15 }); lt2.textContent = "escenario elegido"; leyenda.append(lt2); svg.append(leyenda);
    const sel = el("fieldset", { class: "selector" }, `<legend>Escenario</legend><button type="button" data-e="ref" aria-pressed="false">Referencia</button><button type="button" data-e="s3" aria-pressed="false">SSP3-7.0, 2041–2060 (solicitado)</button><button type="button" data-e="s2" class="hipo" aria-pressed="false">SSP2-4.5, 2021–2040 (exploratorio)</button>`);
    const caja = el("div", { class: "ssp-caja" }); caja.append(svg);
    /* Equivalente vertical para móvil: mismas filas y valores (referencia → SSP3; SSP2 solo exploratorio fuera del modo oral). */
    caja.append(el("ul", { class: "ssp-lista", "aria-label": "Amenaza institucional publicada por unidad: referencia y SSP3-7.0 2041–2060" },
      filas.map(f => `<li class="${f.residual ? "resid" : ""}"><b>${f.u === "—" ? "" : f.u + " "}${f.p}</b><span>ref ${dec(f.ref)} → SSP3 ${dec(f.s3)}${cont.dataset.modo === "oral" ? "" : ` · SSP2 exploratorio ${dec(f.s2)}`}</span></li>`).join("")));
    if (sinCelda.length) caja.append(el("p", { class: "fuente" }, `${sinCelda.join(" y ")}: sin fila de amenaza propia en este gráfico; P3 v8.3 revisa su función sin proyectar nuevos valores individuales.`));
    const lect = el("p", { class: "fuente", "aria-live": "polite" });
    if (cont.dataset.modo === "oral") {
      /* Modo oral: referencia fija (círculo hueco) y SSP3 como estado final; al entrar el punto se desplaza una vez. */
      lt2.textContent = "SSP3-7.0, 2041–2060";
      const fijar = e => movs.forEach(({ f, mv, tr, val }) => { const x = X(f[e]); mv.style.transform = `translate(${x}px,0px)`; tr.setAttribute("x2", x); val.textContent = e === "s3" ? `${dec(f.ref)} → ${dec(f.s3)}` : dec(f.ref); });
      cont.append(caja);
      fijar("s3");
      let auto = 0;
      cont.addEventListener("lamina:entra", () => {
        clearTimeout(auto);
        if (reducido) { fijar("s3"); return; }
        movs.forEach(({ mv }) => { mv.style.transition = "none"; }); fijar("ref"); void svg.getBoundingClientRect();
        movs.forEach(({ mv }) => { mv.style.transition = ""; });
        auto = setTimeout(() => fijar("s3"), 350);
      });
      return;
    }
    cont.append(sel, caja, lect);
    const ver = e => {
      $$("button", sel).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.e === e)));
      for (const { f, mv, tr, val } of movs) { const x = X(f[e]); mv.style.transform = `translate(${x}px,0px)`; tr.setAttribute("x2", x); val.textContent = dec(f[e]); }
      const base = " Amenaza institucional publicada, independiente de la cartera: no es resultado de intervención.";
      lect.textContent = (e === "s3" ? "SSP3-7.0 hacia 2060: horizonte solicitado y confirmado; coincide con el de estrés. Índice 0–1, no caudal, temperatura ni eficacia." : e === "s2" ? "SSP2-4.5/2040: solo exploración adicional del equipo; no es el horizonte solicitado." : "Referencia climática 1981–2010.") + base;
    };
    /* La animación automática a SSP3 se cancela si la persona elige un escenario o si la vista deja de estar visible. */
    let auto = 0;
    const cancelar = () => { clearTimeout(auto); auto = 0; };
    sel.addEventListener("click", e => { const b = e.target.closest("[data-e]"); if (b) { cancelar(); ver(b.dataset.e); } });
    ver("ref");
    cont.addEventListener("lamina:entra", () => {
      cancelar(); ver("ref");
      if (!reducido) auto = setTimeout(() => { auto = 0; if (!cont.closest(".lamina[hidden]")) ver("s3"); }, 650);
    });
  }

  /* ---------- Reapertura: D6 → SAT crítico / servicio esencial ---------- */
  /* ---------- Filas estáticas para el modo oral ---------- */
  const filaEstatica = (rot, unidades, total, cls = "", nota = "") => `<div class="max grande ${cls}"><span class="rot">${rot}</span><div class="pila">${unidades.map(x => `<span class="seg${x.hipo ? " hipo" : ""}" style="--m:${cat(x.id).c};--c:${color(x.id)}"><b>${x.id}</b><span>${fmt(cat(x.id).c)}</span></span>`).join("")}${total < 5000 ? `<span class="seg saldo" style="--m:${5000 - total}"><b>${fmt(5000 - total)}</b><span>saldo</span></span>` : ""}${nota}</div><span class="tot">${fmt(total)} · ${unidades.length} u.</span></div>`;
  const ejeOral = `<div class="eje eje-oral" aria-hidden="true"><span>0</span><span>1.000</span><span>2.000</span><span>3.000</span><span>4.000</span><span>5.000 M</span></div>`;

  /* Principal (M6-2) frente a D6 histórica y N1 con panel municipal, o diferencia de compras: todo visible sin clics. */
  function comparacion(cont) {
    const p = D.carteras[cont.dataset.a || D.principal], d6 = D.carteras.D6, n1 = D.carteras.N1;
    if (cont.dataset.modo === "diferencia") {
      const b = D.carteras[cont.dataset.b || "D6"];
      const idsA = p.unidades.map(x => x.id), idsB = b.unidades.map(x => x.id);
      const comunes = idsA.filter(id => idsB.includes(id)), soloA = idsA.filter(id => !idsB.includes(id)), soloB = idsB.filter(id => !idsA.includes(id));
      const u = ids => ids.map(id => ({ id }));
      const t = ids => D.total(ids);
      const nb = b === d6 ? "D6 (histórica)" : b.nombre;
      cont.innerHTML = `<div class="maximas visto comp" role="img" aria-label="Compras comunes y diferentes entre ${p.nombre} y ${nb} a la misma escala">
        ${filaEstatica("En ambas", u(comunes), 5000, "", "")}
        ${filaEstatica(`Solo ${p.nombre}`, u(soloA), 5000, "d6", "")}
        ${filaEstatica(`Solo ${b.nombre}`, u(soloB), 5000, "", "")}
      </div>${ejeOral}
      <p class="fuente">En ambas: ${comunes.join(", ")} = ${fmt(t(comunes))} M. Solo ${p.nombre}: ${soloA.join(", ")} = ${fmt(t(soloA))} M (${pct(t(soloA))}). Solo ${nb}: ${soloB.join(", ")} = ${fmt(t(soloB))} M (${pct(t(soloB))}). Escala lineal común; porcentajes de presupuesto, no impacto.</p>`;
      $$(".tot", cont).forEach((s, k) => { s.textContent = `${fmt(t([comunes, soloA, soloB][k]))} M`; });
      $$(".seg.saldo", cont).forEach(s => s.remove());
      return;
    }
    let html = `<div class="maximas visto comp" role="img" aria-label="${p.nombre}, D6 histórica y N1 a la misma escala de 0 a 5.000 millones">
      ${filaEstatica(p.nombre, p.unidades, p.total, "d6")}
      ${filaEstatica("D6 hist.", d6.unidades, d6.total)}
      ${filaEstatica("N1", n1.unidades, n1.total)}
    </div>${ejeOral}`;
    if (cont.dataset.municipios !== "no") {
      const fichaO = (x, extra = "") => `<span class="ficha${x.hipo ? " hipo" : ""}" style="--c:${color(x.id)}">${x.id}${extra}</span>`;
      const enM = (c, m) => c.unidades.filter(x => x.ubic.includes(m)).map(x => fichaO(x, x.prioridad ? " prioridad" : x.corredor ? " corredor" : x.compartida ? " compartida" : "")).join("") || "<small>ninguna localizada</small>";
      const resP = m => (p === D.carteras.M62 ? D.residualM62?.[m] : null) || [D.BORRADOR_RESIDUAL];
      html += `<p class="rotulo-esq">Esquema municipal rotulado, no es un mapa: unidades propuestas por cartera y factor P1.</p>
      <div class="muni-oral">${["G", "M", "R"].map(m => { const M = D.municipios[m]; return `<section><h4>${M.nombre}</h4>
        <p><b>${p.nombre}</b> ${enM(p, m)}</p><p><b>D6</b> ${enM(d6, m)}</p><p><b>N1</b> ${enM(n1, m)}</p>
        <p class="fac">${M.factor.slice(0, 2).join(". ")}.</p>
        <p class="res-rot">Residual esperado — solo ${p.nombre} (P3 v8.3)</p>
        <ul class="res">${resP(m).map(r => `<li>${r}</li>`).join("")}</ul></section>`; }).join("")}</div>
      <p class="fuente">01 de ${p.nombre}: prioridad territorial Rionegro–Marinilla, sitios pendientes; no se dibuja cobertura. N1: 01 y 05 sin localización municipal acreditada. D6 es el comparador histórico.</p>`;
    }
    cont.innerHTML = html;
  }

  function reapertura(cont) {
    if (cont.dataset.modo === "oral") {
      const bk = cont.dataset.base || "D6";
      const base = D.carteras[bk].unidades.map(x => x.id);
      const filas = [bk, "SAT", "SERV"].map(k => {
        const c = D.carteras[k], ids = c.unidades.map(x => x.id);
        const sale = base.filter(id => !ids.includes(id)), entra = ids.filter(id => !base.includes(id));
        const nota = k === bk ? "" : `<p class="cambios">${sale.map(id => `<span class="sale">${id} ${cat(id).n}</span>`).join(" ")} ${entra.map(id => `<span class="entra">+ ${id} ${cat(id).n}</span>`).join(" ")}</p>`;
        return filaEstatica(c.nombre, c.unidades, c.total, k === bk ? "d6" : "") + nota;
      }).join("");
      cont.innerHTML = `<div class="maximas visto comp" role="img" aria-label="D6 y dos reaperturas a la misma escala">${filas}</div>${ejeOral}`;
      return;
    }
    const sel = el("fieldset", { class: "selector" }, `<legend>Si se demuestra una función crítica</legend><button type="button" data-c="D6" aria-pressed="true">D6</button><button type="button" data-c="SAT" aria-pressed="false">SAT crítico</button><button type="button" data-c="SERV" aria-pressed="false">Servicio esencial</button>`);
    const barra = el("div"), cambios = el("p", { class: "cambios", "aria-live": "polite" });
    cont.append(sel, barra, cambios);
    const pila = crearPila(barra);
    const base = D.carteras.D6.unidades.map(x => x.id);
    const ver = k => {
      const c = D.carteras[k];
      $$("button", sel).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.c === k)));
      pila.pintar(c);
      const ids = c.unidades.map(x => x.id);
      const sale = base.filter(id => !ids.includes(id)), entra = ids.filter(id => !base.includes(id));
      cambios.innerHTML = k === "D6" ? "Base provisional: 6 unidades, 5.000, saldo 0." : `${sale.map(id => `<span class="sale">${id} ${cat(id).n}</span>`).join(" ")} ${entra.map(id => `<span class="entra">+ ${id} ${cat(id).n}</span>`).join(" ")} → ${c.unidades.length} unidades, ${fmt(c.total)} M, saldo ${fmt(D.fondo - c.total)}.`;
    };
    sel.addEventListener("click", e => { const b = e.target.closest("[data-c]"); if (b) ver(b.dataset.c); });
    ver("D6");
  }

  /* ---------- Capas 3D conceptuales: separar / alinear ---------- */
  function capas(cont) {
    const b = $("[data-capas]", cont);
    b?.addEventListener("click", () => { const on = cont.classList.toggle("separadas"); b.setAttribute("aria-pressed", String(on)); b.textContent = on ? "Alinear capas" : "Separar capas"; });
  }

  const COMPONENTES = { rio, tablero, matriz, maximas, escenario, reapertura, capas, comparacion };
  const crear = c => { if (c.dataset.listo) return; c.dataset.listo = "1"; try { COMPONENTES[c.dataset.componente]?.(c); } catch (err) { console.error("Componente", c.dataset.componente, err); } };
  /* Dibuja cuando el contenedor ya tiene ancho (evita gráficos de ancho 0 en láminas ocultas) y luego avisa la entrada. */
  const activar = (c, intentos = 0) => {
    if (!c.dataset.listo && c.clientWidth === 0 && intentos < 60) { requestAnimationFrame(() => activar(c, intentos + 1)); return; }
    crear(c);
    c.dispatchEvent(new CustomEvent("lamina:entra"));
  };

  const laminas = $$(".lamina");
  if (!laminas.length) $$("[data-componente]").forEach(crear);
  const btn = a => $(`[data-accion="${a}"]`);
  const alternar = (accion, clase) => { const on = body.classList.toggle(clase); btn(accion)?.setAttribute("aria-pressed", String(on)); return on; };

  /* Página normal (metodología): animar componentes al entrar en vista; pausa de movimiento con botón o P. */
  if (!laminas.length) {
    const avisar = c => c.dispatchEvent(new CustomEvent("lamina:entra"));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { avisar(e.target); io.unobserve(e.target); } }), { threshold: .25 });
      $$("[data-componente]").forEach(c => io.observe(c));
    } else $$("[data-componente]").forEach(avisar);
    document.addEventListener("click", e => {
      if (e.target.closest('[data-accion="pausa"]')) alternar("pausa", "pausado");
      const f = e.target.closest("[data-filtro]");
      if (f) {
        const t = f.dataset.filtro;
        $$("[data-filtro]").forEach(b => b.setAttribute("aria-pressed", String(b === f)));
        body.classList.toggle("filtrado", !!t);
        $$(".libro li").forEach(li => li.classList.toggle("on", !!t && !!li.querySelector(`.tipo.${t}`)));
      }
    });
    document.addEventListener("keydown", e => { if ((e.key === "p" || e.key === "P") && !e.ctrlKey && !e.metaKey && !e.altKey && !e.target.closest("input,textarea,select")) alternar("pausa", "pausado"); });
    return;
  }

  /* ---------- Motor de láminas (presentación) ---------- */
  const tramos = $$(".tramo");
  const contador = $(".pie .contador"), habla = $(".pie .habla"), reloj = $(".cronometro"), escenarioEl = $(".escenario");
  let i = 0, deck = true;
  const indiceHash = () => {
    let h = "";
    try { h = decodeURIComponent(location.hash.slice(1)); } catch { return -1; }
    if (!h) return 0;
    const n = Number(h);
    if (Number.isInteger(n) && n >= 1 && n <= laminas.length) return n - 1;
    return laminas.findIndex(l => l.id === h);
  };
  /* Explicaciones M6-2 (archivos del helper, no editados aquí): se montan al entrar en la lámina y se desmontan al salir.
     Sin window.mountM62Explain, los contenedores [data-m62-explain] quedan ocultos y no pasa nada. */
  let limpiarExp = [];
  const montarExplicaciones = ls => {
    limpiarExp.forEach(f => { try { f(); } catch (err) { console.error("Desmontar explicación M6-2", err); } });
    limpiarExp = [];
    if (typeof window.mountM62Explain !== "function") return;
    ls.forEach(l => $$("[data-m62-explain]", l).forEach(c => {
      try {
        const f = window.mountM62Explain(c, { sceneKey: c.dataset.m62Explain, data: D, reducedMotion: reducido });
        if (typeof f === "function") limpiarExp.push(f);
        c.hidden = false;
      } catch (err) { console.error("Explicación M6-2", c.dataset.m62Explain, err); }
    }));
  };
  const pintar = (dir = 0) => {
    laminas.forEach((l, k) => {
      const activa = k === i;
      l.hidden = deck && !activa;
      l.setAttribute("aria-roledescription", "lámina");
      l.classList.remove("entra");
      if (activa && deck && dir) { void l.offsetWidth; l.classList.add("entra"); }
    });
    const t = Number(laminas[i].dataset.tramo);
    tramos.forEach((b, k) => {
      if (k === t) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
      b.classList.toggle("hecho", t >= 0 ? k < t : i > 0);
    });
    const rioT = $(".rio"), actual = tramos[t];
    if (rioT && actual && rioT.scrollWidth > rioT.clientWidth) rioT.scrollLeft = actual.offsetLeft - rioT.offsetLeft - 16;
    const titulo = $("h1,h2", laminas[i])?.textContent.trim() ?? "";
    if (contador) contador.textContent = `${i + 1} de ${laminas.length}`;
    if (habla) habla.textContent = laminas[i].dataset.habla || "";
    const ant = btn("anterior"), sig = btn("siguiente");
    if (ant) ant.disabled = i === 0;
    if (sig) sig.disabled = i === laminas.length - 1;
    if (deck) escenarioEl?.scrollTo({ top: 0 });
    laminas[i].setAttribute("aria-label", `${i + 1} de ${laminas.length}: ${titulo}`);
    $$("[data-componente]", laminas[i]).forEach(c => activar(c));
    montarExplicaciones(deck ? [laminas[i]] : laminas);
    if (reloj && !reloj.hidden) tic();
  };
  const ir = (k, dir = 0) => {
    const n = Math.max(0, Math.min(laminas.length - 1, k));
    if (n === i && dir) return;
    i = n;
    try { history.replaceState(null, "", `#${laminas[i].id || i + 1}`); } catch { /* sin historial: sigue funcionando */ }
    pintar(dir);
    if (!deck) laminas[i].scrollIntoView({ block: "start" });
  };
  const siguiente = () => ir(i + 1, 1), anterior = () => ir(i - 1, -1);
  const estudio = () => {
    const on = alternar("estudio", "estudio"); deck = !on; body.classList.toggle("deck", deck); pintar();
    if (on) { $$("[data-componente]").forEach(c => activar(c)); laminas[i].scrollIntoView({ block: "start" }); }
  };
  const pantalla = async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen?.(); } catch { /* el navegador puede negarlo */ } };

  /* Cronómetro de ensayo: ayuda local; la lámina de preguntas queda fuera del objetivo oral. */
  let inicio = 0, acumulado = 0, timer = 0;
  const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  function tic() {
    if (!reloj) return;
    const s = (acumulado + (inicio ? Date.now() - inicio : 0)) / 1000;
    reloj.textContent = mmss(s);
    const t = Number(laminas[i].dataset.tramo);
    const fin = t >= 0 ? Number(tramos[t]?.dataset.fin) : 0;
    reloj.classList.toggle("tarde", !!fin && s > fin);
    reloj.title = fin ? `Objetivo: terminar este bloque antes de ${mmss(fin)}` : "Fuera de los 7 minutos orales";
  }
  const cronometro = () => {
    if (!reloj) return;
    reloj.hidden = false;
    const b = btn("reloj");
    if (inicio) { acumulado += Date.now() - inicio; inicio = 0; clearInterval(timer); b?.setAttribute("aria-pressed", "false"); }
    else { inicio = Date.now(); timer = setInterval(tic, 250); b?.setAttribute("aria-pressed", "true"); }
    tic();
  };
  const reiniciar = () => { acumulado = 0; if (inicio) inicio = Date.now(); if (reloj && !reloj.hidden) tic(); };
  const pausa = () => alternar("pausa", "pausado");

  document.addEventListener("click", e => {
    const salto = e.target.closest(".salto");
    if (salto) { e.preventDefault(); const l = laminas[i]; l.tabIndex = -1; l.focus({ preventScroll: false }); return; }
    const a = e.target.closest("[data-accion]")?.dataset.accion;
    if (a === "siguiente") siguiente();
    else if (a === "anterior") anterior();
    else if (a === "notas") alternar("notas", "con-notas");
    else if (a === "estudio") estudio();
    else if (a === "pantalla") pantalla();
    else if (a === "reloj") cronometro();
    else if (a === "pausa") pausa();
    const t = e.target.closest(".tramo[data-ir], [data-ir-etapa]");
    if (t) { const n = Number(t.dataset.ir ?? t.dataset.irEtapa); const k = laminas.findIndex(l => Number(l.dataset.tramo) === n); if (k >= 0) ir(k, k > i ? 1 : -1); }
  });
  document.addEventListener("keydown", e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target.closest("input,textarea,select,[contenteditable]")) return;
    const k = e.key;
    if ((k === " " || k === "Enter") && e.target.closest("button,a,[role=button],[tabindex='0']")) return;
    if (deck && (k === "ArrowRight" || k === "PageDown" || (k === " " && !e.shiftKey))) { e.preventDefault(); siguiente(); }
    else if (deck && (k === "ArrowLeft" || k === "PageUp" || (k === " " && e.shiftKey))) { e.preventDefault(); anterior(); }
    else if (deck && k === "Home") { e.preventDefault(); ir(0, -1); }
    else if (deck && k === "End") { e.preventDefault(); ir(laminas.length - 1, 1); }
    else if (k === "n" || k === "N") alternar("notas", "con-notas");
    else if (k === "e" || k === "E") estudio();
    else if (k === "f" || k === "F") pantalla();
    else if (k === "p" || k === "P") pausa();
    else if (k === "t" || k === "T") cronometro();
    else if (k === "r" || k === "R") reiniciar();
    else if (deck && /^[1-9]$/.test(k)) { const n = Number(k) - 1; if (n < laminas.length) ir(n, n > i ? 1 : -1); }
  });
  let x0 = null, y0 = null;
  escenarioEl?.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse" && !e.target.closest("button,.ssp-caja,.grafo-caja,.matriz,.rio")) { x0 = e.clientX; y0 = e.clientY; } }, { passive: true });
  escenarioEl?.addEventListener("pointerup", e => {
    if (x0 === null || !deck) return;
    const dx = e.clientX - x0, dy = e.clientY - y0; x0 = y0 = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? siguiente : anterior)();
  }, { passive: true });
  escenarioEl?.addEventListener("pointercancel", () => { x0 = y0 = null; });
  window.addEventListener("hashchange", () => { const k = indiceHash(); if (k >= 0 && k !== i) { i = k; pintar(); } });

  body.classList.add("deck");
  const k0 = indiceHash(); i = k0 >= 0 ? k0 : 0;
  pintar();
})();
