import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from '../../components/Title/Title';
import CleanVideo from '../../components/CleanVideo/CleanVideo';
import Banner from '../../components/Banner/Banner';

function Landing() {
  return (
    <div
      style={{
        backgroundImage: `url(assets/images/bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: 'auto',
        width: 'auto'
      }}
    >
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title />
      <CleanVideo />
      <Banner />
    </div>
  );
}

export default Landing;
