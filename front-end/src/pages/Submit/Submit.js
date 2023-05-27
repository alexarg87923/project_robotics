import React from 'react';
import { Helmet } from 'react-helmet-async';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';

function Submit() {
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

export default Submit;
