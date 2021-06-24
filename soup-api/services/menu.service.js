const items = require('../data/menu-items')
const categories = require('../data/menu-categories')
const offers = require('../data/menu-offers')

const getItems = function() {
  return items
}

const getCategories = function() {
  return categories
}

const getOffers = function() {
  return offers
}

module.exports = {
  getItems,
  getCategories,
  getOffers
}
