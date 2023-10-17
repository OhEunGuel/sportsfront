import React from 'react';
import styled from 'styled-components';

function ListLayout({ children }) {
<<<<<<< HEAD
    return (
        <Content>
            { children }
        </Content>
    );
=======
  return (
    <Content>
      {children}
    </Content>
  );
>>>>>>> 5ce4d9c0281e4d993d75d064a008a1b699e976cc
}

export default ListLayout;

const Content = styled.div`
  width: 50%;
<<<<<<< HEAD
  height: 100%;
  background-color: ${(props) => props.theme.background};
  overflow: auto;
=======
  height: calc(100vh - 68px);
  background-size: 1920px auto;
  background-color: #ffffcc;
  background-position: 50% 0;
  background-repeat: repeat-x;
  padding: 40px 0 36px;
  overflow-y: scroll;
  padding: 24px 4px 48px 10px;
  overscroll-behavior: contain;
  border: black 1px dashed;
  margin: auto;
  padding-top: 24px;
  box-sizing: border-box;
>>>>>>> 5ce4d9c0281e4d993d75d064a008a1b699e976cc
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
<<<<<<< HEAD
  border: black 1px dashed;
  margin: auto;
=======

  /* Reset default styles */
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", "Apple SD Gothic Neo", helvetica, sans-serif;
  line-height: 1.2;
  letter-spacing: -0.7px;
  color: #666;
>>>>>>> 5ce4d9c0281e4d993d75d064a008a1b699e976cc
`;