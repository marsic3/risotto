# SBlockquote

> Basic blockquote / review component

## Props

| Prop name | Description                    | Type    | Values | Default  |
| --------- | ------------------------------ | ------- | ------ | -------- |
| item      | Blockquote base data object    | object  | -      | () => {} |
| odd       | Makes odd item looks different | boolean | -      | false    |
| large     | Increases size of blockquote   | boolean | -      | false    |

---

Sample data structure for `item` prop:

```json
{
  "content": "It’ was amazing feeling for may belly!",
  "rate": 4,
  "author": {
    "name": "Mark Johnson",
    "source": "Booking",
    "thumbnail": "http://assets.suelo.pl/soup/img/avatars/avatar02.jpg"
  }
}
```
