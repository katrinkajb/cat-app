const { Router } = require('express');
const Cat = require('../models/Cat');
const CatService = require('../services/CatService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    CatService.create(req.body)
    .then((cat) => res.send(cat))
    .catch(next);
  })

  .get('/', async (req, res, next) => {
      Cat.getAll()
      .then((cat) => res.send(cat))
      .catch(next);
  })

  .get('/:id', async (req, res, next) => {
      Cat.getById(req.params.id)
      .then((cat) => res.send(cat))
      .catch(next);
  })

  .put('/:id', async (req, res, next) => {
      Cat.updateById(req.params.id, req.body)
      .then((cat) => res.send(cat))
      .catch(next);
})

