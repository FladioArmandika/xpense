const express   = require('express') 

const userRoutes = require('./user')


module.exports = (app) => {

    // const app = express()  

    app.get('/', (req,res,next) => {
        res.send('this is an api')
    }) 

    app.use('/user', userRoutes)

    return app;
}

