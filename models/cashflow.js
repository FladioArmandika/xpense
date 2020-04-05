const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const CashFlowSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    year: { type: Number },
    month: { type: Number },
    income: { type: Number },
    outcome: { type: Number },
    transaction: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Transaction'
        }
    ]
})

module.exports = mongoose.model('CashFlow', CashFlowSchema)