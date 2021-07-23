import React from 'react';
import styled from 'styled-components';
import {
 
  DialogShadow,
} from '../FoodDialog/FoodDialog';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-action';
import OrderContainer from './OrderContainer';


const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 89px;
  width: 340px;
  background-color: white;
  height: calc(100% - 89px);
  z-index: 10;
  box-shadow: 4px 0 35px #80808078;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 500ms cubic-bezier(0, 0.2, 0.03, 1);
`;

export const Orders = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);

  const handlerToggle = () => dispatch(cartActions.toggleCartHidden());

  return (
    <>
      {hidden && <DialogShadow onClick={handlerToggle} />}
      <OrderStyled show={hidden}>
        <OrderContainer handlerToggle={handlerToggle} />
      </OrderStyled>
    </>
  );
};
