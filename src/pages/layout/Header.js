<<<<<<< HEAD
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
        </NavbarContainer>
=======
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchUser } from "../../api/UserAPI";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

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
        <Navbar variant="dark">
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <NavDropdown title="DropDown1" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dropdown1/menu1">Menu1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown1/menu2">Menu2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown1/menu3">Menu3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="DropDown2" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dropdown2/menu1">Menu1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown2/menu2">Menu2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown2/menu3">Menu3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {ACCESS_TOKEN
              ?
              <NavDropdown title={user.name + "님 환영합니다"} id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/my-page">MyPage</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" onClick={handleLogout}>로그아웃</NavDropdown.Item>
              </NavDropdown>
              :
              <NavDropdown title="Join&Login" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/join">SignUp</NavDropdown.Item>
              </NavDropdown>
            }
          </Nav>
        </Navbar>
>>>>>>> 5ce4d9c0281e4d993d75d064a008a1b699e976cc
      </NavbarContainer>
    </div>
  );
};

export default Header;

<<<<<<< HEAD
export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  border: dashed white 1px;
`;

// export const NavDropdown = styled.menuitem`
//   color: white;
// `;

=======
export const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

>>>>>>> 5ce4d9c0281e4d993d75d064a008a1b699e976cc
export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
<<<<<<< HEAD
`;
=======
  display: inline-block;
`;
>>>>>>> 5ce4d9c0281e4d993d75d064a008a1b699e976cc
