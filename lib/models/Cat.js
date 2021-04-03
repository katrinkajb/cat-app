const pool = require("../utils/pool");

module.exports = class Cat {
    id;
    catName;
    color;
    age;
    fact;

    constructor(row) {
      this.id = row.id;
      this.cat_name = row.catName;
      this.color = row.color;
      this.age = row.age;
      this.fact = row.catFact;
    }
    
    static async insert(catName, color, age, catFact) {
      const { rows } = 
      await pool.query(
        `INSERT INTO cats (cat_name, color, age, fact) VALUES ($1, $2, $3, $4) RETURNING *`,
        [catName, color, age, catFact]
        );
        
        return new Upload(rows[0]);
    } 
};
