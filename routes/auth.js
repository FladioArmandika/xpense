const express   = require('express')
const passport  = require('passport')
const config    = require('../config')
const GoogleStrategy    = require('passport-google-oauth20').Strategy
const router    = express.Router()

const googleStrategy    = require('../config/googleStrategy')
const { authenticate, callback }  = require('../controllers/auth')



const extractProfile = (profile) => {
    let imageUrl = ''
    if(profile.photos && profile.photos.length) {
        imageUrl = profile.photos[0].value
    }

    return {
        id: profile.id,
        displayName: profile.displayName,
        image: imageUrl
    }
}


router.use(passport.initialize())


passport.use(new GoogleStrategy({
    clientID: config.clientId,
    clientSecret: config.secret,
    callbackURL: config.callback,
    accessType: 'offline',
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
},
    (accessToken, refreshToken, profile, callback) => {
        callback(null, extractProfile(profile))       
    }
))

passport.serializeUser((user,callback) => {
    callback(null,user)
})

passport.deserializeUser((object, callback) => {
    callback(null, object)
})




router
    .route('')
    .get(
        passport.authenticate('google', {scope: ['email','profile']}),
        authenticate
    )

router
    .route('/callback')
    .get(
        passport.authenticate('google', {scope: ['email','profile']}),
        callback
    )

module.exports = router