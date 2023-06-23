import styled from 'styled-components';

export const Wrapper = styled.div`
  .rounded-rectangle {
    width: auto;
    height: 50vh;
    background-color: rgba(139, 0, 0, 0.63);
    border-radius: 10vh;
  }

  .title {
    font-family: 'impact', 'impact-w01-2010', 'impact-w02-2010',
      'impact-w10-2010', sans-serif;
    font-size: 10vw;
    line-height: 1.4em;
    color: rgb(250, 246, 233);
  }

  .subtitle {
    font-style: italic;
    font-weight: bold;
    font-size: 2vw;
    line-height: 1.4em;
    font-family: didot-w01-italic, didot-w05-italic, serif;
    color: rgb(250, 246, 233);
  }

  .padding {
    padding-top: 10vh;
  }

  .subtitle-row {
    flex: 0;
  }

  .title-row {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .text-center {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 16vw;
    }
    .subtitle {
      font-size: 7vw;
    }
    .padding {
      padding-top: 5vh;
    }
  }
`;
