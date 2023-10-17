import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {fetchUser} from "../../api/UserAPI";
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {

    const [user, setUser] = useState({});
    const ACCESS_TOKEN = localStorage.getItem('accessToken');

    useEffect(() => {
        if (ACCESS_TOKEN) {
            fetchUser()
                .then((response) => {
                    setUser(response);
                }).catch((error) => {
                console.log(error);
            });
        }
    }, [ACCESS_TOKEN]);

    const handleLogout = async () => {
        localStorage.clear();
    }
  return (
    <div className="header">
      <NavbarContainer>
          {/*<Navbar.Brand href="/">*/}
          {/*    Home*/}
          {/*</Navbar.Brand>*/}
        <NavbarContainer>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="DropDown1" id="collasible-nav-dropdown">
                    <NavDropdown.Item to="/dropdown1/menu1">Menu1</NavDropdown.Item>
                    <NavDropdown.Item to="/dropdown1/menu2">Menu2</NavDropdown.Item>
                    <NavDropdown.Item to="/dropdown1/menu3">Menu3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="DropDown2" id="collasible-nav-dropdown">
                    <NavDropdown.Item to="/dropdown2/menu1">Menu1</NavDropdown.Item>
                    <NavDropdown.Item to="/dropdown2/menu2">Menu2</NavDropdown.Item>
                    <NavDropdown.Item to="/dropdown2/menu3">Menu3</NavDropdown.Item>
                </NavDropdown>

                {ACCESS_TOKEN
                    ?
                    <NavDropdown title={user.name + "님 환영합니다"} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/my-page">MyPage</NavDropdown.Item>
                        <NavDropdown.Item href="/" onClick={handleLogout}>로그아웃</NavDropdown.Item>
                    </NavDropdown>
                    :
                    <NavDropdown title="Join&Login" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/join">SignUp</NavDropdown.Item>
                    </NavDropdown>
                }
            </Nav>
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
    justify-content: space-between; // 가로로 균등하게 배치
    align-items: center; // 세로로 가운데 정렬
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
    display: inline-block;
`;



