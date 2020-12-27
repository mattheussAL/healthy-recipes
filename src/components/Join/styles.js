import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Image = styled.img`
  margin-left: 140px;
`;

export const Wrapper = styled.div`
  margin-top: 180px;
  margin-left: 100px;
`;

export const Title = styled.h1`
  font-size: 38px;
  letter-spacing: 2px;

  margin-bottom: 20px;

  color:  #1d164d;
`;

export const Input = styled.input`
  padding: 15px 100px 15px 8px;
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
  white-space: nowrap;
  
  width: 140px;
  height: 50px;

  color: #FFF;
  background:  #BADC58;

  border: none;
  border-radius: 8px;

  outline: none;
  cursor: pointer;

  &:hover {
    transition: all .3s ease-out;
    box-shadow: 0 0 10px #BADC58;
  }
`;

