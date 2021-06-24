const express = require('express')
const router = express.Router({ mergeParams: true })

const themeController = require('../controllers/theme.controller')

router.route('/').get(themeController.get)

module.exports = router
