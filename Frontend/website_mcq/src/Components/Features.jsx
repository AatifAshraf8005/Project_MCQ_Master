import React from 'react';
import './style.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="feature">
          <i className="icon">📚</i>
          <h3>Interactive MCQs</h3>
          <p>Engaging multiple-choice questions to test your knowledge.</p>
        </div>
        <div className="feature">
          <i className="icon">📈</i>
          <h3>Progress Tracking</h3>
          <p>Track your progress and see how you improve over time.</p>
        </div>
        <div className="feature">
          <i className="icon">🎓</i>
          <h3>Expert-Designed Questions</h3>
          <p>Questions crafted by experts to ensure comprehensive learning.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
