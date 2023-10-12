import styled from 'styled-components';

const CopyrightInfo = () => {
  return (
    <CopyrightContainer>
      <p>&copy; 2023 Your Website Name. All rights reserved.</p>
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
