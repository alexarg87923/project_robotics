import React from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap/';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar className="ps-5 border-bottom border-light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          {/* <img
            src=""
            width="200"
            height="auto"
            className="d-inline-block align-top"
            alt=""
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-center w-100 mb-2 mb-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Row className="w-100">
              <Col className="d-flex justify-content-center">
                <Nav.Link href="/about" className="mx-5 px-4 py-1 navColor">
                  About
                </Nav.Link>
              </Col>
              <Col className="d-flex justify-content-center">
                <Nav.Link href="/sign-in" className="mx-5 px-4 py-1 navColor">
                  Sign In
                </Nav.Link>
              </Col>
              <Col className="d-flex justify-content-center">
                <Nav.Link href="/contact" className="mx-5 px-4 py-1 navColor">
                  Contact
                </Nav.Link>
              </Col>
              {/* <Col className="d-flex justify-content-center">
                <Nav.Link href="/submit" className="mx-5 px-4 py-1 navColor">
                  Submit
                </Nav.Link>
              </Col> */}
            </Row>
          </Nav>
          <Button
            className="me-5 px-5 mt-1 ms-5 text-nowrap"
            variant="outline-success"
            href="/sign-up"
          >
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </Navbar>
  );
}

export default NavBar;
