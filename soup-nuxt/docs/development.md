# Development

The template is divided into two parts:

1. `soup-nuxt` - app based on [NuxtJS](https://nuxtjs.org) framework.
2. `soup-api` - demo REST API based on NuxtJS and Express (with static data - without database connections).

Follow this steps to start development process:

1. Install [NodeJS](https://nodejs.org/en/) on your machine (to check if it is already installed please open terminal / command line and execute `node -v` command) - v.12.00.0+ recmmended.
2. Get to `soup-api` API directory via terminal / command line and install all dependencies via `npm run install` script.
3. Execute `npm run dev` command to start local API (on [http://localhost:4000](http://localhost:4000)).
4. Get to `soup-nuxt` NuxtJS app directory via terminal / command line and install all dependencies via `npm run install` script.
5. Execute `npm run dev` command to start development server (on [http://localhost:3000](http://localhost:3000)).

**Note!** It is necessary to run the demo API before starting NuxtJS server - without it the application will not start due to the fact that there is an async configuration at `nuxt.config.js`.

As default the template use [Vercel (Now)](http://vercel.com) for SSR deployment purposes, but it is also possible to use any other service ([more](https://nuxtjs.org/faq/deployment-aws-s3-cloudfront)).

[Click here](https://nuxtjs.org/guide/commands/) to read more about NuxtJS commands and deployment.
