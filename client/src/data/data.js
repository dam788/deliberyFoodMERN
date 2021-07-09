import papas from '../assets/sections/papas.svg';
import pizza from '../assets/sections/pizza.svg';
import burger from '../assets/sections/burger.svg';

export const arraySections = [
  {
    //cambiamos de section a category
    category: 'Pizzas',
    imgTag: `${pizza}`,
  },
  {
    category: 'Burgers',
    imgTag: `${burger}`,
  },
  {
    category: 'Papas',
    imgTag: `${papas}`,
  },
];

// export const Foods = foodItems.reduce((res, food) => {
//   if (!res[food.section]) {
//     res[food.section] = [];
//   }
//   res[food.section] = [...res[food.section], food];

//   return res;
// }, {});
