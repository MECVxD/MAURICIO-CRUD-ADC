var mysql=require('mysql2/promise')
let cn = null

async function connection(){
    cn=await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DB,
        password: process.env.DB_PASSWORD
    })
    return cn
}

function getConnection(){
    return cn
}

module.exports={
    connection,
    getConnection
}