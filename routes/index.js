const express   = require('express') 
const passport  = require('passport')
const userRoutes    = require('./user')
const authRoutes    = require('./auth')


module.exports = (app) => {

    // const app = express()  

    app.get('/', (req,res,next) => {
        res.send('this is an api')
    }) 

    app.use(passport.initialize())
    app.use('/user', userRoutes)
    app.use('/auth', authRoutes)
    


    return app;
}

