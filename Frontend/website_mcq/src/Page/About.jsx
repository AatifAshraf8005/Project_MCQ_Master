// About.js
import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './About.css'
function About() {
  return (
    <>
    <Header/>
    <main>
      <section className="about">
        <div className="container">
          <h1>About Us</h1>
          <p>Welcome to MCQ Master, your number one source for mastering multiple choice questions. We're dedicated to providing you the very best of practice questions, with an emphasis on quality, variety, and accuracy.</p>

          <h2>Our Mission</h2>
          <p>Our mission is to make learning and exam preparation more effective and enjoyable. We aim to provide a wide range of MCQs across various subjects to help students and professionals alike.</p>

          <h2>Our Team</h2>
          <p>MCQ Master is made up of a diverse team of educators, content creators, and tech enthusiasts who are passionate about education. Our team works tirelessly to ensure that our platform is user-friendly and our content is up-to-date and relevant.</p>

          <h2>Our History</h2>
          <p>Founded in 2023, MCQ Master has come a long way from its beginnings. When we first started out, our passion for education and technology drove us to start this platform so that MCQ Master can offer you the best educational resource. We now serve users all over the world and are thrilled that we're able to turn our passion into our website.</p>

          <p>Thank you for visiting our website!</p>

          <p><strong>Sincerely,</strong><br />
          The MCQ Master Team</p>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}

export default About;
