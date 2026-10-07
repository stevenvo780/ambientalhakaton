# Decisión y ambiente para deliberar

**Principal: Presupuesto Vivo. Secundario: Territorio Vivo.** Entregaremos una decisión de adaptación para Rionegro–Guarne–Marinilla: qué proteger, dónde intervenir, cómo combinar unidades completas dentro del fondo simulado de COP 5.000 millones y cómo seguir el riesgo restante. Aprovechamos cartera/presupuesto de Presupuesto Vivo y evidencia territorial/seguimiento de Territorio Vivo.

El documento para leer al equipo es la [propuesta principal](propuesta_principal.md): explica **cómo atender los ocho criterios, las nueve preguntas, los tres productos y todas las reglas**, con alternativas financieras, responsables de brechas y dos gráficos. La [matriz de 75 requisitos](matriz_requisitos_completa.md) permite revisar cada obligación por fuente, evidencia y estado; la [comparación de cuatro proyectos](seleccion_propuestas.md) justifica qué reutilizar.

**Codex principal solo orquesta.** Instancia/delega, controla las instancias disponibles, recibe evidencias, decide la integración conceptual y entrega la respuesta final. Redacción, lectura, cálculo, pruebas, infraestructura y cambios los realizan ejecutores delegados con un único escritor por archivo. Las revisiones y la preparación técnica están autorizadas ahora; la goal de entrega y los cambios funcionales esperan la deliberación del equipo. El paquete debe estar congelado a las 13:50 para entregarlo **antes de las 14:00 de Bogotá del 7 de octubre de 2026**.

## Qué demuestra la preparación y qué falta

Se revisaron todos los documentos recibidos, las figuras/notas de la presentación y ocho hojas Excel; se conservaron los 11 archivos útiles extraídos del ZIP y sus hashes. El catálogo de 15 costos y la [enumeración financiera](comparacion_financiera.json) están comprobados: 32.768 subconjuntos, 1.567 factibles incluida la cartera vacía y siete de seis unidades, **bajo el supuesto de una unidad por entrada**. Eso no demuestra elegibilidad territorial ni óptimo ambiental; repetición y conteo oficial siguen por aclarar.

Faltan fichas completas y escenarios del corredor, correspondencias MEA/líneas base, sitios, actores y continuidad suficiente de las iniciativas. El [plan de ejecución](plan_ejecucion.md) y la propuesta asignan ejecutor, salida, corte y consecuencia de no resolver cada brecha. Sin los insumos no se anuncia robustez oficial completa, eficacia porcentual ni una cartera final aprobada. La meta institucional del 30% es a 2035, no un resultado anual observado.

Efecto Dominó queda como referencia para datos de dependencias por levantar; no se inventará la matriz que falta deliberadamente. Lote Resiliente queda disponible para detalle predial si una actuación lo exige. Se priorizan los tres productos y un pitch ≤ 7 minutos; SpecOrganon aporta trazabilidad cuando ayude y no impone cerrar nueve fases para presentar.

## Instancias y ubicación vigentes

**Claude, Muse Code y Gemini se ejecutan en Fedora. En el remoto se controlan los tmux existentes.** Las nuevas sesiones remotas `ambiental-agy` y `ambiental-codex-remoto` se conservan abiertas e inactivas. No son la ruta de trabajo vigente.

| Máquina | Sesión / instancia | Harness y estado acreditado |
| --- | --- | --- |
| Fedora | Codex principal de este chat | Orquestador general; subagentes nativos ejecutan las tareas materiales. |
| Fedora | `ambiental-claude-local` | Claude Code 2.1.292, Opus 5.5, xhigh; `claude --dangerously-skip-permissions`; dictamen real recibido sobre originales y un borrador anterior. Error API observado y progreso posterior registrados por el controlador. |
| Fedora | `ambiental-muse-local` | Muse Code 1.4.3, `muse-spark-1.3-contributor`, max; `muse --yolo`; dictamen real recibido sobre originales y un borrador anterior. |
| Fedora | `ambiental-gemini-local` | AGY nativo local; `agy --dangerously-skip-permissions --effort high`; menú oficial Google OAuth, login pendiente. Modelo/catálogo local aún sin verificar después del login. |
| Fedora | `ambiental-coordinacion-local` | Consola zsh; no es una segunda instancia Codex. |
| `ws-steven` | **`PresupuestoVivo`**, existente | Codex del proyecto; auditoría acotada de solo lectura enviada/reconocida. No reanudar goal antigua. |
| `ws-steven` | **`EfectoDomio`**, existente | Codex de **Territorio Vivo**; pantalla observada, tarea nueva aún no enviada. |

Muse Code usa el comando `muse`; no se confunde con MiniMax ni se supone un subcomando `code`. Las banderas solicitadas fueron verificadas en los harnesses y no cambian controles globales. Las cuotas sin lectura confirmada siguen **desconocidas**; una pantalla lista no demuestra disponibilidad. No se reactivó el sondeo local Codex, no se cambiaron cuentas y no se copiaron credenciales. Gemini de Kratos no acredita autenticación ni cuota Fedora. Claude conserva un aviso MCP pendiente y aviso de vencimiento de login; no se renovó su cuenta.

Los encargos reales y sus versiones quedan en [evaluaciones locales](../ambiente/evaluaciones_locales.json). El [estado del entorno](../ambiente/estado_entorno.md) y su [verificación](../ambiente/verificacion_entorno.json) gobiernan el estado técnico más reciente. Gemini tiene una evaluación preparada, aún no enviada; completar su flujo oficial local y comprobar una respuesta es condición para usarlo.

## Proyectos, worktrees y verificación

| Producto | Repositorio original / tmux existente | Worktree separado para la ejecución posterior |
| --- | --- | --- |
| Presupuesto Vivo | `/workspace/PresupuestoVivo` / `PresupuestoVivo` | `/home/dev/hackathon-ambiental-20261007/worktrees/presupuesto-vivo` |
| Territorio Vivo | `/workspace/EfectoDomio` / `EfectoDomio` | `/home/dev/hackathon-ambiental-20261007/worktrees/territorio-vivo` |
| Efecto Dominó, reserva | `/workspace/ContinuidadInfraestructuraServicios` / `ContinuidadInfraestructuraServicios` | Sin cambios asignados. |
| Lote Resiliente, reserva | `/workspace/lote-resiliente` / `lote-resiliente` | Sin cambios asignados. |

Los worktrees están aislados desde los commits del [inventario remoto](../insumos/revision/remoto/inventario.json). Las ramas/copias originales están limpias. Se ejecutaron **419 pruebas unitarias aprobadas** en Presupuesto Vivo y **252 aprobadas/29 omitidas** en Territorio Vivo. No prueban PostgreSQL, autenticación, persistencia, API, interfaz ni recorridos completos del caso. La preparación de pruebas aisladas de base de datos tiene su propio estado en el registro de entorno: no convertirla en validación de producción o del caso. No se copiaron `.env` de producción. Los recibos históricos de 464/281 pruebas son anteriores y se mantienen separados.

El paquete remoto está en `/home/dev/hackathon-ambiental-20261007/paquete/`. Las transferencias históricas 51/51 y 10/10 fueron comprobadas por tamaño/SHA256. Son instantáneas; los documentos posteriores necesitan transferencia explícita verificada antes de asignarse al remoto. No se sincronizan perfiles `.codex`, `auth.json`, SQLite, variables privadas o bases de datos.

## Observar y controlar las sesiones

```sh
tmux ls
tmux capture-pane -p -t ambiental-claude-local -S -200
tmux capture-pane -p -t ambiental-muse-local -S -200
tmux capture-pane -p -t ambiental-gemini-local -S -200
ssh ws-steven 'tmux ls'
ssh ws-steven 'tmux capture-pane -p -t PresupuestoVivo -S -200'
ssh ws-steven 'tmux capture-pane -p -t EfectoDomio -S -200'
```

Antes de **cada** escritura, leer la pantalla. Enviar texto literal, esperar un segundo, capturar de nuevo y enviar Enter:

```sh
tmux capture-pane -p -t ambiental-claude-local -S -200
tmux send-keys -t ambiental-claude-local -l 'Tu instrucción acotada y área de escritura'
sleep 1
tmux capture-pane -p -t ambiental-claude-local -S -20
tmux send-keys -t ambiental-claude-local Enter

ssh ws-steven 'tmux capture-pane -p -t PresupuestoVivo -S -200'
ssh ws-steven "tmux send-keys -t PresupuestoVivo -l 'Tu instrucción acotada y área de escritura'"
sleep 1
ssh ws-steven 'tmux capture-pane -p -t PresupuestoVivo -S -20'
ssh ws-steven 'tmux send-keys -t PresupuestoVivo Enter'
```

Para interrumpir **Codex**, leer primero y enviar `Escape` a su sesión; no asumir ese comportamiento en los otros harnesses. No cerrar sesiones, mandar Ctrl-C ni usar `tmux attach`. Desde otra máquina sustituir `ssh ws-steven` por `ssh -p 22101 dev@100.64.0.1`, por Tailscale. No enviar códigos o tokens de login al chat.

## Reparación previa y goal pendiente

La incompatibilidad de JSON del plugin `security-guidance` con Codex 0.160.0 pasó ocho comprobaciones, preservando alertas de seguridad y configuración global. El respaldo privado y la verificación quedaron en `/home/stev/.local/state/codex/repairs/hooks-20261007-085019/`. Una actualización de la caché puede reemplazar el arreglo; se conservaron los logs históricos. Esto no acredita reparación del aviso MCP de Claude o del CI remoto.

**Goal preparada, sin activar:** entregar antes de las 14:00 una decisión defendible de adaptación del corredor, con Presupuesto Vivo principal, Territorio Vivo secundario, tres productos, cartera/comparadores y presupuesto íntegro, contraste oficial, residual/MEA y pitch; mantener explícitos los requisitos pendientes. El orquestador la activará después de la deliberación solicitada y delegará su ejecución, sin reanudar las goals antiguas.
