const themeService = require('../services/theme.service')

const get = function (req, res) {
  res.status(200).send(themeService.get(req.query.id))
}

module.exports = {
  get
}
