import React from 'react';
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  const getHeaderContent = () => {
    switch (pathname) {
      case '/':
        return { title: 'Home', breadcrumb: 'Home' };
      case '/aboutUs':
        return { title: 'About Us', breadcrumb: 'About Us' };
      case '/services':
        return { title: 'Our Services', breadcrumb: 'Services' };
      case '/contact':
        return { title: 'Contact Us', breadcrumb: 'Contact' };
      case '/packages':
        return { title: 'Our Packages', breadcrumb: 'Packages' };
      case '/Blogs':
        return { title: 'Our Blogs', breadcrumb: 'Blogs' };
      default:
        return { title: 'Page', breadcrumb: 'Page' };
    }
  };

  const headerContent = getHeaderContent();

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: '#f8f9fa', py: 5 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h1" color="primary" gutterBottom>
          {headerContent.title}
        </Typography>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ justifyContent: 'center', display: 'flex' }}
        >
          <Link component={NavLink} to="/" color="secondary">
            Home
          </Link>
          <Link href="#" color="secondary">
            Pages
          </Link>
          <Typography color="textPrimary">{headerContent.breadcrumb}</Typography>
        </Breadcrumbs>
      </Container>
    </Container>
  );
};

export default Header;
