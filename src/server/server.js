const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
// Import your data.js file
const { data } = require('../data/data')

// Serve your React app's build folder (assuming you've built it)
app.use(express.static('build'));

// Define your API endpoint to serve data
app.get('/api/data', (req, res) => {
    res.json(data);

  // Return the data as JSON
  res.json(data);
});

// Start the server on a specified port (e.g., 3001)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
