import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
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
    { id: 1, image: serviceImg1, title: 'Air Reservations and Ticketing', description: 'Full description of Air Reservations and Ticketing...' },
    { id: 2, image: serviceImg2, title: 'Excursion & Local Sightseeing', description: 'Full description of Excursion & Local Sightseeing...' },
    { id: 3, image: serviceImg3, title: 'Visa and Passport Processing', description: 'Full description of Visa and Passport Processing...' },
    { id: 4, image: serviceImg4, title: 'Hotel Reservations', description: 'Full description of Hotel Reservations...' },
    { id: 5, image: serviceImg5, title: 'Airport Transfers', description: 'Full description of Airport Transfers...' },
    { id: 6, image: serviceImg6, title: 'Education Tours', description: 'Full description of Education Tours...' },
    { id: 7, image: serviceImg7, title: 'Cruise Bookings', description: 'Full description of Cruise Bookings...' },
    { id: 8, image: serviceImg8, title: 'Tour Packages', description: 'Full description of Tour Packages...' },
    { id: 9, image: serviceImg9, title: 'Business Tours', description: 'Full description of Business Tours...' },
];

const ServiceDetails = () => {
    const { id } = useParams();
    const service = serviceData.find((service) => service.id === parseInt(id));

    if (!service) {
        return <Typography variant="h6" component="div">Service not found</Typography>;
    }

    return (
        <Box sx={{ py: 5, backgroundColor: 'background.default' }}>
            <Container sx={{ py: 5 }}>
                <Box sx={{ textAlign: 'center', mb: 5, maxWidth: 900, mx: 'auto' }}>
                    <Typography variant="h5" component="div" color="primary" gutterBottom>
                        {service.title}
                    </Typography>
                    <Box 
                        component="img" 
                        src={service.image} 
                        alt={service.title} 
                        sx={{ 
                            width: '100%', 
                            maxHeight: 400, 
                            objectFit: 'cover', 
                            mb: 4, 
                            borderRadius: 2, 
                            boxShadow: 3 
                        }} 
                    />
                    <Typography variant="body1" color="text.secondary">
                        {service.description}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceDetails;
