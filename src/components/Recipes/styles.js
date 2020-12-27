import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 26px;
  background: #FAFAFC;

  padding-bottom: 60px;
`;

export const TextWrapper = styled.div`
  padding-top: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h2`
  font-size: 38px;
  font-weight: 600;

  margin-bottom: 16px;

  color: #1d164d;
`;

export const Description = styled.p`
  position: relative;

  width: 40%;
  line-height: 30px;
  margin-left: 60px;

  font-size: 17px;

  color: #C8C3C4;

  span {
    margin-left: 48px;
  }
`;

export const Reci = styled.div`
  position: relative;

  height: 80%;

  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Cards = styled.div`
  width: 80%;

  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
`;

export const Card = styled.div`
  display: flex;

  color: #1d164d;
  background: #FFF;

  padding-right: 10px;

  border: none;
  border-radius: 8px;

  box-shadow: 12px 12px 20px #EDEDF1;
`;

export const Image = styled.img`
  border-radius: 8px 0 0 8px;

  transform: scale(1);
  cursor: pointer;

  &:hover{
    border-radius: 8px;

    transform: scale(1.09);
    transition: all .5s ease-out;
  }
`;

export const Title = styled.h2`
  font-size: 28px;

  margin-top: 50px;
  margin-left: 18px;
`;

export const Button = styled.button`
  position: absolute;

  width: 120px;
  height: 50px;

  font-size: 16px;

  white-space: nowrap;

  margin-top: 130px;
  margin-left: 280px;

  color: #FFF;

  background:  #a7df63;
  
  border: none;
  border-radius: 8px;

  outline: none;
  cursor: pointer;

  &:hover {
    color: #FFF;
    transition: all .3s ease-out;
    box-shadow: 0 0 10px #a7df63;
  }
`;

