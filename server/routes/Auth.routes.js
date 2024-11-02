const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Import the User model
// Placeholder for signup route
router.post('/signup', async (req, res) => {
  req.body.email = req.body.email.toLowerCase();
  req.body.password = req.body.password.toLowerCase();
  try {
    const user = await User.create(req.body);  // Create the user
    res.status(201).send(user);  // Respond with the created user
} catch (err) {
    res.status(400).send(err);  // Handle errors
}
});

// Placeholder for login route
router.post('/login', (req, res) => {
  res.send('Login endpoint');
});

module.exports = router;