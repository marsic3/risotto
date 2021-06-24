# SSectionOffers

> Section with special offers displayd in slider or basic list

## Props

| Prop name | Description                                                | Type    | Values                                                                                                                          | Default       |
| --------- | ---------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| bg        | Section's background color                                 | string  | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent' |
| theme     | Section's color scheme                                     | string  | `light`, `dark`, `inverted`                                                                                                     | 'default'     |
| title     | Section's title                                            | string  | -                                                                                                                               |               |
| items     | Offers to display                                          | array   | -                                                                                                                               |               |
| carousel  | Set to false to display offers in list instead of carousel | boolean | -                                                                                                                               | true          |

---

```vue live
<SSectionOffers />
```
