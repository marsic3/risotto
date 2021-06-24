const newsletterService = require('../services/newsletter.service')

const subscribe = function (req, res) {
  res.status(200).send(newsletterService.subscribe(req.body))
}

module.exports = {
  subscribe
}
