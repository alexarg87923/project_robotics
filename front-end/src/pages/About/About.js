import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutPage from '../../components/About/About';

function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <AboutPage />
    </div>
  );
}

export default About;
