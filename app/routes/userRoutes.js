const express = require('express')
const user = require('../controllers/userController.js')
const router = express.Router()

router.get('/users',user.get)
router.get('/users/:id', user.getById)
router.post('/user', user.create)
module.exports = router