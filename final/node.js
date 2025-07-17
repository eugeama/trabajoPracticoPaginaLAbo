const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const app = express();
const port = 5500;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'alumno',      
  password: 'alumnoipm',      
  database: 'bubblePop'
});

db.connect((err) => {
  if (err) {
    console.error('error al intentar conectar', err);
    return;
  }
  console.log('conectado');
});

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      res.status(500).send('Error loading page.');
    }
  });
});

app.post('/registrar', (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  const query = 'INSERT INTO mail (mail) VALUES (?)';
  db.query(query, [email], (err, result) => {
    if (err) {
      console.error('Error al insertar:', err);
      res.status(500).send('Error al guardar');
    } else {
      res.send('Usuario registrado correctamente');
    }
  });
});
 
app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});
