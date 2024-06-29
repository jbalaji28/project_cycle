import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, Grid, Button, Box } from '@mui/material';
import { toursData } from './toursData'; // Adjust the path if necessary
import Footer from './Footer';
import './TourDetails.css';

const TourDetails = () => {
  const { id } = useParams();
  const tour = toursData.find((tour) => tour.id === parseInt(id));

  if (!tour) {
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Tour Not Found
        </Typography>
        <Typography variant="body1" align="center">
          Sorry, the tour you are looking for does not exist.
        </Typography>
      </Container>
    );
  }

  return (
    <div className="tour-details-container">
      <Container>
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            {tour.route}
          </Typography>
          <Card>
            <CardMedia
              component="img"
              alt={tour.route}
              height="400"
              image={tour.image}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {tour.route}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {tour.description}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Duration</Typography>
                  <Typography variant="body1">{tour.duration}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Price</Typography>
                  <Typography variant="body1">{tour.price}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Start Date</Typography>
                  <Typography variant="body1">{tour.startDate}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">End Date</Typography>
                  <Typography variant="body1">{tour.endDate}</Typography>
                </Grid>
              </Grid>
              <Box mt={4}>
                <Button variant="contained" color="primary">
                  Book Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default TourDetails;
