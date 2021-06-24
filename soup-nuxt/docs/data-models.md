# Data Models

There is a designed data structure which is recommended to use with this template.

## Basics

### Theme

| Title                | Type            | Description                                                             |
| -------------------- | --------------- | ----------------------------------------------------------------------- |
| footerType           | `String`        | Suffix of SFooter component name.                                       |
| footerModules        | `Array<String>` | Array with a footer modules names (depends of a footer component type). |
| footerLogo           | `String`        | URL to footer logo                                                      |
| headerLogoLight      | `String`        | URL to desktop header logo (light version)                              |
| headerLogoDark       | `String`        | URL to desktop header logo (dark version)                               |
| headerLogoStyle      | `String`        | Type of logo style (`HORIZONTAL` or `VERTICAL`)                         |
| headerLogoBackground | `String`        | Background of a vertical logo (`DARK` or `LIGHT`)                       |
| themeInverted        | `Boolean`       | Set to true to use dark template mode                                   |
| themeBodyPadded      | `Boolean`       | Set to true to add body paddings (only od desktop)                      |
| themeColor           | `String`        | Main template HEX color                                                 |

### Settings

| Title               | Type                    | Description                                                       |
| ------------------- | ----------------------- | ----------------------------------------------------------------- |
| name                | `String`                | Restaurant's name                                                 |
| address             | `Address`               | Restaurant's [Address](#address) object                           |
| phone               | `String`                | Phone number                                                      |
| email               | `String`                | E-mail address                                                    |
| currency            | `String`                | Currency shortcut (ex. USD)                                       |
| currencySymbol      | `String`                | Currency symbol (ex. $)                                           |
| deliveryAreas       | `Array<DeliveryArea>`   | Array with [DeliveryArea](#deliveryarea) objects                  |
| deliveryTimeOptions | `Array<String>`         | Array with delivery time options                                  |
| isOpen              | `Boolean`               | Defines if restaruant is open and it is possible to make an order |
| minimumCartValue    | `Number`                | Minimum cart value to make an order (without delivery cost)       |
| openHours           | `Number`                | Restaurant's [OpenHours](#openhours) object                       |
| socialMedia         | `Array<SocialMedia>`    | Array with [SocialMedia](#socialmedia) objects                    |
| menuDefaultView     | `String`                | Default menu route                                                |
| navigation          | `Array<NavigationItem>` | Array with [NavigationItem](#navigationitem) objects              |
| meta                | `PageMeta`              | [PageMeta](#pagemeta) object                                      |

## Menu

### MenuCategory

| Title | Type     | Description                                 |
| ----- | -------- | ------------------------------------------- |
| id    | `Number` | Unique category's ID                        |
| name  | `String` | Category's name                             |
| image | `Image`  | Cover [Image](#imagesize) object (optional) |

### MenuItem

| Title         | Type                    | Description                                 |
| ------------- | ----------------------- | ------------------------------------------- |
| id            | `Number`                | Unique item's ID                            |
| name          | `String`                | Item's name                                 |
| image         | `Image`                 | Cover [Image](#imagesize) object (optional) |
| description   | `String`                | Short item's description                    |
| price         | `String`                | Base item's price                           |
| freeProductId | `Array<MenuItemOption>` | [MenuItemOption](#menuitemoption) objects.  |

### MenuOffer

| Title         | Type                        | Description                                    |
| ------------- | --------------------------- | ---------------------------------------------- |
| id            | `Number`                    | Unique offers's ID                             |
| name          | `String`                    | Offers's name                                  |
| image         | `Image`                     | Cover [Image](#imagesize) object (optional)    |
| description   | `String`                    | Short offers's description                     |
| type          | `String`                    | Offers's type (`DISCOUNT` or `FREE_PRODUCT`)   |
| freeProductId | `Number`                    | Free menu item ID (if type is `FREE_PRODUCT`)  |
| discountValue | `Number`                    | Discount decimal value (if type is `DISCOUNT`) |
| conditions    | `Array<MenuOfferCondition>` | Array with offer's conditions                  |

### MenuOfferCondition

| Title | Type                     | Description                                                                                                                                       |
| ----- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| id    | `Number`                 | Unique conditions's ID                                                                                                                            |
| name  | `String`                 | Condition's name                                                                                                                                  |
| type  | `String`                 | Conditions's type (`MINIMUM_ORDER_VALUE`,`DAY` or `CATEGORY_ID`)                                                                                  |
| value | `Array<Number> | Number` | `DAY` -> Array with days index &nbsp; `CATEGORY_ID` -> Array with categories ID's &nbsp; `MINIMUM_ORDER_VALUE` -> Number with minimum order value |

## Blog

### BlogPost

| Title            | Type     | Description                              |
| ---------------- | -------- | ---------------------------------------- |
| id               | `Number` | Unique post's ID                         |
| title            | `String` | Post's name                              |
| shortDescription | `String` | Short description to show on the list    |
| content          | `String` | WYSYWIG content of a post                |
| media            | `Media`  | Post's [Media](#media) object (optional) |
| createdAta       | `Date`   | Date of post creation                    |
| author           | `String` | Post's author name                       |

## Page

### PageDefault

| Title     | Type                 | Description                                     |
| --------- | -------------------- | ----------------------------------------------- |
| pageTitle | `PageTitle`          | [PageTitlte](#pagetitle) object                 |
| sections  | `Array<PageSection>` | Array with [PageSection](#pagetitle) objects    |
| settings  | `PageSettings`       | [PageSettings](#pagesettings) object (optional) |

### PageTitle

| Title   | Type     | Description                                    |
| ------- | -------- | ---------------------------------------------- |
| title   | `String` | Page title text                                |
| tagline | `String` | Page tagline (optional)                        |
| theme   | `String` | Theme of a page title (`DARK` or `LIGHT`)      |
| media   | `Media`  | Background's [Media](#media) object (optional) |

### PageSettings

| Title             | Type      | Description             |
| ----------------- | --------- | ----------------------- |
| headerTransparent | `Boolean` | Sets transparent header |
| hideHeaderLogo    | `Boolean` | Hides header logo       |

### PageSection

| Title | Type     | Description                                                                                            |
| ----- | -------- | ------------------------------------------------------------------------------------------------------ |
| name  | `String` | Suffix of section's component name (ex. [HeroBasic](../../components/SSection/SSectionHeroBasic.html)) |
| props | `Array`  | Array with section's props ([more](../../components/SSection/SSection.html))                           |

### PageMeta

| Title       | Type     | Description        |
| ----------- | -------- | ------------------ |
| title       | `String` | Page's title       |
| shortTitle  | `String` | Page's short title |
| description | `String` | Page's description |
| keywords    | `String` | Page's keywords    |

## Checkout

### Order

| Title           | Type           | Description                                              |
| --------------- | -------------- | -------------------------------------------------------- |
| deliveryArea    | `DeliveryArea` | [DeliveryArea](#deliveryarea) object                     |
| deliveryTime    | `String`       | Delivery time                                            |
| paymentMethod   | `String`       | Payment method (`CASH` or `PAYPAL`)                      |
| name            | `String`       | Customer's name                                          |
| orderType       | `String`       | Order type (`DELIVERY` or `PICKUP`)                      |
| street          | `String`       | Customer's street                                        |
| phone           | `String`       | Customer's phone                                         |
| email           | `String`       | Customer's email                                         |
| city            | `String`       | Customer's email (only if `orderType: 'PICKUP'`)         |
| accessCode      | `String`       | Customer's access code (only if `orderType: 'DELIVERY'`) |
| activeOffersIds | `String`       | Customer's name                                          |
| discountCoupon  | `Discount`     | [Discount](#discount) object                             |

### OrderResponse

| Title   | Type     | Description           |
| ------- | -------- | --------------------- |
| id      | `Number` | Order's unique ID     |
| message | `String` | Message to a customer |

### DeliveryArea

| Title   | Type     | Description                                           |
| ------- | -------- | ----------------------------------------------------- |
| zipCode | `String` | Area's zip code                                       |
| city    | `String` | Area's name with some details (ex. Carcow - Old Town) |
| price   | `Number` | Delivery cost                                         |

### Discount

| Title | Type     | Description                          |
| ----- | -------- | ------------------------------------ |
| id    | `Number` | Discount's unique ID                 |
| code  | `String` | Discount's code                      |
| name  | `String` | Discount's name to display in a cart |
| value | `Number` | Decimal discount value               |

## Common

### Review

| Title   | Type           | Description                          |
| ------- | -------------- | ------------------------------------ |
| content | `String`       | Review content                       |
| source  | `String`       | Source of a review                   |
| rate    | `Number`       | Review rate (0-5)                    |
| author  | `ReviewAuthor` | [ReviewAuthor](#reviewauthor) object |

### ReviewAuthor

| Title | Type     | Description                                     |
| ----- | -------- | ----------------------------------------------- |
| name  | `String` | Author name                                     |
| image | `Image`  | Thumbnail [Image](#imagesize) object (optional) |

### Location

| Title     | Type        | Description                                   |
| --------- | ----------- | --------------------------------------------- |
| name      | `String`    | Location's name                               |
| phone     | `String`    | Phone number                                  |
| email     | `String`    | E-mail address                                |
| address   | `Address`   | Location's Address [Address](#address) object |
| openHours | `OpenHours` | Location's [OpenHours](#openhours) object     |

### Address

| Title   | Type     | Description                      |
| ------- | -------- | -------------------------------- |
| street  | `String` | Street name with building number |
| city    | `String` | City name                        |
| country | `String` | Contry name                      |

### OpenHours

| Title     | Type            | Description               |
| --------- | --------------- | ------------------------- |
| days      | `Array<Number>` | Array with days of a week |
| openHour  | `String`        | Open hour                 |
| closeHour | `String`        | Close hour                |

### Image

| Title | Type               | Description                                           |
| ----- | ------------------ | ----------------------------------------------------- |
| title | `String`           | Image's title                                         |
| url   | `String`           | URL to image's file                                   |
| sizes | `Array<ImageSize>` | Array with [ImageSize](#imagesize) objects (optional) |

### ImageSize

| Title | Type     | Description              |
| ----- | -------- | ------------------------ |
| name  | `String` | Size name                |
| url   | `String` | URL to image's size file |

### Video

| Title | Type     | Description         |
| ----- | -------- | ------------------- |
| title | `String` | Image's title       |
| url   | `String` | URL to image's file |

### Media

| Title  | Type              | Description                               |
| ------ | ----------------- | ----------------------------------------- |
| type   | `String`          | Media's type (`IMAGE` or `VIDEO`)         |
| source | `Image` / `Video` | [Image](#image) or [Video](#video) object |
