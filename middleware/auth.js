// middleware/authmiddleware.js
const jwt = require('jsonwebtoken');

const checkAuth = (req,res) =>{
    //const token = req.cookies.token;
    console.log("hello auth");
};

module.exports = checkAuth;