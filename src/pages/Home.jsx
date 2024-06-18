import React from 'react';
import Hero from '../components/Hero'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Blogs from '../components/Blogs';
import '../style.css';
import bgImage from '../assets/images/destination-5.jpg';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='bg-image' style={{ backgroundColor: '#fdf4ff' }}>
        <AboutUs />
        <Services isHome={true} />
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
