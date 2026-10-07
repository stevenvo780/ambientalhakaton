/* Explicaciones animadas M6-2 (autocontenidas, sin dependencias).
   API: window.mountM62Explain(container, { sceneKey, data, reducedMotion }) → cleanup() idempotente.
   sceneKey: decision | pertinencia | sacrificios | residual | tablero | intercambio.
   Representación conceptual: cifras de presupuesto, beneficio esperado, no eficacia medida. */
(function () {
  "use strict";
  var SVGNS = "http://www.w3.org/2000/svg";
  var TOTAL = 5000;
  var M62 = [
    { id: "01", n: "PSA", c: 1200, d: "Una unidad · programa de 36 meses · prioridad Rionegro–Marinilla; sin predios ni contratos" },
    { id: "03", n: "Áreas estratégicas", c: 700, d: "Gobernanza de áreas y conectividad · prioridad R–M · admisión del corredor" },
    { id: "04", n: "Eficiencia hídrica", c: 900, d: "Uso eficiente del agua · grandes usuarios agregados Marinilla–Rionegro" },
    { id: "08", n: "Agroecología", c: 800, d: "Producción agroecológica · Guarne" },
    { id: "14", n: "Conocimiento del riesgo", c: 600, d: "Una unidad municipal · Rionegro · 12 meses propuestos" },
    { id: "15", n: "Vigilancia en salud", c: 800, d: "Preventiva y de gestión · Marinilla" }
  ];
  var PIE = "Representación conceptual · beneficio esperado, no eficacia medida · M6-2 principal PROVISIONAL";

  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " "); }
  function pct(c) { return Math.round(c * 100 / TOTAL); }
  function col(id) { return "var(--u" + id + ",#8fd6a0)"; }
  function setAttrs(n, a) {
    if (!a) return;
    for (var k in a) {
      if (!Object.prototype.hasOwnProperty.call(a, k) || a[k] == null || a[k] === false) continue;
      if (k === "text") n.textContent = a[k]; else n.setAttribute(k, String(a[k]));
    }
  }
  function add(n, kids) {
    if (kids == null) return;
    if (!Array.isArray(kids)) kids = [kids];
    for (var i = 0; i < kids.length; i++) {
      var k = kids[i];
      if (k == null || k === false) continue;
      n.appendChild(typeof k === "string" ? document.createTextNode(k) : k);
    }
  }
  function el(tag, attrs, kids) { var n = document.createElement(tag); setAttrs(n, attrs); add(n, kids); return n; }
  function sv(tag, attrs, kids) { var n = document.createElementNS(SVGNS, tag); setAttrs(n, attrs); add(n, kids); return n; }
  function d(s) { return "--d:" + s + "s"; }
  function svgRoot(w, h, label) {
    return sv("svg", { viewBox: "0 0 " + w + " " + h, "class": "m62-svg", role: "img", "aria-label": label,
      preserveAspectRatio: "xMidYMid meet", focusable: "false" }, sv("title", { text: label }));
  }
  function txt(x, y, s, cls, extra) {
    var a = { x: x, y: y, "class": cls || "m62-t", text: s };
    if (extra) for (var k in extra) a[k] = extra[k];
    return sv("text", a);
  }
  function head(kick, title, lede) {
    return el("div", { "class": "m62-head" }, [
      el("p", { "class": "m62-kick", text: kick }),
      el("p", { "class": "m62-title", text: title }),
      lede ? el("p", { "class": "m62-lede", text: lede }) : null
    ]);
  }
  function foot(extra) { return el("p", { "class": "m62-foot m62-a", style: d(0.4) }, PIE + (extra ? " · " + extra : "")); }
  function chip(s, cls) { return el("span", { "class": "m62-chip" + (cls ? " " + cls : ""), text: s }); }
  function feed(data) {
    if (data && typeof data === "object") return data;
    return (typeof window !== "undefined" && window.EXPO_DATOS) || null;
  }

  /* 1 · decision: la caja de 5000 M se organiza en seis unidades completas. */
  function sceneDecision() {
    var s = svgRoot(640, 250, "Fondo de 5 000 millones repartido en seis unidades completas de M6-2");
    var bx = 250, by = 30;
    add(s, sv("g", { "class": "m62-a", style: d(0.1) }, [
      sv("polygon", { points: (bx) + "," + by + " " + (bx + 20) + "," + (by - 18) + " " + (bx + 160) + "," + (by - 18) + " " + (bx + 140) + "," + by, "class": "m62-box-top" }),
      sv("polygon", { points: (bx + 140) + "," + by + " " + (bx + 160) + "," + (by - 18) + " " + (bx + 160) + "," + (by + 46) + " " + (bx + 140) + "," + (by + 64), "class": "m62-box-side" }),
      sv("rect", { x: bx, y: by, width: 140, height: 64, rx: 3, "class": "m62-box-front" }),
      txt(bx + 70, by + 42, fmt(TOTAL) + " M", "m62-t m62-t-big", { "text-anchor": "middle" })
    ]));
    var x = 20, scale = 600 / TOTAL, gap = 3;
    M62.forEach(function (u, i) {
      var w = u.c * scale, cx = x + w / 2;
      add(s, sv("path", { d: "M320 94 C320 132 " + cx + " 128 " + cx + " 168", pathLength: 1, "class": "m62-flow m62-draw",
        style: "stroke:" + col(u.id) + ";" + d(0.7 + i * 0.42) }));
      add(s, sv("g", { "class": "m62-grow", style: d(0.95 + i * 0.42) }, [
        sv("rect", { x: x + (i ? gap / 2 : 0), y: 170, width: w - (i && i < 5 ? gap : gap / 2), height: 46, rx: 4, style: "fill:" + col(u.id) }),
        txt(cx, 200, u.id, "m62-t m62-t-ink", { "text-anchor": "middle" })
      ]));
      x += w;
    });
    add(s, [txt(20, 240, "0", "m62-t m62-t-s"), txt(620, 240, fmt(TOTAL) + " M", "m62-t m62-t-s", { "text-anchor": "end" })]);

    var cards = el("div", { "class": "m62-cards" });
    M62.forEach(function (u, i) {
      add(cards, el("div", { "class": "m62-card m62-a", style: "--uc:" + col(u.id) + ";" + d(1.1 + i * 0.42) }, [
        el("p", { "class": "m62-card-h" }, [el("b", { text: u.id }), " " + u.n]),
        el("p", { "class": "m62-card-n" }, [el("b", { text: fmt(u.c) + " M" }), el("span", { text: " · " + pct(u.c) + " % del presupuesto" })]),
        el("p", { "class": "m62-card-d", text: u.d })
      ]));
    });
    var comp = el("div", { "class": "m62-row m62-a", style: d(3.9) }, [
      chip("D6 histórico: 03 · 04 · 07 · 08 · 09 · 14 = " + fmt(5000) + " M / 6", "m62-chip-muted"),
      chip("N1: " + fmt(4700) + " M / 5", "m62-chip-muted"),
      chip("07 y 09: comparadores no financiados en M6-2", "m62-chip-muted")
    ]);
    return [
      head("M6-2 · candidata principal PROVISIONAL", "Una caja de 5 000 M se organiza en seis unidades completas",
        "Suma 1 200 + 700 + 900 + 800 + 600 + 800 = 5 000 M. Los porcentajes son participación del presupuesto, no eficacia."),
      s, cards, comp, foot("% = presupuesto")
    ];
  }

  /* 2 · pertinencia: PSA 36 meses junto a 03 gobernanza, con productos distintos como condición. */
  function scenePertinencia() {
    var s = svgRoot(640, 262, "PSA de 36 meses y gobernanza de áreas 03 como líneas con productos distintos");
    add(s, txt(20, 26, "01 PSA · 1 200 M · 36 meses", "m62-t m62-t-h"));
    add(s, sv("line", { x1: 40, y1: 70, x2: 600, y2: 70, pathLength: 1, "class": "m62-axis m62-draw", style: d(0.2) }));
    for (var y = 0; y < 3; y++) {
      var yx = 40 + y * (560 / 3);
      add(s, sv("g", { "class": "m62-grow", style: d(0.6 + y * 0.45) }, [
        sv("rect", { x: yx + 3, y: 48, width: 560 / 3 - 6, height: 44, rx: 6, "class": "m62-year", style: "stroke:" + col("01") }),
        txt(yx + 280 / 3, 76, "año " + (y + 1), "m62-t m62-t-m", { "text-anchor": "middle" })
      ]));
    }
    [0, 12, 24, 36].forEach(function (m, i) {
      var mx = 40 + m * (560 / 36);
      add(s, [sv("line", { x1: mx, y1: 92, x2: mx, y2: 100, "class": "m62-tick" }),
        txt(mx, 116, m === 36 ? "36 meses" : String(m), "m62-t m62-t-s", { "text-anchor": i === 0 ? "start" : (i === 3 ? "end" : "middle") })]);
    });
    add(s, sv("g", { "class": "m62-a", style: d(2.1) }, [
      sv("line", { x1: 20, y1: 136, x2: 620, y2: 136, "class": "m62-sep" }),
      sv("rect", { x: 200, y: 122, width: 240, height: 28, rx: 14, "class": "m62-cond" }),
      txt(320, 141, "condición: productos distintos", "m62-t m62-t-m", { "text-anchor": "middle" })
    ]));
    add(s, txt(20, 172, "03 gobernanza · 700 M · áreas y conectividad", "m62-t m62-t-h"));
    var pts = [[80, 222], [190, 206], [300, 230], [410, 210], [520, 226]];
    for (var k = 0; k < pts.length - 1; k++) {
      add(s, sv("line", { x1: pts[k][0], y1: pts[k][1], x2: pts[k + 1][0], y2: pts[k + 1][1], pathLength: 1,
        "class": "m62-link m62-draw", style: d(2.7 + k * 0.25) }));
    }
    pts.forEach(function (p, i) {
      add(s, sv("ellipse", { cx: p[0], cy: p[1], rx: 30, ry: 17, "class": "m62-patch m62-pop", style: "fill:" + col("03") + ";" + d(2.4 + i * 0.18) }));
    });
    add(s, sv("g", { "class": "m62-a", style: d(3.8) }, [
      sv("path", { d: "M582 246 V198 M612 246 V198 M576 204 H618", "class": "m62-gate" }),
      txt(597, 190, "admisión", "m62-t m62-t-s", { "text-anchor": "middle" })
    ]));

    var cols = [
      ["Acciones", "01: incentivos de conservación durante el programa de 36 meses", "03: gobernanza de áreas estratégicas y conectividad del corredor"],
      ["Productos", "01: acuerdos PSA propios (predios y contratos aún por definir)", "03: instrumentos de gestión de áreas y admisión al corredor"],
      ["Pagos", "01: incentivos del programa PSA (1 200 M)", "03: costo de la unidad de gestión (700 M)"]
    ];
    var grid = el("div", { "class": "m62-cards m62-cards-3" });
    cols.forEach(function (c, i) {
      add(grid, el("div", { "class": "m62-card m62-a", style: "--uc:var(--agua,#62c8e8);" + d(4.1 + i * 0.35) }, [
        el("p", { "class": "m62-card-h" }, [el("b", { text: c[0] })]),
        el("p", { "class": "m62-card-d m62-u01", text: c[1] }),
        el("p", { "class": "m62-card-d m62-u03", text: c[2] })
      ]));
    });
    var warn = el("div", { "class": "m62-row m62-a", style: d(5.3) }, [
      chip("PSA ≠ restauración 02 automática: un pago no equivale a hectáreas restauradas", "m62-chip-warn"),
      chip("No-duplicación entre 01 y 03: condición por verificar, no afirmada", "m62-chip-warn")
    ]);
    return [
      head("Pertinencia · PSA y gobernanza", "PSA y 03 se complementan sólo si separan acciones, productos y pagos",
        "01 es UNA unidad de 1 200 M con prioridad Rionegro–Marinilla, sin predios ni contratos asignados. 03 (700 M) gobierna áreas y conectividad."),
      s, grid, warn, foot()
    ];
  }

  /* 3 · sacrificios: PSA 01 ↔ SAT 13, mismo costo; la sustitución conserva 6 / 5000 (condicional). */
  function sceneSacrificios(data) {
    var s = svgRoot(640, 270, "Balanza de igual costo entre PSA 01 y SAT 13 y sustitución en la cartera");
    add(s, sv("polygon", { points: "320,104 296,146 344,146", "class": "m62-fulcrum" }));
    add(s, sv("g", { "class": "m62-settle", style: d(0.4) }, [
      sv("line", { x1: 110, y1: 102, x2: 530, y2: 102, "class": "m62-beam" }),
      sv("rect", { x: 70, y: 40, width: 140, height: 58, rx: 6, style: "fill:" + col("01") }),
      txt(140, 64, "01 PSA", "m62-t m62-t-ink m62-t-h", { "text-anchor": "middle" }),
      txt(140, 88, "1 200 M", "m62-t m62-t-ink", { "text-anchor": "middle" }),
      sv("rect", { x: 430, y: 40, width: 140, height: 58, rx: 6, style: "fill:" + col("13") }),
      txt(500, 64, "13 SAT", "m62-t m62-t-ink m62-t-h", { "text-anchor": "middle" }),
      txt(500, 88, "1 200 M", "m62-t m62-t-ink", { "text-anchor": "middle" })
    ]));
    add(s, txt(320, 76, "=", "m62-t m62-t-big m62-a", { "text-anchor": "middle", style: d(1.9) }));
    var ids1 = ["01", "03", "04", "08", "14", "15"], ids2 = ["13", "03", "04", "08", "14", "15"];
    function row(ids, y, label, delay, swapped) {
      var g = sv("g", { "class": "m62-a", style: d(delay) }, [txt(140, y + 23, label, "m62-t m62-t-h", { "text-anchor": "end" })]);
      ids.forEach(function (id, i) {
        var x = 152 + i * 78;
        add(g, [sv("rect", { x: x, y: y, width: 72, height: 34, rx: 5, "class": swapped && i === 0 ? "m62-slot m62-slot-swap" : "m62-slot", style: "fill:" + col(id) }),
          txt(x + 36, y + 23, id, "m62-t m62-t-ink", { "text-anchor": "middle" })]);
      });
      return g;
    }
    add(s, row(ids1, 170, "M6-2", 2.2, false));
    add(s, row(ids2, 222, "con 13", 3.0, true));
    add(s, sv("path", { d: "M152 187 C122 190 122 236 150 239", pathLength: 1, "class": "m62-arrow m62-draw", style: d(3.4) }));

    var f = feed(data), m67 = null;
    if (f && Array.isArray(f.maximas)) {
      f.maximas.forEach(function (m) {
        if (m && Array.isArray(m.u) && m.u.slice().sort().join() === ids2.slice().sort().join()) m67 = m;
      });
    }
    var cards = el("div", { "class": "m62-cards" }, [
      el("div", { "class": "m62-card m62-a", style: "--uc:" + col("01") + ";" + d(3.9) }, [
        el("p", { "class": "m62-card-h" }, [el("b", { text: "Con 01 PSA" })]),
        el("p", { "class": "m62-card-d", text: "Incentivos de conservación por 36 meses con prioridad Rionegro–Marinilla; sin alerta temprana propia." })
      ]),
      el("div", { "class": "m62-card m62-a", style: "--uc:" + col("13") + ";" + d(4.3) }, [
        el("p", { "class": "m62-card-h" }, [el("b", { text: "Con 13 SAT" })]),
        el("p", { "class": "m62-card-d", text: "Alerta temprana con cobertura por definir; se cede el programa PSA." })
      ]),
      el("div", { "class": "m62-card m62-a", style: "--uc:var(--ocre,#f2b84b);" + d(4.7) }, [
        el("p", { "class": "m62-card-h" }, [el("b", { text: "Resultado condicional" })]),
        el("p", { "class": "m62-card-n" }, [el("b", { text: "6 unidades · 5 000 M" })]),
        el("p", { "class": "m62-card-d", text: "Sólo si 13 resulta elegible y su cobertura se acredita" + (m67 ? "; coincide con " + m67.id + " del conjunto de máximas." : ".") })
      ])
    ]);
    var warn = el("div", { "class": "m62-row m62-a", style: d(5.2) }, [
      chip("Alertas ≠ 14: la unidad 14 es conocimiento y comunicación del riesgo en Rionegro (12 meses propuestos), no un SAT ni tres programas", "m62-chip-warn")
    ]);
    return [
      head("Sacrificios · mismo costo, distinta función", "Sustituir 01 por 13 no cambia la caja: cambia qué se compra",
        "01 y 13 cuestan lo mismo (1 200 M). El intercambio mantiene seis unidades y 5 000 M, pero sólo bajo condición."),
      s, cards, warn, foot()
    ];
  }

  /* 4 · residual: 14 BASE primarias (códigos institucionales MEA; valores normalizados SIIVRA 0–1) y 20 PROP auxiliares con unidad y método propios. */
  function sceneResidual(data) {
    var s = svgRoot(640, 262, "Catorce códigos institucionales MEA con valores normalizados SIIVRA de 0 a 1 y veinte auxiliares operativas con unidad propia");
    add(s, [txt(20, 26, "BASE PRIMARIA", "m62-t m62-t-h"), txt(20, 46, "14 códigos institucionales MEA", "m62-t m62-t-s")]);
    for (var i = 0; i < 14; i++) {
      add(s, sv("circle", { cx: 36 + (i % 7) * 40, cy: 76 + Math.floor(i / 7) * 38, r: 14, "class": "m62-base m62-pop", style: d(0.3 + i * 0.07) }));
    }
    add(s, sv("line", { x1: 318, y1: 14, x2: 318, y2: 140, "class": "m62-sep" }));
    add(s, [txt(338, 26, "PROP AUX", "m62-t m62-t-h"), txt(338, 46, "20 operacionales · no homologadas", "m62-t m62-t-s")]);
    for (var j = 0; j < 20; j++) {
      add(s, sv("circle", { cx: 350 + (j % 10) * 29, cy: 76 + Math.floor(j / 10) * 38, r: 10, "class": "m62-aux m62-pop", style: d(1.4 + j * 0.05) }));
    }
    var x0 = 40, x1 = 600, ry = 204;
    add(s, txt(x0, 172, "valores normalizados SIIVRA 0–1 de los 14 códigos BASE", "m62-t m62-t-s m62-a", { style: d(2.5) }));
    add(s, sv("line", { x1: x0, y1: ry, x2: x1, y2: ry, pathLength: 1, "class": "m62-axis m62-draw", style: d(2.6) }));
    [0, 0.5, 1].forEach(function (v) {
      var x = x0 + v * (x1 - x0);
      add(s, [sv("line", { x1: x, y1: ry - 6, x2: x, y2: ry + 6, "class": "m62-tick" }),
        txt(x, ry + 26, v === 0.5 ? "0,5" : String(v), "m62-t m62-t-s", { "text-anchor": v === 0 ? "start" : (v === 1 ? "end" : "middle") })]);
    });
    var f = feed(data), ex = null;
    if (f && Array.isArray(f.escenarios)) {
      f.escenarios.forEach(function (e) { if (!ex && e && e.u === "14" && typeof e.ref === "number") ex = e; });
    }
    var note = null;
    if (ex) {
      var mk = [["ref", ex.ref, 1], ["SSP2", ex.s2, -1], ["SSP3", ex.s3, -1]];
      mk.forEach(function (m, k) {
        if (typeof m[1] !== "number" || m[1] < 0 || m[1] > 1) return;
        var x = x0 + m[1] * (x1 - x0);
        add(s, sv("g", { "class": "m62-a", style: d(3.4 + k * 0.3) }, [
          sv("circle", { cx: x, cy: ry, r: 6, "class": "m62-mark" }),
          txt(x + (k === 2 ? 8 : -8), m[2] > 0 ? ry + 48 : ry - 12, m[0] + " " + String(m[1]).replace(".", ","), "m62-t m62-t-s",
            { "text-anchor": k === 2 ? "start" : "end" })
        ]));
      });
      note = el("p", { "class": "m62-note m62-a", style: d(4.6) },
        "Ejemplo literal del feed: " + (ex.p || "unidad 14") + " — amenaza institucional publicada en índice 0–1. Es contexto, no reducción ni eficacia de 14.");
    }
    var cards = el("div", { "class": "m62-cards" }, [
      el("div", { "class": "m62-card m62-a", style: "--uc:var(--bosque,#8fd6a0);" + d(1.2) }, [
        el("p", { "class": "m62-card-h" }, [el("b", { text: "14 BASE" }), " primaria"]),
        el("p", { "class": "m62-card-d", text: "Valores normalizados SIIVRA 0–1 (contexto, no basal físico); cada código conserva definición, unidad, fuente y método." })
      ]),
      el("div", { "class": "m62-card m62-a", style: "--uc:var(--lila,#c4b0f5);" + d(2.4) }, [
        el("p", { "class": "m62-card-h" }, [el("b", { text: "20 PROP" }), " auxiliares"]),
        el("p", { "class": "m62-card-d", text: "Operativas con su unidad y método; no homologadas, no sustituyen la base; T0 PROP pendiente." })
      ])
    ]);
    var neg = el("div", { "class": "m62-row m62-a", style: d(3.0) }, [
      chip("14 códigos MEA, valor SIIVRA 0–1:"), chip("no es %", "m62-chip-x"), chip("no es ha", "m62-chip-x"), chip("no es COP", "m62-chip-x"), chip("no es T0 físico", "m62-chip-x")
    ]);
    var aux = el("div", { "class": "m62-row m62-a", style: d(3.3) }, [
      chip("20 PROP: unidad y método propios (ha, m³, kg, recepción/uso), sin homologación automática a la escala SIIVRA", "m62-chip-warn")
    ]);
    return [
      head("Riesgo residual · seguimiento", "Se sigue con 14 códigos institucionales MEA (BASE) y 20 auxiliares PROP",
        "Los índices institucionales aquí normalizados se leen 0–1; las auxiliares operativas conservan su unidad y método (ha, m³, kg, recepción/uso), sin homologación automática."),
      s, cards, neg, aux, note, foot()
    ];
  }

  /* 5 · tablero: esquema territorial conceptual (sin coordenadas, empresas ni aristas hidráulicas). */
  function sceneTablero() {
    var s = svgRoot(640, 300, "Esquema territorial conceptual de Guarne, Rionegro y Marinilla con las unidades propuestas");
    add(s, [sv("rect", { x: 4, y: 4, width: 632, height: 292, rx: 14, "class": "m62-frame" }),
      txt(18, 26, "esquema conceptual · posiciones no geográficas", "m62-t m62-t-s")]);
    var G = [150, 100], R = [215, 222], M = [480, 178];
    add(s, sv("ellipse", { cx: G[0], cy: G[1], rx: 100, ry: 58, "class": "m62-muni m62-pop", style: d(0.2) }));
    add(s, sv("ellipse", { cx: R[0], cy: R[1], rx: 112, ry: 62, "class": "m62-muni m62-pop", style: d(0.5) }));
    add(s, sv("ellipse", { cx: M[0], cy: M[1], rx: 118, ry: 68, "class": "m62-muni m62-pop", style: d(0.8) }));
    add(s, sv("line", { x1: R[0] + 30, y1: R[1] - 6, x2: M[0] - 30, y2: M[1] + 4, pathLength: 1, "class": "m62-band m62-draw", style: d(1.3) }));
    add(s, sv("g", { "class": "m62-a", style: d(2.0) }, [
      sv("rect", { x: 292, y: 182, width: 112, height: 30, rx: 15, "class": "m62-bandchip" }),
      txt(348, 203, "01 · 03 · 04", "m62-t m62-t-m", { "text-anchor": "middle" })
    ]));
    add(s, [txt(G[0], G[1] - 22, "Guarne", "m62-t m62-t-muni", { "text-anchor": "middle" }),
      txt(R[0] - 20, R[1] + 46, "Rionegro", "m62-t m62-t-muni", { "text-anchor": "middle" }),
      txt(M[0] + 20, M[1] - 34, "Marinilla", "m62-t m62-t-muni", { "text-anchor": "middle" })]);
    function uchip(x, y, id, delay) {
      return sv("g", { "class": "m62-pop", style: d(delay) }, [
        sv("rect", { x: x - 28, y: y - 17, width: 56, height: 32, rx: 8, style: "fill:" + col(id) }),
        txt(x, y + 6, id, "m62-t m62-t-ink", { "text-anchor": "middle" })
      ]);
    }
    add(s, [uchip(G[0], G[1] + 14, "08", 2.5), uchip(R[0] - 40, R[1] + 4, "14", 2.9), uchip(M[0] + 40, M[1] + 8, "15", 3.3)]);
    add(s, sv("ellipse", { cx: R[0], cy: R[1], rx: 124, ry: 72, pathLength: 1, "class": "m62-cover m62-draw", style: d(3.7) }));

    var items = [
      ["Rionegro–Marinilla", "Prioridad territorial de 01 PSA (sin predios ni contratos) y de 03 corredor; 04 con grandes usuarios agregados.", "var(--agua,#62c8e8)", 2.0],
      ["Guarne", "08 agroecología (UPA y asociaciones).", col("08"), 2.5],
      ["Rionegro", "14 conocimiento del riesgo: una unidad municipal; no cubre Guarne ni Marinilla.", col("14"), 2.9],
      ["Marinilla", "15 vigilancia en salud, preventiva y de gestión.", col("15"), 3.3]
    ];
    var leg = el("div", { "class": "m62-cards" });
    items.forEach(function (it) {
      add(leg, el("div", { "class": "m62-card m62-a", style: "--uc:" + it[2] + ";" + d(it[3] + 0.3) }, [
        el("p", { "class": "m62-card-h" }, [el("b", { text: it[0] })]),
        el("p", { "class": "m62-card-d", text: it[1] })
      ]));
    });
    return [
      head("Territorio · esquema conceptual", "Dónde se propone cada unidad de M6-2",
        "Sin coordenadas, sin empresas y sin aristas hidráulicas: sólo la asignación municipal propuesta."),
      s, leg, foot()
    ];
  }

  /* 6 · intercambio D6 → M6-2: salen 07 R + 09 G, entran 01 PSA + 15 M; misma asignación (presupuesto, no eficacia). */
  function sceneIntercambio(data) {
    var AUT = { "07": 1000, "09": 1000, "01": 1200, "15": 800, "03": 700, "04": 900, "08": 800, "14": 600 };
    var f = feed(data), c = {}, k;
    for (k in AUT) {
      var v = f && f.catalogo && f.catalogo[k] && f.catalogo[k].c;
      c[k] = typeof v === "number" ? v : AUT[k];
    }
    var sale = c["07"] + c["09"], entra = c["01"] + c["15"];
    if (sale !== entra || sale !== 2000) { c = AUT; sale = entra = 2000; }
    var kept = c["03"] + c["04"] + c["08"] + c["14"];
    var s = svgRoot(640, 232, "Salen 07 Rionegro y 09 Guarne, entran 01 PSA y 15 Marinilla con la misma asignación de " + fmt(sale) + " M");
    var sc = 120 / sale;
    function block(x, y, id, label, out, delay) {
      var h = c[id] * sc;
      return sv("g", { "class": out ? "m62-a" : "m62-grow", style: d(delay) }, [
        sv("rect", { x: x, y: y, width: 180, height: h - 4, rx: 6,
          style: "fill:" + col(id) + (out ? ";fill-opacity:.32;stroke:" + col(id) + ";stroke-width:2;stroke-dasharray:6 4" : "") }),
        txt(x + 10, y + h / 2 - 5, id + " " + label, out ? "m62-t m62-t-m" : "m62-t m62-t-ink m62-t-m"),
        txt(x + 10, y + h / 2 + 12, fmt(c[id]) + " M", out ? "m62-t m62-t-m" : "m62-t m62-t-ink m62-t-m")
      ]);
    }
    add(s, [txt(20, 26, "Salen (D6)", "m62-t m62-t-h"), txt(620, 26, "Entran (M6-2)", "m62-t m62-t-h", { "text-anchor": "end" })]);
    var y07 = 40, y09 = y07 + c["07"] * sc, y01 = 40, y15 = y01 + c["01"] * sc;
    add(s, [block(20, y07, "07", "Suelos · R", true, 0.2), block(20, y09, "09", "Verde · G", true, 0.5)]);
    [[200, y07 + c["07"] * sc / 2, "07"], [200, y09 + c["09"] * sc / 2, "09"]].forEach(function (p, i) {
      add(s, sv("path", { d: "M" + p[0] + " " + p[1] + " C235 " + p[1] + " 230 102 262 102", pathLength: 1, "class": "m62-flow m62-draw",
        style: "stroke:" + col(p[2]) + ";" + d(1.0 + i * 0.3) }));
    });
    [[440, y01 + c["01"] * sc / 2, "01"], [440, y15 + c["15"] * sc / 2, "15"]].forEach(function (p, i) {
      add(s, sv("path", { d: "M378 102 C410 102 405 " + p[1] + " " + p[0] + " " + p[1], pathLength: 1, "class": "m62-flow m62-draw",
        style: "stroke:" + col(p[2]) + ";" + d(2.0 + i * 0.3) }));
    });
    add(s, sv("g", { "class": "m62-pop", style: d(1.6) }, [
      sv("rect", { x: 262, y: 80, width: 116, height: 46, rx: 23, "class": "m62-cond" }),
      txt(320, 101, fmt(sale) + " M", "m62-t m62-t-h", { "text-anchor": "middle" }),
      txt(320, 119, pct(sale) + " % del presupuesto", "m62-t m62-t-s", { "text-anchor": "middle" })
    ]));
    add(s, [block(440, y01, "01", "PSA · R–M", false, 2.4), block(440, y15, "15", "Salud · M", false, 2.8)]);
    var kx = 160, ksc = 360 / kept, kg = sv("g", { "class": "m62-a", style: d(3.4) }, [
      txt(kx - 10, 210, "se mantienen", "m62-t m62-t-s", { "text-anchor": "end" }),
      txt(kx + 370, 210, fmt(kept) + " M", "m62-t m62-t-m")
    ]);
    ["03", "04", "08", "14"].forEach(function (id) {
      var w = c[id] * ksc;
      add(kg, [sv("rect", { x: kx + 1.5, y: 188, width: w - 3, height: 32, rx: 5, style: "fill:" + col(id) }),
        txt(kx + w / 2, 210, id, "m62-t m62-t-ink m62-t-m", { "text-anchor": "middle" })]);
      kx += w;
    });
    add(s, kg);
    var row = el("div", { "class": "m62-row m62-a", style: d(4.0) }, [
      chip("Gana: mecanismo PSA para biodiversidad (prioridad Rionegro–Marinilla) y salud preventiva en Marinilla"),
      chip("Pierde: compras de suelos (07, Rionegro) y verde urbano (09, Guarne)", "m62-chip-muted"),
      chip("Misma asignación: " + fmt(sale) + " M = " + pct(sale) + " % del presupuesto, no eficacia · sin impactos certificados · 14 no es SAT", "m62-chip-warn")
    ]);
    return [
      head("Intercambio · D6 → M6-2", "Salen 07 y 09, entran 01 y 15: el mismo dinero compra otros mecanismos",
        "Se mantienen 03, 04, 08 y 14. Lo que cambia es qué se compra, no cuánto se gasta."),
      s, row, foot("% = presupuesto")
    ];
  }

  var SCENES = { decision: sceneDecision, pertinencia: scenePertinencia, sacrificios: sceneSacrificios, residual: sceneResidual, tablero: sceneTablero, intercambio: sceneIntercambio };

  window.mountM62Explain = function (container, opts) {
    opts = opts || {};
    if (!container || typeof container.appendChild !== "function") return function () {};
    var key = Object.prototype.hasOwnProperty.call(SCENES, opts.sceneKey) ? opts.sceneKey : "decision";
    var mq = null;
    try { mq = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null; } catch (e) { mq = null; }
    var forced = opts.reducedMotion === true;
    var root = el("div", { "class": "m62-explain", "data-scene": key, role: "group", "aria-label": "Explicación M6-2: " + key });
    function sync() { root.classList.toggle("m62-static", forced || !!(mq && mq.matches)); }
    sync();
    var content;
    try { content = SCENES[key](opts.data); } catch (err) {
      content = [el("p", { "class": "m62-note", text: "Explicación no disponible." })];
      if (window.console) console.error("mountM62Explain", key, err);
    }
    add(root, content);
    container.appendChild(root);
    var listening = false;
    if (mq && !forced) {
      if (mq.addEventListener) { mq.addEventListener("change", sync); listening = true; }
      else if (mq.addListener) { mq.addListener(sync); listening = true; }
    }
    var done = false;
    return function cleanup() {
      if (done) return;
      done = true;
      if (listening) {
        if (mq.removeEventListener) mq.removeEventListener("change", sync); else if (mq.removeListener) mq.removeListener(sync);
      }
      if (root.parentNode) root.parentNode.removeChild(root);
    };
  };
})();
