const request = require('supertest')
const app = require('../index')

describe("GET /v1/students", ()=>{
    it('respond with json a list of students', done => {
        request(app)
            .get('/v1/students')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done)
     })
})

describe("POST /v1/students", ()=>{
    it ('respond with code of success', done =>{
        const data = {
            id: 10,
            firstname: "julio",
            lastname: "perez"
        } 
        request(app)
         .post('/v1/students')
         .send(data)
         .expect(201, done)
     })
})

describe("PUT /v1/students/:id", ()=>{
    it ('respond with code of success', done =>{
        const data = {
            id: 10,
            firstname: "julio",
            lastname: "perez"
        } 
        request(app)
         .put('/v1/students/4')
         .send(data)
         .expect(200, done)
     })
})

describe("DELETE /v1/students/:id", ()=>{
    it ('respond with code of success', done =>{
        request(app)
         .delete('/v1/students/4')
         .expect(200, done)
     })
})
