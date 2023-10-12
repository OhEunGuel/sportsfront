import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <NavbarContainer>
        <NavbarContainer>
          <NavbarLink to="/my-page"> MyPage </NavbarLink>
          <NavbarLink to="/login"> Login </NavbarLink>
        </NavbarContainer>
      </NavbarContainer>
    </div>
  );
};

export default Header;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
