/* eslint-disable */
import React, { useState } from 'react';
import { Form, Button, FloatingLabel, Row, Col, Alert, Container } from 'react-bootstrap';
import { Wrapper } from './ContactBodyStyles';
import { BootstrapWrapper } from '../BootstrapWrapper/BootstrapWrapper';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [invalid, setInvalid] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setInvalid({
      name: formData.name === '',
      email: formData.email === '',
      phone: formData.phone === '',
      message: formData.message === ''
    });

    if (Object.values(formData).some(value => value === '')) {
      setShowError(true);
      setShowSuccess(false);
    } else {
      console.log(formData);
      setShowSuccess(true);
      setShowError(false);
    }
  };

  const onInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setInvalid({ ...invalid, [e.target.name]: false });
  };

  return (
    <BootstrapWrapper>
        <Wrapper>
        <Row className="justify-content-center">
            <h1 className='header text-center text-uppercase'>Contact</h1>
            <Col lg={6} xl={6} className="mt-5 text-center">
                <h1 className="second_header">Let's Talk</h1>
                <div className="hr-container">
                    <hr className="short-hr"></hr>
                </div>
                <Container className="info">
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="text-start">
                    <p className="text-white text-14">
                        <strong>Felipe Rodas</strong>
                    </p>
                    <p className="text-white text-14">AI &amp; Robotics Club President</p>
                    <p className="text-white text-14">
                        <a href="mailto:felipe.rodas001@mymdc.net" className="text-white">
                        felipe.rodas001@mymdc.net
                        </a>
                    </p>
                    <p className="text-white text-14">(786) 329-2625</p>
                    <p className="text-white text-14">
                        <span></span>
                    </p>

                    <p className="text-white text-14 mt-5">
                        <strong>Mauricio Pereira</strong>
                    </p>
                    <p className="text-white text-14">AI &amp; Robotics Club Vice President</p>
                    <p className="text-white text-14">
                        <a
                        href="mailto:mauricio.pereira001@mymdc.net"
                        className="text-white"
                        >
                        mauricio.pereira001@mymdc.net
                        </a>
                    </p>
                    <p className="text-white text-14">(954) 534-0176</p>
                    </Col>
                </Row>
                </Container>
            </Col>

            <Col lg={6} xl={6} className="mt-5 text-center">
                <h1 className="second_header">You can also leave a message</h1>
                <div className="hr-container">
                    <hr className="short-hr"></hr>
                </div>
                <div className='container'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control className="mb-4 custom-input" placeholder="Name" />
                        <Form.Control className="mb-4 custom-input" placeholder="Email" />
                        <Form.Control className="mb-4 custom-input" placeholder="Subject" />
                        <Form.Control
                            as="textarea"
                            className="mb-4 custom-textarea"
                            placeholder="Message"
                        />
                        <Button className="float-right ms-auto">Submit</Button>
                    </Form>
                </div>
            </Col>
            </Row>
        </Wrapper>
    </BootstrapWrapper>
  );
};

export default ContactForm;
