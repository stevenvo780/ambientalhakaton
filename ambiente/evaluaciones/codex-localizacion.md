# Localización y resolución espacial: auditoría de preparación

Fecha: 2026-10-07. Inspección estática, solo lectura; sin tests, llamadas a servicios, DB, cambios de código/Git/configuración/despliegue ni activación de goals. Única escritura: este informe.
Base final comprobada: `../paquete/caso/propuesta_principal.md`, SHA-256 `a4af4e87ec7d40d55a79d026b8401ee4b48114eeda2d645ce505900c318b3767`.
Referencias: `../paquete/caso/matriz_requisitos_completa.md` (R02/R03/R12–R19, Q02/Q07–Q09, P01/P03, I04–I09), `revision_documentos.md` y `revision_excel.md` del mismo directorio. Dictámenes Claude/Muse son crítica preparatoria de versiones anteriores, no aceptación de la base final.
Localizadores `src/...`, `tests/...` y `data/...` son relativos al repositorio lote-resiliente; `../paquete/...`, relativos a este informe. Las capacidades siguientes están observadas en archivos, sin nueva validación de ejecución.

**Dictamen:** hay validación geométrica y advertencias útiles, pero no una garantía de precisión predial ni un contrato del corredor/P1/P3. Reutilizar Lote Resiliente solo si una actuación necesita un sitio sustentado; conservar Presupuesto Vivo principal y Territorio Vivo de apoyo. Una tabla municipal puede resolver la localización provisional sin construir otra aplicación.

## Capacidades y cinco vacíos prioritarios

| Frente | Capacidad observada y localizador | Vacío y consecuencia para el caso |
| --- | --- | --- |
| 1. Contorno y autorización | `src/saas/geo.ts:23` valida WGS84/topología; `:83` exige PRJ y transformación explícita del shapefile. `src/saas/service.ts:273` añade validación PostGIS. | `src/saas/types.ts:10` y `src/saas/schema.ts:32` no registran procedencia, fecha de levantamiento, incertidumbre ni autorización del contorno. Un dibujo válido puede guardarse como lote sin acreditar un predio. Exigir esas evidencias antes del detalle predial. |
| 2. Escala y fecha | `src/saas/colombia-sources.ts:29` conserva desconocidos; `:86` explica que SGC es municipal; `:232` rechaza respuestas parciales. `src/saas/service.ts:131` comprueba cobertura del contorno. | En `service.ts:141`, disponibilidad depende de estado/cobertura, no de aptitud espacial o temporal; se emiten m²/%/distancias aunque resolución o observación sean desconocidas. Añadir aptitud para la decisión separada de disponibilidad. Las advertencias actuales no son un bloqueo. |
| 3. Corredor y referencia | `data/cornare/catalog.json` contiene informes de los tres municipios: Rionegro rural/degradadas; Guarne y Marinilla rural/urbano/degradadas. `data/cornare/geography/manifest.json` identifica la muestra como AOI operativo de Rionegro. | El catálogo no acredita lectura completa ni geometrías útiles en todo el corredor. `src/saas/colombia-sources.ts:294` filtra un rectángulo colombiano, no Rionegro–Guarne–Marinilla; `:299` limita el AOI a 6 km/lado y 25 km² con contexto. No convertir consultas prediales en diagnóstico regional ni extrapolar la muestra. |
| 4. Apariencia de exactitud | `src/saas/components/MapEditor.tsx:34` inicia una vista de Rionegro; `:78` permite zoom 18. `src/saas/report.tsx:32` advierte que el mapa es esquemático. | La vista inicial no depende de la ubicación textual del proyecto y el PDF imprime seis decimales de extensión; `report.tsx:34` imprime números sin política de precisión. Un municipio o referencia de caso puede aparentar un sitio exacto. Separar vista/contexto y emplazamiento, y limitar presentación según evidencia. |
| 5. Revisión, escenarios y MEA | `src/saas/service.ts:151` genera pendientes y mantiene medidas como declaradas; `:267` define reviewed como revisión interna. Observaciones fechadas: `src/saas/components/Observations.tsx:16`. PDF y snapshot: `src/app/api/projects/[id]/report/route.ts:15`. | `src/saas/types.ts:8` no tipifica dimensión/componente/escenario/MEA; falta una revisión de aptitud localizada y el contrato de P1/P3. Los antecedentes y una fecha de descarga no certifican sitio, eficacia, SSP ni reducción de vulnerabilidad. |

Existe lógica histórica con `requiredPrecisionM`, fechas y `parcelPrecision` en `src/domain/types.ts:5` y `src/domain/geo.ts:107`; `tests/geo.test.ts:1` prueba ese dominio. El análisis SaaS usa su propio `service.ts:123`: no atribuirle esos controles. La referencia nominal de `domain/geo.ts:125` derivada de escala/resolución tampoco acredita error posicional medido; no reutilizarla como autorización predial.

## Regla de localización y transferencia al sitio

- **Dato municipal:** conservar municipio y componente/dimensión del estudio; su categoría no se asigna a un punto, predio o huella. Las siete dimensiones son biodiversidad, recurso hídrico, seguridad alimentaria, hábitat, infraestructura, desastres y salud.
- **Escala de estudio:** registrar unidad de análisis, agregación, escala/resolución y horizonte. A/S/CA/V/R siguen separados; una amenaza cartográfica de movimientos en masa no reemplaza el estudio climático ni sus escenarios.
- **Cartografía temática:** representar únicamente la geometría efectivamente recibida, con cobertura, fecha, CRS y procesamiento; un cruce es coincidencia cartográfica. La generalización de 0,00005° declarada en `colombia-sources.ts:45` no es exactitud; el contexto de 250 m de `:296` no es incertidumbre posicional ni ronda legal.
- **Referencia de caso:** vista, nombre de municipio o AOI de comprobación sirve para orientar la pantalla; nunca se convierte en captación, microcuenca, predio o actuación elegible. Sin contorno oficial, mostrar nombre/referencia documental, sin dibujar un límite inventado.
- **Geometría predial autorizada:** solo admitir detalle del sitio con fuente permitida, procedencia del levantamiento, CRS/transformación, fecha y evidencia de aptitud revisada. Autorización de uso/publicación y suficiencia técnica son controles distintos; ninguna demuestra permiso de intervención.
- **Ubicación provisional:** municipio + sistema/zona solo si la fuente lo sustenta; `geometry=null` cuando no existe geometría. Rótulo persistente «ubicación provisional; sitio por verificar», incertidumbre desconocida y condición de cierre. No geocodificar direcciones privadas, crear centroides ni dibujar radios de error sin evidencia.
- **Transferir una medida:** verificar problema/factor S o CA, sistema protegido, coincidencia territorial, restricciones, unidad funcional, continuidad, ausencia de duplicación, actor y mantenimiento. Sin sitio o compromiso comprobado, conservar elegibilidad condicionada; una hipótesis de mecanismo no es eficacia demostrada.
- **Presentación:** deshabilitar dibujo/edición del supuesto sitio desde evidencia municipal o referencia de caso. Mantener leyenda de alcance junto al mapa; para cartografía recibida, distinguir límites/generalización. Ocultar coordenadas y métricas públicas que sugieran precisión predial no sustentada; redondear solo con criterio documentado, sin modificar originales ni elevar calidad por quitar decimales.

## Contratos propuestos para P1/P3; no implementados

Separar tres ejes: `nivelDecision=municipal|zona|predial`, `tipoSoporte=estudio|cartografia_tematica|referencia_caso|levantamiento` y `estadoLocalizacion=provisional|verificada|pendiente`. La resolución de decisión nunca supera la sustentada por sus fuentes.

| Objeto | Campos mínimos y regla |
| --- | --- |
| `ubicacion` | Municipio(s) del corredor, referencia territorial sustentada, nivel/tipo/estado, geometría opcional, CRS nativo/salida, transformación, procedencia/fecha de levantamiento, autorización y restricción de publicación; incertidumbre con unidad/método o `null` y motivo. La revisión no inventa precisión desconocida. |
| `fuente` | Institución, archivo/URL pública permitida, página/hoja/celda, checksum/versión, fecha de observación diferenciada de edición/consulta, periodo, cobertura, escala, resolución y procesamiento. Un faltante conserva `null` + motivo + decisión que podría cambiar. |
| `escenario` | Referencia/intermedio suministrado/SSP3-7.0, horizonte documentado, componente A/S/CA/V/R y dimensión. Sin insumo exacto: pendiente; no asignar 2040 al intermedio ni rotular mapas de 2018 o SSP2-4.5 como SSP3-7.0/2060. |
| `hallazgo` P1 | ID local estable, prioridad justificada, qué proteger, componente/dimensión, municipio/zona sustentada, fuente/escenario, etiqueta institucional/inferencia/supuesto/faltante, limitación, medida candidata/indicador y condición de revisión. Máximo cinco hallazgos; declarar cobertura o brecha de las siete dimensiones. |
| `seguimiento` P3 | Vínculo hallazgo–medida, residual cualitativo o cuantificado solo con soporte, escala territorial, brecha/variable mínima, decisión afectada, capturador/custodio propuestos o validados y disparador de revisión. No completar dependencias empresariales por proximidad. |
| `mea` | Código/ficha oficial y estado del vínculo; factor S/CA, definición/fórmula/unidad, fuente y cobertura de medición, línea base o ausencia, meta sustentada, frecuencia, responsable por rol y regla de ajuste. Separar gestión/producto de resultado. ID RETO local no equivale a código MEA. |
| `revision` | Versión revisada, rol técnico, fecha, evidencias consultadas, dictamen de aptitud, condiciones y pendientes. reviewed del proyecto no sustituye este dictamen ni un acto de autoridad. Exportación pública sin datos personales o localizaciones reservadas. |

Cadena exportable: **hallazgo → municipio/zona sustentada → fuente/escenario → limitación → medida/indicador**. La ausencia de un eslabón produce estado pendiente/condicionado y una pregunta concreta, no cero ni coordenada de relleno.
P1/P3 deben conservar IDs, procedencia, incertidumbre y versión en tabla/CSV/JSON legible; la geometría exacta solo se incluye cuando su publicación está permitida. El PDF predial actual no sustituye esos productos ni debe obligar a fabricar un lote para exportarlos.
Conexión P2: compartir `unidad_id` y condiciones del sitio con Presupuesto Vivo; una unidad que cubra varios municipios conserva un solo costo indivisible y no aumenta el conteo al dividirse en filas geográficas. Fondo conjunto COP 5.000 millones; cupos condicionados no son viabilidad demostrada.
MEA: los originales aportados carecen de fichas/valores suficientes para cerrar todos los vínculos (matriz I08/I09; `revision_excel.md`, §6). Si falta línea base, proponer su levantamiento y no calcular mejora porcentual. El 30% es meta a 2035, no eficacia de una medida ni compromiso del primer año.

## Cambios mínimos únicamente después del GO

1. Preferir tabla/lámina del caso con los contratos anteriores; integrar con Presupuesto Vivo/Territorio Vivo sin nuevas DB, cuentas, mapas regionales completos o plataforma. Mantener Lote Resiliente opcional y el pitch ≤7 minutos.
2. Si se autoriza código: DTO de localización/evidencia en `src/saas/types.ts` y política central de aptitud/corredor, reutilizando validación geométrica. Aplicarla al análisis/exportación, no solo a una advertencia visual; `available` debe seguir significando disponibilidad, con aptitud separada.
3. Ajustar únicamente `src/saas/components/MapEditor.tsx`, `Lots.tsx` y `src/saas/report.tsx` para contexto/provisional, autorización y política de precisión. No alterar geometrías originales para que parezcan aptas.
4. Añadir un adaptador de exportación P1/P3 del caso con límite de hallazgos, campos MEA y condiciones. Si falta tiempo o datos, entregar la tabla; cualquier persistencia adicional requiere alcance posterior explícito, no se presupone aquí.

## Pruebas pertinentes después del GO; ninguna ejecutada

| Caso de aceptación | Resultado exigido |
| --- | --- |
| CRS ausente/incompatible, ejes invertidos, PRJ contradictorio o geometría inválida | Rechazo del uso espacial; transformación explícita comprobable cuando exista fuente válida. Topología correcta no autoriza un predio. |
| Fecha desconocida, publicación/descarga confundida con observación o observación futura | Mantener tipo temporal y pendientes; impedir afirmación de estado actual. Un horizonte climático futuro autorizado permanece escenario, no se rechaza como observación futura. Antigüedad requiere criterio justificado, sin umbral inventado. |
| SGC municipal, escala regional, resolución desconocida o contorno sin autorización | Solo contexto a resolución sustentada; no etiqueta predial verificada, porcentajes de amenaza predial ni coordenadas públicas exactas por defecto. Seis decimales o generalización no cambian aptitud. |
| Municipio fuera del corredor, frontera ambigua o municipio solo declarado en texto | No incluir como decisión elegible P1/P2; conservar evidencia como contexto externo o condición de verificación. No usar el bbox colombiano como prueba de pertenencia. |
| Capa ausente/parcial frente a consulta completa vacía | Ausente/parcial conserva métricas desconocidas; vacía solo significa sin entidades en la consulta, sin declarar seguridad. Cobertura de consulta no demuestra cobertura temática exhaustiva. |
| Referencia Rionegro en pantalla con proyecto Guarne/Marinilla | Ningún sitio o hallazgo aparece elegido automáticamente; leyenda y exportación mantienen la ubicación sustentada y estado provisional. |
| MEA/SSP/línea base/dependencia faltantes o costo multisede | Exportación conserva brechas y condiciones; no inventa eficacia, escenarios, aristas ni fórmulas; no fracciona o duplica unidades/costos. |
| Revisión y exportación P1/P3 | Un revisor reconstruye la cadena desde fuente/página/celda y versión; datos personales/reservados excluidos; pendientes visibles; hasta cinco hallazgos y siete dimensiones cubiertas o explícitamente pendientes. |

**Cierre de preparación:** controles geométricos reutilizables; aptitud predial, pertenencia al corredor, escenarios y MEA todavía condicionados a datos/revisión y, para cambios funcionales, al GO. Este informe no localiza actuaciones nuevas ni certifica cumplimiento del reto.
