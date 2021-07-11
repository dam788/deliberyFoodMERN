import React from 'react';
import styled from 'styled-components';
import { gray, magenta, orange, white } from '../../Styles/colors';

export const AdminNav = styled.div`
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${gray};
  padding: 5px 20px;
  user-select: none;
  cursor: pointer;
  font-size: 13px;
  margin-right: 10px;
  border-right: 1px solid #c7c7c76e;
  &:hover {
    color: ${magenta};
  }
  &:active {
    background-color: ${white};
  }

  @media (max-width: 768px) {
    margin: 4px 0 4px 0.6rem;
    padding: 0 0.5rem;
    justify-content: start;
    font-size: small;
  }
`;

const IconAdd = styled.i`
  font-size: 18px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${orange};
`

export const AddProduct = () => {
  return (
    <>
      <AdminNav>
        <IconAdd className="fi-rs-add"></IconAdd>
        <span> Agregar Producto</span>  
      </AdminNav>
    </>
  );
};
