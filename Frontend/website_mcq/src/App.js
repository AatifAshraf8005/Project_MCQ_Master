import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Subject from './Page/Subject';
import Contact from './Page/Contact';
import Login from './Page/Login';
import Tick from './Page/Tick'
import Math from './Page/Math'
import C from './Page/C'
import Mern from './Page/Mern';
import OS from './Page/OS';
import Dbms from'./Page/Dbms';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tick" element={<Tick />} />
        <Route path="/tick/math" element={<Math />} />
        <Route path="/tick/c" element={<C />} />
        <Route path="/tick/mern" element={<Mern />} />
        <Route path="/tick/os" element={<OS />} />
        <Route path="/tick/dbms" element={<Dbms />} />
      </Routes>
    </Router>
  );
};

export default App;
