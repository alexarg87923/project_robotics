import React from 'react';
import { Helmet } from 'react-helmet-async';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import Video from '../../components/Video/Video';

function Landing() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavBar />
      <Video />
      <Footer />
    </div>
  );
}

export default Landing;
