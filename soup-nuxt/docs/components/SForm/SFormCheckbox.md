# SFormCheckbox

> Custom checkbox component with animated tick icon.

## Props

| Prop name | Description                             | Type            | Values | Default |
| --------- | --------------------------------------- | --------------- | ------ | ------- |
| id        | ID of an element                        | string          | -      |         |
| name      | Name of an input                        | string          | -      |         |
| v-model   | Set's checked attribute of input        | boolean\|array  | -      |         |
| disabled  | Disables element                        | boolean         | -      |         |
| adapter   | Key parameter if the value is an object | boolean\|string | -      | false   |

## Events

| Event name | Type           | Description  |
| ---------- | -------------- | ------------ |
| change     | boolean, array | Change event |

## Slots

| Name    | Description    | Bindings |
| ------- | -------------- | -------- |
| default | Checkbox label |          |

---

```vue live
<SFormCheckbox id="Default Example Usage">Default Example Usage</SFormCheckbox>
```
