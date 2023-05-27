import styled from 'styled-components';

export const Wrapper = styled.div`
  #video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
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
    z-index: 0;
  }
`;
