const express = require('express');
const bodyParser = require('body-parser');

const multer = require('multer');
const path = require('path');

const projectRoutes = require('./routes/projects'); // Import the project routes module

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Use the project routes
app.use('/projects', projectRoutes);

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: 'uploads',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Serve static files from the "public" directory (e.g., CSS and client-side JS)
app.use(express.static('public'));

// Set up a route to handle file uploads
app.post('/upload', upload.single('photo'), (req, res) => {
    console.log('Somebody reached me')
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send('File uploaded successfully.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
*/

const express = require('express');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projects');
const uploadRoutes = require('./routes/uploads'); // Import the file upload routes module

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/projects', projectRoutes);
app.use('/upload', uploadRoutes); // Use the file upload routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
