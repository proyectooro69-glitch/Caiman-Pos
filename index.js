import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Servir los archivos estáticos desde la carpeta 'dist'
// Según tu captura, aquí es donde Vite guardó tu web
app.use(express.static(path.join(__dirname, 'dist')));

// 2. Ruta para manejar cualquier petición y devolver el index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 3. Escuchar en el puerto 8080 (el que configuramos en Networking)
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});