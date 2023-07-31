import styled from 'styled-components';

export const Wrapper = styled.div`
  .square-box {
    background-color: rgb(135, 0, 5);
    color: white;
    border-radius: 20px;
    position: relative;
  }

  .square-box::before {
    content: '';
    display: block;
    padding-top: 85%;
    margin-left: 10px;
    margin-right: 10px;
  }

  .title {
    font-family: 'BebasNeue';
  }
  .subtext {
    font-family: 'RedHatDisplay';
  }

  .box-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .box-content h2 {
    font-size: 3em;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .box-content p {
    font-size: 1.7em;
    padding-left: 20px;
    padding-right: 20px;
  }
  /* Small devices (phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    .box-content h2 {
      font-size: 3em;
    }
  
    .box-content p {
      font-size: 2.5em;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) { 
    .box-content h2 {
      font-size: 1.9em;
    }
  
    .box-content p {
      font-size: .9em;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1199.98px) { 
    .box-content h2 {
      font-size: 2.5em;
    }
  
    .box-content p {
      font-size: 1.3em;
      padding-left: 15px;
      padding-right: 15px;
    }
`;
