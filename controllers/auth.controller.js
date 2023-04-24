
const { response } = require("express");


const login = async (req, res = response) => {
console.log(req);
    res.json(
        {
            msg:'login'
        }
    )
}


module.exports = login;