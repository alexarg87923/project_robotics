import styled from 'styled-components';

export const Wrapper = styled.div`
  #video-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%; /* Adjust the width as needed */
    height: 0%;
    padding-bottom: 75%; /* 16:9 Aspect Ratio */
    overflow: hidden; /* Prevents overflowing content */
  }

  #video,
  #thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #thumbnail {
    z-index: 1;
  }

  #video {
    width: 100%;
    height: auto;
    object-fit: cover; /* Stretch the video to cover horizontally */
  }
`;
