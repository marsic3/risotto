# SSectionOffers

> Section with location address and map

## Props

| Prop name | Description                                     | Type   | Values                                                                                                                          | Default       |
| --------- | ----------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| bg        | Section's background color                      | string | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent' |
| theme     | Section's color scheme                          | string | `light`, `dark`, `inverted`                                                                                                     | 'default'     |
| location  | Location object                                 | object | -                                                                                                                               | () => {}      |
| reverse   | Moves map to left and content to the right side | String | -                                                                                                                               | false         |

---

```vue live
<SSectionOffers :location="{}" />
```
