import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/sections/Hero/Hero';
import Video from '../../components/sections/Video/Video';
import Boxes from '../../components/sections/Boxes/Boxes';

function Landing() {
  return (
    <div style={{ backgroundColor: 'rgb(23, 23, 23)' }}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Video />
      <Boxes />
    </div>
  );
}

export default Landing;
