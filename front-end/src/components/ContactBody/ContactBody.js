import React, { useState } from 'react';
import { Form, Button, FloatingLabel, Row, Col, Alert } from 'react-bootstrap';

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
    <Row className="justify-content-center mt-5">
      <Col lg={8} xl={7} className="mt-5">
        <Form noValidate onSubmit={handleSubmit}>
          <FloatingLabel controlId="name" label="Full name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your name..."
              value={formData.name}
              name="name"
              onChange={e => onInputChange(e)}
              isInvalid={invalid.name}
            />
            <Form.Control.Feedback type="invalid">
              A name is required.
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={e => onInputChange(e)}
              isInvalid={invalid.email}
            />
            <Form.Control.Feedback type="invalid">
              An email is required.
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            controlId="phone"
            label="Phone number"
            className="mb-3"
          >
            <Form.Control
              type="tel"
              placeholder="(123) 456-7890"
              name="phone"
              value={formData.phone}
              onChange={e => onInputChange(e)}
              isInvalid={invalid.phone}
            />
            <Form.Control.Feedback type="invalid">
              A phone number is required.
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="message" label="Message" className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Enter your message here..."
              style={{ height: '10rem' }}
              value={formData.message}
              onChange={e => onInputChange(e)}
              name="message"
              isInvalid={invalid.message}
            />
            <Form.Control.Feedback type="invalid">
              A message is required.
            </Form.Control.Feedback>
          </FloatingLabel>

          <Alert
            variant="success"
            id="submitSuccessMessage"
            className={showSuccess ? 'text-center mb-3' : 'd-none'}
          >
            <div className="fw-bolder">Form submission successful!</div>
          </Alert>

          <Alert
            variant="danger"
            id="submitErrorMessage"
            className={showError ? 'text-center mb-3' : 'd-none'}
          >
            Error sending message!
          </Alert>

          <Button variant="primary" size="lg" type="submit">
            Send
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;
