import { readFile, rm, writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("..", import.meta.url))
const htmlPath = `${root}dist/index.html`
const ssrDir = `${root}dist-ssr`

const { render } = await import(`${ssrDir}/entry-server.js`)
const template = await readFile(htmlPath, "utf8")

if (!template.includes("<!--app-->")) {
  throw new Error("dist/index.html-də <!--app--> nişanı tapılmadı")
}

await writeFile(htmlPath, template.replace("<!--app-->", render()))
await rm(ssrDir, { recursive: true, force: true })
console.log("prerender: dist/index.html yazıldı")
