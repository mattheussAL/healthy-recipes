import React from 'react';

import {
  Container, TextWrapper, MainTitle,
  Description, Reci, Cards, Card,
  Image, Title, Button
} from './styles';

function Recipes({ 
  main_title, description, span, title_one,
  title_two, title_three, title_fourth,
  value, img, img2, img3, img4, alt 
}) {
  return (
    <Container>
      <TextWrapper>
        <MainTitle>{main_title}</MainTitle>
        <Description>{description}<span>{span}</span></Description>
      </TextWrapper>

      <Reci>
        <Cards>
          <Card>
            <Image src={img} alt={alt}/>
            <Title>{title_one}</Title>
            <Button>{value}</Button>
          </Card>

          <Card>
            <Image src={img2} alt={alt} />
            <Title>{title_two}</Title>
            <Button>{value}</Button>
          </Card>

          <Card>
            <Image src={img3} alt={alt} />
            <Title>{title_three}</Title>
            <Button>{value}</Button>
          </Card>

          <Card>
            <Image src={img4} alt={alt} />
            <Title>{title_fourth}</Title>
            <Button>{value}</Button>
          </Card>
        </Cards>
      </Reci>
    </Container>
  );
}

export default Recipes;