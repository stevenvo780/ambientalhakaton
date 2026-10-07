# Selección de iniciativas para el reto de adaptación de CORNARE

Desarrollo local con autores y mandato declarados.

Revisión del expediente: 31. Fases aceptadas: 0/9.

## Siguiente trabajo

Revisar independientemente el snapshot vigente y registrar veredicto motivado\.

Fase: frame. Acción: review\_phase.

## Recorrido

| Frente | Fase | Estado |
| --- | --- | --- |
| philosophy | frame | lista para revisión |
| philosophy | critique | pendiente |
| science | study | pendiente |
| science | observe | pendiente |
| science | explain | pendiente |
| engineering | compare | pendiente |
| engineering | specify | pendiente |
| engineering | build | pendiente |
| validation | validate | pendiente |

## Artefactos y trazabilidad

### problema · problem · v1

Elegir dos de las cuatro iniciativas adelantadas para producir una decisión de adaptación defendible en el corredor Rionegro–Guarne–Marinilla, con los insumos existentes y un fondo simulado de COP 5\.000 millones\.

Autor: agent:codex.

```json
{
  "mandato": "El usuario delegó elegir las dos propuestas que mejor encajan y aprovechar los avances existentes."
}
```

### actores · actor · v1

CORNARE y las alcaldías del corredor; comunidades, productores y empresas mediante información permitida; el usuario como responsable del trabajo y Codex como analista delegado\. No se atribuyen decisiones ni acuerdos a actores que no participaron\.

Autor: agent:codex.

Depende de: problema v1.

### frontera · boundary · v1

Selección y preparación local; fuentes oficiales aportadas y superficies públicas de cuatro aplicaciones\. Pendientes acceso al código y pruebas privadas\. No recalcular riesgo, cubrir 26 municipios, inventar dependencias ni construir una plataforma completa\.

Autor: agent:codex.

Depende de: actores v1, problema v1.

### mandato · norm · v1

Aprovechar iniciativas existentes para seleccionar dos bases complementarias, manteniendo rigor documental y el alcance del reto\. Elección técnica delegada a Codex; no se afirma que el usuario escogió personalmente las aplicaciones\.

Autor: agent:codex.

Depende de: actores v1, problema v1.

Aprobación vigente: pendiente.

```json
{
  "approval_recorded": false,
  "delegated_choice": true,
  "source": "Mensajes del usuario de esta conversación; explicacion.txt"
}
```

### conceptos · concept · v1

Amenaza, sensibilidad, capacidad adaptativa, vulnerabilidad y riesgo son conceptos distintos\. Gasto, talleres, emisiones y puntajes algorítmicos no son evidencia de reducción porcentual de vulnerabilidad\.

Autor: agent:codex.

Depende de: problema v1.

### supuesto\_capacidad · assumption · v1

La funcionalidad documentada o presente en el cliente puede ser reutilizable, pero necesita prueba\. Una respuesta de salud o una página pública no acredita flujos privados completos\.

Autor: agent:codex.

Depende de: frontera v1.

### pregunta\_seleccion · question · v1

¿Qué pareja de iniciativas cubre mejor los tres productos oficiales aprovechando trabajo existente y evitando depender de datos empresariales inexistentes?

Autor: agent:codex.

Depende de: problema v1.

### hipotesis\_complemento · hypothesis · v1

Una base de comparación presupuestal más una base territorial de evidencia y seguimiento ofrece mejor encaje inmediato que priorizar un grafo de dependencias sin matriz o una herramienta centrada en lotes\.

Autor: agent:codex.

Depende de: pregunta\_seleccion v1.

### protocolo\_revision · protocol · v1

Documentar la revisión del enunciado, las hojas de cálculo, la documentación y las respuestas públicas\. Distinguir capacidad documentada, respuesta observada y flujo ejecutado\. Este registro reconstruye el procedimiento realizado; no se presenta como prerregistro previo a las consultas\.

Autor: agent:codex.

Depende de: hipotesis\_complemento v1.

```json
{
  "comparison": "Encaje con tres productos, reutilización verificable, cobertura, costo y datos faltantes; comparación cualitativa sin puntajes inventados.",
  "method": "Lectura documental, extracción PDF/Excel, inspección de cliente publicado por dos agentes y GET públicos sin sesión.",
  "population": "Cuatro iniciativas del usuario y paquete oficial del reto CORNARE.",
  "registration_timing": "retrospective",
  "uncertainty": "Sin prueba de interfaz completa, flujos privados, eficacia del algoritmo ni mejora ambiental observada."
}
```

### fuente\_reto · evidence · v1

El enunciado delimita tres municipios, COP 5\.000 millones simulados, costos indivisibles, 15 medidas con precio, tres productos y contraste SSP3\-7\.0/2060\.

Autor: agent:codex.

Depende de: protocolo\_revision v1.

```json
{
  "date": "2026-10-07",
  "locator": "Páginas 1–8; restricciones 6, escenarios 7, productos 10 y exclusiones 13.",
  "origin": "published",
  "sha256": "3dc49d0290487b0d316db4ed1e3d78dc2abbcb5c823a536e9ebbffa768251779",
  "source": "RETO CLIMATE WEEK HACKATHON.pdf"
}
```

### fuente\_meta · evidence · v1

La meta institucional es disminuir 30% los indicadores de vulnerabilidad de cada regional a 2035, no probar 30% durante el año inicial\.

Autor: agent:codex.

Depende de: protocolo\_revision v1.

```json
{
  "date": "2026-10-07",
  "locator": "Página 19; texto extraído y página revisada visualmente.",
  "origin": "published",
  "sha256": "b9eafc137f1c8d1fdb592f8dc6c3f52f4765d59c942df0415261002b16e51fdc",
  "source": "insumos/cornare/HACKATHON RETO CORNARE.pdf"
}
```

### fuente\_antecedentes · evidence · v1

El reporte contiene antecedentes de PSA, restauración y agroecología en Rionegro y Guarne\. Son actividades e inversiones reportadas, no eficacia de adaptación demostrada\.

Autor: agent:codex.

Depende de: protocolo\_revision v1.

```json
{
  "date": "2026-10-07",
  "locator": "Hoja Reporte_Adaptacion_General_2026; filas 149, 173, 178, 179, 199, 204 y 241.",
  "origin": "published",
  "sha256": "7d619f13571532b8be8d1c05592aeba150576c0a6bb8af67056a38a7f52908c7",
  "source": "insumos/cornare/REPORTE MEDIDAS DE ADAPTACIÓN MUNICIPIOS.xlsx"
}
```

### fuente\_http · evidence · v1

Las respuestas públicas confirman autenticación requerida en Presupuesto Vivo, catálogo provisional Granada–Rionegro en Territorio Vivo y respuestas de salud en Efecto Dominó y Lote Resiliente\.

Autor: agent:codex.

Depende de: protocolo\_revision v1.

```json
{
  "date": "2026-10-07",
  "locator": "Registros fechados 2026-10-07T13:54 UTC; URL y payload por consulta.",
  "method": "GET públicos con curl, sin autenticación ni mutación; respuesta archivada en JSON.",
  "origin": "observed",
  "sha256": "4d24864d1785cd17551d71d2d63ca1b5e298dc3c1308ee07d7c2b6270afe782c",
  "source": "insumos/revision/propuestas-http.json"
}
```

### fuente\_guias · evidence · v1

La revisión de guías públicas y cliente publicado identifica capacidades candidatas de importación, comparación y exportación en Presupuesto Vivo; expediente territorial en Territorio Vivo; grafos en Efecto Dominó y diseño predial en Lote Resiliente\. Sin ejecución autenticada\.

Autor: agent:codex.

Depende de: protocolo\_revision v1.

```json
{
  "archive_limit": "No se archivó todo el código del cliente ni se obtuvo repositorio fuente; capacidades declaradas y no probadas de punta a punta.",
  "date": "2026-10-07",
  "locator": "Revisiones de agentes revisar_presupuesto_territorio y revisar_domino_lote; matriz y límites en seleccion_propuestas.md.",
  "origin": "published",
  "source": "https://presupuesto-vivo-chi.vercel.app; https://territorio-vivo-five.vercel.app/documentacion; https://efecto-domino.vercel.app/documentacion; https://lote-resiliente.vercel.app/documentacion"
}
```

### inferencia\_encaje · inference · v1

Presupuesto Vivo encaja con el producto 2; Territorio Vivo complementa productos 1 y 3\. Dominó depende de una matriz que el reto declara faltante y Lote tiene otra escala\. Esta inferencia justifica selección, no eficacia ambiental\.

Autor: agent:codex.

Depende de: fuente\_guias v1, fuente\_http v1, fuente\_reto v1.

### sintesis · synthesis · v1

Seleccionar Presupuesto Vivo y Territorio Vivo como bases complementarias\. Reutilizar antecedentes territoriales comprobando continuidad, cobertura y resultados\. Limitar el desarrollo inmediato a los productos oficiales y funciones existentes que puedan verificarse\.

Autor: agent:codex.

Depende de: fuente\_antecedentes v1, fuente\_meta v1, inferencia\_encaje v1.

### incertidumbre · uncertainty · v1

Falta acceso verificable a los repositorios, sesión para flujos privados, carga del catálogo oficial y cobertura completa del corredor\. No están demostradas efectividades, matriz empresarial ni reducción de vulnerabilidad; Territorio Vivo sigue en caso provisional\.

Autor: agent:codex.

Depende de: fuente\_http v1, sintesis v1.

### opcion\_presupuesto · option · v1

Presupuesto Vivo: Núcleo de portafolios y restricciones; flujo privado pendiente\. Coste de adaptación y operación no cotizado\.

Autor: agent:codex.

Depende de: mandato v1, sintesis v1.

### opcion\_territorio · option · v1

Territorio Vivo: Base territorial, evidencia y seguimiento; cambiar cobertura Granada–Rionegro al corredor\. Coste de adaptación y operación no cotizado\.

Autor: agent:codex.

Depende de: mandato v1, sintesis v1.

### opcion\_domino · option · v1

Efecto Dominó: Reserva para dependencias; los datos necesarios aún no están consolidados\. Coste de levantamiento y adaptación no cotizado\.

Autor: agent:codex.

Depende de: mandato v1, sintesis v1.

### opcion\_lote · option · v1

Lote Resiliente: Reserva para localización predial; no resuelve por sí solo cartera regional\. Coste de adaptación no cotizado\.

Autor: agent:codex.

Depende de: mandato v1, sintesis v1.

### comparacion · comparison · v1

Presupuesto Vivo \+ Territorio Vivo cubre decisión presupuestal, territorio y seguimiento con menos dependencia de datos inexistentes\. Dominó y Lote se conservan como reservas\. Alternativa operativa si no funcionan flujos privados: hoja de cálculo y láminas, admitidas por el reto\.

Autor: agent:codex.

Depende de: fuente\_reto v1, opcion\_domino v1, opcion\_lote v1, opcion\_presupuesto v1, opcion\_territorio v1.

```json
{
  "cost_limit": "No hay cotización de desarrollo; COP 5.000 millones es el fondo simulado de intervenciones ambientales, no presupuesto de software.",
  "document": "seleccion_propuestas.md"
}
```

### riesgo · risk · v1

Riesgos: presentar funciones documentadas como ejecutadas, arrastrar territorio provisional, fraccionar costos, asumir eficacia, doble contar intervenciones o inventar dependencias\. Mitigar mediante fuentes, pruebas reales y faltantes explícitos\.

Autor: agent:codex.

Depende de: fuente\_reto v1, incertidumbre v1, opcion\_presupuesto v1, opcion\_territorio v1.

### eleccion\_delegada · decision · v1

Codex recomienda avanzar con Presupuesto Vivo como núcleo y Territorio Vivo como soporte territorial y de seguimiento, por delegación del usuario\. Selección preparatoria de iniciativas; portafolio ambiental y comprobación integrada todavía pendientes\.

Autor: agent:codex.

Depende de: comparacion v1, fuente\_http v1, fuente\_reto v1, mandato v1.

Aprobación vigente: pendiente.

```json
{
  "delegated_choice": true,
  "document": "seleccion_propuestas.md",
  "human_personal_selection_claimed": false,
  "selected": [
    "Presupuesto Vivo",
    "Territorio Vivo"
  ]
}
```

### req\_productos · requirement · v1

Producir tablero de máximo cinco hallazgos, portafolio localizado con medidas y costos MEA, y ficha de riesgo residual/dependencias/seguimiento; cada afirmación debe distinguir dato, inferencia, supuesto o faltante\.

Autor: agent:codex.

Depende de: eleccion\_delegada v1, fuente\_reto v1.

### req\_escenarios · requirement · v1

Adaptar la cobertura a Rionegro–Guarne–Marinilla, usar escenarios suministrados y revisar SSP3\-7\.0/2060, conservando trazabilidad, ausencias y la diferencia entre la meta 2035 y los hitos del primer año\.

Autor: agent:codex.

Depende de: eleccion\_delegada v1, fuente\_meta v1, fuente\_reto v1.

### criterio\_entrega · criterion · v1

La entrega debe contener los tres productos con fuentes, riesgo residual y contraste del escenario; no dar por listo un flujo privado sin ejecutarlo\.

Autor: agent:codex.

Depende de: req\_escenarios v1, req\_productos v1.

```json
{
  "metric": "productos_completos",
  "reject": "Falta cualquiera de los tres productos, el contraste SSP3-7.0/2060 o se atribuye ejecución/eficacia no demostrada.",
  "threshold": 3,
  "unit": "producto"
}
```

### req\_presupuesto · requirement · v2

El total del portafolio debe ser como máximo COP 5\.000 millones con unidades funcionales indivisibles de la tabla del reto, sin duplicaciones y buscando el máximo de intervenciones posibles\. Explicitar conteos y restricciones; conservar el costo completo de PSA aunque se describa un primer año\.

Autor: agent:codex.

Depende de: eleccion\_delegada v1, fuente\_reto v1.

### criterio\_presupuesto · criterion · v2

Rechazar una cartera cuyo costo calculado exceda el fondo simulado, fraccione unidades sin autorización o no documente la búsqueda del máximo de intervenciones posibles\.

Autor: agent:codex.

Depende de: req\_presupuesto v2.

```json
{
  "metric": "costo_portafolio",
  "reject": "total > 5000000000 COP, unidad fraccionada sin instrucción, doble conteo o ausencia de comparación de conteos y restricciones para maximizar intervenciones.",
  "threshold": 5000000000,
  "unit": "COP"
}
```

## Alcance del informe

- El informe resume el expediente; no verifica por sí solo la verdad de sus fuentes\.
- Aceptar fases no demuestra superioridad metodológica ni impacto de campo\.
- El modo local no autentica identidades ni custodia externa; sus revisiones y recibos son declaraciones del entorno de trabajo\.
