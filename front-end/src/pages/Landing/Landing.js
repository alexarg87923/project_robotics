import React from 'react';
import { Helmet } from 'react-helmet-async';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import Video from '../../components/Video/Video';
import MoreInfo from '../../components/MoreInfo/MoreInfoBody';

function Landing() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavBar />
      <Video />
      <MoreInfo />
      <Footer />
    </div>
  );
}

export default Landing;
