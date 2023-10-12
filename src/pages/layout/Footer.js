import styled from 'styled-components';
import ContactInfo from '../../components/ContactInfo';
import CopyrightInfo from '../../components/CopyrightInfo ';

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo />
      <CopyrightInfo />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
