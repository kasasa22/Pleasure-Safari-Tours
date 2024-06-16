// src/components/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css'; 
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h3 className="text-purple-800 display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Services</h3>
        <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item">
            <NavLink href="/" className="text-warning">Home</NavLink>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-warning">Pages</a>
          </li>
          <li className="breadcrumb-item active text-warning">Services</li>
        </ol>
      </div>
    </div>
  );
};

export default Header;
