import React from 'react';
import { FoodDialog } from '../components/FoodDialog/FoodDialog';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { useOpenFood } from '../hooks/useOpenFood';

export const Home = () => {
  const openFood = useOpenFood();
  return (
    <>
      <FoodDialog {...openFood} />
      <Banner>
        <h1>La mejor comida del Valle</h1>
        <p>Pedi Fácil y Rápido!</p>
      </Banner>
      <Menu {...openFood} />
    </>
  );
};
