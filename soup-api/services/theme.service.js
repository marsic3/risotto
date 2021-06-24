const themes = {
  1: require('../data/theme-1'),
  2: require('../data/theme-2'),
  3: require('../data/theme-3'),
  4: require('../data/theme-4')
}

const get = function(_id = 1) {
  return themes[_id]
}

module.exports = {
  get
}
