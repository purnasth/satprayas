import bgCuisine from '../assets/images/bg_cuisine.png';
import dessertOffer from '../assets/images/offers/dessert.webp';
import beerOffer from '../assets/images/offers/beer.webp';

export const offersContent = [
  {
    id: 1,
    offer: '',
    title: 'Free Dessert',
    description:
      'After every lunch or dinner, you will get a free dessert on your total bill.',
    image: dessertOffer,
    link: '/nepalese-cuisine',
  },
  {
    id: 2,
    offer: '',
    title: 'Beer on Market Price',
    description:
      '5pm onwards every day, you will get beer on market price on your total bill.',
    image: beerOffer,
    link: '/indian-cuisine',
  },
  // {
  //   id: 3,
  //   offer: 'On Every Dish 20% Off',
  //   title: 'Chinese Cuisine',
  //   description:
  //     'On every chinese cuisine dish, you will get 20% off on your total bill.',
  //   image: bgCuisine,
  //   link: '/chinese-cuisine',
  // },
  // {
  //   id: 4,
  //   offer: 'On Every Dish 25% Off',
  //   title: 'Nepalese Cuisine',
  //   description:
  //     'On every nepalese cuisine dish, you will get 25% off on your total bill.',
  //   image: bgCuisine,
  //   link: '/nepalese-cuisine',
  // },
  // {
  //   id: 5,
  //   offer: 'On Every Dish 30% Off',
  //   title: 'Indian Cuisine',
  //   description:
  //     'On every indian cuisine dish, you will get 30% off on your total bill.',
  //   image: bgCuisine,
  //   link: '/indian-cuisine',
  // },
  // {
  //   id: 6,
  //   offer: 'On Every Dish 35% Off',
  //   title: 'Chinese Cuisine',
  //   description:
  //     'On every chinese cuisine dish, you will get 35% off on your total bill.',
  //   image: bgCuisine,
  //   link: '/chinese-cuisine',
  // },
  // {
  //   id: 7,
  //   offer: 'On Every Dish 40% Off',
  //   title: 'Nepalese Cuisine',
  //   description:
  //     'On every nepalese cuisine dish, you will get 40% off on your total bill.',
  //   image: bgCuisine,
  //   link: '/nepalese-cuisine',
  // },
  // {
  //   id: 8,
  //   offer: 'On Every Dish 45% Off',
  //   title: 'Indian Cuisine',
  //   description:
  //     'On every indian cuisine dish, you will get 45% off on your total bill.',
  //   image: bgCuisine,
  //   link: '/indian-cuisine',
  // },
  // {
  //   id: 9,
  //   offer: 'On Every Dish 50% Off',
  //   title: 'Chinese Cuisine',
  //   description:
  //     'On every chinese cuisine dish, you will get 50% off on your total bill.',
  //   image: bgCuisine,
  //   link: '/chinese-cuisine',
  // },
];

export const testimonialsContent = [
  {
    author: 'Purna Shrestha',
    source: 'via Canada',
    review:
      "I am excited for the opening of Satprayas Nepal. I've been hearing a lot of good things about this place and I can't wait to try it out. The food looks amazing and I'm sure it will be a hit with the locals. I wish the owners all the best and hope they have a successful opening.",
    sourceImage:
      // 'https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png',
      'https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif',
    link: '#',
  },
  {
    author: 'Purna Shrestha',
    source: 'via Canada',
    review:
      // 'Satprayas Nepal is a great place to enjoy authentic Nepalese cuisine. The food is delicious and the service is excellent. The staff is very friendly and welcoming. I highly recommend this restaurant to anyone looking for a taste of Nepal.',
      "I am excited for the opening of Satprayas Nepal. I've been hearing a lot of good things about this place and I can't wait to try it out. The food looks amazing and I'm sure it will be a hit with the locals. I wish the owners all the best and hope they have a successful opening.",
    sourceImage: 'https://legacy.purnashrestha.com.np/assets/icon/favicon.ico',
    link: '#',
  },
  // {
  //   author: 'Purna Shrestha',
  //   source: 'via Yelp',
  //   review:
  //     // 'Satprayas Nepal is a great place to enjoy authentic Nepalese cuisine. The food is delicious and the service is excellent. The staff is very friendly and welcoming. I highly recommend this restaurant to anyone looking for a taste of Nepal.',
  //     "I am excited for the opening of Satprayas Nepal. I've been hearing a lot of good things about this place and I can't wait to try it out. The food looks amazing and I'm sure it will be a hit with the locals. I wish the owners all the best and hope they have a successful opening.",
  //   sourceImage: 'https://www.yelp.com/favicon.ico',
  //   link: '#',
  // },
];

export const navLinks = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  // {
  //   id: 3,
  //   title: 'Menus',
  //   url: '/food-menu',
  // },
  {
    id: 4,
    title: 'Food Gallery',
    url: '/gallery',
  },
  {
    id: 5,
    title: 'Hours & Location',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Promotions',
    url: '/offers',
  },
];

export const articlePageContents = {
  'article-page': {
    meta_title: 'Article Page | Himalayan Flavour',
    meta_description: 'Whatever',
    meta_keywords: 'Whatever',
    title: 'Article Page',
    html: `
    <div class="container space-y-8 text-center">
      <p class="max-w-lg text-center text-sm text-black/60 mx-auto">
      Satprayas Nepal is more than just a restaurant; it's a celebration of the rich and diverse culinary heritage of the Himalayan region. Nestled in the heart of Victoria, B.C., our restaurant offers an authentic taste of India, Nepal, and China, bringing together the vibrant and bold flavors that define the cultures.
      </p>
      <p class="max-w-lg text-center text-sm text-black/60 mx-auto">
      Excellence in every dish is our promise to you. We meticulously select the freshest and finest ingredients, sourced both locally and from the regions that inspire our cuisine. From the spices we grind in-house to the meats and vegetables we prepare daily, we prioritize quality at every step. This ensures that each bite is not only flavorful but also wholesome and satisfying.
      </p>
    </div>
    `,
  },
};
