const express = require('express')
const router = express.Router();
const ctrStudent = require('../controller/students')

router.get('/', async(req, resp)=>{
    let data = await ctrStudent.getStudents()
    return resp.status(200).send({
        status:200,
        msg: "Resource retrieved succesfully",
        data:data
    })
})

router.post('/', (req, resp)=>{
    let {id, firstname, lastname} = req.body
    let ok = ctrStudent.postStudent(id, firstname, lastname)
    return resp.status(201).send({
        status: 201,
        msg: "Resource created succesfully"
    })
})

router.put('/:id', (req, resp)=>{
    let {id}=req.params
    let {firstname, lastname}= req.body
    ctrStudent.updateStudent(id, firstname, lastname)
    return resp.status(200).send({
        status: 200,
        msg: "Resource updated succesfully"
    })
})

router.delete('/:id', (req, resp)=>{
    let {id}=req.params
    ctrStudent.deleteStudent(id)
    return resp.status(200).send({
        status: 200,
        msg: "Resource deleted succesfully"
    })
})

module.exports=router