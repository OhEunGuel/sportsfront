import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <Container>
      <HeaderBar>
        <Header />
      </HeaderBar>
      <Content>
        {children}
      </Content>
      <FooterBar>
        <Footer />
      </FooterBar>
    </Container>
  );
}

export default MainLayout;

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeaderBar = styled.header`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FooterBar = styled.div`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
`;