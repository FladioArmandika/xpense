
const passport  = require('passport')

exports.authenticate = async (req,res,next) => {

}

exports.callback = async (req,res,next) => {
    return res.json(req.query)
}
