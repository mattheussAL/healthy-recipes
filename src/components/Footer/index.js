import React from 'react';


import { Container, FooterContent, Text, Politic, First, Second, } from './styles';

function Footer() {
  return (
    <Container>
      <FooterContent>
        <Text>© Copyrights 2019 Stack. All Rights Reserved.</Text>

        <Politic>
            <First>Privacy Policy</First>
            <Second>Terms and Conditions</Second>
        </Politic>

      </FooterContent>
    </Container>
  );
}

export default Footer;