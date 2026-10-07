# Guía de lectura del equipo — Proyecto ChatGPT con solo README

Con solo el README cargado, el equipo sigue este orden. Rama de datos: `dev`;
web canónica: https://hackathon-ambiental.stevenvallejo.com. Cada archivo trae
enlace absoluto de lectura (blob) y de texto (raw); las fuentes versionadas se
citan por GitHub/raw `dev`.

## Estado público verificado (snapshot, no tiempo real)

- `dev` HEAD `5c3184524ccd4620573cd2c18a90a7b4edf26bf7`, padre `427c6e5`,
  2026-10-07 10:17 Bogotá.
  Historial: https://github.com/stevenvo780/ambientalhakaton/commits/dev/
- `main` empezó README-only; su HEAD actual `27f5842` (15:27 UTC) ya sirve
  documentos del caso (README y propuesta verificados 200; resto de `main` no
  auditado). El README enlaza `main` y la goal enlaza `dev`: comprobar la rama de
  cada archivo antes de citarlo. No afirmar vacío sin HEAD verificado.
- Verificado 10:29 Bogotá con GET públicos sin credenciales: los archivos 1–8
  responden 200 en `dev`; esta guía aún da 404 (solo local, entra en el próximo
  push del usuario).
- Citar siempre SHA + rama + hora. Comparar por hash de contenido, no solo por
  hora: un mtime posterior no demuestra diferencia. Confirmado por hash: el goal
  local (`0ff8940d…`) difiere del publicado en `dev` (`dcc5e178…`).

## Orden de lectura (enlaces dev)

1. Propuesta del equipo (método, HOW por criterio, carteras A–F):
   [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/propuesta_principal.md)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/propuesta_principal.md).
   Local actual: 289 líneas, sha `a4af4e87…`; los dictámenes revisaron `37fb7d…`.
2. Matriz de 75 requisitos (estado por ID: 5 demostrados, 6 condicionales, resto
   pendientes; ningún producto final cerrado):
   [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/matriz_requisitos_completa.md)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/matriz_requisitos_completa.md).
3. Enunciado, transcripción pública (reglas, fondo, tabla de 15, escenarios):
   [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/insumos/texto/RETO%20CLIMATE%20WEEK%20HACKATHON.txt)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/insumos/texto/RETO%20CLIMATE%20WEEK%20HACKATHON.txt).
4. Costos y carteras (aritmética verificada, sin óptimo ambiental):
   catálogo [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/catalogo_costos_reto.csv)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/catalogo_costos_reto.csv),
   financiero [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/comparacion_financiera.json)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/comparacion_financiera.json),
   script [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/comparar_presupuesto.py)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/comparar_presupuesto.py).
5. Revisiones (límites de fuentes y Excel) y contexto:
   documental [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/revision_documentos.md)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/revision_documentos.md),
   Excel [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/revision_excel.md)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/revision_excel.md),
   plan [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/plan_ejecucion.md)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/plan_ejecucion.md),
   selección [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/seleccion_propuestas.md)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/seleccion_propuestas.md).
6. Dictámenes (objeciones materiales con localizador):
   Muse [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/evaluaciones/muse/informe.md)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/evaluaciones/muse/informe.md),
   Claude [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/evaluaciones/claude/informe.md)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/evaluaciones/claude/informe.md).
7. Goal de ejecución (fases, aceptación, INACTIVA hasta GO explícito):
   [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/caso/goal_ejecucion.md)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/caso/goal_ejecucion.md).
8. Estado público (preparación, GO, ejecución, entregas):
   [blob](https://github.com/stevenvo780/ambientalhakaton/blob/dev/ambiente/estado_orquestacion.json)
   [raw](https://raw.githubusercontent.com/stevenvo780/ambientalhakaton/dev/ambiente/estado_orquestacion.json).

Fuentes institucionales de consulta (matriz I11):
[cambio climático](https://observatorioambiental.cornare.gov.co/crecimiento-verde-y-cambio-climatico/cambio-climatico/),
[riesgo](https://observatorioambiental.cornare.gov.co/gestion-del-riesgo/),
[POMCA](https://observatorioambiental.cornare.gov.co/pomca/),
[determinantes](https://observatorioambiental.cornare.gov.co/ordenamiento-ambiental-del-territorio/determinantes-ambientales/),
[MARCO](https://marco.cornare.gov.co/marco/observemos-el-territorio-desde-el-cielo?utm_source=chatgpt.com).

## Qué extraer por bloque

- Propuesta: método, HOW por criterio, carteras A–F y brechas con dueño; es
  borrador del equipo (sha `a4af4e87…`), no evidencia institucional.
- Matriz: estado exacto por ID (R/Q/C/X/P/F/I/H) y qué evidencia cierra cada fila;
  base para marcar pendiente o condicional sin adivinar.
- Enunciado: reglas, fondo 5000, tabla de 15 precios indivisibles, productos,
  rúbrica y exclusiones; única fuente de autoridad ante conflictos.
- Costos: aritmética reproducible (1567 factibles, siete de 6, E/F); sirve solo
  para factibilidad, jamás como óptimo ambiental.
- Revisiones: límites de datos (duplicados, vacíos, unidades, MR/RM, columnas G/I)
  y plan/selección como contexto de decisiones ya tomadas.
- Dictámenes: objeciones con localizador y corrección aplicable; integrarlas antes
  de cerrar productos.
- Goal: fases, horarios condicionales, criterios de aceptación y un escritor por
  archivo; inactiva hasta GO.
- Estado: frescura real del avance frente a este snapshot.

## Local frente a publicado

- Publicado en `dev`: archivos 1–8 (HEAD 200 verificado).
- Difiere de `dev` (hash confirmado): `caso/goal_ejecucion.md` local `0ff8940d…`
  frente a `dcc5e178…` publicado. Hashes locales para cotejar tras el push:
  propuesta `a4af4e87…`, matriz `a8ef33d1…`, README `0261877c…`, Muse `2c25e7a5…`.
- Solo local: esta guía; la publica el usuario en su próximo push.
- Excluidos del primer release: ZIP, PPTX, PDF de 31 páginas y capturas
  identificables. Solo transcripciones y derivados aprobados. Omitir información
  empresarial individual identificable; se admiten nombres institucionales, de
  consultor o públicos sin datos individuales asociados. Nunca credenciales.

## Si algo falla (404) o no hay navegación

- Un 404 no significa vacío: comprobar la otra rama (`main`/`dev`), el historial y
  el SHA citado. No inventar contenido: pedir el archivo o revisar commit y rama.
- Sin navegación en GPT, el README no descarga nada por sí solo: adjuntar en este
  orden propuesta, matriz, goal y catálogo; después enunciado y dictamen Muse; el
  resto solo si el análisis lo exige.
- Para comprobar frescura: abrir el historial, anotar HEAD y hora, y comparar el
  hash de contenido además de la hora; un mtime posterior no demuestra diferencia.
  Si el hash difiere, manda el local hasta el próximo push del usuario.
- El usuario hace todas las operaciones Git (add, commit, push); esta guía es un
  archivo local para su siguiente push, sin autopush. No crear aquí GPT
  personalizado ni Proyecto ChatGPT.

## Pendientes que condicionan la lectura

SSP: sin prueba oficial de cartera SSP3-7.0/2060 (0,28→0,32 de enunciado p.2 no
identifica SSP). MEA: catálogo, fórmulas y líneas base pendientes; todo indicador
es propuesto. GO: goal inactiva; repetición de unidades sin regla (máximo 6
condicional); fichas completas, sitios y actores por verificar.

Snapshot verificado 2026-10-07 10:29 Bogotá.
`dev` = `5c3184524ccd4620573cd2c18a90a7b4edf26bf7`.
