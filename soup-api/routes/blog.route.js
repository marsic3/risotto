const express = require('express')
const router = express.Router({ mergeParams: true })

const blogController = require('../controllers/blog.controller')

router.route('/').get(blogController.getAll)
router.route('/:id').get(blogController.get)

module.exports = router
