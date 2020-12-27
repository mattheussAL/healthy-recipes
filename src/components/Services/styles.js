import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Image = styled.img`
  position: relative;
  width: 50%;
`;

export const TextWrapper = styled.div`
  margin-top: 120px;
  margin-right: 120px;
`;

export const TitleMain = styled.h1`
  font-size: 45px;
  letter-spacing: 2px;

  margin-bottom: 40px;
  margin-right: 30px;
  margin-left: -2px;

  color:  #1d164d;
`;

export const Text = styled.p`
  margin-bottom: 30px;
  color: #C8C3C4;
`;

export const Block = styled.div`  
  font-size: 18px;
  margin-bottom: 20px;
  margin-right: 140px;
`;

export const BlockTwo = styled.div`  
  font-size: 18px;
  margin-bottom: 20px;
  margin-right: 180px;
`;

export const BlockThree = styled.div`  
  font-size: 18px;
  margin-bottom: 20px;
  margin-right: 140px;
`;

export const Button = styled.button`
  position: absolute;

  width: 120px;
  height: 50px;

  font-size: 16px;

  white-space: nowrap;

  color: #FFF;
  background:  #BADC58;

  box-shadow: 0 4px 6px #BADC58;

  border: none;
  border-radius: 8px;

  outline: none;
  cursor: pointer;

  &:hover {
    color: #FFF;
    transition: all .3s ease-out;
    box-shadow: 0 0 10px #BADC58;
  }
`;

 