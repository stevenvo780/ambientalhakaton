# Progreso público y publicación

El usuario autorizó, tras el GO, a un publicador delegado como único escritor de Git. El delegado web mantiene exclusivamente `site/`, `ambiente/verificacion_web.json` y `ambiente/deployweb.json`.

1. Al terminar un archivo o una comprobación, cada ejecutor avisa al orquestador y al delegado web: archivo exacto, SHA-256, acción real con hora, resultado observado y pendientes. Una tarea recibida no se registra como producto terminado.
2. El delegado web revisa únicamente fuentes públicas aprobadas y actualiza `site/estado.json`. Conserva la fecha de la acción/fuente, los límites y el estado de GO; excluye IP privadas, rutas personales, credenciales y sesiones. No toma archivos arbitrarios del entorno ni ejecuta un watcher global.
3. El publicador delegado publica cada lote terminado en la rama `dev`, preservando los commits del usuario. Vercel está conectado al repositorio `stevenvo780/ambientalhakaton`, producción `dev`, directorio raíz `site`. No se requiere un token nuevo ni un workflow con secretos.
4. El build produce HTML estático con los 75 IDs y genera `deployment.json` leyendo solamente `VERCEL_GIT_COMMIT_SHA`. No se hace un commit para insertar su propio SHA.
5. El navegador consulta `estado.json` cada 25 segundos; la fecha no cambia al consultar. Git y el despliegue tienen latencia. La configuración automática fue comprobada; el siguiente push real del publicador permitirá verificar el ciclo completo sin crear commits de prueba.

Archivos fuente de este lote: `site/index.html`, `site/styles.css`, `site/app.js`, `site/estado.json`, `site/requisitos.json`, `site/package.json`, `site/build.mjs`, `site/vercel.json`, `site/.vercelignore`, `site/.gitignore`, `site/diseno.md` y este protocolo.

Excluir del push: `site/.env*`, `site/.vercel/`, `site/public/`, `site/.cache/`. El vínculo de la CLI generó `.env.local` automáticamente; no se leyó ni se subió al despliegue. La publicación CLI puede continuar con `node build.mjs` y `vercel deploy --prebuilt --prod` desde `site/`, usando la cuenta existente, sin modificar Git.

Para actualizar la matriz web, el único escritor web toma las siete columnas de la matriz aprobada y conserva los 75 IDs, su fuente y su hash. Un cambio de estado requiere evidencia: los indicadores de preparación no prueban eficacia ambiental ni cartera futura robusta.
