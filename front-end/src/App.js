import React from 'react';
import About from './pages/About/About';
import Landing from './pages/Landing/Landing';
import SignUp from './pages/SignUp/SignUp';
import Submit from './pages/Submit/Submit';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/submit" element={<Submit />} />
      </Routes>
    </Router>
  );
}

export default App;
