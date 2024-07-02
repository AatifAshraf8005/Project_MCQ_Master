import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Tick.css';
import { Link } from 'react-router-dom';
const Tick = () => {
  return (
    <>
      <Header />
      <main>
        <section className="intro">
          <h2>Welcome to MCQ Master</h2>
          <p>Your ultimate destination for multiple-choice questions in various subjects.</p>
        </section>
        <section className="subject-links">
          <h3>Select a Subject</h3>
          <ul>
            <li><Link to="/tick/math">Mathematics</Link> </li>
            <li><Link to="/tick/c">C_Language</Link></li>
            <li><Link to="/tick/mern">MERN_STACK</Link></li>
            <li><Link to="/tick/os">Operating_System</Link></li>
            <li><Link to="/tick/dbms">DBMS</Link></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Tick;
