import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  body {
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;

  margin-right: auto;
  margin-left: auto;

  padding-right: 50px;
  padding-left: 50px;

  z-index: 1;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;


export default GlobalStyles;
