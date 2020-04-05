const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const TransactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    type: {
        type: String,
        enum: [
            'income',
            'outcome',
            'transfer'
        ]
    },
    transfer_to: {
        type: String,
    },
    transfer_from: {
        type: String,
    },
    bank_account: {
        type: Schema.Types.ObjectId,
        ref: 'BankAccount'
    },
    title: {
        type: String,
    },
    note: {
        type: String,
    },
    date: {
        type: Schema.Types.Date
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)