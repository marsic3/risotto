# Configuration

The template contains lots of useful features and configurations.

## Cart & Checkout

It is possible to add some configurations to the shopping cart / checkout mechanism...

### Currency

To set the currency it is necessary to add a global shortcut (ex. USD) and symbol (ex. $).

- **Params:** `currency`, `currencySymbol`
- **Endpoint:** [`GET /settings`](../api.html#settings)

### Minimum Cart Value

It's a minimal cart value without delivery costs to proceed an order.

- **Param:** `minimumCartValue`
- **Endpoint:** [`GET /settings`](../api.html#settings)

### Delivery Areas

It is possible to add unlimited delivery ares with different shipping costs.

- **Param:** `deliveryAreas`
- **Model:** [DeliveryArea](../data-models.html#dliveryarea)
- **Endpoint:** [`GET /settings`](../api.html#settings)

### Delivery Times

The template allows to add delivery time options to choose by the client.

- **Param:** `deliveryTimesOptions`
- **Model:** [DeliveryTimeOption](../data-models.html#deliverytimeoption)
- **Endpoint:** [`GET /settings`](../api.html#settings)

## Offers

Offers are objects which can modify the cart while their conditions are fulfilled.

There are two types off offers:

1. **Discount** - adds a discunt to the cart
2. **Free Product** - adds free product to the cart

Each offers has to contain a conditions to fulfill. There are three types of conditions:

1. **Day** - index of a day when the offers is active.
2. **Minimum Order Value** - minimum value of and order to active an offer.
3. **Category ID** - id of category which product has to be added to the cart.

When all conditions are active the special offer result appear in the cart.

- **Model:** [MenuOffer](../data-models.html#menuoffer)
- **Endpoint:** [`GET /menu/offers`](../api.html#get-menu-offers)
