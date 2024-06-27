import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Avatar, Button, Box } from '@mui/material';
import country1 from '../assets/img/country-1.jpg';
import country2 from '../assets/img/country-2.jpg';
import country3 from '../assets/img/country-3.jpg';
import country4 from '../assets/img/country-4.jpg';
import brazil from '../assets/img/brazil.jpg';
import india from '../assets/img/india.jpg';
import usa from '../assets/img/usa.jpg';
import italy from '../assets/img/italy.jpg';

const CountriesWeOffer = () => {
  const countries = [
    { name: 'Brazil', image: country1, flag: brazil },
    { name: 'India', image: country2, flag: india },
    { name: 'USA', image: country3, flag: usa },
    { name: 'Italy', image: country4, flag: italy },
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 5 }}>
      <Container>
        <Box textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="h5" color="purple" sx={{ mb: 2 }}>Most Visited Countries</Typography>
          <Typography variant="h4" color="orange">Explore various Countries Around the world</Typography>
        </Box>
        <Grid container spacing={4} textAlign="center">
          {countries.map((country, index) => (
            <Grid item xs={12} sm={6} md={3} key={country.name}>
              <Card sx={{ maxWidth: 345, mx: 'auto', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  alt={country.name}
                  height="140"
                  image={country.image}
                />
                <CardContent>
                  <Avatar
                    src={country.flag}
                    alt={`${country.name} flag`}
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 1,
                      border: '2px solid white'
                    }}
                  />
                  <Typography variant="h6" component="div" color="text.primary">
                    {country.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" color="warning" size="large" sx={{ borderRadius: 50, py: 1.5, px: 4 }}>
              Explore Countries
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CountriesWeOffer;
