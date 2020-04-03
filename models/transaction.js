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
    note: {
        type: String,
    }
})