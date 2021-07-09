import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import load from '../../assets/websitebox-loader.gif';

const LoadContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  top: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoDelibery = styled.img`
  width: 180px;
  height: auto;
`;
const Load = styled.img`
  width: 180px;
  height: auto;
`;

export const Loader = () => {
  return (
    <>
      <LoadContainer>
        <LogoDelibery src={logo} />
        <Load src={load} />
      </LoadContainer>
    </>
  );
};
