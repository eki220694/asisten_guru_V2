// src/config/api.js
// Ganti 'your-vercel-url' dengan URL yang diberikan Vercel setelah deploy
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? (import.meta.env.VITE_API_URL || 'https://your-vercel-url.vercel.app/api')
  : 'http://localhost:5000/api';

export default API_BASE_URL;