import React from 'react';
import HeroSection from '../Components/HeroSection';
import Features from '../Components/Features';
import PopularCourses from '../Components/PopularCourses';
import Testimonials from '../Components/Testimonials';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
        <Header/>
      <HeroSection />
      <Features />
      <PopularCourses />
      <Testimonials />
      <Footer/>
    </div>
  );
};

export default Home;
