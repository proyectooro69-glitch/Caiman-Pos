import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Esta es la clave: le decimos al servidor que busque en todas las carpetas posibles
const folders = ['dist', 'client', 'public', '.'];

folders.forEach(folder => {
    app.use(express.static(path.join(__dirname, folder)));
});

// Si alguien entra a la raíz, le enviamos el index.html
app.get('*', (req, res) => {
    // Intentamos enviarlo desde 'dist' o desde la raíz
    const indexPath = fs.existsSync(path.join(__dirname, 'dist', 'index.html')) 
        ? path.join(__dirname, 'dist', 'index.html')
        : path.join(__dirname, 'index.html');
    
    res.sendFile(indexPath);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en puerto ${PORT}`);
});