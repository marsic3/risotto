const blogService = require('../services/blog.service')

const get = function(req, res) {
  res.status(200).send(blogService.get(req.params.id))
}

const getAll = function(req, res) {
  res.status(200).send(blogService.getAll())
}

module.exports = {
  get,
  getAll
}
