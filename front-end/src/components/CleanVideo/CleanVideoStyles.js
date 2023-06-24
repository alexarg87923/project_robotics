import styled from 'styled-components';

export const Wrapper = styled.div`
  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
    margin-top: 20vh;
    width: 100%;
  }

  .react-player {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150vh !important;
    height: 90vh !important;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }

  .react-player__controls {
    display: none !important;
  }

  .react-player__preview .react-player__shadow,
  .react-player__preview .react-player__play-icon {
    background: none !important;
  }

  .react-player__preview .react-player__play-icon::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border: 2px solid white;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .info-button,
  .subscribe-button {
    padding: 10px 20px;
    background-color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .info-button {
    margin-top: 50px;
  }

  .subscribe-button {
    margin-top: 50px;
  }

  .div-below-video {
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    .react-player {
      width: auto;
      height: auto;
      margin-top: 9vh;
    }
  }
`;
