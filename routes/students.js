const express = require('express')
const router = express.Router();
const ctrStudent = require('../controller/students')

router.get('/', async(req, resp)=>{
    let data = await ctrStudent.getStudents()
    return resp.status(200).send({
        status:200,
        msg: "Success",
        data:data
    })
})

router.post('/', (req, resp)=>{
    let {id, firstname, lastname} = req.body
    let ok = ctrStudent.postStudent(id, firstname, lastname)
    let status = 201
    let msg = "Success"
    return resp.status(status).send({
        status: status,
        msg: msg
    })
})

router.put('/:id', (req, resp)=>{
    let {id}=req.params
    let {firstname, lastname}= req.body
    ctrStudent.updateStudent(id, firstname, lastname)
    return resp.send({
        msg: "Student Updated"
    })
})

router.delete('/:id', (req, resp)=>{
    let {id}=req.params
    ctrStudent.deleteStudent(id)
    return resp.send({
        msg: "register deleted"
    })
})

module.exports=router