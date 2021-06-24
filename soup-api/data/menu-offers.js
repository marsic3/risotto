module.exports = [
  {
    id: 1,
    name: 'Free Burger',
    description: 'Get free burger from orders higher that $40!',
    type: 'FREE_PRODUCT',
    freeProductId: 1,
    conditions: [
      {
        id: 11,
        name: 'Only on Tuesdays',
        type: 'DAY',
        value: [2]
      },
      {
        id: 12,
        name: 'Order higher than rsd40',
        type: 'MINIMUM_ORDER_VALUE',
        value: 40
      },
      {
        id: 13,
        name: 'Unless one Burger in a cart',
        type: 'CATEGORY_ID',
        value: [1]
      }
    ],
    image: {
      name: 'Image Title',
      url: 'https://assets.suelo.pl/soup/img/photos/special-burger.jpg'
    }
  },
  {
    id: 2,
    name: 'Free Small Pizza',
    description: 'Get free small pizza orders higher that $rsd40!',
    type: 'FREE_PRODUCT',
    freeProductId: 4,
    conditions: [
      {
        id: 14,
        name: 'Only on Weekends',
        type: 'DAY',
        value: [0, 6]
      },
      {
        id: 15,
        name: 'Order higher than $rsd40',
        type: 'MINIMUM_ORDER_VALUE',
        value: 40
      },
      {
        id: 16,
        name: 'Unless one Pizza in a cart',
        type: 'CATEGORY_ID',
        value: [2]
      }
    ],
    image: {
      name: 'Image Title',
      url: 'https://assets.suelo.pl/soup/img/photos/special-pizza.jpg'
    }
  },
  {
    id: 3,
    name: 'Chip Friday',
    description: '10% Off for all dishes!',
    type: 'DISCOUNT',
    discountValue: 0.1,
    conditions: [
      {
        id: 17,
        name: 'Only on Friday',
        type: 'DAY',
        value: [5]
      },
      {
        id: 18,
        name: 'All products',
        type: 'CATEGORY_ID',
        value: [1, 2, 3, 4, 5, 6]
      }
    ],
    image: {
      name: 'Image Title',
      url: 'https://assets.suelo.pl/soup/img/photos/special-dish.jpg'
    }
  }
]
