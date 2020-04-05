const dotenv    = require('dotenv')

process.env.DOT_ENV = process.env.DOT_ENV || 'development'

const envFound = dotenv.config()
if(!envFound) {
    throw new Error("Couldn't find .env file")
}

module.exports = {
    port: parseInt(process.env.PORT, 10),
    dbURL: process.env.DB_URL,


    clientId: '456695519575-flh3v2e2v4gkv736h2e2rre77ndb91u3.apps.googleusercontent.com',
    secret: 'MxC7F5DoBCMnlDb45kwcqw-J',
    callback: 'http://localhost:3000/auth/callback',
}
