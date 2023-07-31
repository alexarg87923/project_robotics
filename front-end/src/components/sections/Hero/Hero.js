import React, { useState } from 'react';
import { Wrapper } from './HeroStyles';
import { BebasNeue } from '../../common/Fonts/BebasNeue';
import { BootstrapWrapper } from '../../common/BootstrapWrapper/BootstrapWrapper';
import logo from '../../../assets/img/logo.png';
import { RedHatDisplay } from '../../common/Fonts/RedHatDisplay';

import whitearrow from '../../../assets/img/arrowwhite.png';
import arrowblack from '../../../assets/img/arrowblack.png';

function Hero() {
  const [image, setImage] = useState(whitearrow);

  const handleMouseOver = () => setImage(arrowblack);
  const handleMouseOut = () => setImage(whitearrow);

  return (
    <BootstrapWrapper>
      <Wrapper>
        <BebasNeue>
          <RedHatDisplay>
            <header
              className="masthead"
              style={{ height: '100vh', width: 'auto' }}
            >
              <div className="row position-absolute w-100 m-0 h-100 align-items-center">
                <div className="col p-0 justify-content-center align-items-center text-center">
                  <p className="text-white text-uppercase m-0 lh-1 subtitle">
                    the arch-killer
                  </p>
                  <p className="text-white text-uppercase m-0 title">
                    termitomator
                  </p>
                  <p className="text-white text-uppercase m-0 lh-1 subtitle">
                    robot cage-fight
                  </p>
                  <p className="text-white text-uppercase m-0 lh-1 subtitle">
                    competition
                  </p>
                  <button
                    className=" text-uppercase mt-5 px-4"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    id="sign-up"
                  >
                    sign up
                    <img
                      className="arrowstyle"
                      height="auto"
                      width="40vw"
                      src={image}
                      alt="arrow"
                    />
                  </button>
                </div>
                <div className="col p-0 justify-content-center align-items-center d-sm-block d-none">
                  <img
                    style={{ maxWidth: '100%' }}
                    className="w-auto"
                    src={logo}
                    id="logo"
                  ></img>
                </div>
              </div>
            </header>
            <div className="comingsoon">
              <h1
                style={{ fontFamily: 'BebasNeue' }}
                className="text-white text-uppercase text-center m-0 py-5"
              >
                coming this fall
              </h1>
            </div>
          </RedHatDisplay>
        </BebasNeue>
      </Wrapper>
    </BootstrapWrapper>
  );
}

export default Hero;
