import React from 'react';
import bgCuisine from '../assets/images/bg_cuisine.png';
import MasterSlider from './ui/MasterSlider';

const cuisineSection = [
  {
    title: 'Nepalese Cuisine',
    subtitle: 'Start your day with',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
    image: bgCuisine,
  },
  {
    title: 'Indian Cuisine',
    subtitle: 'Experience the flavour',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
    image:
      'https://img.freepik.com/premium-photo/drawing-food-with-frame-that-says-burgers-cheese_1064589-160713.jpg?w=2000',
  },
  {
    title: 'Chinese Cuisine',
    subtitle: 'Delight in every bite',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
    image: bgCuisine,
  },
];

const Cuisine = () => (
  <MasterSlider
    slides={cuisineSection}
    hasContent={true}
    sizeClassName="relative flex h-[105vh] flex-col items-center justify-center"
  />
);

export default Cuisine;
