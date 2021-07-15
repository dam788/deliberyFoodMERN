import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { H1 } from '../Styles/Title';

const CheckoutDiv = styled.div `
margin-top: 7rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const PagarDiv = styled.div `
height: 5rem;
width: 80%;
border: 2px solid #fab491;
/* border: 2px solid #cecbcb; */
background-color: rgba(236, 117, 56, .2);
/* background-color: #F2F2F2; */
display: flex;
justify-content: space-between;
align-items: center;
margin: 1rem;
`
const PayDiv = styled.div `
  margin-right: 2rem;
  display: flex;
  
`


export const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cart = useSelector((state) => state.cart);
  console.log(cart)

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

console.log(total)

  return (
    <CheckoutDiv>
      <H1>Carrito de compras</H1>
      <PagarDiv>
        <div style={{marginLeft: '2rem'}}><button>vaciar</button></div>
        <PayDiv style={{marginRight: '2rem'}}>
        <p style={{marginRight: '.5em'}}>Total: {total}</p>
        <button>Pagar</button></PayDiv>
      </PagarDiv>
    </CheckoutDiv>
  );
};
