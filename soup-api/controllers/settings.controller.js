const settingsService = require('../services/settings.service')

const get = function(req, res) {
  res.status(200).send(settingsService.get())
}

module.exports = {
  get
}
