const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

// Temporary storage for registered users (in a real app, use a database)
const users = [];

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user data (in a real app, this should be stored in a database)
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
