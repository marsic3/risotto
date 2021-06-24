module.exports = () => {
  const moment = require('moment')

  let deliveryTimes = []

  for (let i = 1; i < 13; i++) {
    const now = moment()
    deliveryTimes.push(
      moment(now)
        .add(15 - (now.minute() % 15), 'minutes')
        .add(i * 15, 'minutes')
        .format('HH:mm')
    )
  }

  return {
    address: {
      street: 'St John 21/52',
      city: 'Carcow',
      contry: 'Poland'
    },
    phone: '+48 432 543 666',
    email: 'hello@example.com',
    currency: 'RSD',
    currencySymbol: 'rsd',
    deliveryAreas: [
      {
        zipCode: '30-002',
        city: 'Carcow - Old Town',
        deliveryCost: 9
      },
      {
        zipCode: '30-007',
        city: 'Carcow - Center',
        deliveryCost: 5.5
      }
    ],
    deliveryTimeOptions: deliveryTimes,
    isOpen: true,
    minimumCartValue: 20,
    openHours: [
      {
        days: [0],
        openHour: '12:00',
        closeHour: '22:00'
      },
      {
        days: [1, 2, 3, 4, 5],
        openHour: '8:00',
        closeHour: '20:00'
      },
      {
        days: [6],
        openHour: '12:00',
        closeHour: '24:00'
      }
    ],
    socialMedia: [
      {
        type: 'facebook',
        url: '#'
      },
      {
        type: 'google',
        url: '#'
      },
      {
        type: 'twitter',
        url: '#'
      },
      {
        type: 'instagram',
        url: '#'
      },
      {
        type: 'linkedin',
        url: '#'
      }
    ],
    menuDefaultView: '/menu-list-navigation',
    navigation: [
      {
        name: 'Home',
        path: '/',
        // children: [
        //   {
        //     name: 'Home Basic',
        //     path: '/index?theme=1'
        //   },
        //   {
        //     name: 'Home Video',
        //     path: '/index-video?theme=2'
        //   },
        //   {
        //     name: 'Home Slider',
        //     path: '/index-slider?theme=3'
        //   },
        //   {
        //     name: 'Home Burgers',
        //     path: '/index-burgers?theme=4'
        //   }
        // ]
      },
      // {
      //   name: 'About',
      //   path: null,
      //   dropdownImage: {
      //     title: 'Image Title',
      //     url: 'https://assets.suelo.pl/soup/img/photos/dropdown-about.jpg'
      //   },
      //   children: [
      //     {
      //       name: 'About',
      //       path: '/about'
      //     },
      //     {
      //       name: 'Services',
      //       path: '/services'
      //     },
      //     {
      //       name: 'Gallery',
      //       path: '/gallery'
      //     },
      //     {
      //       name: 'Reviews',
      //       path: '/reviews'
      //     }
      //   ]
      // },
      {
        name: 'Menu',
        path: '/menu-grid-navigation',
        // children: [
        //   {
        //     name: 'List',
        //     path: '#',
        //     children: [
        //       {
        //         name: 'Navigation',
        //         path: '/menu-list-navigation'
        //       },
        //       {
        //         name: 'Collapse',
        //         path: '/menu-list-collapse'
        //       }
        //     ]
        //   },
        //   {
        //     name: 'Grid',
        //     path: null,
        //     children: [
        //       {
        //         name: 'Navigation',
        //         path: '/menu-grid-navigation'
        //       },
        //       {
        //         name: 'Collapse',
        //         path: '/menu-grid-collapse'
        //       }
        //     ]
        //   }
        // ]
      },
      {
        name: 'Offers',
        path: '/offers'
      },
      {
        name: 'Contact',
        path: '/contact'
      },
      {
        name: 'Blog',
        path: '/blog',
      },
      // {
      //   name: 'Other',
      //   path: null,
      //   dropdownImage: {
      //     title: 'Image Title',
      //     url: 'https://assets.suelo.pl/soup/img/photos/dropdown-more.jpg'
      //   },
      //   children: [
      //     {
      //       name: 'FAQ',
      //       path: '/faq'
      //     },
      //     {
      //       name: 'Blog',
      //       path: '/blog'
      //     },
      //     {
      //       name: 'Terms & Conditions',
      //       path: '/terms'
      //     },
      //     {
      //       name: 'Documentation',
      //       path: '/docs/',
      //       target: '_blank'
      //     }
      //   ]
      // }
    ],
    name: 'Rižoto',
    meta: {
      title: 'Rižoto - NuxtJS Restaurant with Online Ordering System Template',
      shortTitle: 'Rižoto',
      description: 'Neat & Complete NuxtJS Template dedicated for Restaurants with online ordering system.',
      keywords: 'NuxtJS, Online Ordering, Template, Restaurant'
    }
  }
}
