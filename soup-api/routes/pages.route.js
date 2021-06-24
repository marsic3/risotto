const express = require('express')
const router = express.Router({ mergeParams: true })

const pagesController = require('../controllers/pages.controller')

router.route('*').get(pagesController.getPage)
router.route('/faq').get(pagesController.getFaq)
router.route('/terms').get(pagesController.getTrems)

module.exports = router
