# SSection

> Base components for each section.

## Props

| Prop name | Description                      | Type    | Values                                                                                                                          | Default       |
| --------- | -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| bg        | Section's background color       | string  | `primary`, `primary-light`, `primary-dark`, `secondary`, `info`, `warning`, `danger`, `success`, `dark`, `light`, `transparent` | 'transparent' |
| theme     | Section's color scheme           | string  | `light`, `dark`, `inverted`                                                                                                     | 'default'     |
| size      | Size of section's paddings       | string  | `sm`, `lg`                                                                                                                      | 'md'          |
| cover     | Removes paddings from section    | boolean | `true`, `false`                                                                                                                 | false         |
| protrude  | Increases z-index of the section | boolean | `true`, `false`                                                                                                                 | false         |

## Slots

| Name    | Description              | Bindings |
| ------- | ------------------------ | -------- |
| default | Main slot of the section |          |

---

```vue live
<SSection>Default Example Usage</SSection>
```
