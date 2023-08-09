import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { BootstrapWrapper } from '../../components/common/BootstrapWrapper/BootstrapWrapper';
import { BebasNeue } from '../../components/common/Fonts/BebasNeue';
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!name || !lastName || !email) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('/api/v1/sign-up', {
        name,
        lastName,
        email
      });

      if (response.data.success) {
        alert('Signed up successfully!');
      } else {
        alert('Error during sign up. Please try again.');
      }
    } catch (error) {
      console.error('There was an error signing up', error);
      alert('Error during sign up. Please try again.');
    }
  };

  return (
    <BootstrapWrapper>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <BebasNeue>
        <div
          className="text-center container mt-5"
          style={{ backgroundColor: 'rgb(23, 23, 23)' }}
        >
          <h1 className="text-white BebasNeue pt-5">Signup</h1>
          <Form
            style={{ backgroundColor: 'rgb(23, 23, 23)' }}
            onSubmit={handleSubmit}
          >
            <Card className="mb-3 border-0">
              <Card.Body
                style={{ backgroundColor: 'rgb(23, 23, 23)' }}
                className="justify-content-center border-0"
              >
                <div className="d-inline-block w-50 text-left">
                  <Form.Label className="text-white mt-1">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <Form.Label className="text-white mt-3">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                  <Form.Label className="text-white mt-3">
                    Email Address
                  </Form.Label>
                  <Form.Control
                    value={email}
                    type="email"
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </Card.Body>
            </Card>
            <Button className="mb-5" type="submit" variant="danger">
              Subscribe
            </Button>
          </Form>
        </div>
      </BebasNeue>
    </BootstrapWrapper>
  );
}

export default SignUp;
