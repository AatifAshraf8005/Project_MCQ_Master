import React from 'react';
import './style.css';

const PopularCourses = () => {
  return (
    <section className="popular-courses">
      <div className="container">
        <h2>Popular Courses</h2>
        <div className="course-carousel">
          <div className="course-card">
            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Course 1" />
            <h3>PYTHON</h3>
            <p>Basic to Advanced Python Course</p>
            <p>complete package @Rs4500</p>
          </div>
          <div className="course-card">
            <img src="https://png.pngtree.com/png-vector/20200525/ourmid/pngtree-vector-creative-and-development-icon-web-and-graphic-design-icons-png-image_2212123.jpg" alt="Course 2" />
            <h3>COMPUTER GRAPHICS</h3>
            <p>Enhance your graphics skills in 30 days.</p>
            <p>complete package @Rs1999</p>
          </div>
          <div className="course-card">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-java-23-225999.png" alt="Course 3" />
            <h3>JAVA</h3>
            <p>Learn Java start coding from scratch.</p>
            <p>complete package @Rs3999</p>
          </div>
          <div className="course-card">
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/mern-stack-5363121-4488910.png" alt="Course 4" />
            <h3>MERN Stack</h3>
            <p>Build your career in Web Development.</p>
            <p>complete package @Rs4999</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
