const menuService = require('../services/menu.service')

const getItems = function(req, res) {
  res.status(200).send(menuService.getItems())
}

const getCategories = function(req, res) {
  res.status(200).send(menuService.getCategories())
}

const getOffers = function(req, res) {
  res.status(200).send(menuService.getOffers())
}

module.exports = {
  getItems,
  getCategories,
  getOffers
}
