# Plan de ejecución — decisión de adaptación CORNARE

**Principal: Presupuesto Vivo. Secundario: Territorio Vivo.** Presentaremos una decisión sobre qué proteger, dónde intervenir, qué financiar primero y qué queda pendiente en Rionegro–Guarne–Marinilla. Presupuesto Vivo aporta la lógica de cartera y recursos; Territorio Vivo aporta evidencia territorial y seguimiento. El éxito se mide por los tres productos del enunciado y su defensa, no por desarrollar software.

Este es el plan para deliberar con el equipo. El documento para leer y defender es la [propuesta principal de cumplimiento y orquestación](propuesta_principal.md): explica los ocho criterios, las nueve preguntas, los tres productos, las brechas y los gráficos. Las evaluaciones independientes están autorizadas y ya se solicitaron a Claude y Muse; Gemini local espera autenticación. La goal de entrega y los cambios funcionales se activarán después de la deliberación. El límite solicitado es **antes de las 14:00 de Bogotá, 7 de octubre de 2026**, con paquete congelado a las 13:50.

**Codex principal es exclusivamente el orquestador general.** Solo instancia/delega, controla las instancias, recibe evidencias, decide la integración conceptual y entrega al usuario. Todo trabajo material —lectura, escritura, cálculos, pruebas, preparación de entorno y cambios— lo ejecutan subagentes o las instancias asignadas. Un redactor delegado integra los documentos; un solo escritor por archivo. El orquestador permanece disponible para mantener el paralelismo y resolver bloqueos.

## Lectura y jerarquía de fuentes

1. **Enunciado oficial del reto CORNARE:** gobierna territorio, fondo, costos, escenarios, entregables y criterios. Los dos PDFs del enunciado contienen el mismo texto, aunque sus bytes difieren.
2. **Presentación CORNARE en PDF y PPTX:** contexto, análisis existente, priorización regional, funcionamiento del MEA y meta del 30% a 2035. Se revisan las figuras, no solo el texto extraíble.
3. **Ocho hojas Excel del ZIP:** antecedentes municipales, regionales y sectoriales. Una es copia idéntica: 858 filas reportadas, 800 al excluirla. No constituyen por sí solas fichas completas de vulnerabilidad futura ni coeficientes de eficacia de las medidas.
4. **explicacion.txt:** contexto de la jornada, iniciativas previas y horizonte operativo mencionado de un año; se contrasta con el enunciado.
5. **Convocatoria y hallazgos previos:** preparación anterior. Su criterio interno de construir un producto completo queda superado por el encargo actual y la exclusión oficial de construir una plataforma.
6. **Repositorios y evidencia de las cuatro iniciativas:** sirven para elegir qué reutilizar; sus pruebas previas no demuestran la solución del reto actual.

La cobertura y los localizadores por archivo están en [revisión documental](revision_documentos.md) y [revisión de todas las hojas Excel](revision_excel.md). La [matriz completa](matriz_requisitos_completa.md) controla los 75 IDs de reglas, preguntas, criterios, exclusiones, productos, formato, insumos y condiciones. El [inventario del ZIP](../insumos/inventario.json) conserva hashes; los 11 archivos extraídos se contrastaron con sus miembros originales. Los originales se conservaron.

## Elección de proyectos

| Proyecto | Papel en esta hackathon | Razón |
| --- | --- | --- |
| **Presupuesto Vivo** | Principal: cartera, restricciones, alternativas y explicación de la decisión. | Responde directamente a cómo asignar COP 5.000 millones cuando no se puede actuar sobre todo. Su repositorio y evidencia previa ya existen. |
| **Territorio Vivo** | Secundario: tablero territorial, procedencia, faltantes y seguimiento. | Completa los productos 1 y 3. Debe sustituir su caso provisional Granada–Rionegro por el corredor oficial. |
| Efecto Dominó | Reserva para registrar dependencias que sería necesario caracterizar. | La matriz empresarial falta deliberadamente; no podemos usarla como si estuviera medida. |
| Lote Resiliente | Reserva para detalle predial si una localización concreta lo requiere. | Su escala no responde directamente a la combinación regional de inversiones. |

La [comparación completa](seleccion_propuestas.md) recoge avances y límites de verificación. No fusionaremos cuatro plataformas ni reanudaremos sus goals antiguas de desarrollo. Si una función requiere trabajo excesivo, su salida se prepara en tabla o lámina, formato permitido por el reto.

## Qué vamos a producir

| Entregable | Contenido obligatorio | Comprobación para cerrar |
| --- | --- | --- |
| **P1 — Tablero de decisión territorial** | Hasta cinco hallazgos; qué proteger primero y por qué; municipio/localización; elementos críticos; información faltante. | Cada hallazgo tiene fuente y localizador. Diferenciar amenaza, sensibilidad, capacidad adaptativa, vulnerabilidad y riesgo; marcar relaciones no demostradas. |
| **P2 — Portafolio priorizado** | Máximo de intervenciones posibles con el recurso. Por intervención: localización, problema, medida MEA, costo, actores, secuencia, beneficio esperado y cambio después del estrés. | Total ≤ COP 5.000 millones, costos completos e indivisibles, conteos explícitos y comparación de alternativas. No contar dos veces una unidad ni beneficios superpuestos. |
| **P3 — Riesgo residual y seguimiento** | Qué queda sin atender; dependencias/datos que podrían cambiar la decisión; variables mínimas e indicadores MEA. | Indicador, unidad, línea base o ausencia explícita, fuente, responsable y frecuencia; explicar qué sensibilidad disminuye o qué capacidad aumenta. |
| **Pitch** | Decisión, razones, presupuesto, escenario de estrés, sacrificios y seguimiento. | Máximo siete minutos; anexo metodológico opcional de máximo dos páginas. |

El [catálogo transcrito de costos](catalogo_costos_reto.csv) recoge las **15 medidas con precio** de la página 5. Sus IDs son locales y no se presentan como códigos oficiales MEA. PSA conserva COP 1.200 millones para su unidad de tres años: el primer año no permite prorratear el precio.

## Método para decidir

1. Consolidar las fichas de los tres municipios y las siete dimensiones con año, escenario, indicador y fuente. Contrastar eventos históricos, capas de agua/riesgo, POMCA y determinantes disponibles para validar localización, recurrencia y restricciones. Mantener los vacíos y resolución disponibles explícitos. No recalcular el estudio de riesgo.
2. Seleccionar hasta cinco hallazgos que expliquen las prioridades y los conflictos de asignación. Evaluar biodiversidad, agua y las vulnerabilidades relevantes restantes; no escoger automáticamente el municipio de mayor índice.
3. Vincular medidas oficiales con el factor de sensibilidad o capacidad adaptativa que pretenden cambiar y con una localización defendible. Verificar quién podría ejecutarlas y en qué secuencia.
4. Construir alternativas sustanciales de cartera. Comparar costos, cantidad de intervenciones, pertinencia ambiental, viabilidad, complementariedades, riesgos residuales e incertidumbre; justificar las descartadas. La minimización del arrepentimiento de Presupuesto Vivo no garantiza por sí sola maximizar el número de intervenciones.
5. Aplicar escenario de referencia e intermedio suministrados y contrastar la cartera frente a **SSP3-7.0/2060**. Explicar qué se conserva, modifica o reemplaza. No crear otro modelo climático ni probabilidades de escenario sin evidencia.
6. Definir seguimiento MEA y los datos cuyo levantamiento podría cambiar la recomendación. Fijar cuándo medir, cómo comparar con la línea base y qué evidencia obliga a revisar cartera/indicador; sin línea base no calcular mejora porcentual. Revisar el resultado con una evaluación independiente y preparar el pitch.

**Límite cuantitativo:** las hojas reportan acciones, inversiones, emisiones e intensidades; no proporcionan una eficacia causal completa de adaptación. El motor de Presupuesto Vivo exige datos de beneficio/efectividad y puede bloquear una cartera si faltan. No llenaremos esos vacíos con porcentajes inventados para obtener una recomendación. Si no aparecen coeficientes institucionales suficientes, la comparación será explícitamente razonada, con costos reproducibles y mecanismos esperados, sin anunciar un óptimo ambiental ni una reducción ya probada.

La meta institucional es **reducir 30% los indicadores de vulnerabilidad a 2035**. El plan inicial puede contribuir a ella; no prometemos acreditarla en un año ni la confundimos con invertir el presupuesto.

Como punto de partida institucional, la lámina 16 prioriza para Valles eficiencia hídrica, PSA, verdes urbanos, SUDS, suelos y conocimiento del riesgo. Una unidad de cada una suma **COP 6.500 millones** con los precios del reto, frente al fondo de COP 5.000 millones: existe un conflicto real que exige comparar y elegir. Esa lista es un antecedente, no una cartera ya aprobada; debe contrastarse con los perfiles del corredor y las restantes medidas elegibles.

## Aprovechar iniciativas adelantadas

Los reportes contienen PSA y restauración en Rionegro; PSA, restauración y agroecología en Guarne; también intervenciones de corrientes y otros antecedentes. Primero verificaremos responsables, ubicación, continuidad, mantenimiento y resultados para explorar complementariedades y evitar duplicación. Los valores históricos no reemplazan los costos de referencia del ejercicio.

La lectura detectó una copia idéntica, un registro municipal duplicado, inversiones vacías y categorías de prueba. El resumen de mitigación agrega los mismos gastos del detalle: sumarlos produciría doble conteo. Sus unidades y denominadores pendientes quedan en la revisión de Excel; esos defectos no se trasladan al catálogo de costos oficial.

La baja cobertura de Marinilla en el Excel es una brecha del paquete, no ausencia demostrada de iniciativas. Los archivos de mitigación pueden aportar contexto o co-beneficios; una reducción de GEI no equivale a menor vulnerabilidad. Las intensidades sectoriales requieren unidad, denominador y calidad antes de usarse; tampoco prueban dependencias entre empresas y territorio.

## Paralelismo autorizado y ejecución posterior a deliberación

| Frente | Responsable propuesto | Trabajo acotado y salida |
| --- | --- | --- |
| Dirección y entrega final | Codex principal de este chat. | Solo orquesta: asigna, recibe evidencias, decide y comunica; no ejecuta trabajo material. |
| Redacción, cálculo y ensamblado documental | Redactor nativo delegado. | Documentos centrales y cálculo reproducible; productos/pitch se asignarán con un único escritor después de deliberar. |
| Datos oficiales y MEA | Lector nativo delegado; Gemini **Fedora** como evaluación adicional tras login. | Registro de fuentes y escenarios, fichas MEA, vacíos y condiciones de revisión. Gemini pendiente no deja el encargo sin dueño. |
| Evaluación del encaje ambiental y gobernanza | Claude local. | Revisa medidas, actores, secuencia, sensibilidad/capacidad y coherencia con las reglas; emite objeciones concretas. |
| Segunda evaluación independiente | Muse local. | Busca alternativas descartadas injustificadamente, dobles conteos, supuestos y riesgos residuales. |
| Cobertura y revisión de requisitos | Subagente nativo de requisitos. | Matriz de 75 IDs y comprobación independiente del documento/productos. |
| Infraestructura y control de instancias | Subagentes de entorno y control local. | Capturas, prompts acotados, worktrees, paquetes explícitos y verificación pública; sin copiar credenciales. |
| Cartera y funciones imprescindibles | Codex remoto, tmux **existente** `PresupuestoVivo`. | Auditoría de solo lectura en curso; cambios posteriores en su worktree separado. No reanudar goal antigua. |
| Territorio, fuentes y seguimiento | Codex remoto, tmux **existente** `EfectoDomio` = Territorio Vivo. | Pantalla observada; tarea posterior en su worktree separado. Fuentes y tres municipios oficiales. |

Cada instancia recibe documentos concretos, objetivo, límites, entregable y una carpeta exclusiva. Las cuotas consultadas sin lectura local confirmada siguen desconocidas; las solicitudes/respuestas reales de Claude/Muse se registran aparte. No se cambia de cuenta por errores. No hay dos escritores del mismo archivo ni delegación circular entre máquinas. Los resultados vuelven al orquestador y el redactor delegado incorpora las correcciones decididas. Los cuatro subagentes nativos y los harnesses trabajan sobre tareas independientes; terminar un encargo permite reasignar su ejecutor.

**SpecOrganon será opcional:** usaremos la trazabilidad ya preparada si ayuda; no exigiremos completar las nueve fases ni nuevas aprobaciones para entregar. No se inventarán revisiones o eficacia de campo.

## Secuencia y plazo

Plan objetivo si la ejecución se confirma antes de las 10:00; los frentes de evidencia y revisión se solapan:

| Hora de Bogotá | Resultado que debe quedar listo |
| --- | --- |
| Preparación actual → 10:00 | Deliberación del equipo sobre principal/secundario, reglas, brechas y plan; activar la goal después. |
| 10:00–10:35 | Entradas oficiales y tabla de medidas/costos/indicadores; lista explícita de faltantes. |
| 10:00–10:45 | P1: hasta cinco hallazgos y mapa/localización defendibles. |
| 10:35–11:40 | P2: alternativas, presupuesto, conteos y primera selección. |
| 11:15–12:00 | P3 preliminar: riesgo residual, dependencias faltantes y seguimiento. |
| 11:40–12:20 | Contraste SSP3-7.0/2060 y revisión de la cartera. |
| 12:20–13:00 | Evaluaciones independientes, correcciones y verificación de los tres productos. |
| 13:00–13:30 | Entrega coherente en tablas/láminas y exportaciones que ya funcionen. |
| 13:30–13:45 | Guion y ensayo del pitch ≤ 7:00; anexo ≤ 2 páginas si hace falta. |
| 13:45–13:50 | Revisión final; paquete congelado y recibo del ensayo. |
| Desde 13:50 y antes de 14:00 | Entrega con margen para acceso/formato; no abrir desarrollo nuevo. |

Si la deliberación termina más tarde, se recorta primero trabajo de interfaz e integración y se entregan tablas/láminas. Se conservan presupuesto, comparación, escenario de estrés, rigor y seguimiento como núcleo de la respuesta. El horario es un plan de ejecución, no evidencia de tareas ya completadas.

## Datos que necesitamos despejar al comenzar

- Fichas completas de amenaza, sensibilidad, capacidad adaptativa, vulnerabilidad y riesgo del corredor, con escenario y año; las categorías de la presentación no sustituyen todos los valores.
- Mapas y horizonte intermedio exacto suministrados por CORNARE, más SSP3-7.0/2060.
- Catálogo/fichas MEA e indicadores, línea base, fórmula, unidad y relación medida–factor.
- Localizaciones y antecedentes de ejecución suficientes para evitar duplicaciones; capacidades y responsables de implementación.
- Eficacias oficiales, si existen. Si no, beneficios esperados y límites declarados, sin porcentajes inventados.
- Regla para repetir unidades de una misma medida o intervenir varios sitios, si afecta el conteo; horizonte operativo de un año mencionado en las notas, sin alterar precios indivisibles.

Estas brechas no exigen inventar información. Los escenarios o detalles que falten quedarán documentados junto con su efecto sobre la decisión.

La [tabla de cierre de brechas de la propuesta](propuesta_principal.md#9-plan-hasta-las-1400-y-cierre-de-brechas) asigna ejecutor, archivo de salida previsto, corte horario y consecuencia de no obtener cada insumo. El orquestador recibe puntos de integración a las 10:45, 11:40, 12:20, 13:00 y 13:50; los ejecutores aportan versión, evidencia, comprobación y pendientes. Ningún requisito se cierra por tener su tarea asignada.

Si no se obtiene el material completo del escenario futuro, el contraste se presentará como parcial o condicional: no se declarará cumplida la prueba de robustez oficial completa. Las discrepancias de denominadores de la presentación —99/106 indicadores empresariales, 32/34 empresas y siete/ocho dimensiones— quedan registradas en la revisión documental y no se usarán para reconstruir índices.

## Entorno y acceso

El entorno está a cargo de un subagente: Claude y Muse trabajan en Fedora; Gemini local está instalado con login pendiente. En `ws-steven` se controlan **solo los tmux existentes** `PresupuestoVivo` y `EfectoDomio` (Territorio Vivo). Las sesiones nuevas `ambiental-agy` y `ambiental-codex-remoto` permanecen inactivas. Los worktrees aislados están preparados, con **419 unitarias aprobadas** en Presupuesto Vivo y **252 aprobadas/29 omitidas** en Territorio Vivo. Esto no verifica DB, autenticación, API, persistencia, interfaz ni recorridos completos; el estado de las pruebas adicionales de DB aislada se conserva por separado en el registro técnico. No se copiaron `.env` de producción o credenciales ni se alteraron las ramas originales. Las transferencias 51/51 y 10/10 son instantáneas históricas, no sincronización automática del documento actual.

Los worktrees están en HEAD separado. Después de deliberar, el ejecutor creará la rama de su tarea; antes de cambiar dependencias debe reemplazar los enlaces de paquetes por una instalación propia. No ejecutar `npm ci` sobre dependencias compartidas ni alterar el `node_modules` original.

Los modelos, banderas, rutas, avisos pendientes y comandos `capture-pane`/`send-keys` están en [estado del entorno](../ambiente/estado_entorno.md), con [verificación](../ambiente/verificacion_entorno.json). Para observar ahora:

```sh
tmux capture-pane -p -t ambiental-claude-local -S -200
tmux capture-pane -p -t ambiental-muse-local -S -200
tmux capture-pane -p -t ambiental-gemini-local -S -200
ssh ws-steven 'tmux capture-pane -p -t PresupuestoVivo -S -200'
ssh ws-steven 'tmux capture-pane -p -t EfectoDomio -S -200'
```

**Goal preparada, todavía sin activar:** entregar antes de las 14:00 los tres productos y el pitch que respondan a la pregunta oficial, usando Presupuesto Vivo como principal y Territorio Vivo como secundario, con alternativas, presupuesto indivisible, escenario de estrés, riesgo residual y seguimiento trazables. Se activará después de la deliberación solicitada, sin reanudar las goals antiguas de desarrollo de plataformas.
