# Vistas de exposición: integración y procedencia

Versión POST-14 (corte de las 15:25 Bogotá, 7 oct. 2026). **M6-2** = {01, 03, 04, 08, 14, 15}, 5.000 M en seis unidades con saldo 0, es la candidata principal provisional. D6 queda como comparador histórico (decisión de las 13:58) y N1 = 4.700/5. Los porcentajes son de presupuesto, no de impacto.

Fuentes: P2 v3.8 (`af55925fadee`), P3 v8.3 (`edcef4a66b59`), variables (`d03c83b1b314`) y PDF final de 2 páginas (`a018559c997b`). El PDF histórico de las 13:58 (`3505800107fb`) se enlaza desde la metodología a su copia inmutable en GitHub.

Archivos de este escritor:
- `presentacion/index.html`: modo oral lineal, 10 láminas: 9 orales en 7 bloques (7:00 en total) más la lámina de preguntas fuera del oral. Solo avanza Siguiente o la flecha. Ariadna lidera; Brahyam y Steven responden preguntas.
  - Tiempos: 0:40 / 1:10 / 1:20 / 0:50 / 1:00 / 0:55 / 1:05 = 420 s. El bloque 6 (residual) cede 25 s al bloque 7, que pasa a ser «Método y cierre»: método de 5:55 a 6:20 y cierre de 6:20 a 7:00. El PITCH, que tiene otro editor, conserva su propia distribución; el equipo decide cuál ensaya.
  - Lámina de método: fuentes → agentes en paralelo → cálculo y contraste → QA independiente → P1·P2·P3 → decisión humana → consulta pública. Tiene tres accesos:
    - [Análisis por capas y orquestación](https://github.com/stevenvo780/ambientalhakaton/tree/main): este repositorio, que sustenta la decisión.
    - Presupuesto Vivo: presupuesto.
    - Territorio Vivo: territorio y seguimiento.
    - PV y TV muestran M6-2 actual, verificada POST-14 y fijada al corte 3cc (PV con D6 como comparador histórico).
  - Frase oral propuesta para esa lámina (≤ 25 s): «Así llegamos: partimos de las fuentes oficiales, trabajamos en frentes paralelos con un responsable por archivo, recalculamos y contrastamos con SSP3, pasamos revisión independiente y la decisión final fue humana. Todo es consultable en el repositorio, Presupuesto Vivo y Territorio Vivo.»
- `metodologia/index.html`: página web normal. Incluye:
  - Decisión POST-14 e historia conservada.
  - Dashboard explorable.
  - 14 códigos institucionales como base primaria y 20 PROP auxiliares.
  - Orquestación, software, verificación con SHA y límites.
- `exposicion-assets/datos.js`: datos agregados públicos, sin basales individuales.
  - Residual de M6-2 tomado de P3 v8.3.
  - Celdas de escenario literales de P2 v3.8: 01/03 comparten las filas BIO69/68; salud58 es constante.
  - Autochequeo de totales.
- `exposicion-assets/expo.js`, `exposicion-assets/expo.css`: motor, componentes y estilos (incluidos los ajustes para 720 y 900 px de alto, móvil y movimiento reducido).

Archivos de otro autor (helper), no editados aquí: `exposicion-assets/explicaciones-m62.js` y `explicaciones-m62.css`. `expo.js` llama a `window.mountM62Explain(contenedor, { sceneKey, data, reducedMotion })` al entrar en una lámina y ejecuta su limpieza al salir. Claves del helper: `decision`, `pertinencia`, `sacrificios`, `residual`, `tablero` e `intercambio`. Se usan en la presentación: `decision` (lámina 1, como visual principal; el SVG del río se oculta solo si el helper se monta), `tablero` (3), `intercambio` (3b), `pertinencia` (4) y `residual` (6). `sacrificios` queda disponible, sin uso. Los contenedores `[data-m62-explain]` se añaden solo cuando el helper está listo.

Enlaces: la raíz `../`, la otra vista y `/entregables/ANEXO_METODOLOGICO.pdf?version=a018559c997b`.

Software público: Presupuesto Vivo y Territorio Vivo muestran M6-2 actual, verificada POST-14 con QA independiente y fijada al corte 3cc; la administración está protegida.

Límites: el río representa presupuesto, no agua; el gráfico SSP3 muestra amenaza institucional independiente de la cartera; no hay mapa geográfico ni eficacia demostrada.
