const exec=require('../repository/execute')

async function getStudents(){
    let sql=`SELECT * FROM dataStudents`
    let data=await exec.execute(sql)
    return data
}

async function postStudent(id, firstname, lastname)
{
    //console.log(id, firstname, lastname)
    let sql=`INSERT INTO dataStudents(id,firstname,lastname) values (${id}, '${firstname}', '${lastname}')`
    await exec.execute(sql)
}

async function updateStudent(id, firstname, lastname)
{
    console.log(id, firstname, lastname)
    let sql=`UPDATE dataStudents SET firstname='${firstname}', lastname='${lastname}' WHERE id=${id}`
    await exec.execute(sql)
}

async function deleteStudent(id)
{
    //console.log(id)
    let sql=`DELETE FROM dataStudents WHERE id = ${id}`
    await exec.execute(sql)
}

module.exports={
    getStudents,
    postStudent,
    updateStudent,
    deleteStudent
}