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
})

// UserSchema.pre('save', function(next) => {
    
// })

module.exports = mongoose.model('User', UserSchema)
