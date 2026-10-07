import {mkdir,copyFile,writeFile,readFile} from "node:fs/promises";
const files=["index.html","styles.css","app.js","estado.json","requisitos.json"];
await mkdir(new URL("public/",import.meta.url),{recursive:true});
JSON.parse(await readFile(new URL("estado.json",import.meta.url),"utf8"));
for(const file of files) await copyFile(new URL(file,import.meta.url),new URL("public/"+file,import.meta.url));
const candidate=process.env.VERCEL_GIT_COMMIT_SHA;
const deployment_commit=candidate&&/^[a-f0-9]{40}$/.test(candidate)?candidate:null;
await writeFile(new URL("public/deployment.json",import.meta.url),JSON.stringify({schema:"corredor-vivo.deployment.v1",deployment_commit},null,2)+"\n");
console.log("Sitio estático generado: 5 archivos y metadatos de commit.");
