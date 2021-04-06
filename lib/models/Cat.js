const pool = require("../utils/pool");

module.exports = class Cat {
    id;
    catName;
    color;
    age;
    fact;

    constructor(row) {
      this.id = row.id;
      this.catName = row.cat_name;
      this.color = row.color;
      this.age = row.age;
      this.fact = row.fact;
    }
    
    static async insert({catName, color, age, fact}) {
      const { rows } = 
      await pool.query(
        `INSERT INTO cats (cat_name, color, age, fact) VALUES ($1, $2, $3, $4) RETURNING *`,
        [catName, color, age, fact]
        );
        
        return rows.map((row) => new Cat(row));
    } 

    static async find() {
      const { rows } = 
      await pool.query(`SELECT * FROM cats`);
        
        return rows.map((row) => new Cat(row));
    } 
};
