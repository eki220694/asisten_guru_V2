// src/config/api.js
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? (import.meta.env.VITE_API_URL || 'http://localhost:5000/api') // Arahkan ke backend lokal dulu untuk testing
  : 'http://localhost:5000/api';

export default API_BASE_URL;