const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const AccountSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
    },
    category: {
        type: String,
    },
    note: {
        type: String,
    }
})

module.exports = mongoose.model('Account', AccountSchema)