import React from 'react';
import styled from 'styled-components';

function SidebarRightLayout({ children }) {
    return (
        <Content>
            { children }
        </Content>
    );
}

export default SidebarRightLayout;

const Content = styled.div`
  width: 10%;
  height: 80%;
  background-color: ${(props) => props.theme.background};
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  border: black 1px dashed;
  float:right;
`;
