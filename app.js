const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Datos de ejemplo actualizados
const clientes = [
    { id: 1, nombre: 'Juan ' },
    { id: 2, nombre: 'Mario ' },
    { id: 3, nombre: 'pedro' }
];
const productos = [
    { id: 1, nombre: 'iPhone' },
    { id: 2, nombre: 'MacBook Pro' },
    { id: 3, nombre: 'Echo Dot' }
];


// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/clientes', (req, res) => {
    res.render('clientes', { clientes });
});

app.get('/productos', (req, res) => {
    res.render('productos', { productos });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
