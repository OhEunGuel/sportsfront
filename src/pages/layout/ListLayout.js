import React from 'react';
import styled from 'styled-components';

function ListLayout({ children }) {
    return (
        <Content>
            { children }
        </Content>
    );
}

export default ListLayout;

const Content = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  border: black 1px dashed;
  margin: auto;
`;