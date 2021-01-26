module.exports={
    validate: (req, resp, next)=>{
        console.log("Middleware particular")
        next()
    }
}