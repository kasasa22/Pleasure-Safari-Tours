import React from 'react';
import { Container, Grid, Typography, Link, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Email, Phone, Print, Share } from '@mui/icons-material';

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'white',
  display: 'block',
  marginBottom: theme.spacing(1),
  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#5A20A4', py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h6" color="error" gutterBottom>
                Contact Info
              </Typography>
              <FooterLink href="#">
                <LocationOn sx={{ mr: 1 }} /> Kamu Kamu Building, Entebbe, 2nd Floor, Suite F2
              </FooterLink>
              <FooterLink href="mailto:pleasuresafaritours@gmail.com">
                <Email sx={{ mr: 1 }} /> pleasuresafaritours@gmail.com
              </FooterLink>
              <FooterLink href="tel:+256704368446">
                <Phone sx={{ mr: 1 }} /> +256 704 368446
              </FooterLink>
              <FooterLink href="#">
                <Print sx={{ mr: 1 }} /> +012 345 67890
              </FooterLink>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Share sx={{ fontSize: 28, color: 'white', mr: 1 }} />
                <FooterLink href="#"><Facebook /></FooterLink>
                <FooterLink href="#"><Twitter /></FooterLink>
                <FooterLink href="#"><Instagram /></FooterLink>
                <FooterLink href="#"><LinkedIn /></FooterLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h6" color="error" gutterBottom>
                Opening Time
              </Typography>
              <Box mb={2}>
                <Typography variant="subtitle1" color="error">
                  Mon - Friday:
                </Typography>
                <Typography variant="body2" color="white">
                  09.00 am to 07.00 pm
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1" color="error">
                  Saturday:
                </Typography>
                <Typography variant="body2" color="white">
                  10.00 am to 05.00 pm
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1" color="error">
                  Vacation:
                </Typography>
                <Typography variant="body2" color="white">
                  All Sunday is our vacation
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h6" color="error" gutterBottom>
                Our Services
              </Typography>
              <FooterLink href="#"><span>&raquo;</span> Air Reservation and Ticketing</FooterLink>
              <FooterLink href="#"><span>&raquo;</span> Visa and Passport Processing</FooterLink>
              <FooterLink href="#"><span>&raquo;</span> Airport Transfers</FooterLink>
              <FooterLink href="#"><span>&raquo;</span> Hotel Reservations</FooterLink>
              <FooterLink href="#"><span>&raquo;</span> Tour Packages</FooterLink>
              <FooterLink href="#"><span>&raquo;</span> Business Tours</FooterLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h6" color="error" gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" color="white" gutterBottom>
                Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Box sx={{ position: 'relative', mt: 3 }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Enter your email"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '50px', color: 'white' } }}
                  InputProps={{
                    style: { color: 'white' },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 8,
                    transform: 'translateY(-50%)',
                    borderRadius: '50px',
                  }}
                >
                  SignUp
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
