const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Datos de ejemplo
const clientes = [
  { id: 1, nombre: 'Cliente 1' },
  { id: 2, nombre: 'Cliente 2' },
  { id: 3, nombre: 'Cliente 3' }
];

const productos = [
  { id: 1, nombre: 'Producto 1' },
  { id: 2, nombre: 'Producto 2' },
  { id: 3, nombre: 'Producto 3' }
];

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación Express, lab 04');
});

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});