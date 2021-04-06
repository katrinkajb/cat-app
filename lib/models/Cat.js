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
        await pool.query(`INSERT INTO cats (cat_name, color, age, fact) VALUES ($1, $2, $3, $4) RETURNING *`,
        [catName, color, age, fact]);
        
        return new Cat(rows[0]);
    } 

    static async getAll() {
      const { rows } = 
        await pool.query(`SELECT * FROM cats`);
        
        return rows.map((row) => new Cat(row));
    } 

    static async getById(id) {
      const { rows } = 
        await pool.query(`SELECT * FROM cats WHERE id=$1`, [id]);
        
        return new Cat(rows[0]);
    } 

    static async updateById(id, cat) {
      const { rows } = 
        await pool.query(`UPDATE cats SET cat_name=$2, color=$3, age=$4 WHERE id=$1 RETURNING *`, [id, cat.catName, cat.color, cat.age]);
        
        return new Cat(rows[0]);
    } 

    static async deleteById(id) {
      const { rows } = 
        await pool.query(`DELETE FROM cats WHERE id=$1 RETURNING *`, [id]);
        
        return new Cat(rows[0]);
    } 
};
