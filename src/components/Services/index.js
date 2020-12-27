import React from 'react';

import {
  Container, Image, TextWrapper, TitleMain,
  Text, Block, BlockTwo, BlockThree, Button,
} from './styles';

function Services({
  main_title, text_one, text_two, text_three, value, img, alt
}) {
  return (
    <Container>
      <Image src={img} alt={alt}/>

      <TextWrapper>
        <TitleMain>{main_title}</TitleMain>
        <Text>
          <Block>{text_one}</Block>
          <BlockTwo>{text_two}</BlockTwo>
          <BlockThree>{text_three}</BlockThree>
        </Text>
        
        <Button>{value}</Button>
      </TextWrapper>
    </Container>
  );
}

export default Services;