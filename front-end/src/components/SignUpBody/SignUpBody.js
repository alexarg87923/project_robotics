import React from 'react';
// import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap/';
import { Wrapper } from './SignUpBodyStyles';

function SignUp() {
  const divStyle = {
    zIndex: 10
  };

  const h1Style = {
    color: 'hsl(218, 81%, 95%)'
  };

  const spanStyle = {
    color: 'hsl(218, 81%, 75%)'
  };

  const pStyle = {
    color: 'hsl(218, 81%, 85%)'
  };
  return (
    <Wrapper>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={divStyle}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={h1Style}>
                Welcome to <br />
                <span style={spanStyle}>Termitomator</span>
              </h1>
              <p className="mb-4 opacity-70" style={pStyle}>
                MDC North AI & Robotics Club invites you to a fast-paced and
                exciting introduction into robotics. In this event, you'll get
                the chance to create your own robot that will compete to protect
                a precious tomato while trying to attack your opponent's. The
                event is open to middle and high school students and is an
                excellent opportunity to showcase your creativity and
                engineering skills. All funds raised will go towards supporting
                our club and the young robot designers. We can't wait to see
                what you'll create!
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example1">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example2">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default SignUp;
