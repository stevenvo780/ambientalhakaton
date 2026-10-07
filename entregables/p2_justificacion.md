# P2: justificación causal de la cartera (borrador v2)

**Autor:** Claude, evaluador ambiental. **Fecha:** 7 de octubre de 2026, 11:00–11:10 (Bogotá).

**Qué es este documento.** Un borrador que reemplaza a la v1 (SHA `b865d8d5…`). **No es el portafolio final** y no contiene eficacias numéricas.

**Decisión de root, comunicada después de la v2 de las 11:00:** acepta **D6 = {03, 04, 07, 08, 09, 14}**, por COP 5.000 millones y 6 unidades, **solo como base provisional**. No es un óptimo aprobado.

**Etiquetas:** [DI] dato institucional · [INF] inferencia · [SUP] supuesto · [FAL] faltante.

**Fuentes:**

| Clave | Fuente | Qué contiene |
|---|---|---|
| **[M]** | Matriz M-E-2411, hoja `Regional Valles SN` (SHA `94a0e293…`); coincide con `p1_tablero.csv` | S, CA y V de referencia; amenaza y riesgo por escenario |
| **[MD]** | Matriz de la dimensión desastres, hoja `Capacidad_adaptativa`, filas 22, 26 y 29 | InCaRD-01 e InCaRD-04, verificados aquí |
| **[F]** | Fichas MEA de las 17 medidas (SHA `42def814…`) | Campos de dimensión, enfoque, indicadores (campo 15, celda C16) y actores |
| **[P1]** | `p1_tablero.md` (SHA `fea2d983…`) y su CSV | Tablero y discrepancias |
| **[L16]** | Lámina 16 de la presentación de CORNARE | Prioridades del Plan Valles |
| — | Catálogo de 15 precios | Costos de referencia |

Los valores de InCaHIDRO-01 y 04 provienen de P1 y de coordinación; **no los verifiqué** porque el libro de agua pesa 98 MB.

## 1. Problemas municipales y capacidad específica [DI]

| Celda (fila M) | S | CA (índice) | Capacidad específica | V | Riesgo ref → SSP3 2060 |
|---|---|---|---|---|---|
| Biodiversidad, Rionegro (f69) | 0,393 | **0,222** | — | **0,765 Muy alto** | 0,279 → 0,297 |
| Biodiversidad, Marinilla (f68) | 0,521 | **0,237** | — | **0,745 Muy alto** | 0,308 → 0,328 |
| Recurso hídrico, Marinilla (f38) | **0,661** | 0,475 | InCaHIDRO-01 0,194 MB; -04 0,1 MB [P1] | **0,588 Alto** | 0,174 → 0,180 |
| Recurso hídrico, Rionegro (f39) | 0,579 | 0,533 | InCaHIDRO-01 0,125 MB; -04 0,1 MB [P1] | **0,548 Alto** | 0,170 → 0,175 |
| Recurso hídrico, Guarne (f35) | 0,600 | 0,556 | InCaHIDRO-01 0,296 B; -04 0,1 MB [P1] | 0,370 Medio | 0,134 → 0,138 |
| Desastres, Rionegro (f19) | 0,396 | 0,563 | **InCaRD-01 0,1 MB; SAT InCaRD-04 0,209 MB [MD]** | **0,482 Alto** | 0,283 → 0,321 |
| Desastres, Guarne (f15) | 0,348 | 0,486 | InCaRD-01 0,381 B; SAT 0,248 MB [MD] | 0,408 Medio | 0,164 → 0,184 |
| Desastres, Marinilla (f18) | 0,292 | 0,609 | InCaRD-01 0,522 M; SAT 0,44 B [MD] | 0,110 MB (amenaza Alta) | 0,150 → 0,156 |
| Infraestructura, Guarne (f45) | 0,429 | 0,442 | — | **0,597 Alto** | 0,215 → 0,246 |

MB = Muy bajo; B = Bajo; M = Medio.

**Lectura del cuadro:**

- **La capacidad específica es mucho menor que el índice CA agregado.** En Rionegro, la CA de desastres es Medio (0,563), pero las acciones de gestión del riesgo ante el cambio climático y la cobertura SAT son Muy bajas. En agua, la inversión en conservación es Muy baja en Rionegro y Marinilla.
- **Son valores institucionales adimensionales, no porcentajes de eficacia.**
- **Hábitat, Salud y Seguridad alimentaria** tienen hoy V Baja o Media [M]. Esto **no es un vacío municipal**: su amenaza sube en algunos casos (seguridad alimentaria en Rionegro 0,384→0,435; hábitat en Guarne 0,316→0,403 en SSP3 2060), y el Plan Valles prioriza suelos, espacios verdes y SUDS [L16].
- **El riesgo de desastres de Rionegro a 2060 es 0,3207 en SSP1, SSP2 y SSP3** [M]. Es evidencia del escenario, no una prueba de ninguna cartera.

## 2. Regla uniforme para las 15 unidades [SUP del equipo; no es oficial]

Se aplica a todas las unidades por igual, sin umbral de V y sin pesos del jurado. Cada unidad necesita siete cosas:

1. **Problema municipal con fuente:** una celda de M o una prioridad de L16.
2. **Factor** de sensibilidad o capacidad ligado a un indicador de su ficha F.
3. **Función o mecanismo** esperado (hipótesis).
4. **Factibilidad:** sitio, unidad y competencia.
5. **Sin solape** con otra unidad ni con un antecedente.
6. **Actor** de la ficha F.
7. **Fuente** citable.

**Hoy ninguna unidad tiene sitio predial validado.** Por eso **todas quedan "condicionadas"**: ninguna "pasa". Lo que las distingue es cuáles condiciones ya tienen evidencia.

## 3. Evidencia por unidad

| RETO | Problema [DI] | Indicador de la ficha F (factor) | Mecanismo [INF] | Prioridad Valles (L16) | Pendiente [FAL] |
|---|---|---|---|---|---|
| 01 PSA | Biodiversidad Rionegro y Marinilla; agua Marinilla | % del municipio en bosque (S); inversión adicional (CA) | SbN: conservación con incentivo | Sí | Predios, adicionalidad frente a AM f149/f178, custodio años 2–3 |
| 02 Restauración | Biodiversidad Rionegro y Marinilla | % en bosque | SbN | No | Sitio de unas 100 ha; solape con 01 |
| 03 Áreas protegidas | CA de biodiversidad 0,22/0,24 | % RNSC (CA) | Habilitante SbN | No | Acuerdos y áreas |
| 04 Uso eficiente | S de agua 0,58/0,66 | InSensHIDRO-01 (S); InCaHIDRO-04 (CA) | Gestión de la demanda | Sí | Usuarios objetivo |
| 05 Rondas | Agua Rionegro y Marinilla | **InSensHIDRO-02, InCaHIDRO-01 y -04, InCa-01 y -02 (ficha 6, C16)** | Híbrida SbN. **Beneficio en desastres: hipótesis territorial indirecta; no sustituye a SAT** | No (Aguas, Porce-Nus) | Tramos POMCA |
| 06 Cabeceras | Agua Marinilla | Desabastecimiento, IACAL, % bosque | SbN | No | Microcuenca abastecedora |
| 07 Suelos | Seguridad alimentaria Rionegro Medio; amenaza en aumento | Suelos agrícolas degradados | SbN | **Sí** | Productores y sitio |
| 08 Agroecología | Seguridad alimentaria; antecedente en Guarne (AM f173, f199, f241, f265) | % UPA con BPA | SbN | No | Cobertura y continuidad |
| 09 Espacios verdes | Hábitat Bajo; amenaza en Guarne en aumento | Capacidad de inversión | SbN urbana | **Sí** | Sitio y mantenimiento |
| 10 SUDS | Hábitat; inundación urbana | Capacidad de inversión; % bosque | Híbrida | **Sí** | Sitio piloto |
| 11 Infraestructura resiliente | Infraestructura Guarne 0,597 | Valor agregado (no mide S/CA del activo) | Híbrida (AbI, SbN) | No | Punto crítico y dependencias |
| 12 Servicios públicos | Infraestructura Guarne | Cobertura eléctrica e internet | Ingeniería | No | Servicio esencial |
| 13 SAT | Desastres Rionegro; **SAT Muy bajo en Rionegro y Guarne** | InCaRD-01 | Ingeniería habilitante | No | Puntos críticos y protocolos |
| 14 Conocimiento | Desastres; InCaRD-01 Muy bajo en Rionegro | **InCaRD-01 (ficha 17)** | Habilitante | **Sí** | Su alcance regional para 3 municipios (cuenta 1) es **diseño propuesto**; la ficha usa municipio-año; no hay prueba contractual |
| 15 Salud | Salud Marinilla Medio; amenaza constante | Tasa de dengue | Habilitante comunitaria | No | Problema climatosensible sustentado |

Las 17 fichas no corresponden 1:1 con los 15 precios: F2 (Deforestación evitada) y F12 (Construcciones) **no tienen precio**. Los códigos RETO son locales.

## 4. Carteras comparadas (elección abierta)

La columna "Coincidencias L16" solo cuenta cuántas medidas coinciden con la lista del Plan Valles. Es contexto: **no es un criterio oficial ni mide una función ambiental**.

| Cartera | Unidades | Costo / saldo | N.º | Coincidencias L16 | Qué atiende | Qué sacrifica |
|---|---|---|---:|---:|---|---|
| **D6 (base provisional)** | 03, 04, 07, 08, 09, 14 | 5.000 / 0 | 6 | 4 de 6 | CA de biodiversidad, demanda de agua, suelos y alimentos, verdes, conocimiento | S de biodiversidad (sin 01 ni 02), rondas, SAT, infraestructura |
| **N1** | 01, 03, 04, 05, 14 | 4.700 / 300 | 5 | 3 de 6 | Biodiversidad (CA y S), agua (S y capacidad de inversión), conocimiento | Suelos, verdes, SAT, infraestructura; saldo de 300 sin usar |
| Naturaleza4 (solo comparador) | 01, 02, 03, 05 | 4.700 / 300 | 4 | 1 de 6 | Máximo componente SbN en biodiversidad y agua | Eficiencia, conocimiento y habilitantes. **No cumple el requisito de máximo de intervenciones** |
| **Restauración5** | 02, 03, 04, 05, 14 | 5.000 / 0 | 5 | 2 de 6 | S de biodiversidad mediante restauración; agua | PSA (prioridad Valles), SAT |
| N2 | 03, 04, 05, 13, 14 | 4.700 / 300 | 5 | 2 de 6 | **Cobertura SAT Muy baja**, agua, conocimiento | S de biodiversidad |
| Comparador de infraestructura | 11, 03, 04, 14 | 4.700 / 300 | 4 | 2 de 6 | Infraestructura en Guarne | Rondas, PSA, suelos |

**Máximo financiero.** Es 6, siempre que se cuente una unidad por entrada y la repetición no esté aclarada. Si se acredita la pertinencia de 07, 08 y 09, carteras como D6 cumplen el máximo entre unidades pertinentes. **D6 es la base provisional**; las demás carteras quedan como comparadores, con la condición que cambiaría la base.

**Datos que inclinarían la elección:**

| Hacia | Qué tendría que pasar |
|---|---|
| **D6** | P1 o el Plan Valles validan sitios y problemas para suelos, agroecología y verdes, y el organizador confirma un máximo literal |
| **N1 o Restauración5** | Se confirman tramos de ronda y predios PSA o de restauración en zonas de biodiversidad Muy alta. Restauración5 es preferible si el PSA no resulta adicional |
| **N2** | Se priorizan la cobertura SAT y la acción de gestión del riesgo Muy bajas en Rionegro y Guarne |
| **Infraestructura** | Se identifican el punto crítico y sus dependencias |
| Naturaleza4 | **No es válida solo por preferencia.** Mientras rija el requisito de máximo de intervenciones, una cartera de 4 unidades necesita una restricción verificable que excluya las carteras de 5 o 6. La afinidad SbN no es un peso del jurado |

## 5. Escenario (condicional)

- Entre referencia y SSP3 2060 ninguna celda de V cambia, porque V es de referencia.
- El riesgo de desastres de Rionegro pasa de Bajo a Medio de forma igual en todos los SSP.
- **A vigilar:** la amenaza de desastres en Guarne pasa a Medio y la de infraestructura en Marinilla pasa a Alto [M].
- Cualquier cartera debe registrar si se mantiene, se modifica o se reemplaza. **Ninguna está probada.** Los índices no son caudales ni estándares de diseño.

## 6. Gobernanza [actores DI F; roles INF]

| Unidad | Actores (ficha F) |
|---|---|
| PSA | CORNARE (líder), alcaldías, usuarios del agua, empresas de servicios públicos, fondos de agua |
| Rondas | CORNARE (líder), alcaldías, JAC, productores, gestión departamental del riesgo |
| Uso eficiente | CORNARE (líder), municipios, sectores, empresas de servicios públicos |
| Suelos y agroecología | CORNARE, municipios/UMATA, asociaciones campesinas |
| Verdes | Alcaldías (ejecución y mantenimiento), CORNARE |
| SAT | CORNARE, DAGRAN, alcaldías |
| Conocimiento | CORNARE (líder), DAGRAN, alcaldías, universidades |

**PSA en los años 2 y 3:** custodio propuesto, CORNARE con co-supervisión municipal [INF]. La unidad se mantiene completa en 1.200.

**Puerta de decisión al mes 3:** sitios, adicionalidad y que no haya solape con los antecedentes AM. Esos antecedentes son registros históricos, no compromisos actuales.

## 7. Seguimiento y riesgo residual

**Seguimiento:** cada unidad usa los indicadores de su ficha, de la §3. La línea base son los valores **de referencia de M, cuyo año basal no está identificado** (P1), más los valores de capacidad específica de la §1; los valores basales de los demás indicadores están [FAL]. La meta institucional (ficha 6) es −30 % de S y +30 % de CA a 2035; no es un efecto esperado.

**Riesgo residual de cualquier cartera:** infraestructura y desastres en Guarne, cobertura SAT baja si no entra 13, S de biodiversidad si se excluyen 01 y 02, y las prioridades del Plan Valles que queden sin financiar.

**Límites:**

- No verifiqué InCaHIDRO-01 ni -04.
- No leí el plan de Valles completo.
- **El uso y aval de la matriz M (texto legal en la celda B7 de la hoja "Sobre este documento") está en revisión.** Que sea de acceso público no la convierte en licencia libre.
- No hubo red, datos empresariales ni cambios en Git.
