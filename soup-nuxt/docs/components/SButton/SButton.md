# SButton

> Basic Button

## Props

| Prop name | Description                           | Type                    | Values                                                                                                                                                                                                                                                                                                             | Default   |
| --------- | ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| variant   | Variant of a button                   | boolean\|string         | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `outline-primary`, `outline-primary-light`, `outline-primary-dark`, `outline-secondary`, `outline-info`, `outline-warning`, `outline-danger`, `outline-success`, `outline-dark`, `outline-light` | 'primary' |
| size      | Size of a button                      | string                  | `md`, `sm`, `lg`                                                                                                                                                                                                                                                                                                   | 'md'      |
| block     | Makes button fullwidth of a container | boolean                 | -                                                                                                                                                                                                                                                                                                                  | false     |
| wide      | Adds minimum width to the button      | boolean                 | -                                                                                                                                                                                                                                                                                                                  | false     |
| disabled  | Disables button                       | boolean                 | -                                                                                                                                                                                                                                                                                                                  | false     |
| to        | Sets route if necessary               | boolean\|object\|string | -                                                                                                                                                                                                                                                                                                                  | false     |

## Events

| Event name | Type | Description |
| ---------- | ---- | ----------- |
| click      |      | Click event |

## Slots

| Name    | Description  | Bindings |
| ------- | ------------ | -------- |
| default | Button label |          |

---

```vue live
<SButton>Default Example Usage</SButton>
```
