const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Cat = require('../lib/models/Cat');
const { getFact } = require('../lib/utils/catFact');

jest.mock('../lib/utils/catFact');

describe('cat-app routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(async () => {
    await Cat.insert({ catName: 'Kittyface', color: 'stripes', age: 11, fact: 'fact'})
  });

  it('Posts a new cat to the db', () => {
    getFact.mockResolvedValue('fact');

    const newCat = {id: '2', catName: 'Persephone', color: 'grey', age: 15, fact: 'fact'};
    
    return request(app)
    .post('/api/v1/cats')
    .send(newCat)
    .then((res) => {
 
      expect(getFact).toHaveBeenCalledTimes(1);
      expect(res.body).toEqual([newCat]);
    })
  })

  it('Gets a list of cats in the db', async () => {
    const catArray = ([{ id: '1', catName: 'Kittyface', color: 'stripes', age: 11, fact: 'fact'}]);
    
    return request(app)
    .get('/api/v1/cats')
    .then((res) => {
       expect(res.body).toEqual(catArray);
    })
  })

  it('Gets a cat by id', async () => {
    const cat = [{ id: '1', catName: 'Kittyface', color: 'stripes', age: 11, fact: 'fact'}];

    return request(app)
    .get('/api/v1/cats/1')
    .then((res) => {
       expect(res.body).toEqual(cat);
    })
  })

  it('Updates a cat in the db', async () => {
    const updatedCat = { id: '1', catName: 'Kittyface', color: 'stripes', age: 12, fact: 'fact'};

    return request(app)
    .put('/api/v1/cats/1')
    .send(updatedCat)
    .then((res) => {
       expect(res.body).toEqual([updatedCat]);
    })
  })

  it('Deletes a cat from the db', async () => {
    const cat = { id: '1', catName: 'Kittyface', color: 'stripes', age: 11, fact: 'fact'};

    return request(app)
    .delete('/api/v1/cats/1')
    .then((res) => {
       expect(res.body).toEqual([cat]);
    })
  })
});
