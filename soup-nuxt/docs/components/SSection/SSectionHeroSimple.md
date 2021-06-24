# SSectionHeroSimple

> Simple hero section with image in the background

## Props

| Prop name | Description                                     | Type            | Values                                                                                                                          | Default        |
| --------- | ----------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| bg        | Section's background color                      | string          | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent'  |
| theme     | Section's color scheme                          | string          | `light`, `dark`, `inverted`                                                                                                     | 'default'      |
| title     | Section's title                                 | string          | -                                                                                                                               | 'Sample title' |
| tagline   | Section's tagline                               | boolean\|string | -                                                                                                                               | false          |
| media     | Image or video Object to show in the background | boolean\|object | -                                                                                                                               | false          |
| link      | Link to display as a button                     | boolean\|object | -                                                                                                                               | false          |

---

```vue live
<SSectionHeroSimple title="Default Example Usage" />
```
