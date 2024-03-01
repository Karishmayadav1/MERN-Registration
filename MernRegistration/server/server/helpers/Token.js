const jwt = require("jsonwebtoken");
const dotenv =  require("dotenv");
dotenv.config();
const Key = process.env.KEY
const generateToken = (user)=>{
    return jwt.sign({user} , Key , {expiresIn:"1h"} )
}

module.exports = generateToken