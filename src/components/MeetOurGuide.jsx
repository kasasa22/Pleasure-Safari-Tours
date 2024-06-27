// src/components/MeetOurGuide.js
import React from 'react';
import { Container, Grid, Box, Typography, Card, CardMedia, CardContent, CardActions, IconButton, Avatar } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import guide1 from '../assets/images/guide-1.jpg';
import guide2 from '../assets/images/guide-2.jpg';
import guide3 from '../assets/images/guide-3.jpg';
import guide4 from '../assets/images/guide-4.jpg';

const guides = [
  { img: guide1, name: 'Yvonne', designation: 'CEO' },
  { img: guide2, name: 'Chloe', designation: 'Senior Guide' },
  { img: guide3, name: 'Derrick', designation: 'Administrator' },
  { img: guide4, name: 'Trevor', designation: 'Support' },
];

const MeetOurGuide = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: 'background.default' }}>
      <Container sx={{ py: 5 }}>
        <Box sx={{ textAlign: 'center', mb: 5, maxWidth: 900, mx: 'auto' }}>
          <Typography variant="h5" component="div" color="primary" gutterBottom>
            Travel Guide
          </Typography>
          <Typography variant="h3" component="div" color="secondary">
            Meet Our Guide
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {guides.map((guide, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={guide.img}
                  alt={guide.name}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" component="div" gutterBottom>
                    {guide.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {guide.designation}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <IconButton color="primary" href="#">
                    <Facebook />
                  </IconButton>
                  <IconButton color="primary" href="#">
                    <Twitter />
                  </IconButton>
                  <IconButton color="primary" href="#">
                    <Instagram />
                  </IconButton>
                  <IconButton color="primary" href="#">
                    <LinkedIn />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetOurGuide;
