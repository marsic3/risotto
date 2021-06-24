# Files

There is available basic ExpressJS server with sample API. It possible to launch it via `nodemon api/app.js` command in the template root. It cointains all necessary endpoints to test the template.

**Note!** The API does not provide any database connections.

Blow are listed all available endpoints with descriptions.

## Environment Variables

The template includes `.env` file which contain important environment variables. Most of platforms like ex. Vercel to configure those variables in the [projects setttings](https://vercel.com/docs/build-step#environment-variables).

`API_URL` - Base URL of API endpoints
`MAP_API_KEY` - GoogleMap [API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)
`PAYPAL_LIVE_MODE` - Set to `true` to run Live PayPal payments (`false` will use the sandbox)
`PAYPAL_CLIENT_ID_SANDBOX` - PayPal Sandbox [Client ID](https://developer.paypal.com/docs/api-basics/manage-apps/)
`PAYPAL_CLIENT_ID_LIVE` - PayPal Live [Client ID](https://developer.paypal.com/docs/api-basics/manage-apps/)
`DEMO_MODE` - Set to `true` to turn on demo mode (ex. adds theme customizer)

## Assets

This directory contains un-compiled SCSS assets. Those are basic template styles and [Bootstrap 4](https://bootstrap-vue.org/) overrides.

**Directory:** `./assets/`

## Components

This directory contains all VueJS [Components](../components.html).

**Directory:** `./components/`

## Layouts

This directory applications layouts ([more](https://nuxtjs.org/guide/views#layouts)).

- `default.vue` - Default application template
- `simple.vue` - Simple application only with a route view
- `error.vue` - Default error template

**Directory:** `./layout/`

## Middleware

This directory contains your application middleware ([more](https://nuxtjs.org/guide/routing#middleware)).

## Mixins

This directory contains application mixins ([more](https://vuejs.org/v2/guide/mixins.html)).

## Pages

This directory contains all application pages and routes ([more](https://nuxtjs.org/guide/routing/)).

## Plugins

This directory contains Javascript plugins that you want to run before mounting the root Vue.js application ([more](https://nuxtjs.org/guide/plugins/)).

## Static

This directory contains all static assets ([more](https://nuxtjs.org/guide/assets#static)).

## Store

The template is based of [Vuex](https://vuex.vuejs.org/) Store. It is divided on well-commented modules which manage all necessary data ([more](https://nuxtjs.org/guide/vuex-store)).

**Directory:** `./store/`

### Shell

Stores and manages visual states of the template.

**File:** `shell.js`

### Settings

Stores basic settings of the template.

**File:** `settings.js`

### Theme

Stores all template settings.

**File:** `theme.js`

### Menu

Stores and manages menu itemsm, categories and offers.

**File:** `menu.js`

### Cart

Stores and manages cart and checkout state.

**File:** `cart.js`
