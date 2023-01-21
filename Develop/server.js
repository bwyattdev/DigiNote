//Dependencies for express and the built in path functionality
const express = require('express');
const path = require('path');

const PORT = process.env.port || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serves static files in public folder
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Notify in console of port app is listening on.
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
