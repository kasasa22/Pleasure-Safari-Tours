import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import serviceImg1 from '../assets/img/service-1.jpg';
import serviceImg2 from '../assets/img/service-2.jpeg';
import serviceImg3 from '../assets/img/service-3.jpg';

const services = [
  {
    id: 1,
    name: 'Air Reservations and ticketing',
    image: serviceImg1,
  },
  {
    id: 2,
    name: 'Hiking',
    image: serviceImg2,
  },
  {
    id: 3,
    name: 'Camping',
    image: serviceImg3,
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Services
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Box sx={{ textAlign: 'center' }}>
                  <img src={service.image} alt={service.name} style={{ width: '100%', height: 'auto', border: '2px solid purple' }} />
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color={service.name === 'Hiking' ? 'secondary' : 'primary'}
                      sx={{ textTransform: 'none' }}
                    >
                      {service.name}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
