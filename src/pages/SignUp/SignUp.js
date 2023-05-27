import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import SignUp from '../../components/SignUp/SignUp';

function Join() {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <NavBar />
      <SignUp />
      <Footer />
    </div>
  );
}

export default Join;
