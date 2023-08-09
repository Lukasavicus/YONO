/** ***************************************************************************
 * YONO - You Only Need Once                                                  *
 * -------------------------------------------------------------------------- *
 * lukasavicus at gmail dot com                                               *
 * 08 aug 2023                                                                *
 *************************************************************************** */

// === IMPORTS ================================================================
const express = require('express');
const bodyParser = require('body-parser');
const persist = require('node-persist'); // Import node-persist

// === ROUTES =================================================================
const projectRoutes = require('./routes/projects');
const uploadRoutes = require('./routes/uploads');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// const path = require('path'); // TODO: check

const app = express();
const port = 3000;

// === PERSISTENCE ============================================================
// Initialize node-persist
// await persist.initSync();
await persist.init();

// Load existing projects from storage
const projects = persist.getItemSync('projects') || [];

app.use(bodyParser.json());

// Use the project routes
app.use('/projects', projectRoutes);
app.use('/upload', uploadRoutes);
app.use('/users', userRoutes); // User-related routes
app.use('/auth', authRoutes);   // Authentication-related routes

// Serve static files from the "public" directory (e.g., CSS and client-side JS)
app.use(express.static('public'));

// Set up a middleware for handling 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

// === START THE SERVER =======================================================
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
