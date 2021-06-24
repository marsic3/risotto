module.exports = {
  pageTitle: null,
  sections: [
    {
      name: 'HeroCentered',
      props: {
        media: {
          type: 'video',
          source: {
            title: 'Video Title',
            url: 'https://assets.suelo.pl/soup/video/video_3.mp4'
          }
        },
        logo: 'https://assets.suelo.pl/soup/img/logo-light-green.svg',
        title: 'Risotto',
        tagline: 'and use it with your next order!',
        link: {
          title: 'Jelovnik',
          slug: '/menu-grid-navigation'
        }
      }
    },
    {
      name: 'ImageEdge',
      props: {
        content: {
          rate: 4,
          title: 'The best food in London!',
          description: 'Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....',
          reviews: [
            {
              content: 'It’ was amazing feeling for may belly!',
              rate: 4,
              source: 'Booking',
              author: {
                name: 'Mark Johnson',
                thumbnail: {
                  title: 'Image Title',
                  url: 'https://assets.suelo.pl/soup/img/avatars/avatar02.jpg'
                }
              }
            },
            {
              content: 'Great food and great atmosphere!',
              rate: 5,
              source: 'Facebook',
              author: {
                name: 'Kate Hudson',
                thumbnail: {
                  title: 'Image Title',
                  url: 'https://assets.suelo.pl/soup/img/avatars/avatar01.jpg'
                }
              }
            }
          ]
        },
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/bg-chef.jpg'
        },
        reverse: true
      }
    },
    {
      name: 'Categories',
      props: {
        title: null
      }
    },
    {
      name: 'Offers',
      props: {
        title: 'Special Offers',
        theme: 'light'
      }
    },
    {
      name: 'Features',
      props: {
        theme: 'dark',
        bg: 'dark',
        items: [
          {
            title: 'Pick a dish',
            description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.',
            icon: 'shopping-cart'
          },
          {
            title: 'Make a payment',
            description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.',
            icon: 'wallet'
          },
          {
            title: 'Recieve your food!',
            description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.',
            icon: 'package'
          }
        ],
        extend: 'left'
      }
    },
    {
      name: 'LatestPosts',
      props: {
        title: 'LatestPosts',
        theme: 'light'
      }
    },
    {
      name: 'Cta',
      props: {
        theme: 'dark',
        bg: 'dark',
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/bg-croissant.jpg'
        },
        title: 'Check our promo video!',
        tagline: 'Book a table even right now or make an online order!',
        link: {
          title: 'Order now!',
          slug: 'menu-list-collapse'
        }
      }
    }
  ],
  settings: {
    headerTransparent: true,
    hideHeaderLogo: true
  }
}
