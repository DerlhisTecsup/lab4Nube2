const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Datos de ejemplo actualizados
const clientes = [
  { id: 1, nombre: "Johan " },
  { id: 2, nombre: "Derlhis " },
  { id: 3, nombre: "Franclin" },
];
const productos = [
  { id: 1, nombre: "cocina" },
  { id: 2, nombre: "television" },
  { id: 3, nombre: "celular" },
];

// Configuración del motor de plantillas EJS
app.set("view engine", "ejs");

// Rutas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clientes", (req, res) => {
  res.render("clientes", { clientes });
});

app.get("/productos", (req, res) => {
  res.render("productos", { productos });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
