import React from 'react';

import { 
  Container, Image, Wrapper,
  Title, Input, Button,
} from './styles';

function Join({title, placeholder, value, img, alt}) {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Input type="text" placeholder={placeholder}></Input>
        <Button>{value}</Button>
      </Wrapper>

      <Image src={img} alt={alt}/>
    </Container>
  );
}

export default Join;