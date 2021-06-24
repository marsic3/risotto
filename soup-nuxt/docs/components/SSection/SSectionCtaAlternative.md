# SSectionCtaAlternative

> Section with call to action and possibility to show a video in the modal #2

## Props

| Prop name  | Description                           | Type            | Values                                                                                                                          | Default        |
| ---------- | ------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| bg         | Section's background color            | string          | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent'  |
| theme      | Section's color scheme                | string          | `light`, `dark`, `inverted`                                                                                                     | 'default'      |
| title      | Section's title                       | string          | -                                                                                                                               | 'Sample title' |
| tagline    | Section's tagline                     | boolean\|string | -                                                                                                                               | false          |
| image      | Image's URL to show in the background | boolean\|object | -                                                                                                                               | false          |
| link       | Link to display as a button           | boolean\|object | -                                                                                                                               | false          |
| modalVideo | Video's URL to play in modal          | Array           | -                                                                                                                               | false          |

---

```vue live
<SSectionCtaAlternative title="Default Example Usage" />
```
