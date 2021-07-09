import React from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
  DialogShadow,
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../../utils/formatPrice';
import { useSelector, useDispatch } from 'react-redux';
import { QuantityManage } from '../QuantityManage/QuantityManage';
import * as cartActions from '../../redux/cart/cart-action';
import { Link } from 'react-router-dom';
import badge from '../../assets/badge.svg';
import { gray } from '../../Styles/colors';

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

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderContainer = styled.div`
  justify-self: center;
  align-items: center;
  width: 100%;
`;

const OrderItem = styled.div`
  padding: 15px 0px;
  display: grid;
  grid-template-columns: 45px 130px 100px;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d396;
  align-items: center;
  opacity: 0.85;
  transition: transform 500ms cubic-bezier(0, 0.2, 0.03, 1);

  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
`;

const ItemImg = styled.div`
  width: 40px;
  height: 40px;

  background-image: ${({ img }) => `url(data:image/jpeg;base64,${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 25px;
  margin-right: 20px;
`;

const BadgeImg = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 30px;
`;

const NoProductText = styled.p`
  color: ${gray};
  font-size: 20px;
`;

export const Orders = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const handlerToggle = () => dispatch(cartActions.toggleCartHidden());
  const style = { display: 'flex', width: '100%' };

  return (
    <>
      {hidden && <DialogShadow onClick={handlerToggle} />}
      <OrderStyled show={hidden}>
        {cartItems?.length === 0 ? (
          <>
            <OrderContent>
              <NoProductText>
                Aun no hay productos en su bolsa de compras...
              </NoProductText>
              <BadgeImg src={badge} />
            </OrderContent>
          </>
        ) : (
          <>
            <OrderContent>
              <OrderContainer>
                Tu pedido:
                <OrderContainer>
                  {cartItems.map((item) => (
                    <OrderContainer key={item._id}>
                      <OrderItem>
                        <ItemImg img={item.img} />
                        <div>
                          <div>{item.name}</div>
                          <div style={style}>
                            {formatPrice(item.price * item.quantity)}
                          </div>
                        </div>
                        <div>
                          <QuantityManage item={item} />
                        </div>
                      </OrderItem>
                    </OrderContainer>
                  ))}
                </OrderContainer>
              </OrderContainer>
            </OrderContent>
            <DialogFooter>
              <Link to="/checkout" style={style}>
                <ConfirmButton onClick={handlerToggle}>
                  Ir a Pagar: {formatPrice(total)}
                </ConfirmButton>
              </Link>
            </DialogFooter>
          </>
        )}
      </OrderStyled>
    </>
  );
};
