# YONO


```
YONO/
├── routes/
│   ├── users.js             (Handles user registration)
│   ├── auth.js              (Handles authentication and protected routes)
│   ├── projects.js          (Handles CRUD operations for projects)
│   ├── uploads.js           (Handles file uploads)
├── index.js                 (Main server file)
├── uploads/                 (Folder for uploaded files)
├── public/                  (Static files for frontend)
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── node_modules/
├── package.json
├── package-lock.json

```

Functionality:

- User Registration (users.js):
    - Provides an endpoint (/register) for user registration.
    - Hashes the user's password using bcrypt before storing it.
    - Stores user data using node-persist, an in-memory storage mechanism.

- User Login and Authentication (auth.js):
    - Provides an endpoint (/login) for user login.
    - Compares the hashed password with the stored hashed password.
    - Generates a JSON Web Token (JWT) upon successful login.
    - Protects a route (/protected) that requires a valid JWT for access.
    - Middleware function (authenticateToken) verifies the JWT and grants access.

- Main Server (index.js):
    - Initializes the Express server.
    - Imports user and authentication routes from the routes folder.
    - Listens on port 3000.

-Static Files (public/):
    - Contains frontend files for the landing page (HTML, CSS, and JavaScript).

- File Uploads (uploads/):
    - Temporary folder to store uploaded files.

---
This project demonstrates user registration, login, and token-based authentication using JSON Web Tokens (JWT). User data is temporarily stored using node-persist. Remember, while this example provides a basic understanding, real-world applications require additional considerations such as error handling, security enhancements, database integration, and a more robust file storage solution.


Apologies for the oversight. You're right; I missed explaining the project-related routes and the uploads route. Here's the addition to the functionality description:

Project and File Upload Functionality:

Project Routes (routes/projects.js):

Handles CRUD (Create, Read, Update, Delete) operations for project entities.
Provides endpoints for creating projects, retrieving all projects, updating projects, and deleting projects.
Stores project data temporarily in an in-memory array (should be replaced with a database in production).
File Upload Routes (routes/uploads.js):

Handles file uploads.
Uses the multer middleware for handling multipart/form-data.
Stores uploaded files temporarily in the uploads/ folder (should be managed properly for production).

Project Routes (projects.js):

Provides endpoints for creating, retrieving, updating, and deleting projects.
Temporarily stores project data in an in-memory array (to be replaced with a database).
File Upload Routes (uploads.js):

Provides an endpoint for handling file uploads.
Uses multer middleware to process uploaded files.
Temporarily stores uploaded files in the uploads/ folder (temporary solution).
The project now encompasses user registration, login, and token-based authentication, along with project CRUD operations and file upload functionality. Please keep in mind that this is a simplified example, and in a real-world scenario, you would need to implement proper error handling, data validation, security measures, and replace the temporary storage solutions with production-grade alternatives.

