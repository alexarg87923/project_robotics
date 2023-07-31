import styled from 'styled-components';
import font from '../../../assets/fonts/Red_Hat_Display/static/RedHatDisplay-Regular.ttf';

export const RedHatDisplay = styled.div`
  @font-face {
    font-family: 'RedHatDisplay';
    src: url(${font}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  font-family: 'RedHatDisplay';
`;
