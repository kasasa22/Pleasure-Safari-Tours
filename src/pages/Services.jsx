// src/components/Services.js
import React from 'react';
import '../style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import serviceImg1 from '../assets/img/service-1.jpg';
import serviceImg2 from '../assets/img/service-2.jpg';
import serviceImg3 from '../assets/img/service-3.jpg';

import Header from '../components/Header';

const ServiceCard = ({ delay, image, title, description }) => (
  <div className={`col-lg-6 col-xl-4 wow fadeInUp`} data-wow-delay={`${delay}s`}>
    <div className="service-item">
      <div className="service-inner">
        <div className="service-img">
          <img src={image} className="img-fluid w-100 rounded" alt="Image" />
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
              <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      delay: 0.1,
      image: serviceImg1,
      title: 'Job Visa',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.',
    },
    {
      delay: 0.3,
      image: serviceImg2,
      title: 'Business Visa',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.',
    },
    {
      delay: 0.5,
      image: serviceImg3,
      title: 'Diplomatic Visa',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.',
    },
    {
      delay: 0.1,
      image: serviceImg1,
      title: 'Student Visa',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.',
    },
    {
      delay: 0.3,
      image: serviceImg2,
      title: 'Residence Visa',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.',
    },
    {
      delay: 0.5,
      image: serviceImg3,
      title: 'Tourist Visa',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.',
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-fluid service overflow-hidden py-5">
        <div className="container py-5">
          <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">Visa Categories</h5>
            </div>
            <h1 className="display-5 mb-4">Enabling Your Immigration Successfully</h1>
            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
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
