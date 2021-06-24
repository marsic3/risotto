const pagesService = require('../services/pages.service')

const getPage = function (req, res) {
  res.status(200).send(pagesService.getPage(req.url))
}

const getFaq = function (req, res) {
  res.status(200).send(pagesService.getFaq())
}

const getTrems = function (req, res) {
  res.status(200).send(pagesService.getTrems())
}

module.exports = {
  getFaq,
  getTrems,
  getPage
}
