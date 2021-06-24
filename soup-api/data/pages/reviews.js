module.exports = {
  pageTitle: {
    title: 'Reviews',
    theme: 'dark',
    media: {
      type: 'image',
      source: {
        title: 'Image Title',
        url: 'https://assets.suelo.pl/soup/img/photos/bg-croissant.jpg'
      }
    },
    tagline: 'Some informations about our restaurant'
  },
  sections: [
    {
      name: 'Reviews',
      props: {
        title: null,
        items: [
          {
            id: 1,
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
            id: 2,
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
          },
          {
            id: 3,
            content: 'Best food in da city!',
            rate: 4,
            source: 'Booking',
            author: {
              name: 'John Johnson',
              thumbnail: {
                title: 'Image Title',
                url: 'https://assets.suelo.pl/soup/img/avatars/avatar02.jpg'
              }
            }
          }
        ],
        carousel: false
      }
    }
  ]
}
