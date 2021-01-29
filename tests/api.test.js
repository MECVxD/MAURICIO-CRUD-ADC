const request = require('supertest')
const app = require('../index')

it('respond with json contaning a list of all students', done =>{
    request(app)
    .get('/v1/student')
    .auth('rol', 'admin')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)
})