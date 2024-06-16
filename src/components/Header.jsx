import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css'; 
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  const getHeaderContent = () => {
    switch (pathname) {
      case '/':
        return { title: 'Home', breadcrumb: 'Home' };
      case '/aboutUs':
        return { title: 'About Us', breadcrumb: 'aboutUs' };
      case '/services':
        return { title: 'Our Services', breadcrumb: 'Services' };
      case '/contact':
        return { title: 'Contact Us', breadcrumb: 'Contact' };
        case '/packages':
        return { title: 'Our Packages', breadcrumb: 'packages' };
        case '/Blogs':
        return { title: 'Our Blogs', breadcrumb: 'Blogs' };
      
      default:
        return { title: 'Page', breadcrumb: 'Page' };
    }
  };

  const headerContent = getHeaderContent();

  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h3 className="text-purple-800 display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">{headerContent.title}</h3>
        <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item">
            <NavLink to="/" className="text-warning">Home</NavLink>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-warning">Pages</a>
          </li>
          <li className="breadcrumb-item active text-warning">{headerContent.breadcrumb}</li>
        </ol>
      </div>
    </div>
  );
};

export default Header;
