import React from 'react';
import { Helmet } from 'react-helmet-async';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <NavBar />
      <Footer />
    </>
  );
}

export default Contact;
