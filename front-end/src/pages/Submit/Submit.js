import React from 'react';
import { Helmet } from 'react-helmet-async';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import SubmitBody from '../../components/SubmitBody/SubmitBody';

function Submit() {
  return (
    <>
      <Helmet>
        <title>Submit</title>
      </Helmet>
      <NavBar />
      <SubmitBody />
      <Footer />
    </>
  );
}

export default Submit;
