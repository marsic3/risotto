const posts = require('../data/blog-posts')

const getAll = function(req, res) {
  return posts
}

const get = function(id) {
  return getAll().find(post => post.id == id)
}

module.exports = {
  getAll,
  get
}
