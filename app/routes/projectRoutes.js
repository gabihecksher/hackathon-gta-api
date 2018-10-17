const express = require('express')
const project = require('../controllers/projectController.js')
const router = express.Router()

router.get('/projects',project.get)
router.get('/projects/:id', project.getById)
router.post('/project', project.create)
module.exports = router