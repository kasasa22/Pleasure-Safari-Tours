// Services.js
import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import serviceImg1 from '../assets/img/service-1.jpg';
import serviceImg2 from '../assets/img/service-2.jpeg';
import serviceImg3 from '../assets/img/service-3.jpg';
import serviceImg4 from '../assets/img/service-4.jpg';
import serviceImg5 from '../assets/img/service-5.jpeg';
import serviceImg6 from '../assets/img/service-6.jpeg';
import serviceImg7 from '../assets/img/service-7.jpeg';
import serviceImg8 from '../assets/img/service-8.jpeg';
import serviceImg9 from '../assets/img/service-9.jpeg';

const serviceData = [
    { id: 1, image: serviceImg1, title: 'Air Reservations and Ticketing', description: 'We provide seamless air reservations and ticketing services to ensure a hassle-free journey. From selecting the best flights to booking your tickets, we manage everything for you.' },
    { id: 2, image: serviceImg2, title: 'Excursion & Local Sightseeing', description: 'Discover the local culture and attractions with our excursion and sightseeing tours. We provide guided tours to the most popular and hidden gems of your destination.' },
    { id: 3, image: serviceImg3, title: 'Visa and Passport Processing', description: 'Our experts handle all your visa and passport needs, ensuring a smooth and efficient process. Get your travel documents in order with our reliable services.' },
    { id: 4, image: serviceImg4, title: 'Hotel Reservations', description: 'Book the best accommodations with our hotel reservation services. We ensure you stay in comfortable and convenient locations, tailored to your budget and preferences.' },
    { id: 5, image: serviceImg5, title: 'Airport Transfers', description: 'Experience stress-free airport transfers with our reliable service. We provide comfortable and timely transportation to and from the airport, ensuring a smooth start and end to your trip.' },
    { id: 6, image: serviceImg6, title: 'Education Tours', description: 'Enhance learning with our specialized education tours. We organize trips that combine education and exploration, offering enriching experiences for students and educators alike.' },
    { id: 7, image: serviceImg7, title: 'Cruise Bookings', description: 'Sail the seas with our cruise booking services. Choose from a variety of luxurious cruises that offer breathtaking views, entertainment, and relaxation on the open waters.' },
    { id: 8, image: serviceImg8, title: 'Tour Packages', description: 'Explore the world with our curated tour packages. Whether you seek adventure, relaxation, or cultural immersion, we have the perfect package tailored to your preferences.' },
    { id: 9, image: serviceImg9, title: 'Business Tours', description: 'Optimize your business travel with our comprehensive business tour services. We handle all the logistics, ensuring your focus remains on your professional engagements.' },
];

const ServiceCard = ({ id, image, title, description }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: 200, objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ px: 2, pb: 2 }}>
        <Button component={Link} to={`/services/${id}`} variant="contained" color="secondary" fullWidth>
          Explore More
        </Button>
      </Box>
    </Card>
  </Grid>
);

const Services = ({ isHome = false }) => {
  const serviceList = isHome ? serviceData.slice(0, 3) : serviceData;

  return (
    <Box sx={{ py: 5, backgroundColor: 'background.default' }}>
      <Container sx={{ py: 5 }}>
        <Box sx={{ textAlign: 'center', mb: 5, maxWidth: 900, mx: 'auto' }}>
          <Typography variant="h5 section-title h1 px-3" component="div" color="purple" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h3" component="div" color="secondary">
            Explore Our <span style={{ color: 'purple' }}>Quality</span> Services
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {serviceList.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
