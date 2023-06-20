import React from 'react';

import About from './pages/About/About';
import Landing from './pages/Landing/Landing';
import SignUp from './pages/SignUp/SignUp';
import Submit from './pages/Submit/Submit';
import SignIn from './pages/SignIn/SignIn';
import Contact from './pages/Contact/Contact';
import Error404 from './pages/Error/Error404';

import Nav from './components/NewNav/Navbar';
import Footer from './components/Footer/Footer';

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
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/contact" element={<Contact />} />

        {/* Protected Route */}
        {/* TO DO */}
        <Route exact path="/submit" element={<Submit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
