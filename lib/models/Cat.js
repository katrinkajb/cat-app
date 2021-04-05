const pool = require("../utils/pool");

module.exports = class Cat {
    id;
    catName;
    color;
    age;
    // fact;

    constructor(row) {
      this.id = row.id;
      this.catName = row.cat_name;
      this.color = row.color;
      this.age = row.age;
      // this.fact = row.catFact;
    }
    
    static async insert({catName, color, age}) {
      const { rows } = 
      await pool.query(
        `INSERT INTO cats (cat_name, color, age) VALUES ($1, $2, $3) RETURNING *`,
        [catName, color, age]
        );
        
        return new Cat(rows[0]);
    } 
};
