const express = require('express');
const app = express();
const port = 3000;

const alumnos = [
  { nombre: 'Alan Pérez', matricula: 'a18001173' },
  { nombre: 'Maria Li', matricula: 'a17002060' },
  { nombre: 'Muhammad Wang', matricula: 'a15001234' },
  { nombre: 'Ana Torres', matricula: 'a18003544' }
];

const profesores = [
  { nombre: 'Dr. Cambranes', numeroEmpleado: 'P001' },
  { nombre: 'Lic. Montalvo', numeroEmpleado: 'P002' },
  { nombre: 'Ing. Garcilazo', numeroEmpleado: 'P003' },
  { nombre: 'Mtro. Ramírez', numeroEmpleado: 'P004' }
];

app.get('/alumnos', (req, res) => {
  res.json(alumnos);
});

app.get('/profesores', (req, res) => {
  res.json(profesores);
});

app.get('/', (req, res) => {
  res.send('Bienvenido a la aplicación SICEI');
});

app.listen(port, () => {
  console.log(`SICEI app listening at http://localhost:${port}`);
});