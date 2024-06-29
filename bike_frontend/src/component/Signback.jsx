// Signback.js (or whatever you name your backend file)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // Or any port you prefer

app.use(bodyParser.json());

// Dummy database for storing users
let users = [];

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Please provide username and password' });
  }

  // Check if username already exists
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Save user to database (this is just a dummy example)
  users.push({ username, password });

  // Send success response
  res.status(201).json({ message: 'Signup successful' });
});

app.listen(port, () => {
  console.log(`Signback app listening at http://localhost:${3001}`);
});
