# Evaluación independiente: método ambiental, causalidad y robustez

**Evaluador:** Claude (Opus 5.5), sesión local de Claude Code en Fedora. No leí deliberaciones ni informes de otros modelos.

**Fechas:** 7 de octubre de 2026. Lectura desde las 09:32:01 (-05); dictamen cerrado a las 09:48 (-05), a pedido del coordinador.

**Borrador evaluado:** `caso/propuesta_principal.md`, versión con mtime **09:41:32**, leída a las 09:41:38 (SHA-256 `37fb7d6c6b366276547fbc852429bc9ae3319464cc29c4e74a214effe1ef7a98`). Es un borrador del equipo, **no evidencia institucional**. A las 09:48 existía una **versión más nueva sin leer** (09:45:25, SHA `f260083f…`, 40.108 bytes) que esta evaluación **no cubre**.

**Escritura:** este informe es el único archivo que escribí en el proyecto; scripts y renders de auditoría quedaron en el scratchpad de la sesión.

**Etiquetas:** [DI] dato institucional · [INF] inferencia · [SUP] supuesto · [FAL] faltante.

## 1. Dictamen

1. **El trabajo es riguroso para no inventar, pero todavía no decide.** Falta una regla que vincule cada medida con una *celda crítica* (municipio × dimensión × factor). Sin esa regla, el criterio "máximo de intervenciones" empuja hacia unidades baratas de dimensiones con vulnerabilidad baja en el corredor.
2. **Con lo ya recibido se puede decidir de forma condicional.** Bastan la tabla de vulnerabilidad de la lámina 12 y los valores de capacidad y sensibilidad del enunciado, p. 2.
3. **El borrador acierta en las reglas y la aritmética, pero tiene un sesgo material.** Sus alternativas A–D no incluyen ninguna palanca de riesgo de desastres ni de infraestructura (O1).
4. **La robustez solo puede declararse condicional.** Existe un dato futuro parcial del estudio. No se ha probado la cartera ni se ha verificado que ese dato represente SSP3-7.0/2060.

## 2. Entradas revisadas y límites

**Leídas íntegras:**
- ambos enunciados en `.txt` (son idénticos);
- `HACKATHON RETO CORNARE.txt`, `explicacion.txt` y la convocatoria;
- en `caso/`: `revision_documentos.md`, `revision_excel.md`, `plan_ejecucion.md`, `seleccion_propuestas.md`, `informe_metodo.md`, `organon.json` (31 eventos; la cadena de hashes enlaza), `catalogo_costos_reto.csv` (15 precios cotejados con la p. 5) y el borrador indicado arriba.

**Excel:** recorrí las **8 hojas de `excel.json` (858 filas de datos; 800 sin la copia)** y las comparé celda a celda con los 8 XLSX originales: 0 discrepancias de valor, formato contable sin moneda e IS/ES sin unidad declarada. Confirmé la copia idéntica, que RM es la suma de MR, que "Vulnerabilidad" en AM es una categoría de evento y las 28 filas del corredor.

**PDF CORNARE:** revisé visualmente las láminas 9–14, 16, 17, 19 y 23. La extracción de texto **desordena la fila de Guarne de la lámina 12**; la verifiqué con el render y con `presentacion_pptx.json`.

**No leí:** `decision_y_ambiente.md`, `seleccion_artefactos.json`, `matriz_requisitos_completa.md`, `comparacion_financiera.json`, `comparar_presupuesto.py`, `insumos/revision/*`, `ambiente/` ni evaluaciones de otros modelos.

**Límites:** sin red, SSH, MCP ni delegación. Mis llamadas a herramientas no devolvieron errores. El **coordinador observó en la TUI** "API error · Retrying in 0s · attempt 1/7" y después el progreso se recuperó. No hay código, causa ni cuota establecidos, no hubo failover y no se observó un error activo. El borrador lo menciona en L141.

## 3. Evidencia institucional usada

**D1. Lámina 12, vulnerabilidad por dimensión [DI]:**

| Municipio | Valores relevantes | Resto de dimensiones | Integrado |
|---|---|---|---|
| Rionegro | Desastres **Alto**, Biodiversidad **Muy alto** | Hábitat, Salud y Seguridad alimentaria Bajo o Muy bajo | Medio |
| Guarne | Desastres **Alto**, Infraestructura **Alto** | Hábitat, Salud y Seguridad alimentaria Bajo | Medio |
| Marinilla | Recurso hídrico **Alto**, Biodiversidad **Muy alto**, Desastres Muy bajo | Hábitat, Salud y Seguridad alimentaria Bajo o Muy bajo | Medio |

**D2. Enunciado, p. 2 [DI]:** vulnerabilidad en biodiversidad de Rionegro 0,75 y Marinilla 0,72; capacidad en biodiversidad de 0,22, 0,24 y 0,33 (Rionegro, Marinilla, Guarne); capacidad en gestión del riesgo "relativamente favorable" en Rionegro (0,56) y Marinilla (0,61); amenaza de desastres en Marinilla 0,66–0,73; sensibilidad de desastres en Rionegro 0,40; advertencia contra concentrarse solo en biodiversidad o agua; riesgo de Rionegro **0,28→0,32 "hacia 2060", sin escenario identificado en esa página**.

**D3. Otras láminas [DI]:** lámina 16, medidas para Valles (eficiencia, PSA, verdes, SUDS, suelos y conocimiento; suman 6.500). Lámina 11, SSP2 rotulado "(Intermedio)", SSP3 "más crítico" y en Valles "Rionegro y El Retiro con ligera tendencia al aumento" (valores referenciales). Lámina 14, empresas en niveles altos asociadas a "dependencia hídrica" (mapas SSP2-4.5). Láminas 10, 23 y 19: 22 indicadores de sensibilidad y 31 de capacidad, ciclo MEA y −30 % a 2035.

**D4. Reporte municipal AM [DI como registros, no como eficacia]:** PSA en Rionegro f149 y Guarne f178/f184/f229; restauración en Rionegro f179/f246 y Guarne f204; agroecología en Guarne f173/f199/f241/f265; rondas y quebradas en Rionegro f239/f161 (inundaciones); Marinilla solo f300 (residuos). Ninguna fila del corredor corresponde a verdes, suelos, SUDS, SAT, cabeceras, áreas protegidas o salud.

**D5. Calidad de datos:** AM f165 (La Unión, PSA 2025, 11.156.586.347) y MR f193 (Valles, PSA 2025, 11.263.379.861) podrían ser el mismo programa [INF]: no sumar. Hay atípicos de emisiones en MR (f196, f240, f237) y rupturas de serie en IS y ES.

**Lectura de palanca [INF sobre DI]:** en biodiversidad (Rionegro, Marinilla) el déficit principal es de **capacidad**; en desastres de Rionegro, de **sensibilidad**, porque la capacidad ya es relativamente favorable. Marinilla tiene amenaza alta con vulnerabilidad muy baja: **no se prioriza por amenaza**. La capacidad de desastres en Guarne es desconocida [FAL]. Hábitat, Salud y Seguridad alimentaria (vulnerabilidad Baja en los tres) son riesgo residual aceptable, no un olvido.

## 4. Cómo cumplir los 8 criterios (enunciado, p. 7)

| Criterio | Estado a las 09:41 | Qué hacer |
|---|---|---|
| **C1 Decisión** | Pendiente (borrador L64) | No ampliar el diagnóstico. Con D1–D2 se fijan 5 hallazgos y celdas críticas. Comprometer una cartera condicional con su regla de cambio (§6). Solo se busca más diagnóstico si puede cambiar la elección (§8). |
| **C2 Rigor** | Cumple en lo documental; condicional en la aplicación | Citar la lámina 12 desde el render, no desde el `.txt`. Exponer el caso Marinilla (amenaza frente a vulnerabilidad). Etiquetar DI/INF/SUP/FAL en cada fila. Registrar D5. |
| **C3 Priorización** | Condicional (L66, L88–92) | **Propuesta metodológica de este evaluador [SUP/INF], no requisito oficial:** declarar una regla de elegibilidad y aplicarla en orden: (1) pertinencia (por ejemplo, vulnerabilidad Alta o mayor en algún municipio, o capacidad Baja con vulnerabilidad Media o mayor); (2) máximo de unidades elegibles; (3) palanca correcta; (4) robustez; (5) continuidad sin duplicar. Antes de usarla hace falta una tabla de elegibilidad verificada, y el equipo debe someter la regla a sensibilidad. Publicar el conflicto cantidad–pertinencia (O2). |
| **C4 Pensamiento sistémico** | Condicional (L128) | Vincular cada dependencia faltante con la decisión que cambiaría (Infraestructura, Cabeceras, SAT); financiar su levantamiento en Conocimiento, con las 32 empresas ACV, agregado y anonimizado. |
| **C5 Robustez** | Pendiente; admisible como condicional | Clasificar cada unidad (sin arrepentimiento, robusta-si, frágil) con ajuste de diseño y condición de reemplazo. Registrar la ambigüedad "horizonte intermedio" (p. 6) frente a "SSP2 (Intermedio)" (lámina 11). El dato 0,28→0,32 es un dato futuro parcial, no un estrés ejecutado. |
| **C6 Gobernanza** | Pendiente (L69) | Matriz actor × medida marcada [INF] y por validar; puerta de decisión al mes 3 (adicionalidad del PSA; no duplicar f149, f178 ni f239). |
| **C7 Seguimiento** | Condicional (L118–126) | Cadena de tres niveles (§7), línea base 2025, atribución por contribución; hitos en el año 1, 2027–2030 y 2035. |
| **C8 Utilidad** | Condicional (L71) | Regla reproducible en hoja de cálculo. Capacidades a fortalecer: vínculo ficha MEA ↔ los 73 indicadores, registro de dependencias, unidades MRV homologadas y geodatos de PSA, rondas y restauración. |

## 5. Objeciones materiales al borrador (versión 09:41:32)

**O1 — L81–86 (§5): las alternativas omiten las palancas de desastres e infraestructura.**
- A, B, C y D solo atienden desastres con Conocimiento, aunque Desastres es Alto en Rionegro y Guarne e Infraestructura es Alta en Guarne (D1).
- Ninguna incluye Rondas, SAT ni Infraestructura, lo que contradice la advertencia de la p. 2.
- *Corrección:* añadir alternativas con Rondas y con SAT. Mostrar Infraestructura como **descartada por condición**: el punto crítico y sus dependencias no están identificados [FAL], no porque falte pertinencia.

**O2 — L88–92: el máximo de 6 unidades se presenta sin su condición.**
- Ya está calculado y no requiere cálculo nuevo: toda cartera de 6 unidades incluye Salud, o bien Suelos, Agroecología y Verdes a la vez. Todas esas dimensiones tienen vulnerabilidad Baja o Muy baja en los tres municipios (D1).
- El **máximo financiero de 6 se mantiene**, condicionado a una unidad por entrada del catálogo.
- La regla "Alta/Baja" es **una propuesta metodológica mía [SUP], no un requisito oficial**. Bajo esa regla la cartera de 5 unidades sería un **comparador propuesto**, no un máximo pertinente demostrado: faltan la tabla de elegibilidad y su verificación.
- *Corrección:* declarar la condición de las carteras de 6. Comparar de forma explícita una cartera de 6 con el comparador de 5; por ejemplo, Rondas (una celda Alta) frente a Agroecología + Salud. Consultar al organizador cómo interpreta "máximo de intervenciones".

**O3 — L83: la etiqueta "continuidad" no corresponde a los datos.**
- La alternativa "Continuidad sin SUDS" incluye Verdes y Suelos, que **no tienen antecedente en las 28 filas del corredor** (D4).
- La continuidad es con la lista regional de la lámina 16, cuya priorización 70/15/15 se hizo a escala de los 9 municipios.
- *Corrección:* renombrarla "Lista regional de Valles sin SUDS" y exponer el conflicto con la lámina 12.

**O4 — L30–35 y L62–71: el "cómo" no usa los datos disponibles.**
- El método es un procedimiento genérico. No usa la lámina 12 ni los valores de capacidad y sensibilidad de la p. 2 para elegir la palanca.
- *Corrección:* insertar el paso "palanca por celda" (§3), que permite elegir desde ya entre medidas de sensibilidad y de capacidad.

**O5 — L118–126 y L128:** indicadores genéricos, sin los nombres ya existentes en el sistema ni diseño de atribución; el plan de dependencias no dice qué decisión cambia cada dato ni quién lo paga. *Corrección:* §7 y C4.

**Lo que el borrador hace bien:** jerarquía de fuentes, 70/15/15 no son pesos del jurado, −30 % a 2035, PSA indivisible, rama condicional para escenarios, L56 (separa el dato 0,28→0,32 de una prueba de la cartera), no inventa dependencias y distingue producto de resultado.

## 6. Mecanismos y elección condicional

Esta sección propone una **estructura de decisión, no un óptimo ambiental** [INF].

**Núcleo (2.200):** Áreas protegidas (700, capacidad en biodiversidad), Eficiencia hídrica (900, sensibilidad de la demanda; láminas 13, 14 y 21) y Conocimiento (600, capacidad, dependencias y líneas base MEA).

**Con los 2.800 restantes, elegir dos palancas de sensibilidad:**

| Cartera | Composición | Costo / saldo | Lógica | Condición de cambio |
|---|---|---|---|---|
| **N1** | núcleo + PSA + Rondas | 4.700 / 300 | PSA atiende la sensibilidad en biodiversidad y en las zonas abastecedoras de Marinilla y Rionegro. Rondas atiende la sensibilidad de desastres en Rionegro (0,40) y además agua y conectividad; tiene antecedentes en f239 y f161. | — |
| **N2** | núcleo + Rondas + SAT | 4.700 / 300 | Cubre desastres en los tres municipios. | Si el PSA no es adicional (D5, predios ya cubiertos) o si la capacidad de desastres en Guarne es Baja. |
| **N3** | núcleo + PSA + SAT | 4.600 / 400 | Combina capacidad y sensibilidad. | Si los tramos de ronda priorizados no coinciden con celdas críticas. |

Sustitutas condicionadas: Restauración (1.500) en lugar de Rondas solo si biodiversidad resulta dominada por sensibilidad (establecimiento frágil con más calor); Cabeceras (1.600) solo si se identifica la microcuenca de Marinilla; Agroecología si la ficha MEA confirma indicadores de suelo y agua (antecedente en Guarne). El saldo de 300 se declara sin fraccionar unidades.

**Residual explícito de N1:** Guarne solo recibe Conocimiento frente a sus valores Altos de desastres e infraestructura.

**Robustez [INF, condicional]:** ningún mecanismo de N1 depende de que la amenaza baje. Rondas se diseña para caudales mayores; el PSA necesita una ruta de permanencia después de 3 años [FAL; la "inversión del 1 %" de las notas no está verificada]; Eficiencia fija metas con la demanda proyectada. **No hay valores de vulnerabilidad ni riesgo SSP3-7.0/2060 por celda: la prueba oficial queda pendiente.**

## 7. MEA y gobernanza

**Cadena de seguimiento:**

| Unidad | Producto (año 1) | Resultado (sensibilidad o capacidad) | Impacto |
|---|---|---|---|
| PSA | "# beneficiarios PSA" (nombre de indicador en AM f149) + ha [FAL] | Indicador de sensibilidad entre los 22 [FAL: código] | Vulnerabilidad de la dimensión, misma metodología |
| Rondas | "# planes de manejo y monitoreo" (f239) + km o ha | "Cambio en población urbana en zonas de amenaza" (nombre existente en f258, otro municipio) | Vulnerabilidad de desastres en Rionegro |
| Áreas protegidas | Acuerdos y ha | Indicador de capacidad en biodiversidad (línea base del índice: 0,22, 0,24 y 0,33) | Vulnerabilidad en biodiversidad |
| Eficiencia | Usuarios con medición (f235, f122) | Consumo por unidad producida, solo después de homologar IS | Vulnerabilidad hídrica |
| Conocimiento | Protocolo y número de empresas ACV caracterizadas | Indicador de capacidad en desastres e infraestructura | Vulnerabilidad de esas dimensiones |

**Atribución:** línea base antes de intervenir; comparación con sitios y municipios de Valles sin intervención; registro de programas concurrentes de AM y MR. El −30 % regional se trata como **contribución, no como efecto atribuible**.

**Actores [INF, por validar; un antecedente no es compromiso]:** PSA, Áreas protegidas y Rondas con CORNARE (determinantes y rondas, p. 3), alcaldías, propietarios, JAC y ONG, más el consejo de gestión del riesgo de Rionegro para Rondas. Eficiencia con grandes usuarios, empresas ACV, empresas de servicios públicos y juntas de acueducto (lámina 6). SAT, si se elige, con consejos de gestión del riesgo, bomberos, defensa civil y comunidades.

## 8. Condiciones pendientes y cómo limita cada una

- Fichas MEA (qué indicadores mueve cada medida) → pertinencia de Rondas, Agroecología y SUDS.
- Sensibilidad de biodiversidad y agua; capacidad de desastres en Guarne → elección entre N1, N2 y N3.
- Vulnerabilidad y riesgo SSP3-7.0/2060 por celda, y significado de "intermedio" → robustez oficial (hoy condicional).
- Predios PSA vigentes (D5) → adicionalidad del PSA.
- Tramos de ronda (POMCA y determinantes) → localización de Rondas.
- Microcuenca de Marinilla → Cabeceras.
- Punto crítico y dependencias → Infraestructura (2.500).
- Regla de repetición y horizonte de 1 año → conteo de unidades (el PSA sigue completo).
- Moneda y unidades de los Excel → uso de IS y ES en el seguimiento.

**Riesgos de causalidad:** confundir amenaza con vulnerabilidad (Marinilla); tomar inversión o nombres de indicador como resultado; tomar GEI por adaptación; adicionalidad y doble conteo (D5); desfase de escala entre intervención local e índice municipal; factores de confusión (ocupación territorial, programas concurrentes, cambios de método).

**Frase para el pitch:** "Preferimos esta cartera por cobertura y mecanismo sobre las celdas críticas, no por una reducción medida; existe un dato futuro parcial del estudio, pero la cartera no se ha probado contra SSP3-7.0/2060".
