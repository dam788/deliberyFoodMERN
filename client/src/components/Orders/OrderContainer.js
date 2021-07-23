import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatPrice } from '../../utils/formatPrice';

import { QuantityManage } from '../QuantityManage/QuantityManage';

import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from '../FoodDialog/FoodDialog';

import { Link, withRouter } from 'react-router-dom';
import badge from '../../assets/badge.svg';
import { gray } from '../../Styles/colors';

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderProductContainer = styled.div`
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

const OrderContainer = ({ handlerToggle, history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const style = { display: 'flex', width: '100%' };

  const handlePay = () => {
    if (history.location.pathname === '/checkout') {
      console.log(`A Pagar`);
    } else {
      handlerToggle();
    }
  };

  return (
    <>
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
            <OrderProductContainer>
              Tu pedido:
              <OrderProductContainer>
                {cartItems.map((item) => (
                  <OrderProductContainer key={item._id}>
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
                  </OrderProductContainer>
                ))}
              </OrderProductContainer>
            </OrderProductContainer>
          </OrderContent>
          <DialogFooter>
            <Link to="/checkout" style={style}>
              <ConfirmButton onClick={handlePay}>
                {history.location.pathname === '/checkout'
                  ? `Pagar  ${formatPrice(total)}`
                  : `Ir a Pagar: ${formatPrice(total)}`}
              </ConfirmButton>
            </Link>
          </DialogFooter>
        </>
      )}
    </>
  );
};

export default withRouter(OrderContainer);
