const express = require('express')
const router = express.Router({ mergeParams: true })

const settingsController = require('../controllers/settings.controller')

router.route('/').get(settingsController.get)

module.exports = router
