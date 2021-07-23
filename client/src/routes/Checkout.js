import React from 'react';
import OrderContainer from '../components/Orders/OrderContainer';
import { H1 } from '../Styles/Title';

export const Checkout = () => {
  return (
    <div>
      <H1 style={{textAlign: 'center'}}>Carrito de compras</H1>
      <div>
        <OrderContainer />
      </div>
    </div>
  );
};
