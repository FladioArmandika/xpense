const express = require('express');
const router = express.Router();
const { getUsers, getUser } = require('../controllers/user')


router
    .route('/')
    .get(getUsers)

router
    .route('/:id')
    .get(getUser)

module.exports = router; 