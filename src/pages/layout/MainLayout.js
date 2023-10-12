import styled from 'styled-components';
import Header from './Header';

function MainLayout({ children }) {
  return (
    <Container>
      <HeaderBar>
        <Header />
      </HeaderBar>
      <Content>{children}</Content>
      <Footer />
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

  // 스크롤 기능은 있으나 안보이게
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const Footer = styled.div`
  max-width: 425px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`;
