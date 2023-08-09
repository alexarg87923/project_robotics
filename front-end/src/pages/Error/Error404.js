import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BootstrapWrapper } from '../../components/common/BootstrapWrapper/BootstrapWrapper';
import { BebasNeue } from '../../components/common/Fonts/BebasNeue';

function Error404() {
  return (
    <BootstrapWrapper>
      <Helmet>
        <title>Error!</title>
      </Helmet>
      <BebasNeue>
        <Row className="flex-center justify-content-center py-6 mt-5">
          <Col sm={11} md={9} lg={7} xl={6} className="col-xxl-5">
            <Card
              className="text-center mt-5 text-white"
              style={{
                background:
                  'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)'
              }}
            >
              <Card.Body className="p-5">
                <div className="display-1 text-300">404</div>
                <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold BebasNeue">
                  The page you're looking for is not found.
                </p>
                <hr />
                <p>
                  Make sure the address is correct and that the page hasn't
                  moved. If you think this is a mistake, contact us.
                  felipe.rodas001@mymdc.net
                  {/* <a href="/contact" className="ms-1">
                    contact us
                  </a> 
                    .*/}
                </p>
                <Link className="btn btn-danger btn-sm mt-3" to="/">
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  Take me home
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </BebasNeue>
    </BootstrapWrapper>
  );
}

export default Error404;
