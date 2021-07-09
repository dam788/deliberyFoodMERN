import styled from 'styled-components';
import { Title } from '../../Styles/Title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

//? asi se extiende una clase de styled components
export const FoodLabel = styled(Title)`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 7px;
  font-size: 15px;
`;

export const Food = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
  /* todo lo que le pase como props a Food, viene a la funcion anónima */
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 7px;
  filter: contrast(70%);
  font-weight: normal;
  margin-top: 5px;
  padding: 1em;
  color: #000;
  transition: box-shadow margin-top;
  transition-duration: 100ms;
  box-shadow: 0 0 2px 0 #8080807d;
  text-align: center;

  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    box-shadow: 0 6px 15px 0 #8080807d;
    margin-top: inherit;
  }
`;
