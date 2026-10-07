# Evaluaciones locales reales

Actualizado: 2026-10-07T14:53:51.727257+00:00. Ambas evaluaciones terminaron y sus informes se leyeron íntegros. Fedora, cuenta `portatil`, sesiones existentes. Cuotas DESCONOCIDAS según consulta del coordinador de 14:28 UTC; una respuesta real confirma inferencia observada, no disponibilidad de cuota futura.

| Evaluador | Modelo observado | Sesión / pane | Cierre real en terminal |
|---|---|---|---|
| Claude | Opus 5.5, xhigh | `ambiental-claude-local` / `%0` | 2026-10-07 09:52 COT (14:52 UTC) |
| Muse | muse-spark-1.3-contributor, max | `ambiental-muse-local` / `%1` | 2026-10-07 09:48 COT (14:48 UTC) |

[Claude: dictamen final](../caso/evaluaciones/claude/informe.md), 144 líneas, 16.574 bytes; SHA-256 `ef7fa9ae61e4192ecd5ef26ee7cf967bc511865b4b209e0e6835142ba9bb8b1e`.

[Muse: dictamen final](../caso/evaluaciones/muse/informe.md), 265 líneas, 17.383 bytes; SHA-256 `2c25e7a5d8ed4b89494fdbe266637504fe68f848003a2ea750afbd1945f428e6`.

Ambos revisaron el borrador anterior de SHA `37fb7d6c6b366276547fbc852429bc9ae3319464cc29c4e74a214effe1ef7a98`: Claude a las 09:41:38 COT y Muse entre 09:40–09:42 COT. Los dictámenes no certifican el documento final posterior. Sus objeciones se comunicaron a root y al escritor exclusivo de documentos centrales para integración; no se pidió una segunda auditoría completa.

Claude propone anclar cada medida a municipio × dimensión × factor y mostrar comparadores con Rondas/SAT; diferencia continuidad de la lista regional de antecedentes efectivos del corredor. Su filtro Alta/Baja es una propuesta, no regla oficial; una cartera de cinco es un comparador, no un máximo pertinente demostrado. Propone seguimiento MEA por producto, resultado e impacto y relacionar cada dependencia faltante con la decisión que cambiaría.

Muse pide filtro de elegibilidad operativo, comparadores E/F de seis dimensiones, control de solapes y declaración del residual estructural: las siete carteras financieras de seis excluyen infraestructura, SUDS, restauración, rondas y cabeceras. Pide gobernanza territorial, custodio PSA años 2–3 y fuentes de competencias por validar. Verificó 858 filas de datos y la aritmética; la matriz de 75 requisitos y los tests de las apps no fueron auditados por Muse.

Ambos distinguen el dato futuro Rionegro 0,28→0,32 (enunciado p.2, sin SSP identificado allí) de una prueba de cartera: no se ejecutó ni se verificó que ese dato represente SSP3-7.0/2060. Sin eficacias causales, la comparación ambiental es condicional y cualitativa. Antecedentes históricos, emisiones y nombres de indicador no demuestran eficacia de adaptación.

Claude corrigió la trazabilidad del hash y la negación del error API: el coordinador observó una vez `API error · Retrying in 0s · attempt 1/7`; después se recuperó el progreso y entregó el informe. Sin código, causa ni cuota establecidos; sin error activo observado al cierre, sin reintento manual ni failover. Muse terminó sin error API observado.

Claude ejecuta `claude --dangerously-skip-permissions` desde `.agentes-local/claude`; Muse ejecuta `muse --yolo` desde `.agentes-local/muse`. Las banderas de las nuevas instancias fueron autorizadas expresamente. Cada evaluador fue el único escritor de su informe; no se modificaron fuentes, aplicaciones, perfiles ni credenciales. Se verificaron los once originales registrados: hashes idénticos. Scripts y renders temporales de auditoría autorizados se registran sin secretos.

Para consultar sin interrumpir: `tmux capture-pane -p -t %0 -S -100` y `tmux capture-pane -p -t %1 -S -100`. Antes de cualquier entrada: capturar y leer pantalla, enviar texto literal mediante argv, esperar al menos 1 segundo, capturar otra vez y solo entonces Enter. No se usó attach, Ctrl-C ni cierre de sesiones. Los agentes quedan disponibles, sin trabajo adicional enviado.

[Registro detallado](evaluaciones_locales.json): objetivos, prompts públicos, timestamps, comandos, panes, hashes, errores y evidencia de respuesta real.
