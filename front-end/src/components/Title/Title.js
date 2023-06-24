import React from 'react';
import { BootstrapWrapper } from '../BootstrapWrapper/BootstrapWrapper';
import { Wrapper } from './TitleStyle';
import { Card, Row, Col } from 'react-bootstrap';

function Title() {
  return (
    <Wrapper>
      <BootstrapWrapper>
        <div className="padding d-flex justify-content-center">
          <Card className="rounded-rectangle mx-5">
            <Card.Body>
              <Col className="text-center">
                <Row className="subtitle-row">
                  <Card.Text className="subtitle">the arch-killer</Card.Text>
                </Row>
                <Row className="title-row">
                  <Card.Text className="title">Tomatonator</Card.Text>
                </Row>
              </Col>
            </Card.Body>
          </Card>
        </div>
      </BootstrapWrapper>
    </Wrapper>
  );
}

export default Title;
