// src/pages/Subjects.js
import React from 'react';
import Header from '../Components/Header';  // Adjust the path if necessary
import Footer from '../Components/Footer';  // Adjust the path if necessary
import './Subject.css'
const Subjects = () => {
  return (
    <>
      <Header />
      <br/>
      <br/>
      <main>
        <section className="subjects">
          <div className="subject">
            <h2>Python</h2>
            <p>Topics include basic python, datatypes, strings, list, tuples, and more.</p>
          </div>
          <div className="subject">
            <h2>DSA</h2>
            <p>Array, linked list, tree, graphs, and more.</p>
          </div>
          <div className="subject">
            <h2>Computer Graphics</h2>
            <p>Topic includes Transformation, shearing, translation, and more.</p>
          </div>
          <div className="subject">
            <h2>DBMS</h2>
            <p>Topic includes SQL, Normalisation, Functional dependencies, and more.</p>
          </div>
          <div className="subject">
            <h2>Physics</h2>
            <p>Topics include Mechanics, Electromagnetism, Quantum Physics, and more.</p>
          </div>
          <div className="subject">
            <h2>Chemistry</h2>
            <p>Topics include Organic Chemistry, Inorganic Chemistry, Physical Chemistry, and more.</p>
          </div>
          <div className="subject">
            <h2>Biology</h2>
            <p>Topics include Cell Biology, Genetics, Evolution, and more.</p>
          </div>
          <div className="subject">
            <h2>Computer Science</h2>
            <p>Topics include Programming, Data Structures, Algorithms, and more.</p>
          </div>
        </section>
      </main>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </>
  );
};

export default Subjects;
