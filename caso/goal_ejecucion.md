# Goal activa — decisión de adaptación CORNARE

**Estado: ACTIVA en esta conversación de ChatGPT Desktop desde la reanudación expresa del 07/10/2026 a las 11:19 de Bogotá.** El GO inicial se recibió a las 10:34; la pausa de migración posterior queda como antecedente histórico. No se reanudan goals históricas. La ejecución ambiental y los cambios mínimos aislados están autorizados. Preparación inicial registrada: 07/10/2026 10:13:24 Bogotá. Paquete objetivo: **13:50**; paquete listo para el usuario **antes de las 14:00 del 7 de octubre de 2026**, Bogotá. El usuario estudiará de **14:00 a 16:00** y presentará después.

Continuidad vigente: [README](https://github.com/stevenvo780/ambientalhakaton/blob/dev/README.md) y [registro de ejecución](https://github.com/stevenvo780/ambientalhakaton/blob/dev/ambiente/estado_orquestacion.json). El [handoff](https://github.com/stevenvo780/ambientalhakaton/blob/dev/CONTINUIDAD_CHATGPT_DESKTOP.md) conserva el corte anterior a la reanudación; no modifica los criterios de aceptación siguientes.

Página canónica del equipo: [Hackathon ambiental](https://hackathon-ambiental.stevenvallejo.com). El repositorio de trabajo permanece en la rama `dev`; la publicación Git corresponde al único publicador delegado, autorizado nuevamente con el GO.

**Objetivo activo:** resolver la pregunta ambiental del corredor Rionegro–Guarne–Marinilla y entregar una decisión de adaptación defendible, reproducible y monitoreable: P1, P2, P3 y pitch, aprovechando **Presupuesto Vivo como principal** y **Territorio Vivo como apoyo de evidencia territorial/seguimiento**. El éxito corresponde a la decisión y sus razones, no a completar un software.

Base de trabajo: [propuesta principal](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/propuesta_principal.md), [75 requisitos](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/matriz_requisitos_completa.md), [catálogo](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/catalogo_costos_reto.csv), [comparación financiera](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/comparacion_financiera.json) y [script reproducible](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/comparar_presupuesto.py). Versión preparatoria central: `a4af4e87ec7d40d55a79d026b8401ee4b48114eeda2d645ce505900c318b3767`; los cambios de publicación se registran por commit. Los originales oficiales gobiernan; el documento central no los sustituye.

Estado documental comprobado: el PDF final único de dos páginas está entregado con decisión y metodología; el ensayo humano sigue pendiente durante el estudio. Las revisiones y las vistas de exposición se integran por versiones; la goal permanece activa y no se declara eficacia ambiental.

## Aclaración de entrega del usuario

Aclaración recibida el 7 de octubre, registrada en esta continuidad: el paquete de estudio se entrega al usuario antes de las 14:00, con buffer interno de 13:50. El ensayo humano con reloj se realizará durante el estudio de 14:00 a 16:00; su recibo queda pendiente y se añadirá antes de la presentación. Su ausencia no bloquea la entrega del paquete para estudiar. Ariadna, ingeniera ambiental, lidera la presentación; Brahyam, ingeniero ambiental, y Steven, desarrollador, apoyan y responden preguntas. El límite es **siete minutos en total entre los tres**. La entrega documental final es **un PDF obligatorio de máximo dos páginas en total**, que incluye el anexo metodológico de cómo se llegó a la respuesta.

## Recursos y escritores

Root **solo orquesta**: asigna, recibe evidencia, resuelve discrepancias y decide la entrega. Los ejecutores leen, calculan, redactan, prueban y publican. Máximo **cuatro ejecutores nativos más root**; las sesiones externas también consumen cuota y no crean licencias adicionales.

| Frente | Ejecutor y salida exclusiva durante ejecución |
|---|---|
| Datos/fichas oficiales, escenarios y MEA | Nativo DA: `caso/entrega/evidencia_y_vacios.md`; registro de datos/fuentes. |
| P1: diagnóstico, ubicación y cinco hallazgos | Nativo P1: `caso/entrega/producto_1.md`. |
| P2: cartera, cálculo y alternativas | Nativo P2: `caso/entrega/producto_2.md`; único escritor de cálculos que se le asignen. |
| P3: residual y seguimiento | Nativo de entorno/P3: `entregables/p3_riesgo_residual.md`, `p3_riesgo_residual.csv` y `variables_seguimiento.csv`; no sobrescribe P1/P2. |
| Pitch/anexo e integración editorial | Editor/publicador: `entregables/PITCH_BORRADOR.md` y `ANEXO_BORRADOR.md`; escritor exclusivo, integra por referencias. |
| Adaptación/cálculo de Presupuesto Vivo | Codex del tmux remoto EXISTENTE `PresupuestoVivo`; solo cambios indispensables expresamente asignados, en su worktree/ramas de tarea. |
| Territorio, procedencia y MEA de apoyo | Codex remoto EXISTENTE `EfectoDomio` = Territorio Vivo; worktree independiente. |
| Crítica independiente | Claude y Muse **locales**: evaluación, FAQ/guía acotadas según asignación; cada uno escribe solo su archivo, con versión y objeciones. |
| Apoyo acotado de cobertura/consistencia | GPT-6-Luna: QA local respondida en 39,3 s según coordinación; no acredita runtime remoto ni añade un quinto slot nativo. |
| Revisión adicional MEA/escenarios | Gemini **local** mediante el puente verificado: lectura de fuentes congeladas y revisión del resultado; los fallos de tiempo no acreditan problemas de autenticación. |
| Publicación y estado | Un único publicador delegado realiza Git en dev; los redactores entregan lotes/SHA y el dueño web actualiza estado tras su publicación. |

Antes de nuevo workflow/proveedor: consultar cuotas actuales y catálogo de la ruta, declarar máquina/modelo/motivo. Una lectura de otra máquina no confirma disponibilidad local. Conservar cuentas/sesiones; sin failover automático, sondeo Codex deshabilitado, Scite o servicios de pago nuevos. Cada prompt es autocontenido y fija entradas, restricciones, resultado y **un escritor por archivo**. No delegar de una máquina a otra y de vuelta. No usar las sesiones remotas nuevas de preparación para el trabajo.

## Ejecución y horas

Cronograma de ejecución actualizado con el GO real de las 10:34. Mantiene 13:50/14:00 y cuatro frentes en paralelo; si una fase se demora, el ejecutor de planificación recalcula desde la hora real. Primero se recorta UI y trabajo accesorio, nunca se inventan datos ni se eliminan validaciones sustantivas.

| Fase | Inicio–fin Bogotá | Salida/condición |
|---|---|---|
| GO recibido y asignaciones | 10:34–10:43 | Goal activa; root asigna y ejecutores reciben alcance/archivo exclusivo. |
| DA: fichas, escenarios y vacíos | 10:34–11:14 | Fuentes oficiales y SSP/MEA prioritarios; primera declaración de faltantes antes de 11:15. |
| P1: diagnóstico territorial | 10:43–11:42 | Hasta cinco hallazgos; cobertura de municipios y siete dimensiones. |
| P2: selección y comparación | 10:43–12:18 | Elegibilidad, unidades enteras, conteo, presupuesto y alternativas. |
| P3: residual y seguimiento | 10:43–12:18 | Vacíos que cambian decisión, indicadores/línea base y revisión. |
| Contraste de escenarios | 11:28–12:45 | Referencia/intermedio/SSP3-7.0–2060; decisiones y límites reales. |
| Integración y revisión independiente | 12:41–13:30 | 75 IDs con evidencia; Claude/Muse y revisión delegada. |
| Pitch, anexo y paquete de estudio | 13:30–13:50 | Guion preparado; ensayo durante estudio 14:00–16:00; PDF final obligatorio ≤ 2 páginas en total, incluido el anexo metodológico; versiones coherentes. |
| Entrega al usuario | 13:50–antes de 14:00 | Paquete listo para estudiar, limitaciones y ensayo humano aún pendiente. |

Prioridad: **evidencia y diagnóstico → cartera/presupuesto → residual/seguimiento → contraste y defensa**. DA, P1, P2 y P3 avanzan en paralelo; comunican entradas pendientes sin rellenarlas. SpecOrganon se usa solo si ayuda a trazabilidad sin retrasar: no obliga a recorrer/aprobar automáticamente sus fases. Los cambios de interfaz son accesorios; el formato de tablas/láminas está permitido.

## Aceptación real y límites

1. **P1:** hasta cinco hallazgos sustentados en el corredor, cubriendo decisiones/vacíos de Biodiversidad, Recurso hídrico, Seguridad alimentaria, Hábitat, Infraestructura, Salud y Riesgo de desastres. Conservar fuente/localizador, componente A/S/CA/V/R, unidad, fecha y escenario. No elegir automáticamente índices máximos ni recalcular el estudio.
2. **P2:** costo íntegro ≤ COP5.000 millones, saldo y unidades indivisibles trazables. PSA mantiene unidad de tres años; el gasto histórico no reemplaza precios. Confirmar repetición/cupos y elegibilidad problema–municipio/sitio–actor–mecanismo–solapamiento antes de certificar máximo. Sin regla confirmada, el máximo sigue condicional.
3. Comparar las **siete carteras de seis unidades** financieramente factibles bajo una unidad/fila y alternativas críticas A–F, incluidos sacrificios de biodiversidad, agua, infraestructura/alertas y salud. La lista regional cuesta COP6.500 millones. Conteo máximo y dimensiones del catálogo no prueban pertinencia, cobertura ni eficacia. No usar el minimax del software como certificado del máximo de intervenciones.
4. Cada intervención seleccionada incluye medida/ficha MEA por confirmar, factor S/CA, municipio/sitio sustentado o provisional, costo, actores propuestos/validados, secuencia y beneficio esperado con nivel de evidencia. No inventar beneficios, probabilidades, efectos causales, compromisos ni pesos del jurado.
5. Contrastar **referencia, futuro intermedio suministrado y SSP3-7.0/2060**; conservar fuentes y decidir mantener/modificar/reemplazar por medida. DA busca faltantes en fuentes oficiales con tiempo acotado y registra ruta, resultado y dato solicitado. Si falta matriz/escenario obligatorio, entregar contraste parcial claramente marcado: **no cerrar la robustez completa ni la goal como cumplida**.
6. **P3:** riesgo residual y sacrificios explícitos, dependencias deliberadamente ausentes como preguntas de levantamiento, variables mínimas/fuente/responsable/decisión afectada. No inferir aristas empresariales de proximidad. MEA con indicador, definición/fórmula, unidad, cobertura, línea base/fecha o ausencia, custodio/frecuencia y regla de reajuste; actividad/inversión no equivale a impacto. La meta del 30% es regional a 2035, no del primer año.
7. P1–P3 responden las nueve preguntas oficiales; pitch preparado para ≤ 7 min totales y PDF final obligatorio de máximo dos páginas en total, incluyendo el anexo metodológico; el ensayo humano se verifica durante el estudio y antes de la presentación. Otro integrante reproduce cifras, conteo, fuentes y razones. La matriz conserva **R22+Q9+C8+X6+P3+F3+I16+H8=75 IDs**, cada uno con estado y evidencia/localizador; “condicional”/“pendiente” no se transforma en cumplido por una promesa.

**Done:** archivos entregados, razonamiento/evidencia verificables, cálculo reproducible, aceptación de los requisitos aplicables y límites visibles. Las pruebas de software/DB acreditan preparación técnica, no productos ambientales. No declarar eficacia observada, cartera ambiental óptima o robustez completa sin los datos necesarios. Si persiste una obligación científica sin evidencia, publicar la limitación y el resultado parcial sin falsear cumplimiento.

## Publicar avances sin exponer operación privada

Cada escritor termina su artefacto y entrega lista exacta, SHA y comprobaciones. **El publicador delegado es el único escritor Git**, nuevamente autorizado con el GO: hace commit/push acotado en `dev` por artefacto terminado, conserva los commits del usuario y comunica HEAD/archivos. El dueño web actualiza JSON de progreso y devuelve ese lote al mismo publicador. Los otros agentes no hacen Git/API mutations. El despliegue automático configurado conserva su alcance autorizado. Sin cambios simultáneos al archivo ni watchers globales. Publicar solo whitelist revisada: sin credenciales, cuentas, IP privada, rutas personales, `.env`, TUI, respaldos, empresas identificables o insumos con permisos pendientes. El [estado público](https://github.com/stevenvo780/ambientalhakaton/blob/dev/ambiente/estado_orquestacion.json) distingue preparación, GO, ejecución y entregas. La goal autoritativa está activa en la conversación principal, sin token_budget explícito; esta instancia ejecutora mantiene el mismo objetivo delegado. No se crean procesos ni escritores duplicados. El documento no declara el resultado cumplido.
