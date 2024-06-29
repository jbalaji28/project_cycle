import React from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';

const RentalRates = () => {
  // Example rental rates data (you can replace this with your actual data)
  const rentalRates = [
    { model: 'Mountain Bike', hourlyRate: '$10', dailyRate: '$40', weeklyRate: '$200' },
    { model: 'Road Bike', hourlyRate: '$15', dailyRate: '$50', weeklyRate: '$250' },
    { model: 'City Bike', hourlyRate: '$8', dailyRate: '$30', weeklyRate: '$150' },
  ];

  return (
    <div>
      <CustomNavbar />
      <div className="container">
        <h1>Rental Rates</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Bike Model</th>
              <th>Hourly Rate</th>
              <th>Daily Rate</th>
              <th>Weekly Rate</th>
            </tr>
          </thead>
          <tbody>
            {rentalRates.map((rate, index) => (
              <tr key={index}>
                <td>{rate.model}</td>
                <td>{rate.hourlyRate}</td>
                <td>{rate.dailyRate}</td>
                <td>{rate.weeklyRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default RentalRates;
