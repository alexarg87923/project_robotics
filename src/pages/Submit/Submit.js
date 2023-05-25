import React from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Submit</title>
      </Helmet>
      <NavBar />

      <Footer />
    </>
  );
}

export default Contact;
