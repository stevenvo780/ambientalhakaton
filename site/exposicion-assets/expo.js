/* Motor de láminas sin dependencias: teclado, táctil, notas, modo estudio, cronómetro y pantalla completa.
   Sin JS, las láminas se leen como documento continuo. */
(() => {
  "use strict";
  const body = document.body;
  const laminas = [...document.querySelectorAll(".lamina")];
  const tramos = [...document.querySelectorAll(".tramo")];
  const contador = document.querySelector(".pie .contador");
  const habla = document.querySelector(".pie .habla");
  const reloj = document.querySelector(".cronometro");
  const escenario = document.querySelector(".escenario");
  const btn = a => document.querySelector(`[data-accion="${a}"]`);
  if (!laminas.length) return;

  /* Autochequeo de barras: la suma de segmentos debe coincidir con data-total y el saldo con 5.000 − total. */
  for (const barra of document.querySelectorAll(".barra[data-total]")) {
    const suma = [...barra.querySelectorAll(".seg[data-m]")].reduce((s, el) => s + Number(el.dataset.m), 0);
    const total = Number(barra.dataset.total);
    const saldoEl = barra.querySelector(".seg.saldo");
    const saldo = saldoEl ? Number(getComputedStyle(saldoEl).getPropertyValue("--m")) : 0;
    const okSaldo = barra.dataset.saldo === undefined || (Number(barra.dataset.saldo) === 5000 - total && (!saldoEl || saldo === 5000 - total));
    if (suma !== total || suma + saldo > 5000 || !okSaldo) {
      barra.classList.add("error");
      console.error("Barra inconsistente", { suma, total, saldo, barra });
    }
  }

  let i = 0;
  let deck = true;
  const leerHash = () => {
    const h = decodeURIComponent(location.hash.slice(1));
    if (!h) return 0;
    const n = Number(h);
    if (Number.isInteger(n) && n >= 1 && n <= laminas.length) return n - 1;
    const idx = laminas.findIndex(l => l.id === h);
    return idx >= 0 ? idx : 0;
  };

  const pintar = (dir = 0) => {
    laminas.forEach((l, k) => {
      const activa = k === i;
      l.hidden = deck && !activa;
      l.setAttribute("aria-roledescription", "lámina");
      l.classList.remove("entra");
      if (activa && deck && dir) { l.style.setProperty("--dx", dir > 0 ? "14px" : "-14px"); void l.offsetWidth; l.classList.add("entra"); }
    });
    const t = Number(laminas[i].dataset.tramo);
    tramos.forEach((b, k) => {
      if (k === t) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
      b.classList.toggle("hecho", t >= 0 ? k < t : i > 0);
    });
    const rio = document.querySelector(".rio");
    const actual = tramos[t];
    if (rio && actual && rio.scrollWidth > rio.clientWidth) rio.scrollLeft = actual.offsetLeft - rio.offsetLeft - 16;
    const titulo = laminas[i].querySelector("h1,h2")?.textContent.trim() ?? "";
    if (contador) contador.textContent = `${i + 1} de ${laminas.length}`;
    if (habla) habla.textContent = laminas[i].dataset.habla || "";
    const ant = btn("anterior"), sig = btn("siguiente");
    if (ant) ant.disabled = i === 0;
    if (sig) sig.disabled = i === laminas.length - 1;
    if (deck) escenario?.scrollTo({ top: 0 });
    laminas[i].setAttribute("aria-label", `${i + 1} de ${laminas.length}: ${titulo}`);
  };

  const ir = (k, dir = 0) => {
    const n = Math.max(0, Math.min(laminas.length - 1, k));
    if (n === i && dir) return;
    i = n;
    history.replaceState(null, "", `#${laminas[i].id || i + 1}`);
    pintar(dir);
    if (!deck) laminas[i].scrollIntoView({ block: "start" });
  };
  const siguiente = () => ir(i + 1, 1);
  const anterior = () => ir(i - 1, -1);

  const alternar = (accion, clase) => {
    const b = btn(accion);
    const on = body.classList.toggle(clase);
    b?.setAttribute("aria-pressed", String(on));
    return on;
  };
  const estudio = () => {
    const on = alternar("estudio", "estudio");
    deck = !on;
    body.classList.toggle("deck", deck);
    pintar();
    if (on) laminas[i].scrollIntoView({ block: "start" });
  };
  const pantalla = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen?.();
    } catch { /* el navegador puede negarlo; la vista sigue usable */ }
  };

  /* Cronómetro de ensayo: ayuda local, no es evidencia de duración. */
  let inicio = 0, acumulado = 0, timer = 0;
  const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const tic = () => {
    const s = (acumulado + (inicio ? Date.now() - inicio : 0)) / 1000;
    reloj.textContent = fmt(s);
    const t = Number(laminas[i].dataset.tramo);
    const fin = t >= 0 ? Number(tramos[t]?.dataset.fin) : 420;
    reloj.classList.toggle("tarde", s > (fin || 420));
    reloj.title = fin ? `Objetivo de este bloque: terminar antes de ${fmt(fin)}` : "";
  };
  const cronometro = () => {
    if (!reloj) return;
    const b = btn("reloj");
    if (reloj.hidden) { reloj.hidden = false; }
    if (inicio) { acumulado += Date.now() - inicio; inicio = 0; clearInterval(timer); b?.setAttribute("aria-pressed", "false"); }
    else { inicio = Date.now(); timer = setInterval(tic, 250); b?.setAttribute("aria-pressed", "true"); }
    tic();
  };
  const reiniciarReloj = () => { acumulado = 0; if (inicio) inicio = Date.now(); if (reloj && !reloj.hidden) tic(); };

  document.addEventListener("click", e => {
    const a = e.target.closest("[data-accion]")?.dataset.accion;
    if (a === "siguiente") siguiente();
    else if (a === "anterior") anterior();
    else if (a === "notas") alternar("notas", "con-notas");
    else if (a === "estudio") estudio();
    else if (a === "pantalla") pantalla();
    else if (a === "reloj") cronometro();
    const ir_ = e.target.closest("[data-ir]");
    if (ir_) {
      const t = Number(ir_.dataset.ir);
      const k = laminas.findIndex(l => Number(l.dataset.tramo) === t);
      if (k >= 0) ir(k, k > i ? 1 : -1);
    }
  });

  document.addEventListener("keydown", e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target.closest("input,textarea,select,[contenteditable]")) return;
    const k = e.key;
    if ((k === " " || k === "Enter") && e.target.closest("button,a")) return;
    if (deck && (k === "ArrowRight" || k === "PageDown" || (k === " " && !e.shiftKey))) { e.preventDefault(); siguiente(); }
    else if (deck && (k === "ArrowLeft" || k === "PageUp" || (k === " " && e.shiftKey))) { e.preventDefault(); anterior(); }
    else if (deck && k === "Home") { e.preventDefault(); ir(0, -1); }
    else if (deck && k === "End") { e.preventDefault(); ir(laminas.length - 1, 1); }
    else if (k === "n" || k === "N") alternar("notas", "con-notas");
    else if (k === "e" || k === "E") estudio();
    else if (k === "f" || k === "F") pantalla();
    else if (k === "t" || k === "T") cronometro();
    else if (k === "r" || k === "R") reiniciarReloj();
    else if (deck && /^[1-9]$/.test(k)) { const n = Number(k) - 1; if (n < laminas.length) ir(n, n > i ? 1 : -1); }
  });

  /* Táctil: deslizar horizontal cambia de lámina; el desplazamiento vertical se respeta. */
  let x0 = null, y0 = null;
  escenario?.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") { x0 = e.clientX; y0 = e.clientY; } }, { passive: true });
  escenario?.addEventListener("pointerup", e => {
    if (x0 === null || !deck) return;
    const dx = e.clientX - x0, dy = e.clientY - y0;
    x0 = y0 = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? siguiente : anterior)();
  }, { passive: true });
  escenario?.addEventListener("pointercancel", () => { x0 = y0 = null; });

  window.addEventListener("hashchange", () => { const k = leerHash(); if (k !== i) { i = k; pintar(); } });

  body.classList.add("deck");
  i = leerHash();
  pintar();
})();
