# Publicabilidad de los insumos y evidencias

La publicación de los avances propios, textos del reto y costos puede avanzar. La difusión de matrices municipales/sectoriales de terceros y sus derivados requiere además respetar condiciones de uso y aval, ahora en revisión. Los originales institucionales de 31 páginas y el ZIP permanecen locales hasta disponer de un derivado que omita información empresarial individual identificable. Esta revisión no establece una prohibición general de redistribución ni considera secreto un nombre público por sí solo.

## Regla y procedencia

El [enunciado público](https://github.com/stevenvo780/ambientalhakaton/blob/main/insumos/texto/RETO%20CLIMATE%20WEEK%20HACKATHON.txt), PDF p.3, limita la información empresarial del ejercicio a agregada, anonimizada o sintética y dice que no se entregará información reservada ni identificable; p.8 prohíbe utilizar información reservada. La presentación tiene procedencia institucional CORNARE y atribución al consultor. No se verificó una URL pública del mismo PDF/PPTX: no se confunde la página del Observatorio con publicación del documento íntegro.

Se admiten nombres de instituciones, consultor y otros nombres públicos sin información individual asociada. La situación diferente es un nombre empresarial enlazado con su ubicación, clasificación de riesgo o plan individual.

## Inspección concreta

Se revisaron visualmente las 31 páginas de la presentación y se ampliaron las capturas relevantes:

| Página | Hallazgo real | Tratamiento del derivado público |
|---|---|---|
| 14 | Tres mapas con etiquetas empresariales, ubicaciones y categorías de riesgo; SSP2-4.5. | Omitir esos mapas individuales; conservar gráfico agregado, hallazgos y factores. |
| 20 | Tres carátulas con nombres jurídicos y asociación a planes individuales. | Omitir carátulas; conservar texto institucional del programa de 32 organizaciones. |
| 24–27 | Usuario MRV, campo login municipal e identificadores operativos visibles. No se observó contraseña. | Omitir identificadores; conservar estructura del formulario y explicación MEA. |

Las fotos de talleres y las tablas municipales no contienen resultados individuales empresariales observados. No se inventa una reserva general sobre esos contenidos.

## Conjunto revisado y condiciones de uso

- README y documentos del caso: propuesta, plan, matriz de 75 requisitos, selección, revisiones, dictámenes, goal y guías; conservan sus estados y límites.
- Enunciados de ocho páginas, transcripciones, convocatoria y notas. Los costos son referencias simuladas, no presupuestos reales.
- Ocho Excel y sus JSON: datos municipales/regionales/sectoriales agregados. Se revisaron todas sus hojas y filas; no microdatos empresariales. La copia AS duplicada y el doble conteo MR/RM siguen señalados.
- Extracción textual/JSON de la presentación: no incorpora las imágenes identificables ni los nombres empresariales o logins visibles exclusivamente en esas capturas. Sigue siendo extracción, no sustituto completo de las figuras.
- Copias sanitizadas `ambiente/publicos/`, goal y estado de orquestación, más resúmenes de progreso para la web.
- SpecOrganon como submódulo fijado al commit documentado, sin copiar su árbol ni repos anidados.

Fuera del primer release: PDF/PPTX originales de 31 páginas y ZIP que los incluye; perfiles/autenticación, archivos .env reales, respaldos, dependencias y directorios de sesiones. Los originales se conservan intactos. Se documentará cada derivado público con origen, SHA, transformaciones y limitaciones antes de publicarlo.

## Secretos y metadatos operativos

Escaneo acotado de 67 archivos de ambiente, incluidos los paquetes congelados: no se confirmó token, contraseña, clave privada, encabezado autenticado ni URL con contraseña real. Los patrones del runner son generación/parametrización de secretos al ejecutar; `deployweb.authorization` es prosa de autorización del usuario. No se declara un incidente por esos falsos positivos.

Rutas personales, IP de red privada, nombres de host, PID y TUI son metadatos operativos: conviene omitirlos del progreso web y usar las copias sanitizadas. Por sí solos no constituyen credenciales ni justifican bloquear la publicación autorizada. Algunos operativos entraron en el push manual: no se hacen cambios Git desde esta auditoría.

## Acceso del equipo

La [web canónica](https://hackathon-ambiental.stevenvallejo.com) presenta resúmenes. Las fuentes versionadas se consultan en [GitHub main](https://github.com/stevenvo780/ambientalhakaton/tree/main), con su SHA y hora. La FAQ y guía indican el orden y el fallback: subir README a Proyecto ChatGPT no descarga automáticamente documentos si no hay navegación. No se crea un GPT personalizado.

El [inventario nominal](../ambiente/inventario_publicacion.json) contiene decisiones por archivo y SHA locales de revisión. Su sello temporal no certifica que cada archivo exista en ese mismo hash remoto. Toda publicación de nuevos artefactos corresponde al publicador único autorizado por GO.

## Condición nueva de autoría y uso (7oct2026)

Se verificó en el masterM-E-2411, hoja `Sobre este documento`, B7, un aviso de uso exclusivo de CORNARE y aval/autorización para uso, mención, reproducción o modificación. Acceso por URL pública no equivale a licencia abierta. La interpretación jurídica del aviso y el alcance del caso siguen en revisión por el responsable legal; no se deduce ilegalidad por el solo aviso ni se certifica autorización general. No se añaden copias masivas de esas fuentes hasta dictamen. Las comprobaciones técnicas de datos agregados/ausencia de secretos siguen siendo válidas, pero no sustituyen esa revisión de derechos.

La allowlist previa describe privacidad y formato del primer lote, no una licencia libre de todas las fuentes. Originales ya publicados mantienen trazabilidad; ningún cambio Git, retirada o republicación se hace desde esta auditoría. Los avances propios de decisión y estado pueden continuar mostrando la condición pendiente.

## Corte legal verificado de continuidad

La [revisión de uso de fuentes](uso_legal_datos.md) corrige el borrador anterior con textos oficiales: Ley23art31 y derechosart12, Decisión351arts7/21/22a/28, Ley1712acceso y Ley1581datos personales. No certifica «uso honrado» automático, aval implícito, licencia abierta ni ausencia de infracción. Prosa propia y análisis de hechos pueden continuar con atribución/localizador y condición visible; la descarga pública y la autorización del usuario para publicar el trabajo propio no resuelven los derechos de terceros.

El extracto existente corresponde a **Rionegro/Guarne/Marinilla,21perfiles/357registros**. Se conserva trazabilidad sin llamarlo «autorizado por CORNARE». Los90nuevosbasales normalizados se mantienen internos; originalesPDF/PPTX31p yZIP quedan fuera del lote. La decisión es editorial sobre recursos concretos, no reserva general de todo dato municipal ni prohibición de mencionar instituciones. El avisoB7 se verificó directamente; su alcance respecto al extracto sigue pendiente de aclaración. Ningún hash es certificado jurídico o permiso.

## Verificación por recurso ampliada

También se leyó directamente B7 de las fichasM-E-2897 y de la dimensión desastresM-E-2601; los SHA y alcance están en [uso de fuentes](uso_legal_datos.md). No se presume que todos los documentos tengan idéntico aviso. El hecho de que357registros ya estén publicados no es una autorización ni una excepción jurídica: la revisión de cita, atribución, proporcionalidad y derechos es común al extracto existente y a los90retenidos. Los informes de modelos no adquieren autorización por formar parte de una revisión. La auditoría específica del commit externo y su corrección actual se documentan abajo; la intención editorial anterior no prueba ausencia de publicación histórica.

## Auditoría y corrección concreta del extracto publicado

Se cotejaron bytes de cuatro archivos del commit `cd2b08c232257957d8057bfd6db661acdc4d15eb` con SHA y con libro/hoja/celda del conjunto interno. La autoría del commit no permite atribuir aquí quién ejecutó la publicación. No se evalúan otros archivos por extrapolación de patrones.

| Archivo y localizador | Hallazgo confirmado, sin reproducir valores | Tratamiento actual |
|---|---|---|
| `ambiente/prioridad_reuso_observatorio_GO.txt`, párrafo basales |30registros individuales normalizados:12agua,6desastres,12bio;28apariciones numéricas, porque inversiónbio agrupaba3municipios. Son un subconjunto de90, distinto de357agregados. | Sustituidos por código/hoja/celda yNA; nota de basal retenido/acceso autorizado. |
| `caso/evaluaciones/claude/informe.md`, corrección punto4 (línea153 original) |3basales individuales GRD, repetidos del conjunto30. CA municipal agregado no se retiró. | Sólo3valores sustituidos por localizadores/NA; resto del contexto conservado. |
| `entregables/revision_pitch_claude.md`, propuesta p82 del texto |2basales SAT individuales, repetidos del conjunto30. | Sólo2valores sustituidos por localizadores/NA. |
| `entregables/revision_agy.md` | Códigos y agregados, sin nuevo valor individual localizado. | Sin retirada por coincidencia de regex; revisión histórica no acredita cartera actual. |

Los30registros se localizan por Guarne/Marinilla/Rionegro (filas22/26/29): aguaM-E-2603, SensibilidadD/F y CapacidadAdaptativaD/N; desastresM-E-2601, CapacidadAdaptativaD/J; bioM-E-2637, CapacidadAdaptativaD/H/J/L. B7 fue leído directamente también enagua/bio; sus SHA constan en uso de fuentes. El inventario público conserva conteos/localizadores y omite números retenidos. No se encontraron credenciales ni empresa identificada vinculada con ubicación/resultado individual en estos cuatro textos; esa inspección acotada no certifica todo el repositorio.

La sustitución corrige el contenido corriente hacia la decisión editorial de retener basales individuales; **no elimina el contenido del commit histórico ni acredita permiso de reproducción**. Se preservaron originales y respaldos privados0600; no se reescribió historia. Tampoco se declara infracción jurídica, licencia suficiente o secreto por el solo código. La revisión de atribución/proporcionalidad/aviso B7 aplica también a los357agregados existentes.

SHA del contenido publicado examinado: GO `8c15be813e379b62c6a25d5ab0bd25b2641511afd2589cd105774bf5082cdf88`; Claude `524d6224d92073a84473746bccf0dc20bfac1f073f87e8cc20be2a0495be3314`; AGY `02e704aaafdd4e238cb83cb1ce8dcec585e65973cee689354f16de7bb39cf9dc`; pitchClaude `8ff75e87f344f81a0e62fb8e60d20fa32cb2e7ac39ba865c01982404487cc667`. Los SHA corregidos se identifican en el recibo de publicación, sin equiparar corrección local con push confirmado.

Corrección acotada de contextoGO: se restauró íntegro el párrafo original conservando PlanVSNp51–52/66normalizados y recordatorio de descarga; sólo28apariciones numéricas→NA que representan30registros y nota retenido/acceso autorizado. Comprobación inversa devuelve exactamente el texto original al restaurar ese párrafo privado. SHA corrienteGO `b43a5d096518ca96abdc14c766375fdadb017c74172b8590f06114649451214a`; no elimina historia ni modifica agregados/contexto/costos.
