import { useState } from 'react';
import { bike_backend } from 'declarations/bike_backend';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './component/AdminDasboard';// Corrected import name
import ManageUsers from './component/ManageUSers'; // Corrected import name
import ManageProduct from './component/ManageProduct'; // Corrected import name
import Bikes2Ride from './component/Bikes2Ride';
import Home from './component/Home';
import BikeRental from './component/BikeRental';
import Rent from './component/Rent';
import GuidedTours from './component/GuidedTours';
import MyTrips from './component/MyTrips';
import Blog from './component/Blog';
import Chatbot from './component/Chatbot';
import Login from './component/Login';
import Signup from './component/Signup';
import Student from './component/Student';
import BikeService from './component/BikeService';
import ScheduledServicePage from './component/ScheduledServicePage';
import './App.css';
import About from './component/About';
import Billstatement from './component/BillStatement';
import Contacts from './component/Contacts';
import Wallet from './component/Wallet';
import TourDetails from './component/TourDetails';
import BikeSharing from './component/BikeSharing';
import LendBike from './component/LendBike';
import RentBike from './component/RentBike';
import SearchResults from './component/SearchResults';
import Marathon from './component/Marathon'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes2ride" element={<Bikes2Ride />} />
          <Route path="/bike-rental" element={<BikeRental />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/guided-tours" element={<GuidedTours />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student" element={<Student />} />
          <Route path="/bike-service" element={<BikeService />} />
          {/* Add routes for AdminDashboard, ManageUsers, and ManageProducts */}
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/products" element={<ManageProduct />} />
          <Route path="/schedule-service" element={<ScheduledServicePage />} />
          <Route path="/billstatement" element={<Billstatement />} /> 
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/wallet" element={<Wallet />} />
        <Route path="/tour-details" element={<TourDetails />} />
          <Route path="/guided-tours/:id" element={<TourDetails />} />
          <Route path="/guided-tours/:id" element={<TourDetails />} />
          <Route path="/bike-sharing" element={<BikeSharing />} />
          <Route path="/bike-sharing" element={<BikeSharing />} />
          <Route path="/lend-bike" element={<LendBike />} />   
          <Route path="/rent-bike" element={<RentBike />} />    
          <Route path="/search-results" element={<SearchResults />} /> 
          <Route path="/marathon" element={<Marathon />} /> 
   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
