import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { AiOutlineSearch } from 'react-icons/ai';

import { InfoSec, InfoRow, TextWrapper, TopLine, Input, Button, InfoColumn, ImgWrapper, Img } from './styles';

function Home({ topLine, img, alt, placeholder }) {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                
                <Input type="text" placeholder={placeholder}/>

                <Link to='/'>
                  <Button><AiOutlineSearch /></Button>
                </Link>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper>
                <Img src={img} alt={alt}/>
              </ImgWrapper>
            </InfoColumn>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Home;