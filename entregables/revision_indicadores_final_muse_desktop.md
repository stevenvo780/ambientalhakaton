# Revisión indicadores final (Muse) — control P3v5/vars vs PDF

Acción real: 2026-10-07 12:03 Bogotá. Freeze final-718aea, commit local
`718aea550492ae24740abd29beadc7311970545b`, push PENDIENTE (SHAs locales).
SHAs: PDF `7c88ec67…`, MD `df030a6f…`, P2 `d35ab25f…`, P3 `7f984b1f…` (v5),
vars `efa576ea…`, pitch `32f6d553…`. Sin basales nuevas, rutas ni secretos.

Contraste: 6 PROP físicos P3 (ll.118–123: FUNC-BIO, AGUA-OPER, D13, D14,
VERDE-FUNC, D07) + filas vars contra explicación MD l.31/PDF.

- Producto/pago/desembolso ≠ efecto: P3 l.39 (ejecución/cambio/causalidad) y
  límites vars ("no demuestra...", "PROP, no protocolo oficial") coinciden con
  MD l.31/PDF l.77-79. Conforme.
- Denominador/método/frecuencia/custodia = propuesta: frecuencia/custodio
  propuestos + nulos en aceptado/sitio/inicio en las 6 filas. Conforme.
- 14 ≠ SAT13: P3 l.123, vars D07 ("ni SAT completo13", solo programa14
  Rionegro), MD l.11/PDF l.23. Conforme.
- 56% = (07+08+09)/5000 con aporte hipotético (MD l.13). Conforme.

## Desacuerdos materiales (1)

- **F1. SHA P3 obsoleta en documento final.** MD l.33 y PDF l.83 citan "P3v4
  `f3b8791ac0cf`"; el congelado trae P3v5 `7f984b1f…` (P2v3.2 sí coincide).
  Corrección: actualizar versión+SHA completa y re-congelar PDF (cambia su SHA).

Sin otros desacuerdos materiales en el contraste asignado. No se repiten
cupo/L5/C28 ya corregidos; sin índice automático, pesos ni eficacia.
Re-verificar SHAs tras el push pendiente.
