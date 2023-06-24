import React from 'react';
import { BootstrapWrapper } from '../BootstrapWrapper/BootstrapWrapper';

function AboutBody() {
  return (
    <BootstrapWrapper>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">About</h1>
            <p className="lead text-body-secondary">
              A one-of-a-kind competition that combines the creative brilliance
              of robotic engineering with the organic charm of a farm-fresh
              tomato, Tomatonator is more than just a battle—it's an exploration
              of innovation, strategy, and teamwork.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">
                I'm interested!
              </a>
            </p>
          </div>
        </div>
      </section>
    </BootstrapWrapper>
  );
}

export default AboutBody;
