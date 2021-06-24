const express = require('express')
const checkout = require('./checkout.route')
const menu = require('./menu.route')
const pages = require('./pages.route')
const blog = require('./blog.route')
const settings = require('./settings.route')
const theme = require('./theme.route')
const newsletter = require('./newsletter.route')

const router = express.Router()

router.use('/checkout', checkout)
router.use('/menu', menu)
router.use('/pages', pages)
router.use('/blog', blog)
router.use('/settings', settings)
router.use('/theme', theme)
router.use('/newsletter', newsletter)

module.exports = router
