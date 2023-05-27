import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <NavBar />

      <Footer />
    </div>
  );
}

export default About;
