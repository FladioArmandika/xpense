const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const AccountInfoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    balance: {
        type: Number
    },
})

module.exports = mongoose.model('AccountInfo', AccountInfoSchema)