# SFormSelect

> Custom select component.

## Props

| Prop name     | Description                                                | Type                   | Values | Default                                                  |
| ------------- | ---------------------------------------------------------- | ---------------------- | ------ | -------------------------------------------------------- |
| v-model       | Select value                                               | string\|number\|object | -      | null                                                     |
| options       | Options list                                               | array                  | -      | []                                                       |
| optionAdapter | Options adapter which transform the options list and value | func                   | -      | item => ({<br> id: item,<br> label: item,<br> item<br>}) |

## Events

| Event name | Type                   | Description  |
| ---------- | ---------------------- | ------------ |
| change     | string, number, object | Change event |

---

```vue live
<SFormSelect :options="[1, 2, 3]" />
```
