import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import OfficeLocations from '../components/OfficeLocations';
import theme from '../theme';

const ContactPage = () => {
  return (
    <>
      <Header />
      <Box sx={{ padding: theme.spacing(5, 0) }}>
        <Container>
          <Grid container spacing={5} sx={{ paddingBottom: theme.spacing(5) }}>
            <Grid item xs={12} md={6} data-wow-delay="0.1s">
              <Box sx={{ paddingBottom: theme.spacing(2) }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, paddingBottom: theme.spacing(3) }}>
                  Quick Contact
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Have Questions? Don't Hesitate to Contact Us
                </Typography>
                <Typography paragraph>
                  Experience the best travel services tailored to your needs. Our team is dedicated to providing you with seamless and enjoyable journeys, ensuring every detail is taken care of.
                </Typography>
                <ContactInfo />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-wow-delay="0.3s">
              <Box sx={{ paddingBottom: theme.spacing(2) }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, paddingBottom: theme.spacing(3) }}>
                  Let’s Connect
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Send Your Message
                </Typography>
                <ContactForm />
              </Box>
            </Grid>
          </Grid>
          {/* Uncomment the below line if you want to add OfficeLocations component */}
          {/* <OfficeLocations /> */}
        </Container>
      </Box>
    </>
  );
}

export default ContactPage;
