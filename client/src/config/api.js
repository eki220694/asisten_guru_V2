// src/config/api.js
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? (import.meta.env.VITE_API_URL || 'https://asisten-guru-server.up.railway.app/api')
  : 'http://localhost:5000/api';

export default API_BASE_URL;