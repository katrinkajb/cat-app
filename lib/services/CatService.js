const Cat = require('../models/Cat');
const { getFact } = require('../utils/catFact');

module.exports = class CatService {
  static async create({ catName, color, age }) {
    const fact = await getFact();
    
    const newCat = await Cat.insert({ catName, color, age, fact });

    return newCat;
  }
}
