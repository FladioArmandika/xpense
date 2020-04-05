const mongoose  = require('mongoose')
const bcrypt    = require('bcryptjs')
const Schema    = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male','female']
    },
    phone: {type: String},
    marital_status: {type: String},
    job: {type: String},
    city: {type: String},
})

module.exports = mongoose.model('User', UserSchema)
