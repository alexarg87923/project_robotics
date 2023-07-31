import styled from 'styled-components';
import hero from '../../../assets/img/hero.png';

export const Wrapper = styled.div`
  header.masthead {
    position: relative;
    background: rgba(0, 0, 0, 0.4) url(${hero}) no-repeat center center / cover;
  }

  header.masthead:before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .comingsoon {
    background-color: rgb(23, 23, 23);
  }
  .title {
    font-family: 'BebasNeue';
    font-size: 17vh;
    line-height: 15vh;
  }
  .subtitle {
    font-family: 'RedHatDisplay';
    font-size: 5vh;
    letter-spacing: 0.5vw;
  }

  #sign-up {
    background-color: #e41414;
    color: white;
    border: 2px solid #e41414;
    border-radius: 40px;
    padding: 10px;
    font-family: 'BebasNeue';
    font-size: 2rem;
    letter-spacing: 1px;
    padding-right: 50px !important;
  }
  .arrowstyle {
    position: relative;
    transform: translate(30px, -1px);
    background-color: #e41414;
    border-radius: 40px;
  }

  #sign-up:hover {
    background-color: white;
    color: #e41414;
    border-color: white;
  }

  #sign-up:hover .arrowstyle {
    background-color: white;
  }

  @media screen and (max-width: 960px) {
    .title {
      font-size: 10vh;
      line-height: 8vh;
    }
    .subtitle {
      font-size: 3vh;
    }
    .masthead {
      height: 90vh !important;
    }
  }
`;
