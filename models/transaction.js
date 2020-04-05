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
        type: String,
    },
    type: {
        type: String,
    },
    transfer_to: {
        type: String,
    },
    title: {
        type: String,
    },
    note: {
        type: String,
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)