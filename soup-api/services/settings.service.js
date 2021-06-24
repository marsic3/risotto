const settings = require('../data/settings')

const get = function () {
  return settings()
}

module.exports = {
  get
}
