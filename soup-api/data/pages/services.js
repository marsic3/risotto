module.exports = {
  pageTitle: {
    title: 'Our Services',
    theme: 'light',
    tagline: 'Some informations about our restaurant'
  },
  sections: [
    {
      name: 'Double',
      props: {
        content: {
          title: 'Weddings',
          description: 'Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam molestie tincidunt nec vitae diam.',
          link: {
            title: 'Get a quote',
            slug: '/contact'
          }
        },
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/service-weddings.jpg'
        },
        reverse: false
      }
    },
    {
      name: 'Double',
      props: {
        content: {
          title: 'Engagement Parties',
          description: 'Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam molestie tincidunt nec vitae diam.',
          link: {
            title: 'Get a quote',
            slug: '/contact'
          }
        },
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/service-engagement.jpg'
        },
        reverse: true
      }
    },
    {
      name: 'Double',
      props: {
        content: {
          title: 'Birthday Parties',
          description: 'Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam molestie tincidunt nec vitae diam.',
          link: {
            title: 'Get a quote',
            slug: '/contact'
          }
        },
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/service-birthday.jpg'
        },
        reverse: false
      }
    }
  ]
}
