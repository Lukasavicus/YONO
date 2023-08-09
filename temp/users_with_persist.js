const express = require('express');
const bcrypt = require('bcrypt');
const persist = require('node-persist');

const router = express.Router();

// Initialize node-persist
persist.initSync();

// Define the storage key for users
const usersKey = 'users';

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Get stored users (if any)
  const storedUsers = persist.getItemSync(usersKey) || [];

  // Store user data
  storedUsers.push({ username, password: hashedPassword });
  persist.setItemSync(usersKey, storedUsers);

  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
