# Entorno actual: agentes locales y proyectos remotos existentes

Verificado en UTC: 2026-10-07T14:38:37.494359+00:00. Root actúa **solo como orquestador**, sin ejecución material; los modelos y subagentes realizan las tareas asignadas. La instrucción vigente mantiene **Claude, Muse y Gemini en Fedora local**. En `ws-steven` se usan exclusivamente las sesiones tmux existentes de los proyectos. Las sesiones nuevas `ambiental-agy` y `ambiental-codex-remoto` se conservan abiertas e inactivas; no se usan para este trabajo. No hubo cambio de cuentas ni copia de credenciales.

## Fedora local

| Sesión | Pane local | Estado |
|---|---|---|
| `ambiental-claude-local` | `%0` | Claude Code 2.1.292, Opus 5.5; preparada; asignaciones supervisadas por root |
| `ambiental-muse-local` | `%1` | Muse Code 1.4.3, muse-spark-1.3-contributor; preparada; asignaciones supervisadas por root |
| `ambiental-coordinacion-local` | `%2` | Consola zsh, sin segunda instancia de Codex |
| `ambiental-gemini-local` | `%4` | **Pendiente de autenticación** en menú oficial de AGY; no lista para inferencia |

AGY local es `/home/stev/.local/bin/agy`, un binario ELF nativo, no un wrapper SSH. Su ayuda confirma `--dangerously-skip-permissions`. Se abrió con `AGY_CLI_HIDE_ACCOUNT_INFO=1 agy --dangerously-skip-permissions --effort high` en `.agentes-local/gemini`, sin fijar modelo antes de autenticar. El catálogo local devolvió: “Please sign in to view available models”. La versión exacta no se mostró antes del login; no se atribuye al binario local la versión del remoto.

La evaluación Gemini está preparada en `.agentes-local/gemini/instrucciones_evaluacion.txt`, pero **no enviada**: debe revisar medidas → sensibilidad/capacidad adaptativa → indicador MEA → línea base/fuente/responsable, sin inventar eficacia ni escenarios. Única salida autorizada: `caso/evaluaciones/gemini/informe.md`. Tras login, verificar catálogo local y seleccionar `gemini-3.1-pro-high`/esfuerzo alto antes de enviar el encargo; sin failover a otra máquina.

### Login mínimo del usuario desde Fedora

```sh
tmux capture-pane -p -t ambiental-gemini-local -S -80
```

El menú muestra `Google OAuth` seleccionado. Para iniciar el flujo oficial desde la terminal local, leer la pantalla y enviar Enter:

```sh
tmux send-keys -t ambiental-gemini-local Enter
```

Completar el acceso en el navegador oficial con la cuenta autorizada. No enviar códigos, enlaces privados de autenticación, tokens ni cookies al chat. Al completar, comprobar el prompt local y avisar al coordinador; este verificará modelo y lanzará la evaluación. No es necesario copiar autenticación desde el remoto.

## ws-steven: sesiones existentes

| Sesión / pane remoto | Repositorio | Uso actual |
|---|---|---|
| `PresupuestoVivo` / `%0` | `/workspace/PresupuestoVivo` | Auditoría acotada terminada; informe disponible y sesión esperando |
| `EfectoDomio` / `%1` | `/workspace/EfectoDomio` (Territorio Vivo) | Pantalla observada; sin tarea nueva enviada |

La auditoría de Presupuesto Vivo lee el plan y requisitos verificados en `/home/dev/hackathon-ambiental-20261007/paquete` e inspecciona el código existente. Comprueba brechas para los tres productos: tablero de máximo cinco hallazgos, cartera priorizada y seguimiento/riesgo residual MEA. Incluye costos indivisibles, máximos por unidad, corredor, escenarios y no inventar eficacia. No reanuda la goal antigua ni implementa, hace commits, despliega o toca bases de datos. Su única salida es `/home/dev/hackathon-ambiental-20261007/evaluaciones/codex-presupuesto.md`; el informe terminó y se recuperó en `ambiente/evaluaciones/codex-presupuesto.md`. La auditoría concluye adecuación parcial: el motor minimiza arrepentimiento y en desempate favorece menos intervenciones; no maximiza automáticamente el conteo requerido. También faltan corredor conjunto, unidades/cupos, escenarios oficiales y seguimiento MEA. Se pedirá complemento sobre el documento principal cuando se verifique su copia remota.

Cuando se sincronice `caso/propuesta_principal.md`, avisar al auditor para que lo contraste también. No dar por recibido un archivo que aún no está en el paquete remoto.

## Worktrees aislados preparados

| Proyecto | Worktree | HEAD de partida | Pruebas realmente ejecutadas |
|---|---|---|---|
| Presupuesto Vivo | `/home/dev/hackathon-ambiental-20261007/worktrees/presupuesto-vivo` | `513b7e6872e159485e62f325bbc5ad4450a777d9` | 419 unitarias aprobadas |
| Territorio Vivo | `/home/dev/hackathon-ambiental-20261007/worktrees/territorio-vivo` | `19214fceffd89a0de9131acc90fc3fd4205d8a62` | 252 aprobadas, 29 omitidas |

Ambos worktrees están en HEAD separado. Las ramas `main` originales y las cuatro copias permanecen limpias. Se reutilizaron paquetes ya instalados mediante enlaces dentro de un `node_modules` ignorado, en la misma máquina, con cachés locales separadas. No se copiaron `.env` originales, cuentas o credenciales. Las migraciones posteriores y datos generados por los smoke tests pertenecen exclusivamente a las bases nuevas de pruebas. No se asignaron escritores de código; la implementación espera deliberación del equipo y conservará un solo escritor por archivo/proyecto.

Herramientas comprobadas: Git 2.43.0, Node v22.22.3 y npm 10.9.8. Los puertos 43007/43008 alojan ahora servidores Next.js con webpack de los worktrees. La preparación añadió un cluster **nuevo y privado** PostgreSQL 16.15 en `127.0.0.1:55907`, con volumen `/home/dev/hackathon-ambiental-20261007/infra_pruebas/postgres_data`. Presupuesto usa `pv_hackathon_test` (28 tablas) y Territorio `territorio_hackathon_test` (49 tablas, PostGIS 3.4.2), con roles de aplicación sin superusuario ni BYPASSRLS. Las migraciones de ambas bases de prueba terminaron con salida 0 y guard explícito de máquina, puerto y nombre `test`. Se generaron credenciales nuevas para pruebas y archivos privados `.env.local` de permiso 0600; no se copiaron los archivos originales. Producción y servicios originales permanecen activos y fuera de estos cambios. Next generó una referencia de tipos en Presupuesto; se restauró únicamente ese artefacto propio y las fuentes quedaron limpias.

Los GET `/api/health` de ambos servidores devolvieron 200 y PostgreSQL/PostGIS; el catálogo de Presupuesto devolvió 200, y sesión/catálogo CORNARE de Territorio devolvieron 200. Pasaron cinco comprobaciones **backend** con las bases de prueba: Presupuesto, un test seleccionado de registro/hash de contraseña (32 no seleccionados); Territorio, cuatro de autenticación, persistencia e aislamiento/RLS. Esto se registra aparte de las 419 unitarias y 252/29 omitidas. No se ejecutó E2E de navegador ni se verificaron todos los flujos de importación, carga de archivos, optimización, exportación o SpecOrganon. Evidencia pública: `ambiente/readiness_runtime_remoto.json`, `ambiente/readiness_integracion_remota.json` y `ambiente/health_api_remoto.json`. Los logs privados permanecen en `infra_pruebas`; no se incluyen en paquetes de modelos.

## Control sin attach

```sh
# Local
tmux ls
tmux capture-pane -p -t ambiental-claude-local -S -200
tmux capture-pane -p -t ambiental-muse-local -S -200
tmux capture-pane -p -t ambiental-gemini-local -S -200

# Remoto existente
ssh ws-steven 'tmux capture-pane -p -t PresupuestoVivo -S -200'
ssh ws-steven 'tmux capture-pane -p -t EfectoDomio -S -200'
```

Antes de cada `send-keys`, capturar la pantalla. Enviar texto literal, esperar al menos un segundo, volver a capturar y entonces Enter. Para Codex, una interrupción autorizada usa Escape; no cerrar sesiones, no Ctrl-C y no `tmux attach`. Los panes `%4` local y `%4` remoto pertenecen a máquinas distintas: dirigir preferentemente por nombre de sesión.

SSH sufrió tres timeouts de banner; después volvió a funcionar con una conexión reutilizada mediante opciones por comando, sin editar la configuración global:

```sh
ssh -o ConnectTimeout=12 -o ControlMaster=auto -o ControlPersist=60 -o ControlPath=/tmp/ambiental-ws-steven-control ws-steven 'COMANDO'
```

Las cuotas siguen **desconocidas**; no se reactivó el sondeo local de Codex ni se cambió de cuenta. Una lectura de Gemini en Kratos no confirma autenticación/cuota en Fedora. La evidencia histórica de transferencias 51/51 y actualización 10/10 permanece separada. El estado público anterior se respaldó en `ambiente/historial/`; la copia remota es una instantánea que requiere sincronización explícita de cambios posteriores.

## Uso futuro por cada Codex, después de la deliberación

Mantener las sesiones existentes y dar a cada una el `cwd` explícito de su worktree. La rama original `main` no se cambia. Solo cuando se autorice implementación, cada escritor puede crear su rama en la copia separada:

```sh
git -C /home/dev/hackathon-ambiental-20261007/worktrees/presupuesto-vivo switch -c hackathon/cornare-presupuesto-20261007
git -C /home/dev/hackathon-ambiental-20261007/worktrees/territorio-vivo switch -c hackathon/cornare-territorio-20261007
```

Cada copia tiene su `.env.local` privado de pruebas. Los modelos no deben leerlo, imprimirlo ni adjuntarlo: Node lo carga con `--env-file=.env.local`. No ejecutar `npm ci` mientras existan enlaces a paquetes del original; si se necesita cambiar dependencias, retirar únicamente los enlaces propios del worktree y preparar una instalación separada, con autorización de alcance. No modificar el `node_modules` compartido.

Comandos de comprobación futura en el worktree correspondiente:

```sh
# Presupuesto: contratos de DB dedicados ya exigen nombre test.
node --env-file=.env.local node_modules/vitest/vitest.mjs run --config vitest.config.ts tests/integration/postgres.test.ts -t 'stores scrypt'
# Territorio: smoke de autenticación/aislamiento ya ejecutado.
PRODUCTION_DATABASE_TEST=1 node --env-file=.env.local node_modules/vitest/vitest.mjs run tests/production-auth.integration.test.ts
```

No añadir migraciones ni semillas contra servicios originales. El único dueño de la configuración de pruebas es el subagente de entorno. Los dos servidores ya están iniciados; no lanzar duplicados en los mismos puertos. Para ver sus interfaces desde Fedora, el usuario puede abrir en otra terminal un túnel y visitar localhost:

```sh
ssh -N -L 43007:127.0.0.1:43007 -L 43008:127.0.0.1:43008 ws-steven
```

Los procesos de prueba se pueden consultar por el recibo `infra_pruebas/readiness.json`. No cerrar sesiones tmux ni interrumpir servicios originales. El documento central y las evaluaciones se transfieren mediante allowlist con SHA256, conservando la evidencia histórica; el recibo nuevo estará en `ambiente/paquete_final.json`.
