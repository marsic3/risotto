module.exports = {
  pageTitle: {
    title: 'Our Gallery',
    theme: 'dark',
    tagline: 'Some informations about our restaurant'
  },
  sections: [
    {
      name: 'Gallery',
      props: {
        items: [
          {
            title: 'Photo Title',
            url: 'https://assets.suelo.pl/soup/img/gallery/gallery01.jpg'
          },
          {
            title: 'Photo Title',
            url: 'https://assets.suelo.pl/soup/img/gallery/gallery02.jpg'
          },
          {
            title: 'Photo Title',
            url: 'https://assets.suelo.pl/soup/img/gallery/gallery03.jpg'
          },
          {
            title: 'Photo Title',
            url: 'https://assets.suelo.pl/soup/img/gallery/gallery04.jpg'
          },
          {
            title: 'Photo Title',
            url: 'https://assets.suelo.pl/soup/img/gallery/gallery05.jpg'
          }
        ]
      }
    },
    {
      name: 'Cta',
      props: {
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/bg-croissant.jpg'
        },
        title: 'Check our promo video!',
        tagline: 'Book a table even right now or make an online order!',
        modalVideo: 'https://www.youtube.com/embed/uVju5--RqtY',
        bg: 'dark',
        theme: 'dark'
      }
    }
  ]
}
