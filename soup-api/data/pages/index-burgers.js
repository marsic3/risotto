module.exports = {
  pageTitle: null,
  sections: [
    {
      name: 'HeroSimple',
      props: {
        media: {
          type: 'image',
          source: {
            title: 'Video Title',
            url: 'https://assets.suelo.pl/soup/img/photos/hero-burger.jpg'
          }
        },
        title: 'The Best Burgers in the city!',
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
          title: 'Why our Burgers?',
          description: 'Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....',
          features: [
            {
              icon: 'desktop',
              title: 'Online Order',
              description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.'
            },
            {
              icon: 'heart',
              title: 'Perfect Taste',
              description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.'
            }
          ]
        },
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/bg-burger.jpg'
        },
        reverse: false
      }
    },
    {
      name: 'Categories',
      props: {
        title: null
      }
    },
    {
      name: 'Menu',
      props: {
        title: 'Our Menu',
        categories: [1, 2, 3]
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
        ]
      }
    },
    {
      name: 'CtaAlternative',
      props: {
        theme: 'dark',
        bg: 'dark',
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/bg-burger2.jpg'
        },
        title: 'Check our promo video!',
        tagline: 'Book a table even right now or make an online order!',
        modalVideo: 'https://www.youtube.com/embed/uVju5--RqtY',
        link: {
          title: 'Order now!',
          slug: '/menu-list-collapse'
        }
      }
    }
  ],
  settings: {
    headerTransparent: true,
    hideHeaderLogo: false
  }
}
