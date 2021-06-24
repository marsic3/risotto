const express = require('express')
const router = express.Router({ mergeParams: true })

const menuController = require('../controllers/menu.controller')

router.route('/items').get(menuController.getItems)
router.route('/categories').get(menuController.getCategories)
router.route('/offers').get(menuController.getOffers)

module.exports = router
