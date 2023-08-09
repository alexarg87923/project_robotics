import React from 'react';

import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import Contact from './pages/Contact/Contact';
import Error404 from './pages/Error/Error404';

import Nav from './components/common/Nav/Nav';
import Footer from './components/common/Footer/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<Error404 />} />

        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
