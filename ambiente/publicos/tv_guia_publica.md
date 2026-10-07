# Módulo público de resultados · Territorio Vivo

Este paquete conserva ocho archivos del módulo que funciona en la [consulta pública](https://territorio-vivo-five.vercel.app/resultados). Contiene parche curado y manifiesto de bytes. No crea una aplicación distinta ni vuelve a desplegar.

La versión adoptada usa base 19214fceffd89a0de9131acc90fc3fd4205d8a62 y patch completo SHA256 d1983b9f4fe1cf3f58039001e314b3968daebe95f2dc2fbcb2aa317e4510e0de. El parche curado es un subconjunto: conserva landing y rutas públicas, interfaz, estilos, lector estático y snapshot. Omite pantallas de autenticación, enlaces complementarios en documentación, configuración de despliegue y pruebas. No reproduce por sí solo todo el despliegue.

## Contenido y dependencias

/resultados consulta un snapshot público estático, sin sesión, organización o DB. /metodologia dirige a /resultados#metodologia; /api/public/resultados sólo implementa GET. Los filtros por municipio y cartera cambian diagnósticos y residuales; la cartera financiera mostrada es D6. Reutiliza RootLayout y dependencias existentes de la base: Node22, Next16.4, React19.3, lucide-react y estilos comunes. No incluye la base completa ni credenciales.

Sobre una copia compatible y autorizada de la base, inspeccionar manifiesto y comprobar primero con git apply --check modulo-resultados-publicos.patch. Aplicación y publicación corresponden al propietario. No aplicar a ciegas sobre cambios locales o versiones divergentes.

La compilación adoptada fue npm run build -- --webpack, que invoca NODE_ENV=production next build --webpack. Para este módulo se omite el script combinado con migraciones; comprobar la configuración antes de usarlo. Esta guía no ejecuta instalación, migración, Git o despliegue.

## Fuentes y límites

Snapshot fijo de tres CSV públicos del commit 84b0199ff88828531bb0cf861d2d4d7cf09c5736, identificado en interfaz; no promete lectura del último MAIN. P1 tiene 21 cruces categóricos municipales; P2 seis unidades D6; P3 42 cruces cualitativos D6/N1 × tres municipios × siete dimensiones. Hashes originales en manifiesto e interfaz. No incluye los 90 basales individuales institucionales ni registros de organizaciones.

La fecha de consulta del snapshot no es observación física. Sitios, basales físicos y custodios aceptados siguen pendientes donde así lo indican las fuentes. No hay eficacia de campo, atribución causal o reducción numérica V/R acreditadas. RETO y PROP son locales; acceso público no equivale a licencia ni aval institucional.

Verificación de producción del 7 oct. 2026, 13:16:48 Bogotá: lectura sin Cookie/Authorization, resultados y alias metodología 200, API pública 21/6/42, privadas 401 y escritura pública 405. Navegador muestra municipios, filtros, evidencia y seguimiento. Organizaciones conservan su espacio protegido. Acredita consulta publicada, no ejecución ambiental.

Excluye autenticación, guardas, DB, credenciales, tests, logs, configuración privada y rutas de máquina. No reproduce íntegramente fuentes institucionales ni las declara con licencia abierta.
