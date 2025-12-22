import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hola, mi servidor backend está vivo y funcionando');
  res.end();
});

server.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});