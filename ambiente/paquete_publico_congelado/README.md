# Espacio de trabajo ambiental

Estado: insumos revisados, metodología disponible y plan de cumplimiento preparado para deliberar el reto CORNARE. La cartera ambiental y los tres productos finales todavía no están aprobados ni ejecutados.

**Para leer al equipo: [propuesta principal, cumplimiento y orquestación](caso/propuesta_principal.md).** Incluye la justificación de **Presupuesto Vivo principal + Territorio Vivo secundario**, cómo atender los ocho criterios y las nueve preguntas, los tres productos, comparación presupuestal, cierre de brechas y dos gráficos. La [matriz de 75 requisitos](caso/matriz_requisitos_completa.md) conserva fuentes, acciones, evidencias y estados.

El [plan de ejecución](caso/plan_ejecucion.md) fija responsables y puntos de integración, con paquete congelado a las 13:50 y entrega antes de las 14:00 de Bogotá. La goal se activará después de la deliberación solicitada. La [comparación de las cuatro iniciativas](caso/seleccion_propuestas.md) detalla qué reutilizar y las limitaciones observadas.

**Codex principal solo orquesta y delega; todo trabajo material lo ejecutan subagentes/instancias asignadas, con un único escritor por archivo.** Claude y Muse entregaron dictámenes desde Fedora; sus objeciones se incorporaron al plan, sin atribuirles lectura de la versión final. Gemini local espera login oficial. En el remoto se controlan los tmux existentes `PresupuestoVivo` y `EfectoDomio` (Territorio Vivo) y se prepararon worktrees separados. El [estado del entorno](ambiente/estado_entorno.md) conserva verificaciones, errores y comandos para observar/controlar las sesiones; no supone disponibilidad por una terminal abierta.

## Metodología de referencia

Se clonó el repositorio oficial de [SpecOrganon](https://github.com/stevenvo780/SpecOrganon), enlazado desde su [presentación pública](https://specorganon.stevenvallejo.com/).

- Copia local: `metodologia/SpecOrganon/`.
- Rama: `main`; clon superficial, sin el historial completo.
- Commit de referencia: `b1bc77e66ee518b0d1ca2c835b2b64263703a4b3`.
- Fecha de preparación: 2026-10-07.
- [Método y nueve fases](metodologia/SpecOrganon/docs/metodologia.md).
- [Guía de uso local](metodologia/SpecOrganon/docs/uso_local.md).
- [Skill oficial para trabajar un caso](metodologia/SpecOrganon/.agents/skills/specorganon/SKILL.md).

## Organización

- `metodologia/SpecOrganon/`: referencia original, conservada sin modificaciones.
- `insumos/cornare/`: contenido del ZIP extraído sin modificar el original; [inventario y hashes](insumos/inventario.json).
- `insumos/texto/`: textos de los PDFs, extracción de hojas Excel y filtro de antecedentes de adaptación del corredor.
- `insumos/revision/`: comprobaciones HTTP y páginas clave revisadas visualmente.
- `caso/`: expediente local inicializado, selección de propuestas e [informe del método](caso/informe_metodo.md).
- `explicacion.txt`: notas originales, conservadas sin cambios y contrastadas con el enunciado oficial.

## Recorrido del caso

1. `frame`: delimitar problema, actores y frontera.
2. `critique`: revisar conceptos, supuestos, encuadres y fines.
3. `study`: definir preguntas, hipótesis, protocolo e indicadores.
4. `observe`: recoger evidencia y registrar su procedencia.
5. `explain`: sintetizar hallazgos y límites de incertidumbre.
6. `compare`: comparar alternativas, costes y riesgos.
7. `specify`: fijar decisiones, requisitos y criterios de aceptación.
8. `build`: preparar la intervención y documentar sus pruebas.
9. `validate`: contrastar resultados con los criterios y la línea base.

Las fases formales siguen pendientes de revisión y aceptación. El expediente contiene trabajo preparatorio; los casos y resultados incluidos en el repositorio clonado pertenecen a SpecOrganon y no se atribuyen a este reto.

SpecOrganon es un apoyo opcional de trazabilidad. Sus fases no deben retrasar los tres productos ni sustituir las reglas del evento.

## Uso local

Las dependencias se instalaron con `uv sync --frozen --no-dev`. Desde `metodologia/SpecOrganon/`:

```sh
uv run --no-sync organon status ../../caso
uv run --no-sync organon next-task ../../caso
uv run --no-sync organon report ../../caso --format markdown
```

La [comparación financiera reproducible](caso/comparacion_financiera.json) usa las 15 unidades completas del catálogo bajo el supuesto de una unidad por entrada; no demuestra una cartera ambiental óptima. Las pruebas técnicas actuales e históricas se distinguen en el entorno. No se ha validado una reducción ambiental en campo ni el recorrido completo de las aplicaciones con el nuevo caso.
