const { Router } = require('express');
const Cat = require('../models/Cat');
const CatService = require('../services/CatService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const newCat = await CatService.create(req.body);
      res.send(newCat);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
      Cat.find()
      .then((cat) => res.send(cat))
      .catch(next);
  })
