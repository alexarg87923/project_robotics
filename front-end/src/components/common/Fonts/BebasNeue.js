import styled from 'styled-components';
import font from '../../../assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf';

export const BebasNeue = styled.div`
  @font-face {
    font-family: 'BebasNeue';
    src: url(${font}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  font-family: 'BebasNeue';
`;
