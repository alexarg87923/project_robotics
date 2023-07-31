import styled from 'styled-components';

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
  }

  .navbar {
    background: linear-gradient(
      90deg,
      rgb(28, 27, 27) 0%,
      rgb(26, 23, 23) 100%
    );
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .navbar-container {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 80px;
    max-width: 1400px;
  }

  @media screen and (max-width: 1300px) {
    .navbar-container {
      max-width: 1200px;
    }
  }

  @media screen and (max-width: 1200px) {
    .navbar-container {
      max-width: 1100px;
    }
  }

  @media screen and (max-width: 1100px) {
    .navbar-container {
      max-width: 1000px;
    }
  }

  @media screen and (max-width: 1000px) {
    .navbar-container {
      max-width: 900px;
    }
  }

  .navbar-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-family: 'BebasNeue';
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-item {
    height: 80px;
    font-family: 'BebasNeue';
  }

  .nav-links {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    text-transform: uppercase !important;
    font-family: 'BebasNeue';
    letter-spacing: 1px;
  }

  .nav-links:hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }

  .nav-links-mobile {
    display: none;
    font-family: 'BebasNeue';
  }

  .menu-icon {
    display: none;
  }
  .sign-up {
    margin: 0px;
    padding-top: 7px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 47px;
    background: linear-gradient(
      90deg,
      rgb(28, 27, 27) 0%,
      rgb(26, 23, 23) 100%
    );
    color: white;
    white-space: nowrap;
    border: 2px solid #e41414;
    border-radius: 20px;
    font-family: 'BebasNeue';
    font-size: 1.2rem;
    position: relative;
    line-height: 1.2rem;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sign-up:hover {
    border-color: pink;
  }
  .sign-up:hover .arrow-style {
    background-color: pink;
  }
  .arrow-style {
    border-radius: 20px;
    background-color: #e41414;
    vertical-align: middle;
    position: absolute;
    transform: translate(49px, -1px);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      background-color: #fff;
      color: #242424;
      border-radius: 0;
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-5%, 50%);
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      text-decoration: none;
      font-size: 1.5rem;
      background-color: transparent;
      color: #fff;
      padding: 14px 20px;
      border: 1px solid #fff;
      transition: all 0.3s ease-out;
    }

    .nav-links-mobile:hover {
      background: #fff;
      color: #242424;
      transition: 250ms;
    }
  }
`;
