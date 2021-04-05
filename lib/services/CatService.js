const Cat = require('../models/Cat');

module.exports = class CatService {
  static async create({ catName, color, age }) {
    // const catFact = await getFact();
    
    const newCat = await Cat.insert({ catName, color, age });

    return newCat;
  }
}
