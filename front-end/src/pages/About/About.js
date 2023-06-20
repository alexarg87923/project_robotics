import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutBody from '../../components/About/AboutBody';

function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <AboutBody />
    </div>
  );
}

export default About;
