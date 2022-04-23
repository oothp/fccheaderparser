const express = require('express')
const router = express.Router()
const controller = require('../controller/whoami')

router.get('/', controller.getHome)
router.get('/api/whoami', controller.getDetails)

module.exports = router