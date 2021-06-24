# SSectionHeroSlider

> Simple hero slider with background images

## Props

| Prop name | Description                     | Type   | Values                                                                                                                          | Default       |
| --------- | ------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| bg        | Section's background color      | string | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent' |
| theme     | Section's color scheme          | string | `light`, `dark`, `inverted`                                                                                                     | 'default'     |
| slides    | Slides to display in the slider | array  | -                                                                                                                               |               |

---

This is recommended data structure for `slides` prop.

```json
[
  {
    "type": "PRODUCT",
    "image": "http://assets.suelo.pl/soup/img/photos/slider-pasta.jpg",
    "productId": 1,
    "title": "Boscaiola Pasta",
    "tagline": "New product!",
    "price": 9.98
  },
  {
    "type": "BASIC",
    "image": "http://assets.suelo.pl/soup/img/photos/slider-burger.jpg",
    "offerId": 1,
    "title": "Get 10% off coupon",
    "tagline": "and use it with your next order!",
    "link": {
      "title": "Check our offers",
      "slug": "/offers"
    }
  },
  {
    "type": "BASIC",
    "image": "http://assets.suelo.pl/soup/img/photos/slider-dessert.jpg",
    "offerId": 1,
    "title": "Delicious Desserts",
    "tagline": "Order it online even now!",
    "link": {
      "title": "Check our menu",
      "slug": "/menu-list-navigation"
    }
  }
]
```
