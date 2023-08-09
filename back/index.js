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
persist.initSync();
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


// === START THE SERVER =======================================================
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
