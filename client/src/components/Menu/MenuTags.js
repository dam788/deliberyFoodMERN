import styled from 'styled-components';
import { gray, white } from '../../Styles/colors';

export const TagsMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TagCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: '#fff';
  color: ${gray};
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.09);
  border-radius: 25px;
  padding: 0 0.75rem;
  margin: 7px 0 7px 1.5rem;
  user-select: none;
  cursor: pointer;
  &:hover {
    background: ${white};
    /* box-shadow: none; */
  }
  &:active {
    background: #e8e8e8;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    margin: 4px 0 4px 0.6rem;
    padding: 0 0.5rem;
    justify-content: start;
    font-size: small;
  }
`;

export const TagImg = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  margin-right: 0.3rem;
`;
