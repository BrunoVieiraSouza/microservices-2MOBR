const jwt = require("jsonwebtoken");
const config = require("../config/config");

const auth = (req,res,next)=>{
    const token_created = req.headers.token;

    if(!token_created){
        return res.status(401).send({output:`Accesso negado`});
    }

    jwt.verify(token_created, config.jwt_key, (error,result)=>{
        if(error) return res.status(401).send({output:`Token Fail -> ${error}`});
        req.content = {
            id:result.id,
            user:result.user,
            email:result.email
        }
        next();
    });
}
module.exports = auth;