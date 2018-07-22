const express = require('express');
const bodyParser = require('body-parser');
const {Funcionario} = require('./app/models');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

// Funcionario.create({name: 'Juca'});

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

/* app.post('/funcionarios', (req, res) => {
  var func = new Funcionario({
      nome: req.body.nome
  });
  
  func.save().then(doc => {
      res.send(doc);
  }, err => {
      res.status(500).send(err);
  });
});

app.get('/funcionarios', (req, res) => {
  Funcionario.find().then(funcs => {
      res.send({ funcs })
  }, err => {
      res.status(500).send(err);
  });
});

app.post('/departamentos', (req, res) => {
  var dep = new Departamento({
      nome: req.body.nome
  });
  
  dep.save().then(doc => {
      res.send(doc);
  }, err => {
      res.status(500).send(err);
  });
});

app.get('/departamentos', (req, res) => {
  Departamento.find().then(deps => {
      res.send({ deps })
  }, err => {
      res.status(500).send(err);
  });
}); */

app.listen(port, () => console.log(`Listening on port ${port}`));