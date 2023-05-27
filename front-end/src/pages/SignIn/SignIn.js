import React from 'react';
import { Helmet } from 'react-helmet-async';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import SignInBody from '../../components/SignInBody/SignInBody.js';

function SignIn() {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <NavBar />
      <SignInBody />
      <Footer />
    </>
  );
}

export default SignIn;
