module.exports = {
  pageTitle: {
    title: 'About Us',
    theme: 'light',
    tagline: 'Some informations about our restaurant'
  },
  sections: [
    {
      name: 'ImageEdge',
      props: {
        content: {
          rate: 4,
          title: 'The best food in London!',
          descriptionLead: 'Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....',
          description: 'Nam eleifend elementum sapien et bibendum. Nunc ac diam efficitur, ultrices lorem quis, consectetur odio. Nullam vulputate, eros quis accumsan cursus, elit lectus bibendum nulla, sed dapibus ligula tellus at purus. Fusce id eros id mi cursus semper. Quisque efficitur bibendum nunc a consectetur. Maecenas vitae quam iaculis, scelerisque purus nec, varius purus. Nullam eget varius elit. Donec eget facilisis nunc, non rutrum lorem.',
          author: 'Mark Johnson, Chef',
          sign: 'https://assets.suelo.pl/soup/img/svg/sign.svg'
        },
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/bg-chef.jpg'
        },
        reverse: true
      }
    },
    {
      name: 'CtaAlternative',
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
