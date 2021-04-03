const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Cat = require('../lib/models/Cat');
const { getFact } = require('../lib/utils/catFact');


describe('cat-app routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('Posts a new cat to the db', () => {
    return request(app)
    .post('/api/v1/cats')
    .send({name: 'Persephone', color: 'grey', age: 15})
    .then((res) => {
 
      expect(getFact()).toHaveBeenCalledTimes(1);
      expect().toEqual({id: 1, name: 'Persephone', color: 'grey', age: 15, //catFact
    });
    })
  })
});
