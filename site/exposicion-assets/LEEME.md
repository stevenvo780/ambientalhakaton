# Vistas de exposición: integración

Archivos estáticos sin dependencias ni servicios:

- `presentacion/index.html`: 7 bloques orales (0:40/1:10/1:20/0:50/1:00/1:20/0:40 = 7:00 en total), más una lámina de preguntas fuera del tiempo oral.
- `metodologia/index.html`: visión general, 6 etapas (fuentes → datos → factor S/CA → cartera → residual/MEA → revisión) y límites.
- `exposicion-assets/expo.css`, `exposicion-assets/expo.js`: estilos y motor compartidos.

Rutas: las páginas cargan `../exposicion-assets/…` y enlazan `../`, `../presentacion/` y `../metodologia/`; funcionan servidas en `/presentacion/` y `/metodologia/` (con o sin barra final). El anexo se enlaza en `/entregables/ANEXO_METODOLOGICO.pdf` como PDF final de 2 páginas; el build debe copiar ese PDF a esa ruta.

`build.mjs` actual solo copia cinco archivos raíz: hay que copiar también `presentacion/`, `metodologia/` y `exposicion-assets/` a `public/` y `.vercel/output/static/`.

Controles: flechas, Re Pág/Av Pág, espacio, Inicio/Fin, 1–9; deslizar en táctil; N notas; E modo estudio (documento continuo con notas, también al imprimir); F pantalla completa; T cronómetro de ensayo y R para reiniciarlo, solo en la presentación (ayuda local, no evidencia de duración). El hash `#id` enlaza cada lámina.

Fuentes: P2 v3.2, P3 v5, PITCH V4.1, ANEXO MD/PDF, P1, justificación P2 y goal. Barras lineales: segmento = costo / 5.000; `expo.js` marca en rojo y registra en consola cualquier barra cuya suma no coincida con su total o saldo. Sin mapa geográfico.
