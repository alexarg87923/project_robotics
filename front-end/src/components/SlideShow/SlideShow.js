import React from 'react';
import { Carousel } from 'react-bootstrap';
import { BootstrapWrapper } from '../BootstrapWrapper/BootstrapWrapper';

function Slideshow() {
  return (
    <BootstrapWrapper>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/promo-bg.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/promo-bg.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/promo-bg.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </BootstrapWrapper>
  );
}

export default Slideshow;
