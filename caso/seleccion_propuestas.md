# Selección para el reto de adaptación de CORNARE

**Principal: Presupuesto Vivo. Secundario: Territorio Vivo.** Presupuesto Vivo será el núcleo de decisión y Territorio Vivo el soporte territorial, de evidencia y seguimiento. La selección aprovecha dos iniciativas existentes y las organiza alrededor de los tres productos del reto. Fecha de revisión: 7 de octubre de 2026.

Es una elección técnica delegada por el usuario. Las intervenciones ambientales concretas, su localización y sus beneficios todavía deben contrastarse con las fichas e indicadores oficiales; este informe no declara un portafolio ambiental óptimo ni una reducción de vulnerabilidad ya demostrada.

## 1. Por qué estas dos

| Propuesta | Encaje con el encargo | Avance aprovechable | Brecha decisiva | Prioridad |
| --- | --- | --- | --- | --- |
| [Presupuesto Vivo](https://presupuesto-vivo-chi.vercel.app) | Combinación de medidas, presupuesto, escenarios y justificación de alternativas: producto 2. | El cliente publicado contiene importación de datos, intervenciones, restricciones, comparación de portafolios, decisiones y exportaciones. También contiene formulaciones de optimización y minimización del arrepentimiento máximo. | Las APIs de proyectos requieren sesión. Falta ejecutar importación, cálculo, persistencia y exportación con el caso oficial y verificar el motor real. | **1. Núcleo de la decisión.** |
| [Territorio Vivo](https://territorio-vivo-five.vercel.app/documentacion) | Qué proteger, dónde, procedencia, vacíos y seguimiento: productos 1 y 3. | Documentación pública y catálogo CORNARE accesible por API, con fuentes, fechas, hashes y límites. Declara 6 conjuntos, 384 entidades y 72 documentos. | Su caso cartográfico sigue siendo provisional: Granada–Rionegro, con el reto oficial pendiente. Debe pasar a Rionegro–Guarne–Marinilla y enlazar los indicadores MEA. | **2. Evidencia territorial y seguimiento.** |
| [Efecto Dominó](https://efecto-domino.vercel.app/documentacion) | Ayuda a registrar dependencias y analizar propagación de interrupciones. | Endpoints de salud responden y describen PostgreSQL/PostGIS; existe un manifiesto público de fuentes y documentación de grafos y simulaciones. | El reto declara que la matriz de dependencias no existe todavía. Una simulación de interrupciones de 168 horas no sustituye el escenario climático SSP3-7.0/2060. Requeriría datos adicionales para sustentar el resultado central. | Reserva para caracterizar dependencias después. |
| [Lote Resiliente](https://lote-resiliente.vercel.app/documentacion) | Útil para una localización predial y alternativas de diseño. | Salud pública responde; documentación de geometrías, documentos, alternativas, versiones y reportes. | Su escala de lote no resuelve por sí sola la asignación regional de COP 5.000 millones entre medidas MEA. | Reserva si una intervención exige detalle predial. |

La complementariedad es la razón de elegir la pareja: **Territorio Vivo documenta el problema y los límites de la evidencia; Presupuesto Vivo compara cómo emplear el recurso; Territorio Vivo conserva lo que debe medirse después.** Efecto Dominó y Lote Resiliente pueden aportar módulos más adelante, sin convertirse ahora en proyectos adicionales.

## 2. Qué quedó comprobado y qué falta

La revisión combinó los documentos suministrados, respuestas HTTP públicas, documentación y lectura del cliente publicado. Dos agentes revisaron por separado las parejas de aplicaciones. No se inició sesión ni se ejecutaron flujos privados; tampoco se verificó la interfaz completa en un navegador.

El [registro HTTP local](../insumos/revision/propuestas-http.json) conserva URL, fecha, estado y las respuestas JSON consultadas. En particular:

- Presupuesto Vivo devuelve `401 UNAUTHENTICATED` en `/api/auth/me` y `/api/projects`: que cargue una página pública no acredita acceso a proyectos ni cálculo operativo.
- Territorio Vivo responde `200` en `/api/cornare`; el propio catálogo identifica Granada y Rionegro como caso provisional. La cantidad de entidades y documentos es metadato del servicio, no una validación independiente de cada registro.
- Efecto Dominó responde `200` en `/api/v1/health` y `/api/health`; Lote Resiliente en `/api/health`. Un resultado de salud no verifica importación, simulación, exportación o autorización de usuarios.

Los módulos descritos en guías o presentes en el cliente se consideran **capacidad candidata para reutilizar**, hasta probarlos con este caso. Tras habilitar el acceso SSH facilitado por el usuario, se localizaron los cuatro repositorios en `ws-steven`; los hashes, rutas y documentos consultados están en el [inventario remoto](../insumos/revision/remoto/inventario.json).

Presupuesto Vivo está en `/workspace/PresupuestoVivo`. Territorio Vivo está en `/workspace/EfectoDomio`: el nombre de la carpeta y de su sesión no coincide con el producto. Efecto Dominó está en `/workspace/ContinuidadInfraestructuraServicios` y Lote Resiliente en `/workspace/lote-resiliente`. Los cuatro árboles estaban limpios al consultar su estado.

La [evidencia previa de Presupuesto Vivo](../insumos/revision/remoto/presupuesto-vivo/evidencia-pruebas__cornare-mvp__verificacion.json) registra 464 pruebas aprobadas y recorridos de escritorio/móvil con persistencia y exportaciones. La [evidencia previa de Territorio Vivo](../insumos/revision/remoto/territorio-vivo/docs__evidence__2026-10-07-cornare__README.md) registra 281 pruebas y verificación del catálogo/mapa. Se leyeron los recibos existentes; no se repitieron esas baterías en esta preparación ni acreditan todavía una respuesta al reto oficial. GitHub Actions conserva un fallo de inicio informado por los proyectos, separado de la decisión ambiental.

## 3. Reglas que deben gobernar la adaptación

El [enunciado oficial, páginas 1–8](../RETO%20CLIMATE%20WEEK%20HACKATHON.pdf) tiene prioridad sobre las notas informales cuando hay diferencias:

1. Trabajar únicamente el corredor **Rionegro–Guarne–Marinilla**. Es un corredor de decisión, no los tres municipios de mayor riesgo ni una muestra estadística de la regional.
2. Usar el fondo **simulado de COP 5.000 millones** y buscar el **máximo de intervenciones posibles** con el recurso, justificando su contribución a reducir vulnerabilidad. Los costos de referencia por unidad funcional son indivisibles salvo instrucción expresa de CORNARE; no son presupuestos contractuales. No es obligatorio agotar el fondo.
3. El plan regional menciona 17 medidas, pero la tabla del ejercicio presenta **15 medidas con precio**. Usar esa tabla para la restricción económica. Por ejemplo, PSA vale COP 1.200 millones y su unidad cubre tres años: el primer año de ejecución no autoriza dividir ese costo.
4. Partir del escenario de referencia y el horizonte intermedio suministrados; contrastar la decisión con **SSP3-7.0 hacia 2060**. No generar otro modelo climático.
5. Diferenciar amenaza, sensibilidad, capacidad adaptativa, vulnerabilidad y riesgo. No convertir gasto, reducción de emisiones, asistentes a talleres o puntajes del algoritmo en porcentajes de reducción de vulnerabilidad.
6. Las dependencias empresariales faltantes deben figurar como datos por levantar. La cercanía en un mapa no prueba una dependencia funcional.
7. La presentación institucional fija la meta de **disminuir 30% los indicadores de vulnerabilidad de cada regional a 2035**: [presentación CORNARE, página 19](../insumos/cornare/HACKATHON%20RETO%20CORNARE.pdf). No equivale a demostrar ese resultado durante el primer año.
8. El reto pide tres productos y un pitch de máximo siete minutos; excluye construir una plataforma completa. El trabajo inmediato consiste en configurar y comprobar lo existente para producir una decisión defendible.

## 4. Iniciativas ambientales que ya permiten partir con ventaja

Además de las aplicaciones, el paquete contiene actividades previas del territorio. Se filtraron 28 registros del corredor del [reporte municipal de adaptación](../insumos/cornare/REPORTE%20MEDIDAS%20DE%20ADAPTACI%C3%93N%20MUNICIPIOS.xlsx). La hoja es `Reporte_Adaptacion_General_2026`; los localizadores siguientes son filas del archivo original.

| Iniciativa previa | Evidencia del reporte | Cómo aprovecharla |
| --- | --- | --- |
| PSA | Rionegro 2025, fila 149: monto 820.000.000; Guarne 2025, fila 178: 142.208.685. | Identificar responsables, acuerdos y beneficiarios existentes; verificar su continuidad y relación con la unidad PSA del ejercicio. |
| Restauración | Guarne 2024, fila 204: monto 830.391.679; Rionegro 2025, fila 179: 183.169.900. | Revisar zonas intervenidas, mantenimiento y seguimiento para evitar duplicar inversión y explorar conectividad con medidas futuras. |
| Producción agroecológica | Guarne 2023, fila 241: monto 90.765.100; 2024, fila 199: 40.000.000; 2025, fila 173: 21.200.000. | Aprovechar asistencia y organizaciones existentes, comprobando alcance y resultados antes de atribuir beneficios de adaptación. |

Estos son **antecedentes reportados**, no prueba de eficacia. El encabezado de inversión no declara moneda ni año de precios; algunos nombres de indicador mencionan COP$, pero hace falta confirmar el diccionario antes de convertir o agregar. Sus valores históricos no sustituyen los precios del reto ni deben sumarse sin revisar comparabilidad. Los indicadores de gestión —beneficiarios, capacitaciones o dinero invertido— son nombres de indicador, sin resultados numéricos en esa columna; deben complementarse con los de sensibilidad y capacidad adaptativa del MEA. El filtro muestra muy pocos registros de Marinilla; eso es una limitación del paquete, no evidencia de ausencia de iniciativas en el municipio.

El [extracto del corredor](../insumos/texto/adaptacion_corredor.json) facilita la consulta y el [inventario](../insumos/inventario.json) conserva procedencia y hashes de los archivos extraídos. Los documentos originales permanecen sin cambios.

## 5. Trabajo concreto para avanzar

| Orden | Trabajo | Base que se reutiliza | Resultado y comprobación |
| --- | --- | --- | --- |
| 1 | Consolidar fichas del corredor, catálogo de las 15 medidas con precio, escenarios e indicadores oficiales. Separar dato institucional, inferencia, supuesto y faltante. | Insumos ya extraídos; catálogo y procedencia de Territorio Vivo. | Tabla de entrada con municipio, dimensión, indicador, año/escenario, fuente/localizador y calidad. Confirmar cobertura de los tres municipios; conservar ausencias explícitas. |
| 2 | Preparar el tablero de decisión con hasta cinco hallazgos y las localizaciones sustentadas. | Mapas y expediente de Territorio Vivo. | **Producto 1.** Cada hallazgo enlaza fuente; capas antiguas conservan su fecha y no se presentan como alertas actuales. Reemplazar el caso provisional Granada–Rionegro. |
| 3 | Configurar costos enteros, restricciones, criterios y escenarios; buscar el máximo de intervenciones posibles y comparar alternativas viables, justificando las descartadas. | Intervenciones y comparación de Presupuesto Vivo. | **Producto 2.** Total ≤ COP 5.000 millones; sin fraccionar unidades. Explicitar qué cuenta como intervención, cuántas financia cada alternativa y qué impide aumentar ese número; la minimización del arrepentimiento no garantiza ese objetivo por sí sola. Por intervención: localización, problema, medida MEA, costo, actores, secuencia y beneficio esperado con su incertidumbre. No introducir eficacias numéricas sin evidencia suficiente; si faltan, comparar mecanismos y beneficios esperados cualitativamente. |
| 4 | Contrastar el mismo portafolio con SSP3-7.0/2060 y documentar qué se conserva, cambia o reemplaza. | Escenarios y comparación de Presupuesto Vivo. | Evidencia reproducible de la revisión. Si faltan coeficientes para una optimización cuantitativa, usar una comparación razonada y declararlo; no inventar resultados del motor. |
| 5 | Registrar riesgo residual, dependencias que podrían cambiar la decisión y ficha mínima de seguimiento. | Evidencia y seguimiento de Territorio Vivo; conceptos útiles de Efecto Dominó. | **Producto 3.** Indicador MEA, línea base, unidad, fuente, responsable, frecuencia y mecanismo esperado sobre sensibilidad/capacidad adaptativa. Las líneas base ausentes quedan pendientes. |
| 6 | Comprobar el recorrido de los datos a los tres productos y cerrar el pitch. | Exportaciones existentes que superen la prueba. | Importar → comparar → guardar → recuperar → exportar con sesión autorizada. Revisar coherencia entre pantalla, cálculo y exportación; pitch ≤ 7 minutos y anexo metodológico opcional ≤ 2 páginas. |

Puede comenzarse con una hoja de cálculo y láminas mientras se obtiene acceso al código y se prueban los módulos privados. No hace falta fusionar los repositorios ni desarrollar autenticación, canales comunitarios o un simulador nuevo para cerrar el reto.

## 6. Criterios para declarar lista la propuesta

- Los tres productos utilizan Rionegro, Guarne y Marinilla y fuentes trazables; no arrastran el caso provisional de la aplicación.
- El presupuesto se puede reproducir con la tabla oficial, mantiene unidades indivisibles y no cuenta dos veces una intervención.
- Se documenta la búsqueda del máximo de intervenciones posibles, con conteos y restricciones reproducibles; cada intervención tiene pertinencia ambiental sustentada.
- Existe comparación entre alternativas y una revisión explícita frente al escenario de estrés.
- Cada medida se vincula con sensibilidad o capacidad adaptativa y reconoce beneficio esperado, supuestos y riesgo residual.
- Las dependencias no demostradas y los datos faltantes se ven en la entrega.
- Un indicador de gestión no se presenta como mejora ambiental observada. La meta a 2035 se distingue de los hitos del primer año.
- Las funciones de las aplicaciones usadas en la demostración tienen prueba real; las demás se presentan como pendientes.

## 7. Estado metodológico

El toolkit SpecOrganon está instalado y el caso local está inicializado en `caso/organon.json`. El expediente registra fuentes, alternativas, elección delegada y requisitos como trabajo preparatorio. El [informe generado](informe_metodo.md) muestra las compuertas pendientes: no se han inventado revisiones, aprobaciones personales del usuario ni validación ambiental de campo.

**Siguiente paso, después de la deliberación del equipo:** consolidar las entradas oficiales del corredor y comprobar Presupuesto Vivo con ellas; adaptar la cobertura territorial de Territorio Vivo, con un escritor por archivo. La recomendación de las dos iniciativas ya está resuelta; la demostración integrada y el portafolio físico siguen pendientes de ese trabajo. SpecOrganon se usará únicamente como apoyo ligero de trazabilidad cuando no retrase la entrega, sin convertir sus compuertas en una condición para terminar la hackathon.
