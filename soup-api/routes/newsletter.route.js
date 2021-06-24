const express = require('express')
const router = express.Router({ mergeParams: true })

const newsletterController = require('../controllers/newsletter.controller')

router.route('/subscribe').post(newsletterController.subscribe)

module.exports = router
