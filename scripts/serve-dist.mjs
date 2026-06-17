import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..', 'dist');
const port = Number(process.env.PORT ?? 4173);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.json': 'application/json; charset=utf-8',
};

createServer((request, response) => {
  const urlPath = decodeURIComponent(new URL(request.url, `http://127.0.0.1:${port}`).pathname);
  const requested = path.normalize(path.join(root, urlPath));
  const safePath = requested.startsWith(root) ? requested : path.join(root, 'index.html');
  const filePath = existsSync(safePath) && statSync(safePath).isFile() ? safePath : path.join(root, 'index.html');
  response.setHeader('Content-Type', contentTypes[path.extname(filePath)] ?? 'application/octet-stream');
  createReadStream(filePath).pipe(response);
}).listen(port, '127.0.0.1', () => {
  console.log(`Portfolio preview running at http://127.0.0.1:${port}/`);
});
