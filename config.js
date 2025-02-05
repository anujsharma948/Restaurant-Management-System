const restaurants = [
    {
      id: "1",
      name: "Pasta Paradise",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "123 Noodle Blvd",
        city: "New York",
        state: "NY",
      },
      rating: 4.7,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "2",
      name: "Burger Haven",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "456 Burger Ave",
        city: "Los Angeles",
        state: "CA",
      },
      rating: 4.2,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Chilli Fries", description: "French Fries which comes with frech dip", price: "$14" },
        { name: "Satay Chicken", description: "Skrewed and grilled chicken served with sauce", price: "$18" },
        { name: "Fish and Chips", description: "Fish cooked in homemade batter", price: "$18" },
      ]
  
    },
    {
      id: "3",
      name: "Pizza Planet",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "202 Pizza Pl",
        city: "Chicago",
        state: "IL",
      },
      rating: 4.3,
      menu: [
        { name: "Onion Rinos", description: "Crispy Onion Deep Fries", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "4",
      name: "Steakhouse Supreme",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "33 Z Lovers Rd",
        city: "Denver",
        state: "CO",
      },
      rating: 4.6,
      menu: [
        { name: "Sushi", description: "Vinegared rice roll with fish or vegies", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "5",
      name: "Curry Kingdom",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "Del Street",
        city: "Chicago",
        state: "IL",
      },
      rating: 4.3,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Paella", description: "A saffron-infused rice dish with seafood, chicken", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "6",
      name: "Tikkaway",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "Lovers Rd",
        city: "Denver",
        state: "COPR",
      },
      rating: 4.6,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Croissant", description: "Flaky pastry that is a breakfast staple in France", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "7",
      name: "Vegan Delights",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "777 Green St",
        city: "Portland",
        state: "OR",
      },
      rating: 4.9,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Kimchi", description: "spicy cabbage or radish, a staple Korean side dish", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "8",
      name: "Asian Fusion",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "212 Bamboo Rd",
        city: "Seattle",
        state: "WA",
      },
      rating: 4.4,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Gnocchi", description: " Soft dumplings made from potato served with sauce", price: "$18" },
      ]
  
    },
    {
      id: "12",
      name: "Mediterranean Feast",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/6164674/pexels-photo-6164674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "333 Olive Grove",
        city: "Los Angeles",
        state: "CA",
      },
      rating: 4.5,
      menu: [
        { name: "Shakshuka", description: "Egg cooked in a spicy tomato soup", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "17",
      name: "Burger Bonanza",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/1054238/pexels-photo-1054238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "444 Burger Blvd",
        city: "Chicago",
        state: "IL",
      },
      rating: 4.8,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Tacos", description: "Folded tortillas filled with meat, vegetables, cheese", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "18",
      name: "TasteTales Diner",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "123 Noodle Blvd",
        city: "New York",
        state: "NY",
      },
      rating: 4.7,
      menu: [
        { name: "Pierogi", description: "Dumplings stuffed with potatoes, cheese served with cream", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "19",
      name: "Brew & Bloom Cafe",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "456 Burger Ave",
        city: "Los Angeles",
        state: "CA",
      },
      rating: 4.2,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Baklava", description: "A sweet pastry layed with nuts", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "30",
      name: "Beanstalk Bistro",
      price:"$80 For 2 Person People",
      image_url: "https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "Amil Univ",
        city: "Chicago",
        state: "IL",
      },
      rating: 4.3,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Seafood Paella", description: "Spanish Inspired rice, with mixed seafood", price: "$18" },
      ]
  
    },
    {
      id: "40",
      name: "Pure Nourish",
      price:"$80 For 2 Person",
      image_url: "https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      location: {
        address: "Queensland",
        city: "Brisbaner",
        state: "CO",
      },
      rating: 4.6,
      menu: [
        { name: "Spaghetti", description: "Classic spaghetti with marinara sauce", price: "$12" },
        { name: "Fettuccine Alfredo", description: "Creamy Alfredo with fettuccine", price: "$14" },
        { name: "Lasagna", description: "Layers of pasta, cheese, and marinara", price: "$18" },
        { name: "Pho", description: "A noodle soup with broth, herbs and meat", price: "$18" },
      ]
  
    },
  ];
  
  export default restaurants;