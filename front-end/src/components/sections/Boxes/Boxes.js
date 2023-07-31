import React from 'react';
import { Wrapper } from './BoxesStyles';
import { BootstrapWrapper } from '../../common/BootstrapWrapper/BootstrapWrapper';
import { BebasNeue } from '../../common/Fonts/BebasNeue';
import { RedHatDisplay } from '../../common/Fonts/RedHatDisplay';

function ComingSoon() {
  return (
    <BootstrapWrapper>
      <BebasNeue>
        <RedHatDisplay>
          <Wrapper>
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                  <div className="square-box m-2">
                    <div className="box-content d-flex flex-column justify-content-start align-items-center text-center">
                      <h2 className="title">Build</h2>
                      <p className="subtext">
                        Construct a robot that will protect an internal tomato
                        and attack the enemy's tomato
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="square-box m-2">
                    <div className="box-content d-flex flex-column justify-content-start align-items-center text-center">
                      <h2 className="title">Promote</h2>
                      <p className="subtext">
                        Robots will be piloted by paying competitors. Promote
                        your robot and instruct student pilots with a video
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="square-box m-2">
                    <div className="box-content d-flex flex-column justify-content-start align-items-center text-center">
                      <h2 className="title">Compete</h2>
                      <p className="subtext">
                        Test the mettle of your machine! Funds raised will go
                        toward the robot designers and the club
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </RedHatDisplay>
      </BebasNeue>
    </BootstrapWrapper>
  );
}

export default ComingSoon;
