import styled from 'styled-components';

export const Wrapper = styled.div`
  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
    width: 100%;
  }

  .react-player {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }

  /* Hide Video Player Default Controls */
  .react-player__controls {
    display: none !important;
  }

  /* Add custom play button */
  .react-player__preview .react-player__shadow,
  .react-player__preview .react-player__play-icon {
    background: none !important;
  }

  /* Add a white circle around the play button */
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

  .button-wrapper {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
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

  @media screen and (max-width: 768px) {
    .button-wrapper {
      flex-direction: column;
      align-items: center;
      width: 50%;
    }

    .info-button {
      margin-bottom: 10px;
    }
  }
`;
