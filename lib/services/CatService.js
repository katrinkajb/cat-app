const Cat = require('../models/Cat');

module.exports = class CatService {
  static async create({ name, color, age }) {
    const catFact = await getFact();
    
    const newCat = await Cat.insert({ name, color, age, catFact });

    return newCat;
  }
}
