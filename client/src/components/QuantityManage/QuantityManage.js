import React from 'react';
import styled from 'styled-components';
import RemoveIcon from '../../assets/delete-full.svg';
import { Title } from '../../Styles/Title';
import * as cartActions from '../../redux/cart/cart-action';
import { useDispatch } from 'react-redux';

const QuantityManageStyled = styled(Title)`
  min-width: 100px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  height: 24px;
  align-items: center;
  border-radius: 25px;
  margin: 5px;
  height: 21px;
  padding: 10px 0px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  user-select: none;
`;

const QuantityStyled = styled.span`
  font-size: 14px;
  width: 24px;
  text-align: center;
`;

const QuantityButton = styled.div`
  transition: transform 100ms linear;
  width: 23px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  margin: 0px 10px;
  color: #ec7538;
  background-color: transparent;
  border-radius: 20px;
  margin: 0px;
  padding: 5px;

  &:hover {
    background-color: #e2e2e2;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const RemoveIconStyled = styled.img`
  width: 23px;
  height: auto;
  padding: 10px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const QuantityManage = ({ item }) => {
  const dispatch = useDispatch();

  const handlerAdd = () => {
    dispatch(cartActions.addItems(item));
  };

  const handlerRemove = () => {
    dispatch(cartActions.removeItem(item));
  };

  return (
    <>
      <QuantityManageStyled>
        {+item.quantity === 1 ? (
          <RemoveIconStyled src={RemoveIcon} onClick={handlerRemove} />
        ) : (
          <QuantityButton onClick={handlerRemove}>-</QuantityButton>
        )}
        <QuantityStyled>{item.quantity}</QuantityStyled>
        <QuantityButton onClick={handlerAdd}>+</QuantityButton>
      </QuantityManageStyled>
    </>
  );
};
