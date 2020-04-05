const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const AccountInfoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    bank: [
        {
            type: Schema.Types.ObjectId,
            ref: 'BankAccount'
        }
    ],
    balance: {type: Number},
    cashflow: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CashFlow'
        }
    ]
})

module.exports = mongoose.model('AccountInfo', AccountInfoSchema)