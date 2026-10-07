# Revisión del pitch: Claude, evaluador ambiental

**Fecha:** 7 de octubre de 2026, 11:07–11:15 (Bogotá).

**Proveedor:** Claude Opus 5.5 en el CLI local. Según coordinación, nivel xhigh. Respuesta observada; cuota desconocida; sin failover.

**Versiones leídas (instantánea; si cambian, esta revisión no las cubre):**

| Archivo | Hora | SHA |
|---|---|---|
| `PITCH_BORRADOR.md` | 11:06:08 | `5db01adb…` |
| `p2_portafolio.md` | 11:02:40 | `949de0ab…` |
| `p2_portafolio.csv` | — | `9d84cb86…` |
| `p1_tablero.md` (solo hallazgos y límites) | 11:06:42 | `485a635e…` |

También leí la matriz de 75 requisitos y el enunciado (pp. 5–7).

**Límites:** no edité el pitch, el anexo ni los documentos de root. No hubo Git. No hice una auditoría nueva.

## Juicio breve

El borrador respeta lo esencial:

- presenta D6 como base provisional;
- reconoce el máximo de 6 como condicional;
- mantiene el PSA de 3 años indivisible;
- sitúa el −30 % a 2035;
- usa SSP3 con fuente primaria;
- trata el escenario intermedio SSP2-4.5/2040 como elección pendiente;
- presenta los actores como propuestos;
- reconoce que la licencia está en revisión;
- no da eficacias ni porcentajes.

Pero tiene **cinco incoherencias materiales** entre lo que anuncia y lo que D6 financia.

## Cinco objeciones con lenguaje propuesto

**O1. La decisión no coincide con la cartera.**

*Frase actual (L41):* "Protegemos primero las funciones de biodiversidad y agua".

*Problema:* D6 no financia protección física de ecosistemas: no incluye PSA, restauración, rondas ni cabeceras (P2, L98).

- En biodiversidad solo actúa sobre la **capacidad** (03).
- En agua solo actúa sobre la **demanda** (04).
- El hallazgo 3, desastres en Rionegro (P1-H3), no tiene ninguna unidad asociada salvo la 14.

*Propuesta:* "Atendemos primero la **capacidad de gestión** de la biodiversidad en Rionegro y Marinilla y la **demanda de agua**. Sumamos suelos, agroecología, verde urbano y conocimiento del riesgo. La protección directa de ecosistemas (PSA, rondas, restauración) y la alerta temprana quedan como residual explícito o en la alternativa N1."

**O2. Llamar "híbrida" a D6 sin componente de ingeniería.**

*Frase actual (L41):* "cartera híbrida de seis intervenciones".

*Problema:* según la clase provisional del CSV, cuatro unidades son SbN o habilitantes de SbN (03, 07, 08 y 09; esta última híbrida solo "según diseño") y dos son habilitantes de gestión (04 y 14). SAT, infraestructura y SUDS son solo comparadores. Para el jurado, "híbrida" implica una combinación verde-gris que D6 no financia.

*Propuesta:* "Cartera **con predominio de soluciones basadas en la naturaleza y habilitantes de gestión**. La clasificación es provisional y depende de la función ecosistémica y del sitio. Si un activo esencial lo exige, la ingeniería entra como alternativa condicionada (SAT, infraestructura en Guarne)."

**O3. El máximo y el escenario se enuncian sin sus condiciones.**

*Frases actuales:* L41 "seis intervenciones"; L43 y L49 "pasa de bajo a medio hacia SSP3-7.0/2060… mantenemos las seis palancas".

*Problemas:*

- **El 6 es solo un máximo financiero.** Depende de contar una unidad por entrada, de un cupo o repetición no aclarado y de que la unidad 14 sea una sola unidad regional, lo cual es un diseño propuesto.
- **El valor 0,321 no distingue escenarios.** En la matriz M-E-2411 (fila 19, columnas AT, AX y BB) el riesgo de Rionegro a 2060 es 0,3207 en SSP1, SSP2 y SSP3. Depende del horizonte, no del escenario.
- **"Mantener las seis" no dice qué amenaza afecta a qué unidad.**

*Propuesta:* "Seis es el máximo financiero, con una unidad por entrada y el conocimiento como unidad regional propuesta. El riesgo de desastres de Rionegro sube a Medio hacia 2060 y es igual en los tres escenarios SSP. Por eso la prueba con SSP3 no cambia la cartera, pero tampoco demuestra su efecto. Las unidades que más deben revisar su diseño son 07 (la amenaza agrícola de Rionegro sube de 0,384 a 0,435) y 09 (la amenaza de hábitat de Guarne sube de 0,316 a 0,403). Son índices normalizados, no porcentajes físicos."

**O4. Falta el pensamiento sistémico: la brecha de dependencias (pregunta 8).**

*Frase actual (L53):* "condiciones que podrían cambiarla: sitio de 07/08/09, unidad regional 14, alerta/infraestructura esenciales…".

*Problema:* no menciona la brecha oficial de dependencias entre empresas y territorio (enunciado p. 4, §5) ni cómo caracterizarla. Es el núcleo del criterio "pensamiento sistémico".

*Propuesta:* "No inventamos la matriz de dependencias empresa–agua–vía–energía. Proponemos levantarla dentro de la unidad de conocimiento, en forma agregada y anonimizada, con estas variables: nodo, dependencia declarada y verificada, redundancia y tiempo tolerable de interrupción. Si revela un activo esencial expuesto en Guarne, la cartera se mueve hacia infraestructura o alerta temprana."

**O5. Falta un "por qué" frente a N1 que no prometa más impacto.**

*Problema:* el enunciado (p. 5) pide demostrar por qué la combinación reduce más vulnerabilidad que las alternativas descartadas. El guion (L47) compara D6 con N1, pero no da la razón de la preferencia ni el costo de oportunidad, y no usa la evidencia institucional disponible sobre alerta.

*Propuesta:* "No medimos cuál cartera reduce más la vulnerabilidad. Preferimos D6 porque, con la misma regla para las 15 medidas, alcanza el máximo de intervenciones pertinentes si suelos, agroecología y verde acreditan sitio y función. N1 invierte más en conservación y rondas, pero financia una unidad menos. A cambio, D6 deja abierta la cobertura de alerta, que la matriz califica como muy baja en Rionegro y Guarne (InCaRD-04, M-E-2601/CapacidadAdaptativa!J29/J22; valoresNA). Basal individual retenido; consultar recurso bajo acceso autorizado. Si 07 a 09 no se acreditan, reenumeramos."

## Cumplimiento de los criterios oficiales en el guion (enunciado, p. 7)

| Criterio | Estado en el guion | Nota |
|---|---|---|
| Decisión | Parcial | Ver O1 |
| Rigor | Bien | Separa A, S, CA, V y R, y muestra discrepancias. Mantener el año basal como no confirmado |
| Priorización | Parcial | Ver O5 |
| Pensamiento sistémico | Falta | Ver O4 |
| Robustez | Parcial | Ver O3 |
| Viabilidad y gobernanza | Bien | Actores propuestos sin firmas. Falta un custodio por unidad (pendiente de P3) |
| Seguimiento | Pendiente | P3 no estable (L51). No presentarlo como entregado |
| Utilidad | Bien | Reutiliza Observatorio y MEA; no promete una plataforma |

Ninguno de los criterios está inventado; coinciden con los ocho de la matriz.

## Nueve preguntas (p. 6)

| Preguntas | Estado |
|---|---|
| Q1 qué proteger, Q3 combinación | Requieren el ajuste de O1 |
| Q2 dónde | Bien (L45) |
| Q4 distribución | Bien |
| Q5 actores | Bien |
| Q6 escenario | Ajuste de O3 |
| Q7 residual | Bien (L51) |
| Q8 dependencias | Falta (O4) |
| Q9 indicadores | Pendiente de P3 |

**Mantener en la lámina:** los códigos RETO son locales (17 fichas MEA frente a 15 precios); la regla es uniforme y no excluye 07 ni 09 por tener V baja; P3 aún es borrador; el uso de M-E-2411 (celda B7) está en revisión legal y no es una licencia abierta.
