# Revisión completa de documentos y requisitos CORNARE

Revisión documental del 7 de octubre de 2026. Corte horario consultado: 14:17:28 UTC, 09:17:28 de Bogotá. Alcance: lectura completa de las notas, convocatoria, ambos enunciados, presentación PDF/PPTX, figuras, notas y relaciones externas del PPTX; contraste de los requisitos con el plan y el CSV de costos. No se modificaron el plan, la selección, los originales ni el entorno. La revisión de contenido de todas las hojas Excel corresponde al informe independiente [revision_excel.md](revision_excel.md).

**La entrega requerida es una decisión territorial, un portafolio y una ficha de riesgo residual/seguimiento.** El enunciado no exige software completo y lo excluye expresamente. El plazo del usuario, 14:00 de Bogotá, gobierna la preparación aunque la convocatoria previa mencione 08:00–16:00.

## 1. Cobertura y jerarquía

| Archivo | Lectura y comprobación | Papel y límite |
| --- | --- | --- |
| [explicacion.txt](../explicacion.txt) | Sus 119 líneas completas, incluidas repeticiones y cuatro propuestas. | Notas informales de la jornada; contienen el horizonte de un año, afirmaciones jurídicas y lecturas de riesgo que deben contrastarse. |
| [Climate_Risk_Hackathon_convocatoria_completa.md](../Climate_Risk_Hackathon_convocatoria_completa.md) | Sus 585 líneas y 19 secciones, fuentes y estados de certeza. | Investigación preparatoria; mezcla logística atribuida a fuentes públicas, inferencias estratégicas y criterios internos de producto. Sus enlaces no se volvieron a verificar en esta revisión. |
| [RETO CLIMATE WEEK HACKATHON.pdf](../RETO%20CLIMATE%20WEEK%20HACKATHON.pdf) | Las ocho páginas; extracción original comprobada con pdftotext. | Fuente principal de reglas, presupuesto, escenario, productos, criterios y exclusiones. |
| [Enunciado del ZIP](../insumos/cornare/RETO%20CLIMATE%20WEEK%20HACKATHON%20%281%29.pdf) | Las ocho páginas; extracción original comprobada. | Su texto con distribución de página es exactamente igual al PDF de raíz. No constituye un reto distinto. |
| [HACKATHON RETO CORNARE.pdf](../insumos/cornare/HACKATHON%20RETO%20CORNARE.pdf) | Sus 31 páginas, texto y revisión visual de las 31; ampliación de figuras relevantes. | Contexto institucional, categorías, metodología de priorización, MEA y meta a 2035. Capturas/portadas no equivalen a datasets o documentos completos. |
| [HACKATHON RETO CORNARE.pptx](../insumos/cornare/HACKATHON%20RETO%20CORNARE.pptx) | Las 31 diapositivas en el orden de presentation.xml; textos, notas, relaciones externas y medios; comparación con las 31 páginas PDF y lectura independiente de imágenes originales seleccionadas. | Conserva texto/estructura que el PDF intercala por columnas y gráficos rasterizados no presentes en la extracción textual. |
| [Plan de ejecución](plan_ejecucion.md) y [catálogo CSV](catalogo_costos_reto.csv) | Lectura final completa; CSV analizado como 15 registros y cotejado con la página 5. | Plan y transcripción locales, no normas adicionales ni resultado ambiental ejecutado. |

Los PDFs del enunciado difieren en tamaño y bytes: el original tiene SHA256 3dc49d0290487b0d316db4ed1e3d78dc2abbcb5c823a536e9ebbffa768251779 y la copia del ZIP ce8901194241e006db4b90998719b08ff97963f64ec71d2416edd3ebae958e6d. El texto extraído es **exactamente idéntico**. Los tres textos existentes en insumos/texto coinciden con una nueva extracción de sus PDFs originales.

El ZIP contiene 22 entradas de archivo: **11 documentos útiles y 11 metadatos AppleDouble bajo __MACOSX**. Los útiles son ocho archivos Excel, dos PDF y un PPTX. Dos Excel de acciones de adaptación son copias idénticas, por lo que existen siete archivos Excel únicos. Los metadatos AppleDouble no son once documentos técnicos adicionales. El [inventario](../insumos/inventario.json) conserva los 11 útiles; sus tamaños y hashes se comprobaron en la revisión previa.

La [extracción PPTX](../insumos/texto/presentacion_pptx.json) conserva párrafos, notas, enlaces, medios, observaciones visuales y comparación por página. Hay siete partes de notas, vinculadas a las diapositivas 3, 11, 13, 14, 22, 28 y 30: contienen espacios vacíos y el número de diapositiva, **sin notas sustantivas adicionales**. Todo el PPTX contiene un solo hipervínculo externo, en la diapositiva 30, al Observatorio de cambio climático. No contiene documentos o gráficos de datos incrustados en ppt/embeddings o ppt/charts. No se afirma equivalencia de píxeles entre PPTX y PDF; la comparación textual y visual no encontró reglas del reto adicionales en las notas.

## 2. Requisitos vinculantes del enunciado

Los localizadores siguientes se aplican a ambos enunciados de ocho páginas.

| Requisito | Localizador | Implicación para la entrega |
| --- | --- | --- |
| Decidir dónde y cómo combinar adaptación con información existente y recursos limitados. | P. 1, problema y pregunta del reto. | Usar el estudio; concentrar trabajo en la decisión. |
| Regional Valles de San Nicolás, corredor Rionegro–Guarne–Marinilla. | Pp. 1–3, delimitación. | No analizar toda la jurisdicción ni arrastrar Granada como parte del caso. |
| El corredor reúne perfiles distintos; no son necesariamente los tres municipios de mayor riesgo. | Pp. 1–2, sección 2. | Explicar conflictos entre dimensiones y municipios, sin clasificación automática por un índice. |
| Fondo simulado de COP 5.000 millones para los tres municipios en conjunto. | P. 4, sección 6. | No confundirlo con recursos presupuestales reales, cofinanciación demostrada o el premio. |
| Seleccionar el máximo de intervenciones posibles y localizar/asignar recursos. | P. 4, sección 6; p. 6, producto 2. | Explicitar unidad, conteos y restricciones; comparar alternativas. Minimax no garantiza ese conteo por sí mismo. |
| Precios de referencia por unidad funcional, indivisibles salvo instrucción expresa. | Pp. 4–5, sección 6 y tabla. | No fraccionar costo ni unidad; no cambiar precios por valores históricos del Excel. |
| No es obligatorio consumir todo el fondo. | P. 4, sección 6. | Mostrar saldo y justificación. |
| Demostrar por qué la combinación reduce mejor vulnerabilidad que las descartadas. | Pp. 4–5, sección 6. | Vincular mecanismo de sensibilidad/capacidad, territorio, actores y vulnerabilidad no resuelta; separar beneficio esperado de efecto observado. |
| Escenario de referencia y horizonte futuro intermedio suministrados. | P. 6, sección 7. | Registrar exactamente año, escenario y procedencia; el año de ejecución no sustituye el horizonte climático. |
| Prueba de robustez con SSP3-7.0 hacia 2060. | P. 6, sección 7; pp. 6–7, producto 2. | Explicar si la cartera se mantiene, modifica o reemplaza y cómo cambia cada intervención. |
| Utilizar escenarios existentes, sin nueva modelación climática. | P. 6, sección 7. | No producir un clima nuevo ni probabilidades no documentadas. |
| La matriz de dependencias empresariales falta deliberadamente. | Pp. 3–4, secciones 2 y 5. | No completar, inferir o suponer cadenas que no existen en los datos. Identificar información que podría cambiar la decisión y cómo levantarla. |
| Información empresarial agregada, anonimizada o sintética cuando sea necesaria. | P. 3, sección 3. | No trasladar etiquetas identificables de las capturas a un dataset o entregable empresarial individual. |
| Distinguir dato institucional, inferencia del equipo, supuesto e información faltante. | P. 7, sección 11. | Etiquetado visible en las tres salidas y el anexo, cuando exista. |
| Hasta cinco hallazgos en el diagnóstico/primer tablero. | P. 6, secciones 8 y 10. | Selección focalizada; no rehacer todo el estudio. |
| Tres productos en formato libre, comprensibles sin explicación extensa. | P. 7, sección 11. | Láminas, hoja de cálculo, tablero, prototipo o combinación son válidos. |
| Pitch de máximo siete minutos. | Pp. 6–7, secciones 8 y 11. | Ensayo y guion con las razones, sacrificios y seguimiento. |
| Anexo metodológico opcional de máximo dos páginas si se usa procedimiento cuantitativo. | P. 7, sección 11. | Explicar matriz/algoritmo sin inflar la entrega ni presentar un óptimo sin datos. |

Las nueve preguntas de la sección 9, página 6, quedan cubiertas si la entrega explica: qué proteger y por qué; dónde intervenir primero; combinación; asignación; actores; cambio bajo SSP3-7.0/2060; riesgo residual; dependencias/datos que cambiarían la decisión; e indicadores posteriores de reducción de vulnerabilidad.

### Contenido íntegro de los tres productos

- **Producto 1, página 6:** máximo cinco hallazgos, qué se protege primero, localización, elementos críticos y brechas. Toda relación no demostrada debe quedar como hipótesis o dato faltante.
- **Producto 2, páginas 6–7:** máximo de intervenciones posibles; para cada una, municipio/localización, problema, medida MEA, valor, actores, orden, beneficio esperado y cambio después del estrés.
- **Producto 3, página 7:** riesgo que permanece; dependencias/datos a levantar por CORNARE; variables mínimas; indicadores MEA para seguir sensibilidad, capacidad adaptativa o vulnerabilidad.

### Los ocho criterios oficiales, página 7

| Criterio | Evidencia esperada |
| --- | --- |
| Decisión, no diagnóstico | Usar el estudio existente y concentrarse en decidir. |
| Rigor | Distinguir amenaza, vulnerabilidad y riesgo; no inventar datos o dependencias. |
| Priorización | Justificar qué se interviene antes y cómo se distribuye el recurso. |
| Pensamiento sistémico | Identificar dependencias faltantes que podrían cambiar la decisión y cómo caracterizarlas. |
| Robustez | Revisar la estrategia ante el escenario futuro más exigente y reconocer incertidumbre. |
| Viabilidad y gobernanza | Coherencia entre medidas, secuencia, actores, competencias y territorio. |
| Seguimiento | Indicadores que evalúen sensibilidad, capacidad adaptativa y vulnerabilidad. |
| Utilidad para CORNARE | Decisión reproducible y capacidad institucional que conviene fortalecer. |

El enunciado no publica pesos del jurado. Los pesos 70/15/15 de la presentación describen la priorización institucional de medidas; no son pesos obligatorios de evaluación de esta hackathon ni coeficientes de eficacia.

### Todas las exclusiones oficiales, páginas 7–8

1. Recalcular el estudio de riesgo climático.
2. Analizar los 26 municipios.
3. Elegir automáticamente el municipio con el índice más alto.
4. Inventar dependencias empresariales o usar información reservada.
5. Construir una plataforma completa o un software.
6. Entregar una lista sin priorización ni asignación de recursos.

No se exige un stack, IA, login, un despliegue nuevo, API integrada, firma SpecOrganon ni aceptación formal de nueve fases para presentar. Las herramientas existentes se aprovechan cuando ayudan a producir las tres salidas.

## 3. Tabla económica completa y comprobación del CSV

Todos los importes son **millones de COP**, fuente: página 5 del enunciado. Los nombres abreviados de esta tabla no sustituyen el nombre/ficha MEA que debe enlazarse en el portafolio.

| Dimensión | Medida | Unidad funcional del ejercicio | Millones COP |
| --- | --- | --- | ---: |
| Biodiversidad | Compensación y PSA | Programa territorial de conservación/restauración estratégica durante tres años. | 1.200 |
| Biodiversidad | Restauración de ecosistemas estratégicos | Aproximadamente 100 ha; establecimiento, mantenimiento inicial y seguimiento. | 1.500 |
| Biodiversidad | Sistemas de áreas protegidas | Identificación, gestión, acuerdos, conectividad y fortalecimiento en el corredor. | 700 |
| Recurso hídrico | Uso intersectorial eficiente | Programa para grandes usuarios, empresas/sector público/productivo: diagnóstico, medición, eficiencia, reúso y seguimiento. | 900 |
| Recurso hídrico | Rondas hídricas | Corredores ribereños priorizados: restauración, aislamiento, recuperación y seguimiento. | 1.300 |
| Recurso hídrico | Cabeceras y ecosistemas abastecedores | Microcuenca o sistema abastecedor estratégico. | 1.600 |
| Seguridad alimentaria | Suelos agrícolas estratégicos | Programa con productores: asistencia, reconversión y conservación de suelo/agua. | 1.000 |
| Seguridad alimentaria | Agroecología y economía rural resiliente | Asistencia, suelo/agua, asociatividad y adaptación productiva. | 800 |
| Hábitat | Espacios verdes urbanos | Corredor/área verde multifuncional; arborización, conectividad y regulación térmica/hídrica. | 1.000 |
| Hábitat | SUDS | Piloto municipal; jardines de lluvia, infiltración, pavimentos permeables y almacenamiento, entre otras acciones. | 1.800 |
| Infraestructura | Infraestructura resiliente al clima | Adecuación de un punto crítico de infraestructura/vía/servicio. | 2.500 |
| Infraestructura | Infraestructura resiliente y servicios públicos | Intervención focalizada de infraestructura o servicio esencial. | 2.000 |
| Riesgo de desastres | SAT | Sistema interoperable en puntos críticos; instrumentación, comunicaciones y protocolos. | 1.200 |
| Riesgo de desastres | Conocimiento y comunicación | Estudios, modelación, instrumentación básica, protocolos y plataforma de información. | 600 |
| Salud | Sistema y entornos saludables resilientes | Vigilancia climatosensible, capacidad institucional, prevención y respuesta. | 800 |

Se analizaron 15 filas del CSV: todos los precios coinciden, en orden, con los 15 de la página 5; costo_cop es costo_millones_cop × 1.000.000 en todas las filas; todas mantienen indivisibilidad y página 5. Total de las 15 unidades: COP 18.900 millones, dato de control, no cartera. Los IDs RETO-01 a RETO-15 son locales y el plan lo declara.

La tabla regional de 17 medidas de la presentación no autoriza añadir dos precios inexistentes. Tampoco se ha establecido en el enunciado si puede repetirse una misma unidad en diferentes localizaciones: si afecta al conteo, conservarlo como regla a aclarar. Los componentes de costo por ciclo de vida del motor no deben alterar la unidad económica oficial del ejercicio.

## 4. Entradas disponibles y pendientes

### Lo recibido y sustentado

- Enunciado con corredor, reglas, 15 unidades/costos, productos, rúbrica y rutas institucionales.
- Datos numéricos parciales del caso, página 2: biodiversidad V de Rionegro 0,75 y Marinilla 0,72; promedios regionales V de biodiversidad 0,55 y agua 0,53; capacidad adaptativa de gestión del riesgo Rionegro 0,56 y Marinilla 0,61; capacidad adaptativa de biodiversidad Rionegro 0,22, Marinilla 0,24 y Guarne 0,33; amenaza de desastres de Marinilla 0,66–0,73; sensibilidad de desastres de Rionegro 0,40 y riesgo de Rionegro 0,28→0,32 hacia 2060. No asignar escenario/año adicional donde el párrafo no lo especifica.
- Presentación: tabla categórica territorial, contexto regional, escenarios cualitativos, priorización, meta a 2035, demostración conceptual del MEA y portadas de planes/perfiles.
- Ocho archivos Excel del ZIP, siete únicos. Sus nombres acreditan reportes de adaptación/mitigación, emisiones e indicadores sectoriales; el contenido y límites específicos se documentan en revision_excel.md. Los antecedentes reportados no acreditan eficacia causal.
- Rutas de consulta del Observatorio para cambio climático, gestión del riesgo, POMCA y determinantes; MARCO como complemento hidrometeorológico, páginas 3–4. Un enlace no prueba descarga programática disponible o una integración ya ejecutada.

### Lo prometido por el caso que aún necesita localizarse o validarse

| Entrada | Por qué no basta el material leído |
| --- | --- |
| Fichas completas de los tres municipios y siete dimensiones, con los cinco componentes del riesgo | Los números de página 2 y las categorías de página 12 de la presentación son parciales; no permiten reconstruir la matriz completa. |
| Escenario de referencia, horizonte intermedio y SSP3-7.0/2060 del corredor | La presentación contiene síntesis, no todos los valores/capas del corredor por escenario. Sus mapas empresariales SSP2-4.5 no sustituyen el estrés oficial. |
| Mapas, geometrías y capas con cobertura, escala y vigencia | Las imágenes son ilustraciones; no constituyen geometrías consultables ni alertas actuales. |
| Catálogo/fichas MEA e indicadores completos | La presentación muestra 21 campos y capturas, sin entregar todas las fichas, fórmulas, unidades y líneas base. |
| Resumen desagregado de eventos y series climáticas | Se menciona climatología 1994–2024, pero no están las series completas dentro de estos documentos. |
| Actores competentes, localizaciones precisas, continuidad y capacidad de ejecución | No derivarlos automáticamente de una portada, monto histórico o cercanía espacial. |
| Efectos causales/coeficientes de adaptación | No aparecen eficacias completas por medida/localización. El costo o actividad no implica reducción de vulnerabilidad. |
| Dependencias empresariales | Falta deliberada, no tarea de inventar un grafo en la jornada. |
| Regla de repetición de unidades y horizonte operativo de un año | El año procede de las notas; no permite dividir PSA de tres años ni cambiar el horizonte climático. |

La ausencia debe registrarse junto con su efecto sobre la decisión. Si el material futuro no se obtiene, una revisión parcial o condicional debe presentarse como tal: no acredita el estrés oficial completo ni una eficacia demostrada.

## 5. Lectura de todas las diapositivas y figuras

La página del PDF y el número de diapositiva corresponden uno a uno.

| Página/slide | Contenido revisado y alcance |
| --- | --- |
| 1 | Portada y fecha 7 de octubre de 2026. |
| 2 | Cronología normativa colombiana, de CMNUCC a instrumentos 2026. Figura de contexto; no verificación de vigencia, contenido o obligaciones aplicables al equipo. |
| 3 | Cuatro componentes de actualización: diagnóstico, análisis, planes y financiamiento; 32 empresas, 26 municipios y MEA en MRV. |
| 4 | Talleres de madurez municipal, 195 participantes de 26 municipios, con fotografías. |
| 5 | Gráfico por pilares/subregión. Valles: gobernanza 42%, estrategia 53%, métricas/objetivos 33%, gestión 52%; no porcentajes de vulnerabilidad reducida. |
| 6 | Talleres con 495 actores clave y fotografías; no dataset desagregado de participación. |
| 7 | Fotografías de talleres de riesgos; no nuevas reglas del reto. |
| 8 | Captura de percepción cualitativa: madurez 50%, amenaza 3,81, sensibilidad 3,51, capacidad 2,02, vulnerabilidad 1,96 y riesgo 7,55. Escalas propias; no intercambiarlas con índices técnicos del enunciado. |
| 9 | Climatología 1994–2024, metodología y siete dimensiones. No proporciona series completas ni efectos de intervenciones. |
| 10 | Arquitectura: 73 indicadores territoriales (20+22+31); figura empresarial con discrepancia 106 frente a suma 99. Rotula ocho dimensiones SIIVRA. |
| 11 | Síntesis de amenaza de referencia y SSP1/SSP2/SSP3, 2040/2060. Referencia: 17 municipios baja, ocho muy baja y uno media; la figura advierte valores referenciales. |
| 12 | Tabla por dimensión y 26 municipios. El corredor muestra vulnerabilidad integrada media; las prioridades deben conservar componente/dimensión, no usar solo ese agregado. |
| 13 | Síntesis de riesgo jurisdiccional: 42% alto, 35% medio, 23% bajo; agua, desastres, alimentación e infraestructura expuesta. No distribución exclusiva de los tres municipios. |
| 14 | Mapas empresariales SSP2-4.5, hallazgos y distribución de vulnerabilidad; las barras suman 34, mientras otras láminas hablan de piloto de 32. No matriz de dependencias. |
| 15 | Priorización institucional: 70% análisis de vulnerabilidad, 15% recurrencia de acciones, 15% talleres; no pesos del jurado o eficacia. |
| 16 | 17 medidas territoriales. Valles prioriza eficiencia hídrica, PSA, verdes urbanos, SUDS, suelos y conocimiento; el ejercicio económico usa las 15 con precio. |
| 17 | Tabla rasterizada de 11 medidas empresariales; no reemplaza las 15 unidades territoriales del ejercicio. |
| 18 | 21 campos de ficha de medida: nombre, contexto, tres líneas de política/planes, dimensión, amenazas, objetivo, enfoque, ámbito, estado, técnica, horizonte, acciones, indicadores, metas, actores, medios, costos, barreras y cobeneficios. |
| 19 | Meta regional: disminuir 30% los indicadores de vulnerabilidad climática a 2035. Cinco portadas de planes regionales, no los planes completos. |
| 20 | Planes de las 32 organizaciones piloto; portadas no habilitan usar datos individuales reservados. |
| 21 | Actualización PCVDCC: dinámica y variabilidad del agua, operación adaptativa y articulación; portada, no capítulo íntegro. |
| 22 | Portadas de cinco perfiles de proyectos; no perfiles completos ni sus presupuestos contractuales. |
| 23 | Ciclo MEA: evaluación inicial, línea base, implementación, nueva medición de sensibilidad/capacidad/vulnerabilidad, resultado y ajuste. Captura empresarial de 32; no prueba causal de medidas de este reto. |
| 24 | Captura del sistema MRV/MEA: medida, acciones e indicadores; no contrato API o integración ejecutada por el equipo. |
| 25 | Captura de inversión/acciones y gestión; actividad e inversión no equivalen a reducción observada. |
| 26 | Formulario de acción con inversión, unidades, valores y fechas; no ejecución contractual o eficacia probada. |
| 27 | Captura de comparación/gestión de medidas y vulnerabilidad; sin acceso backend acreditado por el documento. |
| 28 | Utilidad para planificación/POT, inversiones, exposición, ecosistemas, infraestructura y seguimiento. |
| 29 | Figura de ordenamiento y dimensiones/elementos expuestos; referencia conceptual, no capas descargables. |
| 30 | Observatorio de cambio climático; único hipervínculo externo del PPTX. |
| 31 | Cierre visual de agradecimiento. |

Se comprobaron directamente las imágenes originales PPTX image34.png, image58.png, image70.png e image140.png: contienen la arquitectura, hallazgos empresariales, tabla de 11 medidas y captura de línea base que también aparecen en el PDF. La extracción de párrafos no muestra por sí sola su texto interno.

## 6. Inconsistencias y expectativas no corroboradas

| Afirmación o diferencia | Contraste y tratamiento |
| --- | --- |
| “Meta al 30%” o “30% en un año”, notas | La página 19 fija **disminuir 30% los indicadores a 2035**, no dejar V=0,30 ni demostrarlo durante el primer año. |
| Ejecución de un año, notas | No figura como límite uniforme en el enunciado. Registrar horizonte operativo por aclarar; PSA cubre tres años y cuesta íntegramente COP 1.200 millones. |
| Municipios seleccionados por ser de mayor riesgo, notas | El enunciado, páginas 1–2, lo niega explícitamente; el corredor representa perfiles y conflictos diferentes. |
| Agua, desastres y alimentación como únicas prioridades | La página 2 resalta biodiversidad y agua en promedios regionales y biodiversidad crítica en Rionegro/Marinilla; también advierte riesgos residuales de infraestructura/desastres. No cerrar dimensiones por una frase de notas. |
| Todas las empresas tienen baja capacidad, notas | La figura 14 habla de vulnerabilidad predominantemente baja/media y de grupos altos/muy altos. Capacidad y vulnerabilidad son componentes distintos; no sustenta una afirmación universal de capacidad baja. |
| No se tuvo en cuenta variabilidad climática, notas | La lámina 3 declara actualización ante variabilidad; la 9 usa 1994–2024 y la 21 exige gestionar variabilidad hídrica. La frase no demuestra esa omisión técnica. |
| 106 indicadores empresariales | Figura 10 lista 20 físicos+12 transición+18 sensibilidad+49 capacidad=99. Falta aclarar categoría/denominador; no corregir silenciosamente. |
| 32 empresas piloto frente a barras de 34 | Láminas 3, 20 y captura 23 señalan 32. La gráfica 14 suma 6+9+13+4+2=34. Podría haber distinto corte/universo; el material no lo explica. |
| Siete dimensiones frente a ocho SIIVRA | Siete en enunciado y lámina 9; ocho rotuladas en figura 10. Mantener siete para el reto; no deducir una octava dimensión obligatoria. |
| 17 medidas territoriales, 11 empresariales y 15 precios | Son catálogos/alcances distintos, no quince precios incompletos por error. No inventar precios adicionales. |
| Convocatoria §18: producto vertical completo, login, PostgreSQL, E2E y despliegue | Criterio interno preparatorio, no requisito oficial. Lo reemplaza la exclusión del enunciado §13 y el encargo actual de decidir. |
| Convocatoria §9: criterios inferidos y ausencia de rúbrica | La rúbrica del caso ya está recibida, página 7. Sus ocho criterios prevalecen; no inventar pesos a partir de marketing. |
| Premio COP 5 millones, convocatoria §4 | Distinto del fondo simulado COP 5.000 millones. No sumarlo como financiación de adaptación. |
| Horario 08:00–16:00, convocatoria | Logística atribuida a investigación previa, no hora de entrega del caso. El usuario exige 14:00 de Bogotá. |
| Obligaciones legales, inversión del 1% y referencias imprecisas, notas; cronología de figura 2 | No se corroboraron aquí ni se convierten en mecanismo financiero o deber exigible. Esta revisión no da asesoría legal. |

La convocatoria **no contiene una base legal formal de la solución ni enumera obligaciones ambientales verificadas**. Sus expectativas no corroboradas en el enunciado son sobre todo logística, premios, selección/alianzas y producto completo. Los comentarios jurídicos están en las notas y la cronología de la presentación. Se conservan como contexto atribuido, sin usarlos como reglas, viabilidad jurídica demostrada o presupuesto disponible.

## 7. Ruta oficial de ocho horas y plazo del usuario

La ruta de página 6 es relativa al inicio del ejercicio, no autorización para reiniciar ocho horas desde la preparación actual:

| Tiempo oficial | Actividad |
| --- | --- |
| 0:00–0:20 | Briefing y reglas. |
| 0:20–1:30 | Diagnóstico focalizado, hasta cinco hallazgos. |
| 1:30–2:30 | Mapa de decisión y faltantes. |
| 2:30–4:30 | Portafolio y máximo de intervenciones posible. |
| 4:30–5:15 | Estrés SSP3-7.0/2060. |
| 5:15–6:00 | Riesgo residual y brechas. |
| 6:00–7:00 | Indicadores MEA y seguimiento. |
| 7:00–8:00 | Tres productos y pitch. |

A las 09:17:28 de Bogotá quedaban aproximadamente **4 h 42 min** hasta las 14:00. La secuencia propuesta en plan_ejecucion.md empieza a las 10:00 y reserva revisión/ensayo/cierre hasta las 14:00; es compatible si se usa lo ya leído, se solapan frentes y se limita la integración. Si comienza más tarde, se recorta interfaz y automatización, manteniendo presupuesto, alternativas, estrés, rigor y seguimiento. El plan no debe presentar sus franjas como operaciones ya ejecutadas.

## 8. Juicio final sobre el plan y catálogo

El plan leído recoge los tres productos, los ocho criterios, el máximo de intervenciones, indivisibilidad, horizonte de estrés, alternativa de tabla/láminas y cierre antes de las 14:00. Distingue pruebas previas de las aplicaciones de una respuesta ambiental probada, deja SpecOrganon opcional y no inventa eficacias para forzar al motor. No encontré errores de precios, conversiones o número de filas en el CSV.

Dos límites permanecen: **un escenario futuro incompleto no permite declarar cumplida la prueba de robustez completa**, y **la regla de repetición de unidades condiciona cualquier máximo matemático de intervenciones**. El plan ya los registra como faltantes. Las discrepancias de denominadores de las figuras deben conservarse como observaciones pendientes; no afectan los 15 costos ni autorizan reconstruir el estudio.

La selección Presupuesto Vivo principal y Territorio Vivo secundario es coherente con las salidas requeridas. Esta revisión documenta requisitos y límites; no declara cartera óptima, funcionalidades ejecutadas para el caso, aprobación de fases o reducción ambiental observada.
