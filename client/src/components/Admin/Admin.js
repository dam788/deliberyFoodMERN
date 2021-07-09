import React from 'react';
import styled from 'styled-components';
import { white, orange, magenta } from '../../Styles/colors';

export const AdminNav = styled.div`
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${orange} 0%, ${magenta} 100%);
  color: ${white};
  border-radius: 25px;
  padding: 0 0.75rem;
  user-select: none;
  cursor: pointer;
  font-size: 13px;
  margin-left: 1em;
  &:hover {
    filter: saturate(1.1);
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.09);
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 768px) {
    margin: 4px 0 4px 0.6rem;
    padding: 0 0.5rem;
    justify-content: start;
    font-size: small;
  }
`;

export const Admin = () => {
  return (
    <>
      <AdminNav>
        <p>Admin</p>
      </AdminNav>
    </>
  );
};
