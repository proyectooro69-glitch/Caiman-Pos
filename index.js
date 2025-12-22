import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Apuntamos a la carpeta donde están tus estilos y scripts
app.use(express.static(path.join(__dirname, 'dist/public')));

// 2. Ruta principal: ahora buscamos el index.html dentro de dist/public
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});