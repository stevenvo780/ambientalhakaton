# Publicabilidad de los insumos y evidencias

La publicación de los avances propios, textos del reto y costos puede avanzar. La difusión de matrices municipales/sectoriales de terceros y sus derivados requiere además respetar condiciones de uso y aval, ahora en revisión. Los originales institucionales de 31 páginas y el ZIP permanecen locales hasta disponer de un derivado que omita información empresarial individual identificable. Este dictamen no establece una prohibición general de redistribución ni considera secreto un nombre público por sí solo.

## Regla y procedencia

El [enunciado público](https://github.com/stevenvo780/ambientalhakaton/blob/dev/insumos/texto/RETO%20CLIMATE%20WEEK%20HACKATHON.txt), PDF p.3, limita la información empresarial del ejercicio a agregada, anonimizada o sintética y dice que no se entregará información reservada ni identificable; p.8 prohíbe utilizar información reservada. La presentación tiene procedencia institucional CORNARE y atribución al consultor. No se verificó una URL pública del mismo PDF/PPTX: no se confunde la página del Observatorio con publicación del documento íntegro.

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

La [web canónica](https://hackathon-ambiental.stevenvallejo.com) presenta resúmenes. Las fuentes versionadas se consultan en [GitHub dev](https://github.com/stevenvo780/ambientalhakaton/tree/dev), con su SHA y hora. La FAQ y guía indican el orden y el fallback: subir README a Proyecto ChatGPT no descarga automáticamente documentos si no hay navegación. No se crea un GPT personalizado.

El [inventario nominal](../ambiente/inventario_publicacion.json) contiene decisiones por archivo y SHA locales de revisión. Su sello temporal no certifica que cada archivo exista en ese mismo hash remoto. Toda publicación de nuevos artefactos corresponde al publicador único autorizado por GO.

## Condición nueva de autoría y uso (7oct2026)

Se verificó en el masterM-E-2411, hoja `Sobre este documento`, B7, un aviso de uso exclusivo de CORNARE y aval/autorización para uso, mención, reproducción o modificación. Acceso por URL pública no equivale a licencia abierta. La interpretación jurídica del aviso y el alcance del caso siguen en revisión por el responsable legal; no se deduce ilegalidad por el solo aviso ni se certifica autorización general. No se añaden copias masivas de esas fuentes hasta dictamen. Las comprobaciones técnicas de datos agregados/ausencia de secretos siguen siendo válidas, pero no sustituyen esa revisión de derechos.

La allowlist previa describe privacidad y formato del primer lote, no una licencia libre de todas las fuentes. Originales ya publicados mantienen trazabilidad; ningún cambio Git, retirada o republicación se hace desde esta auditoría. Los avances propios de decisión y estado pueden continuar mostrando la condición pendiente.
