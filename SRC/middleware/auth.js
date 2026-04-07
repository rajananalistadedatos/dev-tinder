function auth(req,res,next){
    const header = req.headers.authorization;
    if(!header){
        return res.status(401).send("toke is missing");
    }
    const token = header.split(" ")[1];
    if (token === "comein"){
        next();
    }else{
        res.status(404).send("token is invalide")
    }
}

module.exports = auth;