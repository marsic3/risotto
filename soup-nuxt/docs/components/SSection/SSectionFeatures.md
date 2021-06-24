# SSectionFeatures

> Section with features with icons

## Props

| Prop name | Description                                      | Type            | Values                                                                                                                          | Default       |
| --------- | ------------------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| bg        | Section's background color                       | string          | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent' |
| theme     | Section's color scheme                           | string          | `light`, `dark`, `inverted`                                                                                                     | 'default'     |
| items     | Items to display                                 | Array           | -                                                                                                                               |               |
| extend    | Extends the background to the left or right side | boolean\|string | `true`, `false`                                                                                                                 | false         |

---

This is recommended data structure for `items` prop.

```json
[
  {
    "title": "Pick a dish",
    "description": "Vivamus volutpat leo dictum risus ullamcorper condimentum.",
    "icon": "shopping-cart"
  },
  {
    "title": "Make a payment",
    "description": "Vivamus volutpat leo dictum risus ullamcorper condimentum.",
    "icon": "wallet"
  },
  {
    "title": "Recieve your food!",
    "description": "Vivamus volutpat leo dictum risus ullamcorper condimentum.",
    "icon": "package"
  }
]
```

Single feature item is a [SFeature](../SFeature/SFeature.html) component.
