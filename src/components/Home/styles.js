import styled from 'styled-components';

export const InfoSec = styled.div`
  position: relative;
  padding: 0;
  background: #FFF;
`;

export const InfoRow = styled.div`
  margin: 0 -15px -15px -15px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoColumn = styled.div`
  max-width: 50%;

  flex: 1;
  flex-basis: 50%;

  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;


  @media screen and (max-width: 768px) {
    max-width: 100%;

    flex-basis: 100%;

    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    width: 460px;
    margin-left: -238px;
    margin-top: 80px;
  }

  @media screen and (max-width: 730px) {
    width: 360px;
    margin-left: -238px;
    margin-top: 80px;
  }

  @media screen and (max-width: 640px) {
    width: 300px;
    margin-left: -280px;
    margin-top: 80px;
  }

`;

export const TopLine = styled.div`
  font-size: 68px;
  font-weight: 500;

  margin-bottom: 16px;

  color: #1d164d;

  @media screen and (max-width: 1280px) { font-size: 60px }

  @media screen and (max-width: 1080px) { font-size: 50px }

  @media screen and (max-width: 946px) {
    font-size: 30px;
    margin-right: 20px;
  }

  @media screen and (max-width: 855px) {
    font-size: 30px;
    margin-right: 60px;
  }

`;

export const Input = styled.input`
  padding: 15px 80px 11px 8px;
  margin-right: 12px;

  border: 1px solid #1d164d;
  border-radius: 8px;

  outline: none;
  cursor: pointer;

  &::placeholder {
    color: #ccc;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 11px 14px;

  color: #FFF;
  background: #BADC58;

  border: none;
  border-radius: 8px;

  cursor: pointer;
  
  &:hover {
    background: #BADC58;
    transition: all .3s ease-out;
    box-shadow: 0 0 10px #BADC58;
  }

  @media screen and (max-width: 840px) {
    margin-right: 180px;
    margin-top: 20px;
    width: 120px;
  }
`;

export const ImgWrapper = styled.div`  
  display: flex;
  justify-content: flex-end;  

  @media screen and (max-width: 770px) {
    position: absolute;

    width: 120px;
    margin-top: -80px;
  }
`;

export const Img = styled.img`
  margin-top: -128.8px;
  margin-right: -77.5px;

  display: inline-block;  

  vertical-align: middle;
  
  @media screen and (max-width: 1080px) {
    width: 650px;
    height: 650px;
  }

  @media screen and(max-width: 860) {
    margin-right: auto;
  }

  @media screen and (max-width: 768px) {
    margin-top: -503px;
    margin-right: -317px;
    width: 450px;
    height: 650px;
  }
`;
