# Vistas de exposición: integración y procedencia

Archivos estáticos sin dependencias, red externa ni servicios:

- `presentacion/index.html`: **modo oral lineal**, 9 láminas para 7 bloques orales (0:40/1:10/1:20/0:50/1:00/1:20/0:40 = 7:00 en total), más una lámina de preguntas fuera del tiempo oral. Ariadna lidera; Brahyam y Steven responden preguntas.
  - Solo Siguiente o la flecha avanzan; no hay selectores y las cifras finales quedan fijas.
  - Al entrar en cada lámina, una animación breve resalta su contenido, sin avanzar sola ni cambiar ninguna selección.
  - Escenas: río del presupuesto D6; hallazgos H1–H5 marcados a la vez; D6 frente a N1 con panel municipal; diferencia de compras; siete máximas; referencia → SSP3-7.0/2060; residual y reaperturas; cierre; preguntas.
- `metodologia/index.html`: página web normal y larga, sin diapositivas ni reloj. Incluye:
  - Menú de anclas y filtro por tipo de afirmación.
  - Dashboard explorable: tablero cartera × municipio, matriz H1–H5, máximas y escenario seleccionable.
  - Orquestación, fuentes, verificación con SHA y límites.
  - Software público:
    - [Presupuesto Vivo](https://presupuesto-vivo-chi.vercel.app/hackathon): consulta abierta; administración protegida.
    - [Territorio Vivo](https://territorio-vivo-five.vercel.app/resultados): consulta abierta sobre el snapshot 84b0199; rutas privadas y administración protegidas.
- `exposicion-assets/datos.js`: datos agregados públicos de P1/P2/P3, sin basales individuales, con autochequeo de totales.
- `exposicion-assets/expo.js`: componentes y motor. En la presentación, cada gráfico se dibuja cuando su contenedor tiene ancho mayor que 0.
- `exposicion-assets/expo.css`: estilos de ambas vistas.

Ambas páginas enlazan la raíz `../`, la otra vista y el PDF final de 2 páginas `/entregables/ANEXO_METODOLOGICO.pdf`. El build del publicador copia estos directorios y el PDF.

Controles de la presentación:
- Flechas, Re Pág/Av Pág, espacio, Inicio/Fin y 1–9; deslizar en táctil.
- N muestra las notas; E abre el modo estudio; P pausa el movimiento; T y R manejan el cronómetro de ensayo (ayuda local, no evidencia); F activa la pantalla completa.
- El hash `#id` enlaza cada lámina; un hash malformado o desconocido no reinicia la vista.
- `prefers-reduced-motion` desactiva animaciones.

Límites: los porcentajes son asignación del presupuesto, no eficacia. El río representa presupuesto, no agua. El gráfico SSP3 muestra amenaza institucional, independiente de la cartera. No hay mapa geográfico.
