const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for logging requests
app.use((req, res, next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} request to ${req.url}`);
    next();
});

// Homepage route
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development THEORY ASSIGNMENT');
});

// About routeA
app.get('/about', (req, res) => {
    res.send('This is a simple Express.js application for learning.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
