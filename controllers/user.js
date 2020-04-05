
const User  = require('../models/user')

/*
GET ALL USER
req : -
res : users
*/
exports.getUsers = async (req,res,next) => {
    User.find({})
        .then(result => {
            res.json(result)
        })
        .catch(err => res.json(err))
}


/*
GET USER BY ID
req : id
res : user
*/
exports.getUser = async(req,res,next) => {
    User.findById({_id: req.params.id})
        .then(result => {
            res.json(result)
        })
        .catch(err => res.json(err))
}