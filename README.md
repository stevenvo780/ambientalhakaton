# Reto ambiental CORNARE — espacio del equipo

**Repositorio público:** https://github.com/stevenvo780/ambientalhakaton

**Documento para leer al equipo:** [propuesta de cumplimiento y orquestación](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/propuesta_principal.md). [Versión de texto para consultar desde otras herramientas](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/main/caso/propuesta_principal.md).

Elegimos **Presupuesto Vivo como principal y Territorio Vivo como secundario** para preparar una decisión de adaptación en Rionegro–Guarne–Marinilla con el fondo simulado de **COP 5.000 millones**. El resultado será un tablero de hasta cinco hallazgos, un portafolio justificado y una ficha de riesgo residual/seguimiento MEA, con pitch de máximo siete minutos. El plan explica los ocho criterios, nueve preguntas y todas las reglas; contiene dos diagramas de metodología y orquestación. Paquete objetivo a las 13:50 y entrega antes de las 14:00 de Bogotá del 7 de octubre de 2026.

**Codex principal solo orquesta y delega.** Los subagentes y las instancias asignadas leen, redactan, calculan, prueban y preparan el entorno con un escritor por archivo. Claude y Muse entregaron revisiones desde Fedora; Gemini local espera login. En el remoto se controlan los tmux existentes, con worktrees separados. La implementación ambiental y la activación de la goal esperan deliberación del equipo.

## Leer en este orden

1. [Propuesta principal y gráficos](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/propuesta_principal.md).
2. [Matriz de 75 requisitos y evidencias](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/matriz_requisitos_completa.md).
3. [Plan de ejecución](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/plan_ejecucion.md).
4. [Comparación de las cuatro iniciativas](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/seleccion_propuestas.md).
5. [Revisión documental](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/revision_documentos.md) y [revisión de Excel](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/revision_excel.md).
6. [Catálogo de costos](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/catalogo_costos_reto.csv) y [comparación financiera](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/comparacion_financiera.json).
7. [Revisiones de Claude](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/evaluaciones/claude/informe.md) y [Muse](https://github.com/stevenvo780/ambientalhakaton/blob/main/caso/evaluaciones/muse/informe.md).

## Estado y límites

Publicación inicial de la preparación. Los documentos están revisados; **la cartera ambiental y los tres productos finales aún no están ejecutados**. Faltan escenarios completos, correspondencias MEA/líneas base, sitios, actores y aclaración del conteo/repetición. No se inventan eficacias ni se anuncia robustez SSP3-7.0/2060 completa. La comparación financiera reproduce 32.768 subconjuntos, 1.567 factibles y siete carteras de seis unidades bajo el supuesto de una unidad completa por entrada: no acredita óptimo ambiental.

Los originales se conservan localmente. Los insumos y estados públicos aprobados se incorporan en commits posteriores; no se publican credenciales, perfiles, bases de datos ni originales con información empresarial identificable. Consultar [historial de commits](https://github.com/stevenvo780/ambientalhakaton/commits/main/) para conocer los cambios efectivos.

## Reproducir la comparación

```sh
git clone --recurse-submodules https://github.com/stevenvo780/ambientalhakaton.git
cd ambientalhakaton
python3 caso/comparar_presupuesto.py
```

SpecOrganon se conserva como submódulo del [repositorio oficial](https://github.com/stevenvo780/SpecOrganon/tree/b1bc77e66ee518b0d1ca2c835b2b64263703a4b3), fijado al commit `b1bc77e66ee518b0d1ca2c835b2b64263703a4b3`; aporta trazabilidad opcional y no bloquea los entregables.
