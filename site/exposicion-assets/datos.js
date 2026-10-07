/* Datos agregados públicos de P1/P2/P3 (sin basales individuales). Costos: catálogo del reto, enunciado p. 5.
   Índices 0–1 institucionales: no son porcentajes físicos ni eficacias. */
window.EXPO_DATOS = (() => {
  const catalogo = {
    "01": { n: "PSA", largo: "Pago por servicios ambientales, 3 años", c: 1200 },
    "02": { n: "Restauración", largo: "Restauración ~100 ha", c: 1500 },
    "03": { n: "Áreas estratégicas", largo: "Áreas estratégicas del corredor", c: 700 },
    "04": { n: "Eficiencia hídrica", largo: "Uso intersectorial eficiente del agua", c: 900 },
    "05": { n: "Rondas", largo: "Rondas hídricas", c: 1300 },
    "06": { n: "Cabeceras", largo: "Cabeceras de cuenca", c: 1600 },
    "07": { n: "Suelos", largo: "Protección y reconversión de suelos", c: 1000 },
    "08": { n: "Agroecología", largo: "Producción agroecológica", c: 800 },
    "09": { n: "Verde urbano", largo: "Espacios verdes urbanos", c: 1000 },
    "10": { n: "SUDS", largo: "Drenaje urbano sostenible", c: 1800 },
    "11": { n: "Infra resiliente", largo: "Infraestructura resiliente", c: 2500 },
    "12": { n: "Servicios", largo: "Servicios esenciales", c: 2000 },
    "13": { n: "SAT", largo: "Sistema de alerta temprana", c: 1200 },
    "14": { n: "Conocimiento", largo: "Conocimiento y comunicación del riesgo", c: 600 },
    "15": { n: "Salud", largo: "Vigilancia en salud", c: 800 }
  };
  /* ubic: R/G/M = municipio propuesto; "corredor" = unidad del corredor con prioridad; [] = localización pendiente. */
  const u = (id, ubic, nota, extra = {}) => ({ id, cat: id.slice(0, 2), ubic, nota, ...extra });
  const carteras = {
    D6: {
      nombre: "D6", estado: "Recomendada, provisional",
      unidades: [
        u("03", ["R", "M"], "Corredor; prioridad Rionegro–Marinilla", { corredor: true }),
        u("04", ["M", "R"], "Grandes usuarios agregados Marinilla–Rionegro", { compartida: true }),
        u("07", ["R"], "Rionegro; sitio por identificar"),
        u("08", ["G"], "UPA y asociaciones de Guarne"),
        u("09", ["G"], "Guarne; función por acreditar"),
        u("14", ["R"], "Una unidad municipal, 12 meses propuestos")
      ]
    },
    N1: {
      nombre: "N1", estado: "Comparador",
      unidades: [
        u("01", [], "Localización municipal pendiente"),
        u("03", ["R", "M"], "Corredor; prioridad Rionegro–Marinilla", { corredor: true }),
        u("04", ["M", "R"], "Grandes usuarios agregados Marinilla–Rionegro", { compartida: true }),
        u("05", [], "Localización municipal pendiente"),
        u("14", ["R"], "Una unidad municipal, 12 meses propuestos")
      ]
    },
    SAT: {
      nombre: "SAT crítico", estado: "Reapertura si la alerta es indispensable",
      unidades: [
        u("03", ["R", "M"], "Corredor", { corredor: true }), u("04", ["M", "R"], "Marinilla–Rionegro", { compartida: true }),
        u("08", ["G"], "Guarne"), u("13", [], "Cobertura por definir"), u("14", ["R"], "Rionegro")
      ]
    },
    SERV: {
      nombre: "Servicio esencial", estado: "Reapertura si 12 es elegible",
      unidades: [
        u("03", ["R", "M"], "Corredor", { corredor: true }), u("04", ["M", "R"], "Marinilla–Rionegro", { compartida: true }),
        u("08", ["G"], "Guarne"), u("12", [], "Activo por identificar"), u("14", ["R"], "Rionegro")
      ]
    },
    HIP7: {
      nombre: "HIP7", estado: "Hipótesis de cupo 3 para 14; no oficial ni adoptada", hipotesis: true,
      unidades: [
        u("03", ["R", "M"], "Corredor", { corredor: true }), u("04", ["M", "R"], "Marinilla–Rionegro", { compartida: true }),
        u("08", ["G"], "Guarne"), u("15", [], "Problema sanitario por acreditar"),
        u("14R", ["R"], "Rionegro"), u("14G", ["G"], "Hipótesis: programa propio no acreditado", { hipo: true }),
        u("14M", ["M"], "Hipótesis: programa propio no acreditado", { hipo: true })
      ]
    }
  };
  const maximas = [
    { id: "M6-1 = D6", u: ["03", "04", "07", "08", "09", "14"] },
    { id: "M6-2", u: ["01", "03", "04", "08", "14", "15"] },
    { id: "M6-3", u: ["03", "04", "07", "08", "14", "15"] },
    { id: "M6-4", u: ["03", "04", "07", "09", "14", "15"] },
    { id: "M6-5", u: ["03", "04", "08", "09", "14", "15"] },
    { id: "M6-6", u: ["03", "07", "08", "09", "14", "15"] },
    { id: "M6-7", u: ["03", "04", "08", "13", "14", "15"] }
  ];
  /* Amenaza institucional publicada (master M-E-2411 D/J/P). SSP2 = exploratorio adicional. */
  const escenarios = [
    { u: "03", p: "Biodiversidad Rionegro", ref: .291, s2: .293, s3: .313 },
    { u: "03", p: "Biodiversidad Marinilla", ref: .334, s2: .334, s3: .360 },
    { u: "04", p: "Agua Marinilla", ref: .180, s2: .180, s3: .190 },
    { u: "04", p: "Agua Rionegro", ref: .244, s2: .244, s3: .254 },
    { u: "07", p: "Alimentos Rionegro", ref: .384, s2: .384, s3: .435 },
    { u: "08", p: "Alimentos Guarne", ref: .275, s2: .275, s3: .304 },
    { u: "09", p: "Hábitat Guarne", ref: .316, s2: .387, s3: .403 },
    { u: "14", p: "Desastres Rionegro", ref: .489, s2: .491, s3: .567 },
    { u: "—", p: "Residual: infraestructura Guarne", ref: .323, s2: .327, s3: .367, residual: true }
  ];
  /* P1: V de referencia (AJ) y categoría (AK). Orden de columnas: Guarne, Marinilla, Rionegro. */
  const dims = ["Biodiversidad", "Recursos hídricos", "Riesgo de desastres", "Infraestructura", "Salud humana", "Seguridad alimentaria", "Hábitat humano"];
  const V = {
    "Biodiversidad": [[.340, "Medio"], [.745, "Muy alto"], [.765, "Muy alto"]],
    "Recursos hídricos": [[.370, "Medio"], [.588, "Alto"], [.548, "Alto*"]],
    "Riesgo de desastres": [[.408, "Medio"], [.110, "Muy bajo"], [.482, "Alto"]],
    "Infraestructura": [[.597, "Alto"], [.110, "Muy bajo"], [.324, "Medio"]],
    "Salud humana": [[.145, "Muy bajo"], [.257, "Medio"], [.110, "Muy bajo"]],
    "Seguridad alimentaria": [[.177, "Bajo"], [.227, "Bajo"], [.243, "Medio"]],
    "Hábitat humano": [[.179, "Bajo"], [.153, "Bajo"], [.110, "Muy bajo"]]
  };
  const hallazgos = [
    { id: "H1", celdas: [["Biodiversidad", 1], ["Biodiversidad", 2]], t: "Biodiversidad Rionegro y Marinilla: capacidad adaptativa muy baja (0,22 y 0,24) y vulnerabilidad muy alta.", f: "Proteger capacidad de conservación → 03 en el corredor." },
    { id: "H2", celdas: [["Recursos hídricos", 1], ["Recursos hídricos", 2]], t: "Agua: sensibilidad alta en Marinilla (0,661). V alta en Marinilla y Rionegro según la matriz ampliada; la lámina 12 del enunciado da Medio para Rionegro (discrepancia conservada).", f: "Atender demanda → 04 Marinilla–Rionegro." },
    { id: "H3", celdas: [], riesgo: true, t: "Desastres Rionegro: el riesgo pasa de 0,283 Bajo a 0,321 Medio hacia 2060 (SSP3-7.0). Es riesgo, no la V de la tabla.", f: "Capacidad de acción → 14 en Rionegro; SAT queda como residual." },
    { id: "H4", celdas: [["Infraestructura", 0]], t: "Infraestructura Guarne: vulnerabilidad alta (0,597) con capacidad baja (0,442).", f: "Sin unidad 11/12 en D6: residual explícito." },
    { id: "H5", celdas: [["Salud humana", 1], ["Seguridad alimentaria", 2], ["Hábitat humano", 0]], t: "Salud, alimentos y hábitat conservan seguimiento; ninguna dimensión se vuelve cero.", f: "07 suelos, 08 agro, 09 verde; salud 15 no financiada." }
  ];
  /* Cadena por municipio: razonamiento propuesto, no causalidad. */
  const municipios = {
    R: {
      nombre: "Rionegro",
      factor: ["Biodiversidad: CA muy baja, V muy alta (H1)", "Agua: V alta en matriz ampliada; Medio en lámina 12 (H2)", "Desastres: riesgo 0,283 → 0,321 hacia 2060 (H3)", "Alimentos: V media"],
      funcion: { D6: ["03 conservación del corredor", "04 demanda de agua", "07 suelos", "14 conocimiento, 12 meses propuestos"], N1: ["03 conservación del corredor", "04 demanda de agua", "14 conocimiento", "01/05 sin localización acreditada"] },
      residual: ["SAT sin unidad propia", "Conservación hídrica (InCaHIDRO-01) sin unidad dedicada en D6", "Salud 15 no financiada"]
    },
    G: {
      nombre: "Guarne",
      factor: ["Infraestructura: V alta, CA baja (H4)", "Hábitat: CA baja 0,426", "Alimentos: CA baja 0,447"],
      funcion: { D6: ["08 agroecología", "09 verde urbano"], N1: ["Ninguna unidad localizada; 01/05 pendientes"] },
      residual: ["Infraestructura sin 11/12", "Sin 14 propia financiada", "08/09 no resuelven infraestructura"]
    },
    M: {
      nombre: "Marinilla",
      factor: ["Biodiversidad: CA muy baja, V muy alta (H1)", "Agua: S alta 0,661 (H2)", "Salud: V media (H5)"],
      funcion: { D6: ["03 compartida del corredor", "04 compartida con Rionegro"], N1: ["03 y 04 compartidas", "01/05 sin localización acreditada"] },
      residual: ["Sin obra física propia acreditada", "Salud 15 no financiada", "Sin 14 propia financiada"]
    }
  };
  const total = ids => ids.reduce((s, id) => s + catalogo[id.slice(0, 2)].c, 0);
  /* Autochequeo de fidelidad. */
  const esperado = { D6: 5000, N1: 4700, SAT: 4200, SERV: 5000, HIP7: 5000 };
  for (const [k, v] of Object.entries(esperado)) {
    const t = total(carteras[k].unidades.map(x => x.id));
    if (t !== v) console.error("Cartera inconsistente", k, t, v);
    carteras[k].total = t;
  }
  maximas.forEach(m => { m.total = total(m.u); if (m.u.length !== 6 || m.total > 5000) console.error("Máxima inconsistente", m); });
  return { catalogo, carteras, maximas, escenarios, dims, V, hallazgos, municipios, total, fondo: 5000 };
})();
