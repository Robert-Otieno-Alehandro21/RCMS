const express = require('express')
const router = express.Router()
const { createProject, getUserProjects } = require('../controllers/projectController')
const protect = require('../middleware/auth')

router.post('/create', protect(['user']), createProject)
router.get('/my-projects', protect(['user']), getUserProjects)

module.exports = router
