const services=require('../services/students')

async function getStudents(){
    let data=await services.getStudents()
    return data
}

async function postStudent(id, firstname, lastname){
    await services.postStudent(id, firstname, lastname)
}

async function updateStudent(id, firstname, lastname){
    await services.updateStudent(id, firstname, lastname)
}

async function deleteStudent(id){
    await services.deleteStudent(id)
}

module.exports = {
    getStudents,
    postStudent,
    updateStudent,
    deleteStudent
}