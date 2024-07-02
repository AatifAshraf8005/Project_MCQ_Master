import React from 'react';
import './style.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Users Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <p>"This platform has tremendously helped me in my preparations!" - Ahmed Faraz</p>
          </div>
          <div className="testimonial">
            <p>"The interactive MCQs are engaging and very helpful." - Aadya Mishra</p>
          </div>
          <div className="testimonial">
            <p>"I love the progress tracking feature. It keeps me motivated." - Aditi Gupta</p>
          </div>
          <div className="testimonial">
            <p>"This website is dedicated to progressive learning." - Aditya Verma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
