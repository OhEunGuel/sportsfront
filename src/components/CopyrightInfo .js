import styled from 'styled-components';

const CopyrightInfo = () => {
  return (
    <CopyrightContainer>
      <p>&copy; 2023 Baseball Information Analysis Site. "Chase Your Dreams."</p>
      
    </CopyrightContainer>
  );
};

export default CopyrightInfo;

const CopyrightContainer = styled.div`
  display: flex;
  padding: 10px 0;
  color: white;
  font-size: 0.8rem;
`;
