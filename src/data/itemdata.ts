import { IItemDetails } from '../types';

type ItemDataType = {
  [key: string]: IItemDetails;
};

// Example usage:
const itemData: ItemDataType = {
  '1': {
    name: 'Cat Eye Resin',
    price: 250,
    like: false,
    text: {
      p1: 'Casual yet refined, this garment features a soft cotton blend for comfort and timeless navy blue for versatile style. Its slim fit, classic crew neckline, and subtle detailing add a touch of sophistication to any occasion.',
      p2: ['Comfortable Fabric', 'Stylish Design', 'Versatility'],
      color: 'Red',
      feel: 'Luxuriously soft and comfortable, providing an exquisite tactile experience.',
    },
    size: ['20', '21', '22', '23', '24', '25', '26', '27', '28'],
    selected_size: '20',
    discount: true,
    discount_percent: 0.5,
    free: true,
  },
  '2': {
    name: 'Cat Eye Resin',
    price: 450,
    like: false,
    text: {
      p1: 'Casual yet refined, this garment features a soft cotton blend for comfort and timeless navy blue for versatile style. Its slim fit, classic crew neckline, and subtle detailing add a touch of sophistication to any occasion.',
      p2: ['Comfortable Fabric', 'Stylish Design', 'Versatility'],
      color: 'Navy',
      feel: 'Luxuriously soft and comfortable, providing an exquisite tactile experience.',
    },
    size: ['20', '21', '22', '23', '24', '25', '26', '27', '28'],
    discount: true,
    selected_size: '21',

    discount_percent: 0.5,
    free: true,
  },
  '3': {
    name: 'Wanda TurtleNeck',
    price: 300,
    like: false,
    text: {
      p1: 'Casual yet refined, this garment features a soft cotton blend for comfort and timeless navy blue for versatile style. Its slim fit, classic crew neckline, and subtle detailing add a touch of sophistication to any occasion.',
      p2: ['Comfortable Fabric', 'Stylish Design', 'Versatility'],
      color: 'Navy',
      feel: 'Luxuriously soft and comfortable, providing an exquisite tactile experience.',
    },
    size: ['20', '21', '25', '26', '27'],
    selected_size: '25',

    discount: true,
    discount_percent: 0.5,
    free: true,
  },
  '4': {
    name: 'Authentic Stretch',
    price: 600,
    like: true,
    text: {
      p1: 'Casual yet refined, this garment features a soft cotton blend for comfort and timeless navy blue for versatile style. Its slim fit, classic crew neckline, and subtle detailing add a touch of sophistication to any occasion.',
      p2: ['Comfortable Fabric', 'Stylish Design', 'Versatility'],
      color: 'Navy',
      feel: 'Luxuriously soft and comfortable, providing an exquisite tactile experience.',
    },
    size: ['20', '21', '22', '23', '24', '25', '26', '27', '28'],
    discount: true,
    selected_size: '21',

    discount_percent: 0.5,
    free: true,
  },
};

export default itemData;
