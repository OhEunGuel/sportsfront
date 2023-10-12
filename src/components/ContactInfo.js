import styled from 'styled-components';

const ContactInfo = () => {
  return (
    <ContactContainer className="contact-info">
      <ContactHeader>Contact Us:</ContactHeader>
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </ContactContainer>
  );
};

export default ContactInfo;

const ContactContainer = styled.div`
  text-align: left;
`;

const ContactHeader = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #ff9900;
`;
