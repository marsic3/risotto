# SSectionCta

> Section with call to action and possibility to show a video in the modal

## Props

| Prop name  | Description                           | Type            | Values                                                                                                                          | Default        |
| ---------- | ------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| bg         | Section's background color            | string          | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent'  |
| theme      | Section's color scheme                | string          | `light`, `dark`, `inverted`                                                                                                     | 'default'      |
| title      | Section's title                       | string          | -                                                                                                                               | 'Sample title' |
| tagline    | Section's tagline                     | boolean\|string | -                                                                                                                               | false          |
| image      | Image's URL to show in the background | boolean\|object | -                                                                                                                               | false          |
| modalVideo | Video's URL to play in modal          | boolean\|string | -                                                                                                                               | false          |
| link       | Link to display as a button           | boolean\|object | -                                                                                                                               | false          |

---

```vue live
<SSectionCta title="Default Example Usage" />
```
