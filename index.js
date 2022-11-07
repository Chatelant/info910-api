// server.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
/* server configuration here */

app.listen(3000, () =>console.log("Serveur à l'écoute"))

app.get('/api', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/api', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/api', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/api', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);