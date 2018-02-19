

var friends = [
    {
      name: "Berna",
      photo: "data:image/jpeg;base64,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",
      scores: [
        "4",
        "2",
        "5",
        "5",
        "4",
        "2",
        "3",
        "3",
        "1",
        "5"
      ]
    },
    {
      name: "John Doe",
      photo: "http://12683-presscdn-0-57.pagely.netdna-cdn.com/wp-content/uploads/2012/05/RandySmallwood-500x375.jpg",
      scores: [
        "2",
        "5",
        "5",
        "3",
        "2",
        "4",
        "1",
        "1",
        "2",
        "2"
      ]
    },
    {
      name: "Sheldon",
      photo: "data:image/jpeg;base64,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",
      scores: [
        "5",
        "2",
        "3",
        "1",
        "4",
        "1",
        "4",
        "5",
        "5",
        "5"
      ]
    },
    {
      name: "Blake",
      photo: "https://media-exp2.licdn.com/media-proxy/ext?w=800&h=800&hash=o6u9Tq%2FiOJm8OxArAcTdAq%2Fy5Lk%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R69hAxU0Rks6bmIpkb-50hKCoTTEHX8RHTuvoTTOCq8J4OcZuH--hlDJmgewUB2LrzwHWW_VtCjKoPteN0lipPtLJHjNVBROlE8gG9JodY6NRUropW_SPj5bCdN3eIVbj24Mq3gaFwsRy8n-g",
      scores: [
        "4",
        "4",
        "4",
        "4",
        "4",
        "4",
        "4",
        "4",
        "4",
        "1"
      ]
    },
    {
      name: "Gordon",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMDOWQp_UlLd0wR8ZiIhCR4wQR8kV5dWaNF-OUg890fXcRH_3Aw",
      scores: [
        "5",
        "4",
        "3",
        "2",
        "1",
        "2",
        "3",
        "4",
        "5",
        "5"
      ]
    },
    {
      name: "Helga",
      photo: "https://i.ytimg.com/vi/H44euN1WfDQ/maxresdefault.jpg",
      scores: [
        "2",
        "1",
        "2",
        "1",
        "2",
        "1",
        "2",
        "1",
        "2",
        "1"
      ]
    }
  
  ];
  
  // Here we export the array. This makes it accessible to other files using require.
  module.exports = friends;