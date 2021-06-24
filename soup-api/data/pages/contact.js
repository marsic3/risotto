module.exports = {
  pageTitle: {
    title: 'Contact',
    theme: 'light',
    tagline: 'Some informations about our restaurant'
  },
  sections: [
    {
      name: 'Location',
      props: {
        location: {
          name: 'Rižoto Restaurant',
          address: {
            street: 'St John 21/52',
            city: 'Carcow',
            contry: 'Poland'
          },
          phone: '+48 21200 2122 221',
          email: 'hello@example.com',
          lat: 40.758895,
          lng: -73.985131,
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
          ]
        },
        reverse: false
      }
    },
    {
      name: 'Location',
      props: {
        location: {
          name: 'Rižoto Bistro',
          address: {
            street: 'St John 21/52',
            city: 'Carcow',
            contry: 'Poland'
          },
          phone: '+48 21200 2122 221',
          email: 'hello@example.com',
          lat: 40.758895,
          lng: -73.985131,
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
          ]
        },
        reverse: true
      }
    }
  ]
}
