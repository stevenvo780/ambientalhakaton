# Revisión independiente local de cumplimiento ambiental y coherencia — Reto CORNARE

**Fecha y hora:** 7 de octubre de 2026, 11:05 (hora Bogotá)  
**Evaluador independiente:** Gemini 3.8 Flash (ejecución local autorizada tras GO; cuenta actual sin modificación de credenciales, configuración ni proveedores)  
**Commit inspeccionado:** [`ef4e907b12ac61066b6eb30d58fcd5b3a0709642`](https://github.com/stevenvo780/ambientalhakaton/commit/ef4e907b12ac61066b6eb30d58fcd5b3a0709642) (rama `dev`)  
**Portal canónico:** [hackathon-ambiental.stevenvallejo.com](https://hackathon-ambiental.stevenvallejo.com) | **Repositorio:** [github.com/stevenvo780/ambientalhakaton/tree/dev](https://github.com/stevenvo780/ambientalhakaton/tree/dev)  
**Regla de intervención:** ÚNICA escritura en `entregables/revision_agy.md`. Sin modificaciones en Git, Vercel, P1, P2, P3, código ni dependencias. Ficheros ausentes se identifican y marcan pendientes; no se fabrican.

---

## 1. Inventario de archivos inspeccionados y hashes de control

| Archivo | Estado en workspace | Tamaño (bytes) | Hash SHA-256 verificado |
|---|---|---:|---|
| `README.md` | PRESENTE | 40.495 | `c4dc3c508d88075fa3687e7ebdd4cdce7e4ee35fc8605babb3a708de49d17d8c` |
| `caso/goal_ejecucion.md` | PRESENTE | 10.631 | `69305e97119557c1908e2d5b4eeb8242063df34c7288a3b3ed81d6579fb72a84` |
| `caso/matriz_requisitos_completa.md` | PRESENTE | 51.827 | `a8ef33d1d9ec8cb1088294508cedc0484d7aaac2fe1391630f92dd8a6ce93619` |
| `caso/propuesta_principal.md` | PRESENTE | 46.278 | `a4af4e87ec7d40d55a79d026b8401ee4b48114eeda2d645ce505900c318b3767` |
| `caso/brechas_escenarios_mea.md` | PRESENTE | 6.910 | `99c4c4710dce70def31dd2c764346732aecafe71f344272cbc3ce6e85afe2af9` |
| `entregables/datos_oficiales.json` | PRESENTE | 368.493 | `9c102dd6f98947a8732973bb94504a57933245f22bec0d7cdd66c21c66c4e232` |
| `entregables/datos_oficiales.csv` | **AUSENTE / PENDIENTE** | — | *(Fichero no localizado; se preserva pendiente, no se fabrica)* |
| `entregables/p1_tablero.md` | PRESENTE (borrador) | 13.384 | `fea2d983c68b67643708707c2348523a3af9221e896329a257d820d69393857f` |
| `entregables/p1_tablero.csv` | PRESENTE | 8.983 | `177795915784c7886b6c0e8eaa6a166e95f4897997c8ed1d4fdcdaa407dc01b6` |
| `entregables/p2_comparacion_financiera.md` | PRESENTE | 2.836 | `7c8f80b5aee5f70bcc94ee20305ce0144da9308c79fd826046f86b70338c71ba` |
| `entregables/p2_justificacion.md` | PRESENTE (borrador Claude) | 12.234 | `b865d8d5042a378dddc15fe2714a3dbd65f51afb723c3d26852967bf54679dfc` |
| `entregables/p2_comparacion_financiera.json`| PRESENTE | 41.389 | `cb70858721e17e45e1073f667a6fe634f077fa346e102bf09f27dc3862852e45` |
| `entregables/p3_riesgo_residual.md` | **AUSENTE / PENDIENTE** | — | *(Entregable P3 aún no escrito; no se fabrica)* |
| `entregables/variables_seguimiento.csv` | **AUSENTE / PENDIENTE** | — | *(Fichero P3 aún no escrito; no se fabrica)* |
| `entregables/PITCH_BORRADOR.md` | PRESENTE (borrador) | 4.586 | `35ddde20fc57bad270e07f7e7e4d34bbb2e51ac90071502a89004fd667ad05df` |
| `entregables/ANEXO_BORRADOR.md` | PRESENTE (borrador) | 4.230 | `261d7a3650c562974c68d83884ceadff49a59df7c4fc746bcb8556ae183c28c5` |
| `entregables/ANEXO_BORRADOR.pdf` | PRESENTE (2 páginas A4) | 48.976 | `f59da06a744bc5f477ef205fdfc6dd5148c4e1f5f3c11a7248bc565dd51e306c` |
| `entregables/revision_independiente.md` | PRESENTE (borrador P2) | 4.445 | `ab3fb1f139c5dc0aee527cbacb9b50844e4ed7ed50af096b281c7cfe6b825805` |
| `entregables/registro_avances.md` | PRESENTE | 1.518 | `e3c70ef31af8d5e12197c8839fabcc5cdf39c209bc7c6b14c5ded4730a5f6a72` |

**Fuentes oficiales institucionales externas auditadas:**
- `M-E-2411` Matriz municipal (`SIN-RISK`): `94a0e293ed5f530d4b8d60378a3ea9d1b5634d03a31c7b021d9b2de82a04091b`
- `M-E-2550` Informe de amenazas (118 p., p. 6): `fe4a2840f90cf401dd8723bf959d9955391b7afed3157cf65b5071348fee3814`
- `M-E-2852` Plan Regional de Adaptación Valles (p. 20): `45ff74e0a0084e9d789ebe56564c763706fc7b07904fdca0f6351432101acec2`
- `M-E-2897` Fichas de adaptación municipales (17 medidas): `42def814954702f0c0b0260ee9ff2c18e1fb432eeb9180c951db19d092a0b5a5`
- `M-E-2896` Anexo 1 Indicadores ASCA municipales: `1de3085ba390df5e55573b2e89035869d3a87449c2ab71b48d546c974c3d9c7e`
- `M-E-2917` Anexo 3 Matriz con categorías: `27d5992fb0d8887588cff438e913fad51a4473018fe7cf0b6d56d25867edf0f7` *(es directorio de fuentes de financiación, no matriz de riesgo)*

---

## 2. Estado sintético de los 8 Criterios, 9 Preguntas y 75 IDs

> [!IMPORTANT]
> **Principio de evaluación:** La preparación técnica, pruebas de software (tests unitarios 419/252, health checks, despliegue Vercel) y la lectura documental acreditan capacidad operativa del equipo, pero **no demuestran cumplimiento de las obligaciones ambientales**. Los estados reflejan la evidencia territorial y cuantitativa efectivamente disponible en los artefactos del workspace.

### 2.1. Los 8 Criterios Oficiales de Valoración (C01–C08)

| ID | Criterio | Estado actual | Síntesis de evidencia y brecha de cierre |
|---|---|---|---|
| **C01** | **Decisión, NO diagnóstico** | **En curso / Pendiente** | P1 formula 5 hallazgos que identifican qué proteger (biodiversidad y agua en Rionegro/Marinilla; desastres en Rionegro). P2 formula alternativas, pero la cartera final no está formalizada como entrega definitiva ni contrastada de forma unánime por el equipo. |
| **C02** | **Rigor** | **En curso** | Se respeta la distinción conceptual entre A, S, CA, V y R; cada dato citado cuenta con celda y localizador. Las discrepancias de fuentes se conservan sin falsearlas. No hay dependencias inventadas. Pendiente conciliar versiones y evitar extrapolaciones no sustentadas. |
| **C03** | **Priorización** | **Condicional / Pendiente** | Enumeración de 32.768 combinaciones y prueba de máximo 6 unidades cerrada bajo 1 unidad/fila. La propuesta N1 (5 unidades, COP 4.700 M) se apoya en un filtro cualitativo propio (umbral V Alta/Muy alta) que es regla de equipo, no oficial. Sin justificar el descarte de las 7 carteras de 6 unidades, C03 permanece condicional. |
| **C04** | **Pensamiento sistémico** | **Pendiente** | Se identifican dependencias de datos faltantes (tramos POMCA, adicionalidad PSA, horizonte intermedio), pero P3 no ha sido entregado. No se inventaron aristas empresariales ficticias. |
| **C05** | **Robustez** | **Parcial / Pendiente** | Verificada la equivalencia SSP3-7.0 hacia 2060 (2041–2060) en el master y reportes oficiales. Pendiente la confirmación oficial del horizonte intermedio suministrado por CORNARE y la evaluación de robustez de las alternativas completas. Prohibido afirmar prueba de robustez sin insumo intermedio oficial. |
| **C06** | **Viabilidad y gobernanza** | **Pendiente / Condicional** | Actores asignados según fichas MEA (CORNARE líder, alcaldías, JAC, DAGRAN), pero en calidad de propuestos, no concertados jurídicamente. Sostenibilidad del PSA para años 2 y 3 sin custodio ni financiamiento formalizado. Falta delimitación predial o de microcuencas. |
| **C07** | **Seguimiento** | **Pendiente** | Indicadores MEA identificados en ASCA (InSensHIDRO, InCaHIDRO, InCaRD), pero sus líneas base numéricas no constan en el master. El entregable P3 está ausente. La meta institucional del 30% es territorial a 2035, no del primer año ni atribuible a la cartera. |
| **C08** | **Utilidad para CORNARE** | **En curso** | Métodos reproducibles (script Python, JSON de combinaciones, CSV de datos oficiales). Web pública y repositorio en dev operativos. Pendiente integrar los productos finales y verificar que se entiendan sin requerir explicación de código. |

### 2.2. Las 9 Preguntas Oficiales (Q01–Q09)

- **Q01 (¿Qué proteger primero?):** *Atendida en borrador P1.* Prioridad ambiental en biodiversidad y recurso hídrico en Rionegro y Marinilla por vulnerabilidad muy alta y baja capacidad adaptativa, más exposición creciente por desastres en Rionegro.
- **Q02 (¿Dónde intervenir primero?):** *Atendida a escala municipal; PENDIENTE a escala sub-municipal.* Falta resolución predial, tramos de rondas POMCA o microcuencas abastecedoras verificadas.
- **Q03 (¿Qué combinación implementar?):** *Condicional / Provisional.* Candidato N1 (5 unidades) frente a las 7 carteras de 6 unidades y variantes críticas (infraestructura, SUDS). La decisión final del portafolio no está cerrada.
- **Q04 (¿Cómo distribuir recursos?):** *Definida financieramente, sujeta a la cartera final.* Costos íntegros de unidades indivisibles respetados (COP 4.700 M en N1 con saldo 300 M; 4.800–5.000 M en carteras de 6). Fondo simula COP 5.000 M.
- **Q05 (¿Qué actores participan?):** *Propuesta preliminar según fichas MEA.* Roles definidos conceptualmente, pero catalogados como propuestos, sin convenios suscritos ni cofinanciación acreditada.
- **Q06 (¿Qué cambia frente a SSP3-7.0/2060?):** *Identificado en datos, pendiente en decisión de cartera.* Riesgo de desastres en Rionegro sube de 0,283 a 0,321 (SSP3 2060); infraestructura en Marinilla sube amenaza a 0,649. Pendiente contrastar si cada medida se mantiene, modifica o reemplaza en las distintas carteras.
- **Q07 (¿Qué riesgo residual permanece?):** *Identificado cualitativamente, PENDIENTE en P3.* Residual en infraestructura de Guarne, desastres en Guarne, permanencia de PSA post año 3, y dimensiones sin intervención directa (salud, hábitat, alimentos). Ficha P3 no entregada.
- **Q08 (¿Qué datos faltantes cambiarían la elección?):** *Mapeado en brechas, PENDIENTE en P3.* Falta matriz de captura institucional para tramos POMCA, estado de cobertura boscosa, horizonte intermedio y eventos georreferenciados.
- **Q09 (¿Qué indicadores permitirán verificar vulnerabilidad?):** *PENDIENTE.* Indicadores ASCA mapeados conceptualmente, pero sin líneas base territoriales y sin entrega de P3.

### 2.3. Resumen cuantitativo de los 75 IDs

- **Demostrados (13 IDs):** I01, I02, I03, I11, I12 (insumos leídos y verificados); X01, X02, X03, X04, X05, X06 (exclusiones metodológicas respetadas rigurosamente); R09 (etiqueta de costos simulados); F02 (formato libre en proceso).
- **Condicionales (9 IDs):** R07, I14 (máximo condicionado a regla de repetición/1 unidad por fila); I10 (datos empresariales anonimizados si requeridos); I13 (eficacia causal inexistente tratada con análisis cualitativo); H01 (PSA 3 años vs horizonte operativo); F03 (anexo opcional verificado si se presenta); C03, Q03, P02 (sujetos a selección de cartera).
- **Pendientes / En curso (53 IDs):** Resto de reglas transversales (R01–R06, R08, R10–R13, R15–R22), criterios (C01, C02, C04–C08), preguntas (Q01, Q02, Q04–Q09), productos (P01, P03), formato (F01 pitch ensayado), insumos (I04–I09, I15, I16) y condiciones (H02–H08).
*(Total: 22 R + 9 Q + 8 C + 6 X + 3 P + 3 F + 16 I + 8 H = 75 IDs).*

---

## 3. Cinco hallazgos materiales priorizados

### Hallazgo 1: Brecha crítica de entregables finales y ficheros ausentes
- **Evidencia en workspace:** El producto P3 (`entregables/p3_riesgo_residual.md` y `entregables/variables_seguimiento.csv`) **no existe en el sistema**. Tampoco se encuentra `entregables/datos_oficiales.csv` (únicamente existe `p1_tablero.csv`). Los documentos P1, P2, Pitch y Anexo son **borradores de trabajo** que contienen notas de evaluación y espacios pendientes.
- **Impacto:** Con un objetivo de congelamiento a las 13:50 y entrega antes de las 14:00 Bogotá, no se puede certificar cumplimiento del reto mientras los entregables canónicos P1, P2 y P3 permanezcan en estado de borrador o ausentes. P3 debe ser redactado con urgencia por su responsable asignado.

### Hallazgo 2: Discrepancias institucionales, límites de fuentes y equivalencia de escenarios climáticos
- **Contradicciones documentales verificadas:**
  1. *Biodiversidad Rionegro / Marinilla:* Enunciado p. 2 reporta V = 0,75 / 0,72 y CA = 0,22 / 0,24; la matriz master `M-E-2411` reporta Rionegro V = 0,76467, CA = 0,22194, S = 0,39259 (filas 69) y Marinilla V = 0,74496, CA = 0,23680, S = 0,52092 (filas 68).
  2. *Recurso hídrico Rionegro:* Presentación institucional (lámina 12) lo clasifica como categoría "Medio"; la matriz master lo clasifica como "Alto" (V = 0,54812, celda AK39).
  3. *Riesgo de desastres Guarne:* Lámina 12 lo muestra "Alto"; matriz master reporta V = 0,40775 "Medio" (AK15) y Riesgo referencia = 0,16410 "Bajo".
  4. *Salud y Alimentos:* Discrepancias sistemáticas entre la lámina 12 (Bajo/Muy bajo) y el master (Medio en Marinilla Salud y Rionegro Alimentos).
- **Jerarquía y autoridad:** El enunciado oficial del reto prevalece sobre la presentación institucional y el master. Las discrepancias no deben corregirse silenciosamente ni forzarse mediante umbrales propios: deben explicitarse citando archivo, versión y localizador.
- **Equivalencia y límites de escenarios:** Se confirma que SSP3 equivale estrictamente a **SSP3-7.0** y el horizonte 2060 corresponde al **período 2041–2060** (Informe `M-E-2550` p. 6; Plan Valles `M-E-2852` p. 20). La referencia climática es 1981–2010. Los valores del master son **datos cacheados en XML**, no recalculados. El selector "2026" del Observatorio es una etiqueta web de consulta; **el año basal de medición de los índices dimensionales es desconocido (`baseline_year: null`)**. Además, el **horizonte intermedio oficial suministrado por CORNARE sigue sin definición expresa en el enunciado** (el uso de SSP2-4.5/2040 en el workspace es una comparación técnica preliminar, no una certificación oficial).

### Hallazgo 3: Cartera COP 5.000 M: Candidato provisional N1 frente al máximo formal de 6 unidades
- **Evaluación financiera rigurosa:** Las 15 unidades del catálogo (PDF p. 5) son indivisibles (PSA COP 1.200 M por 3 años; Restauración COP 1.500 M por ~100 ha). Se comprueba la enumeración completa: 32.768 combinaciones, 1.567 factibles, con un **máximo financiero formal de 6 unidades (7 carteras)** bajo la hipótesis de máximo 1 unidad por fila. Las 7 unidades más baratas suman COP 5.800 M.
- **Provisionalidad del candidato N1 (5 unidades / COP 4.700 M, saldo COP 300 M):**
  - Composición N1: RETO-01 (PSA, 1.200) + RETO-03 (Áreas protegidas, 700) + RETO-04 (Uso eficiente, 900) + RETO-05 (Rondas, 1.300) + RETO-14 (Conocimiento, 600).
  - Justificación ambiental de N1: Introduce RETO-05 (Rondas) para atender simultáneamente la alta sensibilidad hídrica en Marinilla/Rionegro y la amenaza de inundación/deslizamientos en Rionegro (desastres).
  - Contraste con las 7 carteras de 6 unidades: **Ninguna de las 7 carteras de 6 unidades incluye RETO-05 (Rondas), ni Restauración (02), ni Cabeceras (06), ni SUDS (10), ni Infraestructura (11/12)**. Las carteras de 6 obtienen su volumen incorporando unidades baratas como RETO-15 (Salud, 800; amenaza constante, V bajo/medio), RETO-07/08 (Suelos/Agroecología, 1.000/800; dimensiones con V menor) o RETO-09 (Verdes urbanos, 1.000; hábitat con V ≤ 0,179).
- **Advertencia metodológica crítica:** La selección de N1 sobre las 7 carteras de 6 unidades se sustenta en un **filtro cualitativo propio propuesto por el equipo** (umbral de V Alta/Muy alta y palanca en S/CA), el cual **no es una regla oficial del reto ni ponderación del jurado**. Asimismo, la preferencia del equipo por Soluciones basadas en la Naturaleza (SbN) dentro de una cartera híbrida es una postura del proponente, no un criterio evaluativo vinculante. Para que N1 sea defendible frente al jurado, el equipo debe **explicitar la tabla de exclusión técnica de cada una de las 7 carteras de 6 unidades**, demostrando que añadir una sexta unidad sacrifica la atención de celdas críticas territoriales, en lugar de descartarlas por mero sesgo conceptual.

### Hallazgo 4: Brecha insalvable entre agregados del master y seguimiento MEA
- **No confusión de indicadores:** Los valores de S, CA y V contenidos en la hoja `Regional Valles SN` del master `M-E-2411` son **agregados sintéticos dimensionales**, NO valores basales individuales de los indicadores MEA (tales como `InSensHIDRO-01` [IUA], `InCaHIDRO-04`, `InCaRD-01` o porcentaje de coberturas boscosas). El master no provee las líneas base numéricas de estos indicadores específicos.
- **Ausencia de eficacia causal en fuentes oficiales:** En ninguno de los documentos oficiales extraídos existe una tasa de efectividad cuantitativa, porcentaje de reducción de vulnerabilidad o relación dosis-respuesta por cada COP invertido.
- **Riesgo de afirmaciones inválidas:** Está prohibido prometer o calcular una reducción del 30% de la vulnerabilidad en el primer año o atribuirla causalmente a la cartera de COP 5.000 M. La meta del 30% a 2035 es un objetivo de planificación regional de largo plazo institucional (Plan Valles / Presentación p. 19). El producto P3 debe estructurar el seguimiento como **hipótesis cualitativas de intervención sobre factores S y CA**, declarando la ausencia de línea base como brecha a levantar y separando tajantemente los indicadores de gestión (inversión, hectáreas, talleres) de los indicadores de impacto climático.

### Hallazgo 5: Gobernanza no formalizada, resolución territorial pendiente y ausencia deliberada de dependencias
- **Gobernanza territorial:** Los actores asignados a las medidas (CORNARE líder, alcaldías municipales, JAC, DAGRAN, empresas de servicios públicos) provienen de los esquemas típicos de las 17 fichas MEA. Deben presentarse estrictamente como **actores propuestos**, dado que no existen convenios interinstitucionales suscritos ni cofinanciaciones demostradas en el ejercicio. El programa de PSA (RETO-01, COP 1.200 M) dura 3 años; la custodia y recursos para los años 2 y 3 deben quedar explícitamente asignados a CORNARE y municipios en la propuesta.
- **Resolución geográfica:** El diagnóstico territorial está consolidado a escala municipal. Faltan tramos específicos de rondas hídricas en POMCA Río Negro, microcuencas abastecedoras delimitadas y predios para PSA o conservación. Las medidas deben rotularse como "localización municipal con sitio provisional condicionado a caracterización cartográfica".
- **Ausencia deliberada de dependencias:** El reto omitió deliberadamente la matriz de dependencias empresariales e intersectoriales. **Está terminantemente prohibido inventar aristas, grafos de propagación o relaciones de dependencia por cercanía física o sectorial**. Tampoco se deben asociar nombres de empresas, predios particulares ni códigos oficiales falsos. Estas faltas deben tratarse en P3 como preguntas de investigación prioritarias y capacidades institucionales por fortalecer para CORNARE (C04, R15, R16).

---

## 4. Verificaciones concretas mínimas para el cierre antes de las 14:00 Bogotá

Para asegurar una entrega robusta y conforme a la rúbrica oficial, el equipo debe verificar y cerrar los siguientes puntos antes del congelamiento del paquete (13:50 Bogotá):

1. **Escritura y entrega física de P3:** Redactar y publicar en `entregables/` los archivos `p3_riesgo_residual.md` y `variables_seguimiento.csv`. Sin este producto, C04, C07, Q07, Q08 y Q09 quedarán formalmente incumplidos.
2. **Definición y formalización de la cartera definitiva en P2:** El redactor de P2 debe formalizar si adopta N1 (5 unidades / 4.700 M) o una cartera de 6 unidades (ej. Variante de 6 unidades 01+03+04+08+14+15 = 5.000 M), acompañando una **tabla comparativa explícita de las 7 carteras de 6 unidades** donde se justifiquen los sacrificios de celdas críticas (agua y desastres) frente al conteo numérico de unidades.
3. **Ensayo cronometrado real del Pitch (F01):** Realizar un ensayo verbal completo del guion y registrar en el acta de entrega: hora del ensayo, evaluador que cronometró y duración real verificada (debe ser estrictamente **≤ 7 minutos y 00 segundos**).
4. **Verificación de paginado del Anexo metodológico (F03):** Al integrar la cartera final en el anexo, compilar a PDF y ejecutar comprobación determinista (`pdfinfo entregables/ANEXO_BORRADOR.pdf | grep Pages`). El documento no debe exceder bajo ninguna circunstancia las **2 páginas físicas A4**.
5. **Erradicación de causalidad inventada y coeficientes ficticios:** Auditar que en ningún entregable se exprese una reducción porcentual de vulnerabilidad atribuida a la cartera, ni se presenten multiplicadores del software o proxies sociales como datos institucionales.
6. **Mantenimiento estricto del etiquetado de certeza:** Verificar que cada afirmación del paquete conserve su etiqueta: `[DI]` dato institucional, `[INF]` inferencia, `[SUP]` supuesto del equipo, `[FAL]` información faltante.
7. **Declaración explícita de ficheros ausentes:** Consignar en el informe de entrega que `datos_oficiales.csv` no fue generado y que los datos tabulares oficiales residen de forma canónica en `entregables/datos_oficiales.json` y `entregables/p1_tablero.csv`.

---

## 5. Declaración de alcance y limitaciones

Esta revisión fue realizada por Gemini 3.8 Flash sobre el estado del repositorio en el commit `ef4e907b12ac61066b6eb30d58fcd5b3a0709642` y workspace local a las 11:05 del 7 de octubre de 2026. Es una auditoría adversarial y puntual de los documentos presentes al momento de la consulta. No constituye una aprobación anticipada ni una auditoría integral de artefactos que sean redactados, modificados o publicados con posterioridad por otros miembros o procesos del equipo.
