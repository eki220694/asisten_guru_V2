// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/questions', require('./routes/questionRoutes'));
app.use('/api/assessments', require('./routes/assessmentRoutes'));
app.use('/api/materials', require('./routes/materialRoutes'));
app.use('/api/schedules', require('./routes/scheduleRoutes'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'asisten_guru V2 API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});