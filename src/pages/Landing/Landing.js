import React from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';

function Landing() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavBar />
      <Footer />
    </div>
  );
}

export default Landing;
