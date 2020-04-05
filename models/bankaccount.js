const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const BankAccountSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: { type: String},
    bank: { type: String},
    number: { type: String},
    balance: { type: Number},
})

module.exports = mongoose.model('BankAccount', BankAccountSchema)