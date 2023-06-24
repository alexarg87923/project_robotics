import styled from 'styled-components';

export const Wrapper = styled.div`
  .rounded-rectangle {
    width: auto;
    height: 50vh;
    background-color: rgba(139, 0, 0, 0.63);
  }

  .title {
    font-family: 'impact', 'impact-w01-2010', 'impact-w02-2010',
      'impact-w10-2010', sans-serif;
    font-size: 5vh;
    color: rgb(250, 246, 233);
  }

  .padding {
    padding-top: 10vh;
    padding-bottom: 25vh; //
  }

  @media screen and (max-width: 768px) {
    .rounded-rectangle {
      margin-top: 30vw;
    }

    .title {
      font-size: 3vh;
    }

    .padding {
      padding-top: 5vh;
      padding-bottom: 25vh; //
    }
  }
`;
