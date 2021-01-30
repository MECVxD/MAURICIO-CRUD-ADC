const request = require('supertest')
const app = require('../index')

/*describe('GET', () =>{
    it('respond with json contaning a list of all students', async done0 =>{
        request(app)
        .get('/v1/student')
        //.set('Accept', 'application/json')
        .then(done => {expect(done.statusCode).toBe(200)
        done0()})
        //.expect('Content-Type', /json/)
        //.expect(200, done)
    })
})*/

describe("GET", ()=>{
    it('respond with json a list of products', done => {
        request(app)
            .get('/v1/students')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done)
     })
})
