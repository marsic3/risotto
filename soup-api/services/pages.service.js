const faq = require('../data/pages/faq')
const terms = require('../data/pages/terms')

const getPage = function (name) {
  let page = require(`../data/pages${name}`)
  return page
}

const getFaq = function () {
  return faq
}

const getTrems = function () {
  return terms
}

module.exports = {
  getFaq,
  getTrems,
  getPage
}
