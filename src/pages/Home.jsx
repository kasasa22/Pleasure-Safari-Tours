import React from 'react';
import Hero from '../components/Hero'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Blogs from '../components/Blogs';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services isHome={true} />
      <Blogs />
    </div>
  );
};

export default Home;
