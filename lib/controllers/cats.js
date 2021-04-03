const { Router } = require('express');
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
