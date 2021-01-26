module.exports={
    validateToken: ({headers}, resp, next)=>{
        if(headers.rol==='admin'){
            next()
        }else{
            resp.status(401).send({
                msg: "You dont have access"
            })
        }
    }
}