import React from 'react';
import { Wrapper } from './CleanVideoStyles';
import { BootstrapWrapper } from '../BootstrapWrapper/BootstrapWrapper';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

function CleanVideo() {
  return (
    <BootstrapWrapper>
      <Wrapper>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="/assets/videos/vid.mp4"
            controls={true}
            playIcon={
              <div style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faPlayCircle} size="4x" />
              </div>
            }
            light="/assets/images/promo-bg.jpg"
          />
        </div>
      </Wrapper>
    </BootstrapWrapper>
  );
}

export default CleanVideo;
