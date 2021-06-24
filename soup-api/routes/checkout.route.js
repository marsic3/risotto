const express = require('express')
const router = express.Router({ mergeParams: true })

const checkoutController = require('../controllers/checkout.controller')

router.route('/discount').post(checkoutController.discount)
router.route('/order').post(checkoutController.order)

module.exports = router
