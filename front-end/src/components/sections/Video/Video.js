import React from 'react';
import { Wrapper } from './VideoStyles';
import { BootstrapWrapper } from '../../common/BootstrapWrapper/BootstrapWrapper';
import { BebasNeue } from '../../common/Fonts/BebasNeue';
import video from '../../../assets/videos/vid.mp4';
import robot from '../../../assets/img/redrobot.png';

function ComingSoon() {
  return (
    <BootstrapWrapper>
      <BebasNeue>
        <Wrapper>
          <div
            id="mainDiv"
            className="pb-5 pb-xl-5"
            style={{ paddingRight: '15%' }}
          >
            <h1 className="title text-uppercase text-white pt-5 offset-md-1 offset-lg-3 offset-xl-1 text-center text-md-left">
              MDC North AI & Robotics Club
            </h1>
            <div id="videoDiv" className="row">
              <div className="col-12 col-xl-4 offset-md-1 offset-lg-3 offset-xl-1 order-md-1 text-center text-md-left">
                <p className="subtitle text-uppercase text-white w-75 mx-auto mx-md-0">
                  is hosting a fast-paced and exciting introduction into
                  robotics for students of all skill levels
                </p>
                <img className="robotimg" src={robot} alt="red robot" />
              </div>
              <div className="col-12 col-xl-4 pb-md-5 offset-md-1 order-md-2 offset-lg-2 text-center">
                <video controls className="vid z-1 position-relative ">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </Wrapper>
      </BebasNeue>
    </BootstrapWrapper>
  );
}

export default ComingSoon;
