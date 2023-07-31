import styled from 'styled-components';

export const Wrapper = styled.div`
  #mainDiv {
    background-color: #e41414;
    position: relative;
    overflow: hidden;
  }
  .title {
    font-family: 'BebasNeue';
    font-size: 6rem; // 6vw
  }
  .subtitle {
    font-family: 'BebasNeue';
    font-size: 2rem; //2vw
  }
  .vid {
    width: auto;
    height: 25rem; //25vw
  }
  .robotimg {
    height: 33rem;
    position: absolute;
    transform: translate(-10%, 0%);
    z-index: 0;
  }
  @media (min-width: 767px) {
    .subtitle {
      text-align: left !important;
    }
    .title {
      text-align: left !important;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .title {
      font-size: 3.6rem; // 6vw
    }
    .subtitle {
      font-size: 1.7rem; //2vw
    }
    .robotimg {
      bottom: 0;
      right: 0;
      width: 100vw;
      height: auto;
      transform: translate(0%, 50%);
    }
  }
  @media screen and (max-width: 1200px) {
    #mainDiv {
      padding-right: 10% !important;
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1300px) {
    #mainDiv {
      padding-right: 35% !important;
    }
  }
  @media screen and (min-width: 991px) and (max-width: 1300px) {
    .title {
      font-size: 4rem; // 6vw
    }
    .subtitle {
      font-size: 1.7rem; //2vw
    }
    .robotimg {
      bottom: 0;
      right: 0;
      width: 100vw;
      height: auto;
      transform: translate(-25%, 40%);
    }
  }

  @media screen and (max-width: 767px) {
    .title {
      font-size: 2rem; // 6vw
    }
    .subtitle {
      font-size: 1rem; //2vw
    }
    .vid {
      height: auto;
      width: 100vw;
      padding-bottom: 1rem;
    }
    .robotimg {
      bottom: 0;
      right: 0;
      width: 100vw;
      height: auto;
      transform: translate(0%, 50%);
    }
  }
`;
