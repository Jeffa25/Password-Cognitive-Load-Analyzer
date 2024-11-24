const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const analyzerRoutes = require('./routes/analyzer');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/analyze', analyzerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
