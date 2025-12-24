// Entrypoint para Replit - ejecuta el servidor compilado
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distServerPath = path.join(__dirname, 'dist/index.cjs');

if (fs.existsSync(distServerPath)) {
  console.log('✓ Iniciando servidor compilado...');
  const server = spawn('node', [distServerPath], {
    env: { ...process.env, NODE_ENV: 'production' },
    stdio: 'inherit'
  });
  
  server.on('error', (err) => {
    console.error('❌ Error iniciando servidor:', err);
    process.exit(1);
  });
} else {
  console.error('❌ dist/index.cjs no existe. Ejecuta: npm run build');
  process.exit(1);
}