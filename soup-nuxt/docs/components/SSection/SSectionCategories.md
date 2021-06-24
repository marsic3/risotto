# SSectionCategories

> Section with menu categories displayed in carousel

## Props

| Prop name | Description                            | Type            | Values                                                                                                                          | Default       |
| --------- | -------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| bg        | Section's background color             | string          | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent' |
| theme     | Section's color scheme                 | string          | `light`, `dark`, `inverted`                                                                                                     | 'default'     |
| title     | Sets section title                     | string\|boolean | -                                                                                                                               |               |
| items     | Sets categories to display in carousel | array           | -                                                                                                                               |               |

---

This is data structure for `items` prop.

```json
[
  {
    "id": 1,
    "name": "Burgers",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg"
  },
  {
    "id": 2,
    "name": "Pizza",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-pizza.jpg"
  },
  {
    "id": 3,
    "name": "Sushi",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-sushi.jpg"
  },
  {
    "id": 4,
    "name": "Pasta",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-pasta.jpg"
  },
  {
    "id": 5,
    "name": "Desserts",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-desserts.jpg"
  },
  {
    "id": 6,
    "name": "Drinks",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-drinks.jpg"
  }
]
```

Single feature item is a [SFeature](../SFeature/SFeature.html) component.
