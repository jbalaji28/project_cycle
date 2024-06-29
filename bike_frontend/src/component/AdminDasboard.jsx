import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ManageUSers from './ManageUSers';
import ManageProducts from './ManageProduct';
import CustomNavbar from './CustomNavbar';
import { Container, Box, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemText } from '@mui/material';

const AdminDashboard = () => {
  return (
    <div style={{
      backgroundImage: 'url("https://bikerumor.com/wp-content/uploads/2023/03/propain-barney-16-inch-kids-mtb-800x541.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: 'white',
    }}>
      <CustomNavbar />
      <Container>
        <Box my={4} style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '10px' }}>
          <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                <CardContent>
                  <Typography variant="h5" component="div">Manage Users</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>View and manage user accounts.</Typography>
                  <Button variant="contained" color="primary" component={Link} to="/admin/users">Manage Users</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                <CardContent>
                  <Typography variant="h5" component="div">Manage Products</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>Add, edit, or delete products.</Typography>
                  <Button variant="contained" color="primary" component={Link} to="/admin/products">Manage Products</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                <CardContent>
                  <Typography variant="h5" component="div">Statistics</Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Total Users" secondary="1500" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Active Products" secondary="300" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Pending Orders" secondary="45" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                <CardContent>
                  <Typography variant="h5" component="div">Recent Activities</Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="User Virat updated his profile." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="New product 'Mountain Bike' added." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Order #1234 has been shipped." />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                <CardContent>
                  <Typography variant="h5" component="div">Settings</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>Configure system settings and preferences.</Typography>
                  <Button variant="contained" color="primary">Go to Settings</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Routes>
          <Route path="/admin/users" element={<ManageUSers />} />
          <Route path="/admin/products" element={<ManageProducts />} />
        </Routes>
      </Container>
    </div>
  );
};

export default AdminDashboard;
