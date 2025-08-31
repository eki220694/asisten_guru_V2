// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const prisma = new PrismaClient();

// Middleware
const corsOptions = {
  origin: process.env.CLIENT_URL || ['http://localhost:5173', 'http://localhost:4173', /\.netlify\.app$/, /\.vercel\.app$/],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/questions', require('./routes/questionRoutes'));
app.use('/api/assessments', require('./routes/assessmentRoutes'));
app.use('/api/materials', require('./routes/materialRoutes'));
app.use('/api/schedules', require('./routes/scheduleRoutes'));

// Health check endpoints
app.get('/', (req, res) => {
  res.json({ 
    message: 'asisten_guru V2 API is running',
    version: '2.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    service: 'asisten_guru-api',
    timestamp: new Date().toISOString()
  });
});

// Global error handler
app.use(errorHandler);

// Vercel serverless function export
if (require.main === module) {
  // Running as a standalone server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check available at http://localhost:${PORT}/health`);
  });
} else {
  // Export for Vercel serverless functions
  module.exports = app;
}