import React, { useState, useEffect } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Function to generate random distance
  const generateRandomDistance = () => Math.floor(Math.random() * 100) + 1;

  // Initial users data with additional fields
  const initialUsers = [
    { id: 1, name: 'John Cena', email: 'john@example.com', distance: generateRandomDistance() },
    { id: 2, name: 'Cr7', email: 'cr7@example.com', distance: generateRandomDistance() },
    { id: 3, name: 'Paramesh', email: 'paramesh@gmail.com', distance: generateRandomDistance() },
    { id: 4, name: 'Alice Smith', email: 'alice@example.com', distance: generateRandomDistance() },
    { id: 5, name: 'Bob Johnson', email: 'bob@example.com', distance: generateRandomDistance() },
    { id: 6, name: 'Ella Davis', email: 'ella@example.com', distance: generateRandomDistance() },
    { id: 7, name: 'Mike Brown', email: 'mike@example.com', distance: generateRandomDistance() },
    { id: 8, name: 'Sophie Wilson', email: 'sophie@example.com', distance: generateRandomDistance() },
    { id: 9, name: 'David Lee', email: 'david@example.com', distance: generateRandomDistance() },
    { id: 10, name: 'Emma Garcia', email: 'emma@example.com', distance: generateRandomDistance() },
    { id: 11, name: 'Lucas Martinez', email: 'lucas@example.com', distance: generateRandomDistance() },
    { id: 12, name: 'Olivia Rodriguez', email: 'olivia@example.com', distance: generateRandomDistance() },
    { id: 13, name: 'Liam Hernandez', email: 'liam@example.com', distance: generateRandomDistance() },
    { id: 14, name: 'Isabella Lopez', email: 'isabella@example.com', distance: generateRandomDistance() },
    { id: 15, name: 'Alexander Gonzalez', email: 'alexander@example.com', distance: generateRandomDistance() }
  ];
  
  useEffect(() => {
    // Simulating fetching users data from an API
    setUsers(initialUsers);
  }, []);

  const handleDeleteUser = (userId) => {
    // Filter out the deleted user from the users list
    setUsers(users.filter(user => user.id !== userId));
    console.log('User deleted successfully:', userId);
  };

  const handleEditUser = (userId) => {
    // Find the user to edit
    const userToEdit = users.find(user => user.id === userId);
    setEditingUser(userToEdit);
  };

  const handleSaveEdit = () => {
    // Save the edited user details
    // This is just a simulation, you would need to implement actual saving logic
    setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
    console.log('User details updated:', editingUser);
    setEditingUser(null); // Exit edit mode
  };

  return (
    <div style={{
      backgroundImage: `url('https://images.herzindagi.info/image/2023/Nov/cycle-price.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh', // Adjust height as needed
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '1.5',
      color: '#333'
    }}>
      <div className="container" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '80%', // Adjust width as needed
        maxHeight: '90vh', // Adjust max height as needed
        overflowY: 'auto'
      }}>
        <h1 className="mt-5 mb-4">Manage Users</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Distance Traveled (km)</th>
              <th>Allocated Price (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>{user.distance}</td>
                <td>{user.distance * 8}</td>
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <button onClick={handleSaveEdit} className="btn btn-success mr-2">Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleEditUser(user.id)} className="btn btn-primary mr-2">Edit</button>
                      <button onClick={() => handleDeleteUser(user.id)} className="btn btn-danger">Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
