const checkoutService = require('../services/checkout.service')

const discount = function (req, res) {
  const result = checkoutService.discount(req.query.code)
  res.status(result ? 200 : 500).send(result)
}

const order = function (req, res) {
  res.status(200).send(checkoutService.order(req.body))
}

module.exports = {
  discount,
  order
}
