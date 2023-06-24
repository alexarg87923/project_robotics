import React from 'react';
import { BootstrapWrapper } from '../BootstrapWrapper/BootstrapWrapper';
import { Wrapper } from './BannerStyles';
import { Card } from 'react-bootstrap';

function Banner() {
  return (
    <Wrapper>
      <BootstrapWrapper>
        <div className="padding">
          <Card
            className="rounded-rectangle text-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Card.Text className="title" style={{ maxWidth: '900px' }}>
              MDC North AI & Robotics Club is hosting a fast-paced and exciting
              introduction into robotics for students of all skill levels.
            </Card.Text>
          </Card>
        </div>
      </BootstrapWrapper>
    </Wrapper>
  );
}

export default Banner;
