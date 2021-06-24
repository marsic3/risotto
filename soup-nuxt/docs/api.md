# API

There is available basic ExpressJS server with sample REST API. To launch it on your local machine you need to get into `soup-api` directory via terminal, install all node modules (`npm install`) and then run `npm dev` command.

It contains all necessary endpoints to test the template. The API does not provide any database connections.

**Note!** The base URL for API connections is set at `API_URL` environment variable (`.env` file).

Blow are listed all available endpoints with descriptions.

## Settings

### `GET /settings`

Returns base restaurant [Settings](../data-models.html#settings).

<details><summary>Sample response</summary>

```json
{
  "address": {
    "street": "St John 21/52",
    "city": "Carcow",
    "contry": "Poland"
  },
  "phone": "+48 432 543 666",
  "email": "hello@example.com",
  "currency": "USD",
  "currencySymbol": "$",
  "deliveryAreas": [
    {
      "zipCode": "30-002",
      "city": "Carcow - Old Town",
      "deliveryCost": 9
    },
    {
      "zipCode": "30-007",
      "city": "Carcow - Center",
      "deliveryCost": 5.5
    }
  ],
  "deliveryTimeOptions": [
    {
      "name": "As fast as possible",
      "value": 0
    },
    {
      "name": "In one hour",
      "value": 1
    },
    {
      "name": "In two hours",
      "value": 2
    }
  ],
  "isOpen": true,
  "minimumCartValue": 20,
  "openHours": [
    {
      "days": [0],
      "openHour": "12:00",
      "closeHour": "22:00"
    },
    {
      "days": [1, 2, 3, 4, 5],
      "openHour": "8:00",
      "closeHour": "20:00"
    },
    {
      "days": [6],
      "openHour": "12:00",
      "closeHour": "24:00"
    }
  ],
  "socialMedia": [
    {
      "type": "facebook",
      "url": "#"
    },
    {
      "type": "google",
      "url": "#"
    },
    {
      "type": "twitter",
      "url": "#"
    },
    {
      "type": "instagram",
      "url": "#"
    },
    {
      "type": "linkedin",
      "url": "#"
    }
  ],
  "menuDefaultView": "/menu-list-navigation",
  "navigation": [
    {
      "name": "Home",
      "path": null,
      "children": [
        {
          "name": "Home Basic",
          "path": "/"
        },
        {
          "name": "Home Video",
          "path": "/index-video"
        },
        {
          "name": "Home Slider",
          "path": "/index-slider"
        },
        {
          "name": "Home Burgers",
          "path": "/index-burgers"
        }
      ]
    },
    {
      "name": "About",
      "path": null,
      "dropdownImage": {
        "title": "Image Title",
        "url": "http://assets.suelo.pl/soup/img/photos/dropdown-about.jpg"
      },
      "children": [
        {
          "name": "About",
          "path": "/about"
        },
        {
          "name": "Services",
          "path": "/services"
        },
        {
          "name": "Gallery",
          "path": "/gallery"
        },
        {
          "name": "Reviews",
          "path": "/reviews"
        }
      ]
    },
    {
      "name": "Menu",
      "path": null,
      "children": [
        {
          "name": "List",
          "path": "#",
          "children": [
            {
              "name": "Navigation",
              "path": "/menu-list-navigation"
            },
            {
              "name": "Collapse",
              "path": "/menu-list-collapse"
            }
          ]
        },
        {
          "name": "Grid",
          "path": null,
          "children": [
            {
              "name": "Navigation",
              "path": "/menu-grid-navigation"
            },
            {
              "name": "Collapse",
              "path": "/menu-grid-collapse"
            }
          ]
        }
      ]
    },
    {
      "name": "Offers",
      "path": "/offers"
    },
    {
      "name": "Contact",
      "path": "/contact"
    },
    {
      "name": "Other",
      "path": null,
      "dropdownImage": {
        "title": "Image Title",
        "url": "http://assets.suelo.pl/soup/img/photos/dropdown-more.jpg"
      },
      "children": [
        {
          "name": "FAQ",
          "path": "/faq"
        },
        {
          "name": "Blog",
          "path": "/blog"
        }
      ]
    }
  ],
  "meta": {
    "title": "Soup - NuxtJS Restaurant with Online Ordering System Template",
    "description": "NuxtJS Restaurant with Online Ordering System Template",
    "keywords": "NuxtJS, Online Ordering, Template, Restaurant"
  }
}
```

</details>

## Theme

### `GET /theme`

Returns base [Theme](../data-models.html#theme) configuration.

<details><summary>Sample response</summary>

```json
{
  "footerType": "Basic",
  "footerModules": ["LOGO", "LATEST_POSTS", "NEWSLETTER", "SOCIAL_MEDIA"],
  "footerLogo": "http://assets.suelo.pl/soup/img/logo-light.svg",
  "headerLogoLight": "http://assets.suelo.pl/soup/img/logo-light.svg",
  "headerLogoDark": "http://assets.suelo.pl/soup/img/logo-dark.svg",
  "headerLogoStyle": "VERTICAL",
  "headerLogoBackground": "DARK",
  "themeInverted": false,
  "themeBodyPadded": true,
  "themeColor": "#ddae71"
}
```

</details>

## Menu

### `GET /menu/categories`

Returns an array with [MenuCategory](../data-models.html#menucategory) elements.

<details><summary>Sample response</summary>

```json
[
  {
    "id": 1,
    "name": "Burgers",
    "image": {
      "title": "Image Title",
      "url": "http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg"
    }
  },
  {
    "id": 2,
    "name": "Pizza",
    "image": {
      "title": "Image Title",
      "url": "http://assets.suelo.pl/soup/img/photos/menu-title-pizza.jpg"
    }
  }
]

```

</details>

### `GET /menu/items`

Returns an array with [MenuItem](../data-models.html#menuitem) elements.

<details><summary>Sample response</summary>

```json
[
  {
    "id": 1,
    "categoryId": 1,
    "name": "American Classic",
    "image": {
      "title": "Image Title",
      "url": "http://assets.suelo.pl/soup/img/products/burger01.jpg"
    },
    "description": "Beef, Cheese, Potato, Onion, Fries",
    "price": 9,
    "options": [
      {
        "id": 1,
        "name": "Size",
        "list": [
          {
            "id": 1,
            "name": "Normal - 200g",
            "price": 0
          },
          {
            "id": 2,
            "name": "Double - 400g",
            "price": 4
          }
        ]
      },
      {
        "id": 2,
        "name": "Meat",
        "list": [
          {
            "id": 1,
            "name": "Chicken",
            "price": 0
          },
          {
            "id": 2,
            "name": "Beef",
            "price": 0
          }
        ]
      }
    ],
    "additions": [
      {
        "id": 1,
        "name": "Prosciutto",
        "price": 3
      },
      {
        "id": 2,
        "name": "Chicken",
        "price": 2
      },
      {
        "id": 3,
        "name": "Champignon Mushroom",
        "price": 5
      },
      {
        "id": 4,
        "name": "Beef",
        "price": 3
      },
      {
        "id": 5,
        "name": "Salami",
        "price": 3
      },
      {
        "id": 6,
        "name": "Potato",
        "price": 2
      },
      {
        "id": 7,
        "name": "Paprika",
        "price": 2
      },
      {
        "id": 8,
        "name": "Broccoli",
        "price": 2
      },
      {
        "id": 9,
        "name": "Cheese",
        "price": 2
      },
      {
        "id": 10,
        "name": "Onion",
        "price": 2
      }
    ]
  },
  {
    "id": 2,
    "categoryId": 1,
    "name": "Chicen Burger",
    "image": {
      "title": "Image Title",
      "url": "http://assets.suelo.pl/soup/img/products/burger02.jpg"
    },
    "description": "Chicken, Cheese, Potato, Onion, Fries",
    "price": 9,
    "options": [
      {
        "id": 1,
        "name": "Size",
        "list": [
          {
            "id": 1,
            "name": "Normal - 200g",
            "price": 0
          },
          {
            "id": 2,
            "name": "Double - 400g",
            "price": 4
          }
        ]
      }
    ],
    "additions": null
  },
  {
    "id": 3,
    "categoryId": 1,
    "name": "Angus Burger",
    "image": {
      "title": "Image Title",
      "url": "http://assets.suelo.pl/soup/img/products/burger03.jpg"
    },
    "description": "Angues Beef, Pickles, Potato, Onion, Fries",
    "price": 14,
    "options": null,
    "additions": null
  }
]
```

</details>

### `GET /menu/offers`

Returns an array with [MenuOffer](../data-models.html#menuoffer) items.

<details><summary>Sample response</summary>

```json
[
  {
    "id": 1,
    "name": "Free Small Pizza",
    "description": "Get free small pizza orders higher that $40!",
    "type": "FREE_PRODUCT",
    "freeProductId": 4,
    "conditions": [
      {
        "id": 14,
        "name": "Only on Weekends",
        "type": "DAY",
        "value": [0, 6]
      },
      {
        "id": 15,
        "name": "Order higher than $40",
        "type": "MINIMUM_ORDER_VALUE",
        "value": 40
      },
      {
        "id": 16,
        "name": "Unless one Pizza in a cart",
        "type": "CATEGORY_ID",
        "value": [2]
      }
    ],
    "image": {
      "name": "Image Title",
      "url": "http://assets.suelo.pl/soup/img/photos/special-pizza.jpg"
    }
  },
  {
    "id": 2,
    "name": "Chip Friday",
    "description": "10% Off for all dishes!",
    "type": "DISCOUNT",
    "discountValue": 0.1,
    "conditions": [
      {
        "id": 17,
        "name": "Only on Friday",
        "type": "DAY",
        "value": [5]
      },
      {
        "id": 18,
        "name": "All products",
        "type": "CATEGORY_ID",
        "value": [1, 2, 3, 4, 5, 6]
      }
    ],
    "image": {
      "name": "Image Title",
      "url": "http://assets.suelo.pl/soup/img/photos/special-dish.jpg"
    }
  }
]
```

</details>

## Checkout

### `POST /checkout/order`

Posts [Order](../data-models.html#order) object and returns [OrderResponse](../data-models.html#orderresponse) object.

<details><summary>Sample body</summary>

```json
{
  "deliveryArea": {
    "zipCode": "30-002",
    "city": "Carcow - Old Town",
    "deliveryCost": 9
  },
  "deliveryTime": "12:00",
  "paymentMethod": "CASH",
  "name": "Piotr",
  "orderType": "DELIVERY",
  "street": "Zx63",
  "phone": "514219823",
  "email": "piotr.osmola@gmail.com",
  "activeOffersIds": [3],
  "discountCoupon": {
    "id": 1,
    "code": "WEED_23",
    "name": "Somkers Discount",
    "value": 0.2
  }
}
```

</details>

<details><summary>Sample response</summary>

```json
{
  "id": 1,
  "message": "We are processing it right now - your will receive it about 45 minutes..."
}
```

</details>

### `POST /checkout/discount/{code}`

Posts discount `{code}` to verification and returns [Discount](../data-models.html#discount) object.

There are two demo codes `WEED_24` & `FITT`.

<details><summary>Sample response</summary>

```json
{
  "id": 1,
  "code": "WEED_23",
  "name": "Somkers Discount",
  "value": 0.2
}
```

</details>

## Pages

### `GET /page/{route}`

Returns [PageDefault](../data-models.html#pagedefault) object where `{route}` matches exact website route path (ex. `/page/about`).

<details><summary>Sample response</summary>

```json
{
  "pageTitle": {
    "title": "About Us",
    "theme": "light",
    "tagline": "Some informations about our restaurant"
  },
  "sections": [
    {
      "name": "ImageEdge",
      "props": {
        "content": {
          "rate": 4,
          "title": "The best food in London!",
          "descriptionLead": "Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....",
          "description": "Nam eleifend elementum sapien et bibendum. Nunc ac diam efficitur, ultrices lorem quis, consectetur odio. Nullam vulputate, eros quis accumsan cursus, elit lectus bibendum nulla, sed dapibus ligula tellus at purus. Fusce id eros id mi cursus semper. Quisque efficitur bibendum nunc a consectetur. Maecenas vitae quam iaculis, scelerisque purus nec, varius purus. Nullam eget varius elit. Donec eget facilisis nunc, non rutrum lorem.",
          "author": "Mark Johnson, Chef",
          "sign": "http://assets.suelo.pl/soup/img/svg/sign.svg"
        },
        "image": {
          "title": "Image Title",
          "url": "http://assets.suelo.pl/soup/img/photos/bg-chef.jpg"
        },
        "reverse": true
      }
    },
    {
      "name": "CtaAlternative",
      "props": {
        "image": {
          "title": "Image Title",
          "url": "http://assets.suelo.pl/soup/img/photos/bg-croissant.jpg"
        },
        "title": "Check our promo video!",
        "tagline": "Book a table even right now or make an online order!",
        "modalVideo": "https://www.youtube.com/embed/uVju5--RqtY",
        "bg": "dark",
        "theme": "dark"
      }
    }
  ]
}
```

</details>

### `GET /page/faq`

Returns [PageFaq](../data-models.html#pageFaq) object.

<details><summary>Sample response</summary>

```json
{
  "pageTitle": {
    "title": "FAQ",
    "theme": "light",
    "tagline": "Some informations about our restaurant"
  },
  "categories": [
    {
      "id": 1,
      "name": "General",
      "questions": [
        {
          "id": 1,
          "title": "How to make an order?",
          "content": "Donec rutrum turpis justo, vel condimentum neque fringilla vel. Nam feugiat at lacus eu egestas. Suspendisse nibh sem, blandit sed elit at, dictum accumsan elit. Sed eu orci risus. Suspendisse ante nisi, vestibulum suscipit sagittis ut, elementum id quam. Aliquam eget ullamcorper odio."
        },
        {
          "id": 2,
          "title": "Is the order process safe for customers?",
          "content": "Donec rutrum turpis justo, vel condimentum neque fringilla vel. Nam feugiat at lacus eu egestas. Suspendisse nibh sem, blandit sed elit at, dictum accumsan elit. Sed eu orci risus. Suspendisse ante nisi, vestibulum suscipit sagittis ut, elementum id quam. Aliquam eget ullamcorper odio."
        }
      ]
    }
  ]
}
```

</details>

## Blog

### `GET /blog/{route}`

Returns array with [BlogPost](../data-models.html#blogpost) elements.

<details><summary>Sample response</summary>

```json
[
  {
    "id": 1,
    "title": "How to create effective webdeisign?",
    "shortDescription": "In hac habitasse platea dictumst. Curabitur vestibulum nulla non efficitur pulvinar.",
    "content": "<p class=\"lead\">In hac habitasse platea dictumst. Curabitur vestibulum nulla non efficitur pulvinar. Nulla pulvinar est in eros vehicula lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Aenean rutrum dapibus molestie. Praesent eu nibh a magna maximus semper. Aliquam odio nulla, ornare et imperdiet dignissim, rutrum et felis. Nulla in eros et magna vehicula tincidunt quis eget orci. Quisque in est ac augue bibendum fringilla quis a odio. Donec mollis consectetur commodo. Cras interdum ac nibh id sodales. Phasellus egestas varius pulvinar. Aliquam sit amet felis sit amet purus vestibulum dictum in sit amet justo. Nam blandit arcu porttitor, faucibus purus a, vehicula odio. Pellentesque semper, odio sed commodo iaculis, augue mauris scelerisque mi, in mattis elit justo ut erat. Nulla cursus turpis sollicitudin, eleifend lectus non, tristique nunc. Fusce vitae varius tellus.</p>",
    "media": {
      "type": "image",
      "url": "http://assets.suelo.pl/soup/img/posts/post01.jpg",
      "sizes": {
        "md": "http://assets.suelo.pl/soup/img/posts/post01.jpg",
        "lg": "http://assets.suelo.pl/soup/img/posts/post01_lg.jpg"
      }
    },
    "createdAt": "2020-07-14T11:12:18+0000",
    "author": "Johnatan Doe"
  },
  {
    "id": 2,
    "title": "Awesome weekend in Polish mountains!",
    "shortDescription": "In hac habitasse platea dictumst. Curabitur vestibulum nulla non efficitur pulvinar.",
    "content": "<p class=\"lead\">In hac habitasse platea dictumst. Curabitur vestibulum nulla non efficitur pulvinar. Nulla pulvinar est in eros vehicula lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Aenean rutrum dapibus molestie. Praesent eu nibh a magna maximus semper. Aliquam odio nulla, ornare et imperdiet dignissim, rutrum et felis. Nulla in eros et magna vehicula tincidunt quis eget orci. Quisque in est ac augue bibendum fringilla quis a odio. Donec mollis consectetur commodo. Cras interdum ac nibh id sodales. Phasellus egestas varius pulvinar. Aliquam sit amet felis sit amet purus vestibulum dictum in sit amet justo. Nam blandit arcu porttitor, faucibus purus a, vehicula odio. Pellentesque semper, odio sed commodo iaculis, augue mauris scelerisque mi, in mattis elit justo ut erat. Nulla cursus turpis sollicitudin, eleifend lectus non, tristique nunc. Fusce vitae varius tellus.</p>",
    "media": {
      "type": "image",
      "url": "http://assets.suelo.pl/soup/img/posts/post02.jpg",
      "sizes": {
        "md": "http://assets.suelo.pl/soup/img/posts/post02.jpg",
        "lg": "http://assets.suelo.pl/soup/img/posts/post02_lg.jpg"
      }
    },
    "createdAt": "2020-08-12T11:12:18+0000",
    "author": "Johnatan Doe"
  }
]
```

</details>

### `GET /blog/{id}`

Returns [BlogPost](../data-models.html#blogpost) element by ID.

<details><summary>Sample response</summary>

```json
{
  "id": 1,
  "title": "How to create effective webdeisign?",
  "shortDescription": "In hac habitasse platea dictumst. Curabitur vestibulum nulla non efficitur pulvinar.",
  "content": "<p class=\"lead\">In hac habitasse platea dictumst. Curabitur vestibulum nulla non efficitur pulvinar. Nulla pulvinar est in eros vehicula lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Aenean rutrum dapibus molestie. Praesent eu nibh a magna maximus semper. Aliquam odio nulla, ornare et imperdiet dignissim, rutrum et felis. Nulla in eros et magna vehicula tincidunt quis eget orci. Quisque in est ac augue bibendum fringilla quis a odio. Donec mollis consectetur commodo. Cras interdum ac nibh id sodales. Phasellus egestas varius pulvinar. Aliquam sit amet felis sit amet purus vestibulum dictum in sit amet justo. Nam blandit arcu porttitor, faucibus purus a, vehicula odio. Pellentesque semper, odio sed commodo iaculis, augue mauris scelerisque mi, in mattis elit justo ut erat. Nulla cursus turpis sollicitudin, eleifend lectus non, tristique nunc. Fusce vitae varius tellus.</p>",
  "media": {
    "type": "image",
    "url": "http://assets.suelo.pl/soup/img/posts/post01.jpg",
    "sizes": {
      "md": "http://assets.suelo.pl/soup/img/posts/post01.jpg",
      "lg": "http://assets.suelo.pl/soup/img/posts/post01_lg.jpg"
    }
  },
  "createdAt": "2020-07-14T11:12:18+0000",
  "author": "Johnatan Doe"
}
```

</details>
