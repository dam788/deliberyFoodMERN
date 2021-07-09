import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { Title } from '../../Styles/Title';
import { orange, magenta } from '../../Styles/colors';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/cart/cart-action';
import { formatPrice } from '../../utils/formatPrice';

const Dialog = styled.div`
  width: 500px;
  background-color: #ffff;
  position: fixed;
  top: 150px;
  max-height: calc(100%-100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  z-index: 5;

  @media (max-width: 768px) {
    width: 400px;
    left: calc(50% - 200px);
  }

  @media (max-width: 450px) {
    width: 350px;
    left: calc(50% - 175px);
  }
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.8;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 150px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 8px 8px 0px 0px;
`;

const DialogBannerName = styled(FoodLabel)`
  position: absolute;
  border-radius: 0px 7px 7px 0px;
  top: 75px;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 120px;
  max-height: 200px;
  padding: 10px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 20px 0px #8080807a;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 40px;
  width: 100%;
  color: #fff;
  cursor: pointer;
  text-align: center;
  background: linear-gradient(135deg, ${orange} 0%, ${magenta} 100%);
  border-radius: 7px;
  opacity: 1;
  transition: all 50ms linear;
  user-select: none;

  :hover {
    filter: saturate(1.1);
  }

  :active {
    transform: scale(0.98);
  }
`;

function FoodDialogContainer({ openFood, setOpenFood }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpenFood();
  };

  const addToOrder = () => {
    dispatch(addItems(openFood));
    handleClose();
  };

  return (
    <>
      <DialogShadow onClick={handleClose} />
      <Dialog>
        <DialogBannerName>{openFood.name}</DialogBannerName>
        <DialogBanner img={`data:image/jpeg;base64,${openFood.img}`} />
        <DialogContent>
          <p>
            <b style={{ color: '#ec7538' }}>Descripción: </b>
            {openFood.description}
          </p>
          <p>
            <b style={{ color: '#ec7538' }}>Precio: </b>
            {formatPrice(openFood.price)}
          </p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            agregar {openFood.name}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export const FoodDialog = (props) => {
  if (!props.openFood) return null;

  return (
    <>
      <FoodDialogContainer {...props} />
    </>
  );
};
