# Goal preparada — decisión de adaptación CORNARE

**Estado: preparada, INACTIVA; requiere el GO explícito del usuario.** Este archivo no activa `create_goal`, no reanuda goals antiguas y no autoriza implementar aplicaciones. Preparación registrada: 07/10/2026 10:13:24 Bogotá. Paquete objetivo: **13:50**; entrega límite: **14:00 del 7 de octubre de 2026**, Bogotá.

**Objetivo para activar tras GO:** resolver la pregunta ambiental del corredor Rionegro–Guarne–Marinilla y entregar una decisión de adaptación defendible, reproducible y monitoreable: P1, P2, P3 y pitch, aprovechando **Presupuesto Vivo como principal** y **Territorio Vivo como apoyo de evidencia territorial/seguimiento**. El éxito corresponde a la decisión y sus razones, no a completar un software.

Base de trabajo: [propuesta principal](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/propuesta_principal.md), [75 requisitos](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/matriz_requisitos_completa.md), [catálogo](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/catalogo_costos_reto.csv), [comparación financiera](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/comparacion_financiera.json) y [script reproducible](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/comparar_presupuesto.py). Versión preparatoria central: `a4af4e87ec7d40d55a79d026b8401ee4b48114eeda2d645ce505900c318b3767`; los cambios de publicación se registran por commit. Los originales oficiales gobiernan; el documento central no los sustituye.

## Recursos y escritores

Root **solo orquesta**: asigna, recibe evidencia, resuelve discrepancias y decide la entrega. Los ejecutores leen, calculan, redactan, prueban y publican. Máximo **cuatro ejecutores nativos más root**; las sesiones externas también consumen cuota y no crean licencias adicionales.

| Frente | Ejecutor y salida exclusiva después del GO |
|---|---|
| Datos/fichas oficiales, escenarios y MEA | Nativo DA: `caso/entrega/evidencia_y_vacios.md`; registro de datos/fuentes. |
| P1: diagnóstico, ubicación y cinco hallazgos | Nativo P1: `caso/entrega/producto_1.md`. |
| P2: cartera, cálculo y alternativas | Nativo P2: `caso/entrega/producto_2.md`; único escritor de cálculos que se le asignen. |
| P3, ensamblado y pitch | Nativo P3: `caso/entrega/producto_3.md`, `pitch.md` y paquete integrado; integra por referencias, no sobrescribe P1/P2. |
| Adaptación/cálculo de Presupuesto Vivo | Codex del tmux remoto EXISTENTE `PresupuestoVivo`; solo cambios indispensables expresamente asignados, en su worktree/ramas de tarea. |
| Territorio, procedencia y MEA de apoyo | Codex remoto EXISTENTE `EfectoDomio` = Territorio Vivo; worktree independiente. |
| Crítica independiente | Claude y Muse **locales**: cada uno escribe únicamente su evaluación asignada, con versión revisada y objeciones. |
| Apoyo acotado de cobertura/consistencia | GPT-6-Luna local solicitado; ruta en verificación, no disponibilidad supuesta ni quinto slot nativo. |
| Revisión adicional MEA/escenarios | Gemini **local**, solo después de login oficial y catálogo verificado; pendiente, sin sustitución remota. |
| Publicación y estado | Un dueño Git publica lotes terminados; un dueño web actualiza estado tras aviso y commit. |

Antes de nuevo workflow/proveedor: consultar cuotas actuales y catálogo de la ruta, declarar máquina/modelo/motivo. Una lectura de otra máquina no confirma disponibilidad local. Conservar cuentas/sesiones; sin failover automático, sondeo Codex deshabilitado, Scite o servicios de pago nuevos. Cada prompt es autocontenido y fija entradas, restricciones, resultado y **un escritor por archivo**. No delegar de una máquina a otra y de vuelta. No usar las sesiones remotas nuevas de preparación para el trabajo.

## Ejecución y horas

Cronograma **condicional si se recibe GO ahora**, calculado desde 10:14. No describe tareas de entrega ya ejecutadas. Si el GO llega después, el ejecutor de planificación recalcula desde la hora real manteniendo 13:50/14:00; primero recorta UI y trabajo accesorio, nunca inventa datos ni elimina validaciones sustantivas.

| Fase | Inicio–fin Bogotá | Salida/condición |
|---|---|---|
| Confirmación GO y asignaciones | 10:14–10:24 | Root asigna; ejecutores reciben objetivo, fuentes y archivo exclusivo. |
| DA: fichas, escenarios y vacíos | 10:14–10:58 | Registro de evidencia, localizadores, MEA y peticiones oficiales acotadas. |
| P1: diagnóstico territorial | 10:29–11:28 | Hasta cinco hallazgos; cobertura de municipios y siete dimensiones. |
| P2: selección y comparación | 10:34–12:07 | Elegibilidad, unidades enteras, conteo, presupuesto y alternativas. |
| P3: residual y seguimiento | 10:34–12:07 | Vacíos que cambian decisión, indicadores/línea base y revisión. |
| Contraste de escenarios | 11:42–12:36 | Referencia/intermedio/SSP3-7.0–2060; decisiones y límites reales. |
| Integración y revisión independiente | 12:36–13:30 | 75 IDs con evidencia; Claude/Muse y revisión delegada. |
| Pitch, anexo y paquete público | 13:30–13:50 | Ensayo ≤7min; anexo opcional ≤2p; archivos/versiones coherentes. |
| Entrega | 13:50–14:00 | Paquete final y limitaciones, con hora real de entrega. |

Prioridad: **evidencia y diagnóstico → cartera/presupuesto → residual/seguimiento → contraste y defensa**. DA, P1, P2 y P3 avanzan en paralelo; comunican entradas pendientes sin rellenarlas. SpecOrganon se usa solo si ayuda a trazabilidad sin retrasar: no obliga a recorrer/aprobar automáticamente sus fases. Los cambios de interfaz son accesorios; el formato de tablas/láminas está permitido.

## Aceptación real y límites

1. **P1:** hasta cinco hallazgos sustentados en el corredor, cubriendo decisiones/vacíos de Biodiversidad, Recurso hídrico, Seguridad alimentaria, Hábitat, Infraestructura, Salud y Riesgo de desastres. Conservar fuente/localizador, componente A/S/CA/V/R, unidad, fecha y escenario. No elegir automáticamente índices máximos ni recalcular el estudio.
2. **P2:** costo íntegro ≤COP5.000 millones, saldo y unidades indivisibles trazables. PSA mantiene unidad de tres años; el gasto histórico no reemplaza precios. Confirmar repetición/cupos y elegibilidad problema–municipio/sitio–actor–mecanismo–solapamiento antes de certificar máximo. Sin regla confirmada, el máximo sigue condicional.
3. Comparar las **siete carteras de seis unidades** financieramente factibles bajo una unidad/fila y alternativas críticas A–F, incluidos sacrificios de biodiversidad, agua, infraestructura/alertas y salud. La lista regional cuesta COP6.500 millones. Conteo máximo y dimensiones del catálogo no prueban pertinencia, cobertura ni eficacia. No usar el minimax del software como certificado del máximo de intervenciones.
4. Cada intervención seleccionada incluye medida/ficha MEA por confirmar, factor S/CA, municipio/sitio sustentado o provisional, costo, actores propuestos/validados, secuencia y beneficio esperado con nivel de evidencia. No inventar beneficios, probabilidades, efectos causales, compromisos ni pesos del jurado.
5. Contrastar **referencia, futuro intermedio suministrado y SSP3-7.0/2060**; conservar fuentes y decidir mantener/modificar/reemplazar por medida. DA busca faltantes en fuentes oficiales con tiempo acotado y registra ruta, resultado y dato solicitado. Si falta matriz/escenario obligatorio, entregar contraste parcial claramente marcado: **no cerrar la robustez completa ni la goal como cumplida**.
6. **P3:** riesgo residual y sacrificios explícitos, dependencias deliberadamente ausentes como preguntas de levantamiento, variables mínimas/fuente/responsable/decisión afectada. No inferir aristas empresariales de proximidad. MEA con indicador, definición/fórmula, unidad, cobertura, línea base/fecha o ausencia, custodio/frecuencia y regla de reajuste; actividad/inversión no equivale a impacto. Meta30% es regional a2035, no año1.
7. P1–P3 responden las nueve preguntas oficiales; pitch ensayado ≤7min y anexo cuantitativo opcional ≤2p. Otro integrante reproduce cifras, conteo, fuentes y razones. La matriz conserva **R22+Q9+C8+X6+P3+F3+I16+H8=75 IDs**, cada uno con estado y evidencia/localizador; “condicional”/“pendiente” no se transforma en cumplido por una promesa.

**Done:** archivos entregados, razonamiento/evidencia verificables, cálculo reproducible, aceptación de los requisitos aplicables y límites visibles. Las pruebas de software/DB acreditan preparación técnica, no productos ambientales. No declarar eficacia observada, cartera ambiental óptima o robustez completa sin los datos necesarios. Si persiste una obligación científica sin evidencia, publicar la limitación y el resultado parcial sin falsear cumplimiento.

## Publicar avances sin exponer operación privada

Cada escritor termina su artefacto y entrega lista exacta, SHA y comprobaciones. El dueño Git hace commit/push acotado inmediatamente; avisa HEAD/archivos al dueño web, que actualiza JSON de progreso y devuelve su lote al mismo dueño Git. Sin cambios simultáneos al archivo ni watchers globales. Publicar solo whitelist revisada: sin credenciales, cuentas, IP privada, rutas personales, `.env`, TUI, respaldos, empresas identificables o insumos con permisos pendientes. El [estado público](https://github.com/stevenvo780/ambientalhakaton/blob/main/ambiente/estado_orquestacion.json) distingue preparación, GO, ejecución y entregas. `create_goal` solo se usará tras el GO, en la instancia autorizada y con el objetivo estable; no se activa con este documento.
