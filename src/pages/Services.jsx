import React, { useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';

const images = {
  "serviceImg1": serviceImg1,
  "serviceImg2": serviceImg2,
  "serviceImg3": serviceImg3,
  "serviceImg4": serviceImg4,
  "serviceImg5": serviceImg5,
  "serviceImg6": serviceImg6,
  "serviceImg7": serviceImg7,
  "serviceImg8": serviceImg8,
  "serviceImg9": serviceImg9,
};

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
              <Link className="btn  border-secondary rounded-pill text-white py-3 px-5" to="{'/services/${services.id'}">Explore More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = ({ isHome = false }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setServices(data.services))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const serviceList = isHome ? services.slice(0, 3) : services;

  return (
    <div>
      <Header />
      <div className="container-fluid service overflow-hidden py-5">
        <div className="container py-5">
         
          <div className="row g-4">
            {serviceList.map((service, index) => (
              <ServiceCard 
                key={index}
                delay={service.delay}
                image={images[service.image]}
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
