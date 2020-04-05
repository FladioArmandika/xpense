const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const CategorySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model('Category', CategorySchema)