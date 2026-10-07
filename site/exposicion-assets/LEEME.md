# Vistas de exposición: integración y procedencia

Archivos estáticos sin dependencias ni servicios:

- `presentacion/index.html`: 7 bloques orales (0:40/1:10/1:20/0:50/1:00/1:20/0:40 = 7:00 en total), en 8 láminas porque el bloque 3 tiene dos, más una lámina de preguntas fuera del tiempo oral.
- `metodologia/index.html`: visión general, 6 etapas (fuentes → datos → factor S/CA → cartera → residual/MEA → revisión), ejemplos de verificación y límites.
- `exposicion-assets/expo.css`, `exposicion-assets/expo.js`: estilos y motor compartidos.

Rutas: las páginas cargan `../exposicion-assets/…` y enlazan `../`, `../presentacion/` y `../metodologia/`. Ambas enlazan el PDF final de 2 páginas en `/entregables/ANEXO_METODOLOGICO.pdf`. El build del publicador ya copia los tres directorios y el PDF; estas vistas no lo modifican.

Controles:
- Flechas, Re Pág/Av Pág, espacio, Inicio/Fin y 1–9; deslizar en táctil.
- N muestra las notas; E abre el modo estudio, que también sirve para imprimir; F activa la pantalla completa.
- T y R (solo en la presentación): cronómetro de ensayo y reinicio. Es ayuda local, no evidencia de duración.

Barras: escala lineal, cada segmento = costo / 5.000. `expo.js` marca y registra en consola cualquier barra cuya suma no coincida con su total o saldo. No hay mapa geográfico.

## Procedencia exacta (lectura de este escritor)

| Fuente | SHA256 (prefijo) | Alcance de la lectura |
|---|---|---|
| P2 MD v3.1 | 48e205adc32c | Completa |
| P2 CSV | 92696ddfff34 | Completa |
| P2 MD v3.3 | 3d4b4693feaf | Solo búsqueda del empate D6/otras seis y del alcance de las 17 unidades |
| p2_justificacion.md | (sin hash registrado) | Completa |
| P3 MD v4 | f3b8791ac0cf | Completa |
| P3 MD v6 | b83ca6957498 | Líneas 112–145: ejemplos físicos PROP, estados de asignación, localización del residual |
| variables_seguimiento.csv | — | No releída en su versión 057e4d279c9e; las vistas solo usan el total de 34 y los seis ejemplos tomados de P3 v6 |
| P1 tablero | — | Completa |
| PITCH V4.1 | 32f6d55379dc | Guion, líneas 1–30 |
| PITCH V4.3 | d5c31aea6edd | Búsqueda de las tablas Q01–Q09, C03 y preguntas probables |
| ANEXO MD | df030a6fbc23 | Completa |
| ANEXO MD final | b397732e06e9 | No releída; las vistas solo enlazan el PDF |
| goal_ejecucion.md | — | Completa |

No se leyeron revisiones antiguas ni fuentes internas con basales individuales; no se publican basales individuales.
