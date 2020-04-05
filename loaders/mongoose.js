const mongoose  = require('mongoose')

const config    = require('../config')

module.exports = () => {
    mongoose.connect(config.dbURL)
        .then(() => {
            console.log('database connected')
        })
        .catch(err => console.log(err))
}