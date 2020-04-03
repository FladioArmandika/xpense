const dotenv    = require('dotenv')

process.env.DOT_ENV = process.env.DOT_ENV || 'development'

const envFound = dotenv.config()
if(!envFound) {
    throw new Error("Couldn't find .env file")
}

module.exports = {
    port: parseInt(process.env.PORT, 10),
}
