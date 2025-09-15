// src/utils/api.js
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? (import.meta.env.VITE_API_URL || 'https://asisten-guru-v2.vercel.app/api')
  : 'http://localhost:5000/api';

// Fungsi umum untuk melakukan fetch dengan error handling
export const apiFetch = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Tambahkan token ke header jika tersedia
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const config = {
    ...options,
    headers,
  };
  
  try {
    const response = await fetch(url, config);
    
    // Jika response tidak OK, throw error dengan pesan dari server
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    // Parse JSON response jika content-type adalah JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return response;
  } catch (error) {
    // Re-throw error agar bisa ditangani oleh pemanggil
    throw error;
  }
};

// Fungsi khusus untuk login
export const login = async (email, password) => {
  return await apiFetch('/users/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
};

// Fungsi khusus untuk register
export const register = async (name, email, password) => {
  return await apiFetch('/users/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
};

// Fungsi khusus untuk mendapatkan profile
export const getProfile = async () => {
  return await apiFetch('/users/profile');
};

export default {
  apiFetch,
  login,
  register,
  getProfile,
};