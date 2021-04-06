const Cat = require('../models/Cat');
const { getFact } = require('../utils/catFact');

module.exports = class CatService {
  static async create({ catName, color, age }) {
    const fact = await getFact();
    
    const newCat = await Cat.insert({ catName, color, age, fact });

    return newCat;
  }

  static async getAll() {
    const cats = await Cat.selectAll();

    return cats;
  }

  static async getById(id) {
    const cat = await Cat.selectById(id);

    return cat;
  }

  static async updateById(id, cat) {
    const updatedCat = await Cat.updateById(id, cat.catName, cat.color, cat.age);

    return updatedCat;
  }

  static async deleteById(id) {
    const cat = await Cat.deleteById(id);

    return cat;
  }
}
