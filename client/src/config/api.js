// src/config/api.js
// Ganti 'your-railway-url' dengan URL yang diberikan Railway setelah deploy
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? (import.meta.env.VITE_API_URL || 'https://your-railway-url.up.railway.app/api')
  : 'http://localhost:5000/api';

export default API_BASE_URL;