import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const server = http.createServer((req, res) => {
  // Intentamos buscar el archivo index.html en las rutas más comunes de Replit
  const pathsToTry = [
    path.join(process.cwd(), 'index.html'),
    path.join(process.cwd(), 'client', 'index.html'),
    path.join(process.cwd(), 'public', 'index.html')
  ];

  let found = false;

  for (const filePath of pathsToTry) {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
      found = true;
      break;
    }
  }

  if (!found) {
    res.writeHead(404);
    res.end('Error: No se encontro el archivo index.html de tu web.');
  }
});

// El puerto debe ser 8080 obligatoriamente
server.listen(8080, () => {
  console.log('Servidor listo en el puerto 8080');
});