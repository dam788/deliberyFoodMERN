import React from 'react';
import styled from 'styled-components';
import imgLogo from '../../assets/logo.svg';
import { CartIcon } from '../Cart/CartIcon';
import { Link, withRouter } from 'react-router-dom';
import { User, UserNav } from '../User/User';
import { AddProduct } from '../addProduct/AddProduct';

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  background-color: whitesmoke;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
  top: 0;
`;

const Logo = styled.img`
  max-width: 100px;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  margin: 16px 12px;
`;

const NaviagationMenu = styled.nav`
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  padding: 15px;
  align-self: flex-end;
  margin: 0 12px;
  align-items: center;
`;

const Navbar = ({ history, activeUser, setActiveUser, user, setUser }) => {
 console.log(user);
 
  const LinkButton =
    history.location.pathname === '/login' ? (
      <Link to="/">
        <User ruteo={'Home'} />
      </Link>
    ) : (
      <Link to="/login">
        <User ruteo={'Login'} />
      </Link>
    );


  const cerrarSesion = () => {
    setActiveUser(false);
    localStorage.removeItem('usuario')
    history.push('/login');
  };

  return (
    <>
      <NavbarStyled>
        <Link to="/">
          <Logo src={imgLogo} />
        </Link>
        <NaviagationMenu>
          {activeUser ? (
            <>
            {
              user.isAdmin &&  <Link to="/addproduct">
                <AddProduct />
              </Link>
            }
             
              <p>hola, {user.nombre}</p>
              <CartIcon />

              <UserNav onClick={cerrarSesion}>X</UserNav>
            </>
          ) : (
            LinkButton
          )}
        </NaviagationMenu>
      </NavbarStyled>
    </>
  );
};

export default withRouter(Navbar);
