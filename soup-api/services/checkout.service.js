const discountData = require('../data/checkout-discount')
const orderData = require('../data/checkout-order')

const discount = function (code) {
  return discountData.find(o => o.code === code) || null
}

const order = function () {
  return orderData
}

module.exports = {
  discount,
  order
}
