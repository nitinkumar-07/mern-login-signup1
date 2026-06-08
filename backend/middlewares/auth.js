
const jwt = require("jsonwebtoken");

const ensureIsAuthenticted = (req, res,next) =>{
    const auth = req.headers["authorization"];
    if(!auth){
        return res.status(401).json({message: "Unauthorized , JWT token is expired"})
    }
    try{
        const decodedData = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decodedData;
        next();
    } catch(err){
        return res.status(401).json({message: "Unauthorized , JWT token is wrong or expired"})
    }
};

module.exports = ensureIsAuthenticted;