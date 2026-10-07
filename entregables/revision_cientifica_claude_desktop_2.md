# Revisión científica 2: Claude (P2 v2, P3 v2 y publicabilidad)

**Autor:** Claude Opus 5.5, razonamiento xhigh, Fedora local. Cuota desconocida; sin respaldo ni subdelegación.

**Fecha verificada con `date` (Bogotá, 7 de octubre de 2026):** lectura desde las 11:31:25; redacción terminada después de las 11:32:58.

**Entradas:** instantánea `20261007T163100Z`, commit `c1aaaea11561d9c7cb6e9c64a0f7f3d2abda9d25`. Los 12 SHA-256 coinciden con el manifiesto.

| Archivo | SHA-256 |
|---|---|
| `entregables/p1_tablero.md` | `485a635e7afd6238af0cb35d20616339a8efd31181281613036feb55643cc791` |
| `entregables/p2_portafolio.md` | `86baccd52ac2144dfb02aca976c7aae71cf514cc51040b5cef90fec356f340b8` |
| `entregables/p2_portafolio.csv` | `6989e983a06568b3df1ad62159652e9fd429a08419bde77b57d024b1789f34d5` |
| `entregables/p2_justificacion.md` | `7e8de333d1e023507aae37a24341ff86042d6f3c1c583a32acc9f13ea273fac2` |
| `entregables/p2_comparacion_financiera.json` | `cb70858721e17e45e1073f667a6fe634f077fa346e102bf09f27dc3862852e45` |
| `entregables/p3_riesgo_residual.md` | `39f721f2345d50b41ceb095690ac53686dda92f9f0fa480f272cd2bfa288d3d9` |
| `entregables/p3_riesgo_residual.csv` | `517a76728731090a33820af65a66f3f8daf62423f3c083ef7a03feb97f66150f` |
| `entregables/variables_seguimiento.csv` | `e71825a4cf2489f954b1083ea74707cd529de8b06a90f52fba2f4b78ca5b808a` |
| `caso/uso_legal_datos.md` | `4e4c94f51a20816f04facd7a438ef9711cfb90d97dd945d7e10f521987a75a26` |
| `caso/publicabilidad_insumos.md` | `96c2ccc6530554f2201b57cdb526ce2a9ec85f79c0dfe2c19daad2cb8fef529c` |
| `caso/brechas_escenarios_mea.md` | `245ac0432020a13c0ebfe4f99a3a90071f68432cbcb74204128d4c32c330fa77` |
| `caso/catalogo_costos_reto.csv` | `4bfa305f9ba4f0553ad9a2e51fa24a18ab544f14a8e602348522e46c5067f1f6` |

**Primarias leídas:** la celda B7 de la hoja «Sobre este documento» en M-E-2411, M-E-2897 y M-E-2601.

**Alcance:** no publico valores basales ni cito texto legal más allá de lo necesario. **No es un dictamen jurídico certificado ni un permiso.**

**Etiquetas:** **[D]** dato · **[H]** inferencia · **[C]** corrección propuesta.

## Objeciones anteriores: resueltas o retiradas

| Objeción anterior | Estado | Dónde |
|---|---|---|
| O1 (56 % del fondo con hipótesis de biodiversidad y agua) | Resuelta | P2 L56 |
| O2 (déficit de InCaHIDRO-01 como residual) | Resuelta | P2 L60; P3 L14 |
| O3 (Marinilla solo con unidades compartidas) | Resuelta | P2 L58 |
| O4 (SAT de 5 unidades, 4.200 con saldo de 800, sin depender de Salud) | Resuelta | P2 L127; P3 L73 y L80 |
| O5 (redondeo y misma categoría en AT19, AX19 y BB19) | Resuelta | P2 L136; P3 L27 |

También queda resuelto que SSP3-7.0/2060 es obligatorio por confirmación del operador y que SSP2 es solo exploratorio (P3 L25 y L94; P2 L86 y L134). P3 L9 admite beneficiarios compartidos entre 07 y 08 sin exigir personas distintas.

**Retiradas:** N1 como línea base y la regla "el conteo solo desempata" (mi informe §9), y la formulación "igual en SSP1, SSP2 y SSP3".

## Objeciones nuevas

### N1. El aviso B7 no se limita a M-E-2411

**[D]** Leí B7 directamente en dos libros más:

- las fichas MEA **M-E-2897** (Producto 15);
- la dimensión desastres **M-E-2601**.

Ambos traen el mismo aviso: uso exclusivo de CORNARE y aval previo para "uso, mención, reproducción o modificación".

`uso_legal_datos.md` documenta B7 solo para M-E-2411 (hechos y fila 1 de su tabla). Para las fichas solo dice "cita de campos/códigos" (fila 4); para M-E-2601, "alcance por confirmar". Sin embargo, P2, P3 y `variables_seguimiento.csv` reproducen extensamente el contenido de las fichas: campos C9–C22, nombres y códigos de indicadores.

**[H]** El inventario legal subestima el alcance del aviso. No infiero infracción.

**[C]** Registrar B7 recurso por recurso: M-E-2897 y M-E-2601 verificados; M-E-2603, M-E-2637, ASCA, el Plan y el Manual sin verificar aquí. Aplicar a las fichas la misma condición visible que al master, e incluirlas en la consulta al custodio.

### N2. La política distingue los datos publicables por momento, no por criterio

**[D]**

- Los 357 registros "ya publicados" se conservan, y los 90 nuevos se retienen (`uso_legal_datos.md`, §inicial; `publicabilidad`, §«Corte legal»).
- Ambos lotes son reproducciones literales de libros con el mismo aviso B7.
- P2 L136 y L86 publican valores ya incluidos en los 357, con 6 a 10 decimales.

**[H]** Que un lote ya estuviera publicado no es un criterio de derechos, sino de oportunidad. La precisión publicada además excede lo que el argumento necesita.

**[C]** Declarar un criterio explícito. Por ejemplo: cita acotada al argumento, con categoría y 3 decimales, más atribución y condición visible. Aplicarlo por igual a ambos lotes mientras el responsable legal decide. No es un permiso; es coherencia interna.

### N3. Mis propios archivos anteriores contienen valores que la política hoy retiene

**[D]**

- Mi `revision_pitch_claude.md` (11:08) incluye valores individuales de InCaRD-04 de dos municipios, tomados de M-E-2601.
- Mi `caso/evaluaciones/claude/informe.md`, §9 (11:00), incluye valores de InCaRD-01 e InCaRD-04, y valores InCaHIDRO tomados de P1 o de coordinación.
- `variables_seguimiento.csv` marca hoy esos indicadores como "retenido por revisión de derechos".

**[C]** El publicador único debe excluir o redactar esas líneas antes de cualquier publicación. No las edito porque este encargo solo me autoriza a escribir este archivo. Mis revisiones posteriores ya usan solo categorías.

### N4. P3 v2 no tiene diseño de atribución

**[D]** P3 separa ejecución, cambio observado y atribución (L39 y L49) y exige una línea base física (L43). Pero no define unidades de comparación sin intervención, contrafactual ni registro de programas concurrentes; en P3 no aparece "contrafact", "sin intervención" ni "comparación con". Los índices SIIVRA son municipales, mientras que 03, 07, 08 y 09 son intervenciones localizadas.

**[H]** Un cambio en V municipal entre mediciones no puede atribuirse a D6. Faltaría la escala de sitio y habría confusión con otros programas (antecedentes AM y MR) y con cambios de método.

**[C]** Añadir a P3 un diseño mínimo:

1. línea base física antes de intervenir;
2. re-medición con el mismo método;
3. sitios o municipios de Valles sin la unidad como comparación;
4. registro de programas concurrentes;
5. análisis de contribución.

La meta del 30 % a 2035 se trata como contribución, no como efecto atribuible.
