# Revisión independiente P2 — decisión abierta, regla uniforme

Borrador adversarial corregido, fase GO, 2026-10-07. P1 estable incorporado:
tablero/csv/json (21 perfiles, 357 registros, `updated_at` 15:51 UTC). No edita el
portafolio nativo; no busca óptimo ni repite enumeración.

Fuentes: enunciado txt `49f14da0…`; catálogo `4bfa305f…`; propuesta `a4af4e87…`;
matriz `a8ef33d1…`; master M-E-2411 via extracto P1 verificado por celda; fichas
17 MEA; amenazas p6 (M-E-2550); indicadores M-E-2896; plan Valles (meta 30% 2035).

## Retractaciones (errores míos, corregidos)

- **R1 agro:** sí hay bloque alimentos (f75/78/79): Guarne V .177 Bajo, Marinilla
  V .227 Bajo, Rionegro V .243 Medio; S Muy bajo en los tres. Mi "sin bloque" vino
  de no barrer más allá de f70. Retirado.
- **R2 R>1:** falso positivo de mi parsing XML. Extracto verificado: f25 .066→.070,
  f29 .046→.043, f55 .0375, f65 .080→.087, todos <1. Retirado; elegibilidad por
  S/CA/V y categoría, sin nota de escala.

## Veredicto: decisión abierta

Objetivo: máximo de INTERVENCIONES pertinentes, no desempate invertido. Aplicar a
los 15 la misma regla (problema×municipio×factor×función/sitio×actores×no-solape×
fuente) y contar las que pasen. No declarar N1 ganadora por filtro Alta. Plan
Valles prioriza suelo/verde: 07/08/09 no se excluyen solo por V baja.

## Contrastes con regla uniforme

- N1 = {01,03,04,05,14} = 4700/5, saldo 300. Directos: 01/03 biodiv (f68/69 Muy
  alto), 04/05 agua (f38/f39 Alto), 14 habilitante regional (cuenta 1, no 3).
- D6 = {03,04,07,08,09,14} = 5000/6. Trae suelo/verde/agro priorizados por el plan;
  gana si 07/08/09 pasan sitio/actor/no-solape. Comparar, no presumir.
- naturaleza4 = {01,02,03,05} = 4700/4: pone a prueba afinidad SbN contra conteo.
- rest5 = {02,03,04,05,14} = 5000/5: restauración+agua+conocimiento sin PSA ni SAT.
- N2/N3 meten SAT (13): matrices P1 muestran brecha real — SAT RD04 R .209, G .248
  (Muy bajo), M .44 (Bajo); acciones RD01 R .10 (Muy bajo), G .381 (Bajo).
  N1 debe responder con residual + condición de flip, no con silencio.

## Objeciones (4, corregibles)

- **O1 [C3/R07] Elegibilidad 15 filas o nada.** Corrección: tabla uniforme con
  veredicto y fuente por unidad; umbral Alta/Baja declarado propuesto. Cierre: el
  máximo es el conteo de pertinentes; D6 vs N1 se decide por exclusiones
  verificables, no por preferencia. Saldo 300 con la misma regla.
- **O2 [R10/R11] Co-beneficio disciplinado.** Rondas→desastres es hipótesis: ficha 6
  C16 trae solo HIDRO02/HIDRO01/HIDRO04, luego N1 cubre desastres solo vía 14.
  Pares 01/03 (sitios/funciones distintos; PSA adicional a acuerdos AM, que son
  antecedentes), 07/08 (beneficiarios distintos), 13/14 (capacidad nueva vs
  protocolo). Jamás suma doble. Cierre: matriz de pares + residual P3 por función.
- **O3 [C6/Q5] 14 no sustituye SAT; sitio/actor pendientes.** 14 aprovecha
  capacidad y protocolos existentes, unidad regional propuesta (no validada
  contractualmente), y NO reemplaza alerta temprana. N1 sin 13 debe declarar
  residual desastres + flip (qué evidencia de cobertura/actor sumaría 13 y a costa
  de qué: 01 o 05). HIDRO04 .1 Muy bajo en los tres municipios sostiene pertinencia
  hídrica, no eficacia. Cierre: ficha mínima por unidad + código/fórmula/base MEA
  o marca "propuesto".
- **O4 [C5/Q6/Q9] SSP/MEA/actores/futuro, preciso.** Válidos: master BB/P por
  unidad, amenazas p6 (SSP3-7.0, 2021–40/2041–60, ref 1981–2010). Intermedio:
  confirmar; SSP2-4.5/2040 solo opción explícita (límite P1). Pendiente: contraste
  por unidad (mantiene/modifica/reemplaza), MEA por unidad N1, actores
  propuestos/validados. NUNCA prueba de cartera; sin %V. Cierre: tabla antes/
  después con fuente por celda + fichas Q9.

## Residual y qué voltea

Explícito en P3: Guarne infra (f45 V .60 Alto) y desastres (f15); Marinilla salud
Medio (f58) y Rionegro alimentos Medio (f79) en seguimiento aunque no entren.
Voltea la decisión: sitio 05, adicionalidad 01, cobertura/actor SAT, regla de
repetición, intermedio confirmado.

## Pasada 9Q/8C

Q1–Q5 condicionales (O3); Q6 condicional (O4); Q7 formato O2; Q8 cumplible (flips
supra); Q9 pendiente MEA. C1/C2 método ok; C3 abierta (O1); C4 cumplible; C5
pendiente (O4); C6 condicional (O3); C7 pendiente; C8 cumplible. Criterio global:
N1/D6/rest5 cierran cuando O1–O4 tengan evidencia citada por celda.
