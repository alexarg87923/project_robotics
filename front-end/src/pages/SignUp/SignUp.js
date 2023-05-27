import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import SignUpBody from '../../components/SignUpBody/SignUpBody';

function SignUp() {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <NavBar />
      <SignUpBody />
      <Footer />
    </div>
  );
}

export default SignUp;
