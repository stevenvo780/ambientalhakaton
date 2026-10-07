# Vistas de exposición: integración y procedencia

Archivos estáticos sin dependencias, red externa ni servicios:

- `presentacion/index.html`: modo diapositivas de 7 bloques orales (0:40/1:10/1:20/0:50/1:00/1:20/0:40 = 7:00 en total), en 8 láminas, más una lámina de preguntas fuera del tiempo oral y del objetivo del cronómetro. Tema oscuro de agua profunda.
- `metodologia/index.html`: página web normal y larga, sin diapositivas ni reloj, con menú de anclas, filtro por tipo de afirmación y componentes interactivos. Tema claro.
- `exposicion-assets/datos.js`: datos agregados públicos de P1/P2/P3, sin basales individuales, con autochequeo de totales.
- `exposicion-assets/expo.js`: componentes y motor.
  - Componentes: río del fondo (Sankey proporcional al costo), tablero cartera × municipio con esquema territorial rotulado «no es mapa», matriz H1–H5, siete máximas, escenario referencia ↔ SSP3 ↔ SSP2 exploratorio, reapertura y capas 3D conceptuales.
  - Motor de láminas: solo si la página tiene `.lamina`.
- `exposicion-assets/expo.css`: estilos de ambas vistas.

Ambas páginas enlazan la raíz `../`, la otra vista y el PDF final `/entregables/ANEXO_METODOLOGICO.pdf`. El build del publicador copia estos directorios y el PDF.

Controles de la presentación:
- Flechas, Re Pág/Av Pág, espacio, Inicio/Fin y 1–9; deslizar en táctil.
- N muestra las notas; E abre el modo estudio; P pausa el movimiento; T y R manejan el cronómetro de ensayo (ayuda local, no evidencia); F activa la pantalla completa.
- El hash `#id` enlaza cada lámina. Un hash malformado o desconocido no reinicia la vista.
- `prefers-reduced-motion` desactiva animaciones y transiciones.

Fuentes vigentes en el corte de 12:34 (prefijo SHA256): P1 `d7d9356630b8`, P2 MD `29cdc12dc5d0`, P2 CSV `92696ddfff34`, justificación `ad8f0a7c222a`, P3 MD `cf7befd053ae`, P3 CSV `a4635a041318`, variables `057e4d279c9e`, catálogo `4bfa305f9ba4`, script `09626b8633d4`, PITCH `3517e959b6d4`, PDF `83e58b76faac`.

Lectura completa: P1, P2 v3.1, P3 v4 y ANEXO MD `df030a6f`. Lectura parcial: P3 v6 (ejemplos físicos), PITCH V4.1 (guion) y V4.3 (preguntas). Los cambios posteriores de P2 v3.4 y P3 v7 se incorporaron según las notas del coordinador (desempate PROP abierto), sin relectura completa.
