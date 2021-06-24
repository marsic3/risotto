# SSectionMenu

> Section with menu categories and items

## Props

| Prop name  | Description                                                                        | Type   | Values                                                                                                                          | Default        |
| ---------- | ---------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| bg         | Section's background color                                                         | string | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent'  |
| theme      | Section's color scheme                                                             | string | `light`, `dark`, `inverted`                                                                                                     | 'default'      |
| title      | Section's title                                                                    | string | -                                                                                                                               | 'Sample title' |
| categories | Categories ID's to display with their items (will display all categories if empty) | array  | -                                                                                                                               |                |

---

```vue live
<SSectionMenu title="Default Example Usage" />
```
