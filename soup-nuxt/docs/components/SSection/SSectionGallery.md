# SSectionOffers

> Section with gallery slider

## Props

| Prop name | Description                        | Type   | Values                                                                                                                          | Default       |
| --------- | ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| bg        | Section's background color         | string | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent' |
| theme     | Section's color scheme             | string | `light`, `dark`, `inverted`                                                                                                     | 'default'     |
| items     | Items to display in gallery slider | array  | -                                                                                                                               | []            |

---

```vue live
<SSectionOffers :items="[1, 2, 3]" />
```
