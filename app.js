
require('dotenv').config();
const express = require('express');
const path = require('path');

// Routes
const indexRouter = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Check if API key exists
if (!process.env.NASA_API_KEY) {
    console.error('ERROR: NASA_API_KEY not found in environment variables');
    console.error('Please create a .env file with NASA_API_KEY=<YOUR API KEY HERE>');
    process.exit(1);
}

// API Key print with truncating to verify correct key is being used
// Gonna be using this method to check other sensitive data like users for databases
console.log('NASA API KEY FOUND: ', process.env.NASA_API_KEY.substring(0,3) + '...' + process.env.NASA_API_KEY.slice(-3));

// Set up EJS template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Directory to Static Serve Files
app.use(express.static(path.join(__dirname, 'public')));


// Only Singular Route and redirect;
app.get('/', indexRouter);
app.get('/refresh', indexRouter);

// Server port console advert I stole from some forum, easier on my eyes
app.listen(PORT, () => {
    console.log(`┌───────────────────────────────────────────┐`);
    console.log(`│ Server running on http://localhost:${PORT}`);
    console.log(`└───────────────────────────────────────────┘`);
});