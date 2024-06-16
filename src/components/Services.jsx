// src/components/Services.js
import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import serviceImg1 from '../assets/img/service-1.jpg';
import serviceImg2 from '../assets/img/service-2.jpeg';
import serviceImg3 from '../assets/img/service-3.jpg';
import serviceImg4 from '../assets/img/service-4.jpg';
import serviceImg5 from '../assets/img/service-5.jpeg';
import serviceImg6 from '../assets/img/service-6.jpeg';
import serviceImg7 from '../assets/img/service-7.jpeg';
import serviceImg8 from '../assets/img/service-8.jpeg';
import serviceImg9 from '../assets/img/service-9.jpeg';
import Header from '../components/Header';

const ServiceCard = ({ delay, image, title, description }) => (
  <div className={`col-lg-6 col-xl-4 wow fadeInUp`} data-wow-delay={`${delay}s`}>
    <div className="service-item">
      <div className="service-inner">
        <div className="service-img">
          <img src={image} className="img-fluid fixed-size rounded" alt="Image" />
        </div>
        <div className="service-title">
          <div className="service-title-name">
            <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
              <a href="#" className="h4 text-white mb-0">{title}</a>
            </div>
            <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
          </div>
          <div className="service-content pb-4">
            <a href="#"><h4 className="text-white mb-4 py-3">{title}</h4></a>
            <div className="px-4">
              <p className="mb-4">{description}</p>
              <a className="btn  border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = ({isHome =false}) => {
  const services = [
    {
      delay: 0.1,
      image: serviceImg1,
      title: 'Air Reservations and Ticketing',
      description: 'We provide seamless air reservations and ticketing services to ensure a hassle-free journey. From selecting the best flights to booking your tickets, we manage everything for you.',
    },
    {
      delay: 0.5,
      image: serviceImg8,
      title: 'Excursion & Local Sightseeing',
      description: 'Discover the local culture and attractions with our excursion and sightseeing tours. We provide guided tours to the most popular and hidden gems of your destination.',
    },
    {
      delay: 0.5,
      image: serviceImg3,
      title: 'Visa and Passport Processing',
      description: 'Our experts handle all your visa and passport needs, ensuring a smooth and efficient process. Get your travel documents in order with our reliable services.',
    },
    {
      delay: 0.1,
      image: serviceImg4,
      title: 'Hotel Reservations',
      description: 'Book the best accommodations with our hotel reservation services. We ensure you stay in comfortable and convenient locations, tailored to your budget and preferences.',
    },
    {
      delay: 0.3,
      image: serviceImg5,
      title: 'Airport Transfers',
      description: 'Experience stress-free airport transfers with our reliable service. We provide comfortable and timely transportation to and from the airport, ensuring a smooth start and end to your trip.',
    },
    {
      delay: 0.5,
      image: serviceImg6,
      title: 'Education Tours',
      description: 'Enhance learning with our specialized education tours. We organize trips that combine education and exploration, offering enriching experiences for students and educators alike.',
    },
    {
      delay: 0.5,
      image: serviceImg7,
      title: 'Cruise Bookings',
      description: 'Sail the seas with our cruise booking services. Choose from a variety of luxurious cruises that offer breathtaking views, entertainment, and relaxation on the open waters.',
    },
  
    
    {
      delay: 0.3,
      image: serviceImg2,
      title: 'Tour Packages',
      description: 'Explore the world with our curated tour packages. Whether you seek adventure, relaxation, or cultural immersion, we have the perfect package tailored to your preferences.',
    },
    {
      delay: 0.5,
      image: serviceImg9,
      title: 'Business Tours',
      description: 'Optimize your business travel with our comprehensive business tour services. We handle all the logistics, ensuring your focus remains on your professional engagements.',
    },
  ];
  const serviceList = isHome ? services.slice(0,3):services;

  return (
    <div>
    
      <div className="container-fluid service overflow-hidden py-5 bg-purple-100">
        <div className="container py-5">
         
          <div className="row g-4">
            {serviceList.map((service, index) => (
              <ServiceCard 
                key={index}
                delay={service.delay}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
