# SSectionDouble

> Section with content and image on the opposite sides

## Props

| Prop name | Description                                       | Type    | Values                                                                                                                          | Default       |
| --------- | ------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| bg        | Section's background color                        | string  | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent' |
| theme     | Section's color scheme                            | string  | `light`, `dark`, `inverted`                                                                                                     | 'default'     |
| content   | Content to display                                | Object  | -                                                                                                                               |               |
| image     | Image's object to display                         | object  | -                                                                                                                               |               |
| reverse   | Moves image to left and content to the right side | boolean | -                                                                                                                               | false         |

---

```vue live
<SSectionDouble />
```
