import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import serviceImg1 from '../assets/img/service-1.jpg';
import serviceImg2 from '../assets/img/gorilla.jpg';
import serviceImg3 from '../assets/images/passport.jpeg';

const services = [
  {
    id: 1,
    name: 'Air Reservations and ticketing',
    image: serviceImg1,
  },
  {
    id: 2,
    name: 'zoo visits',
    image: serviceImg2,
  },
  {
    id: 3,
    name: 'Passport Processing',
    image: serviceImg3,
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
        <h5 className="section-title h1 px-3 " style={{ color: 'purple' }}>OUR SERVICES</h5>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
        <h1 className="mb-4 h4" style={{ color:'orange' }}>EXPLORER <span className='text-purple'> OUR</span> SERVICES</h1>
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
