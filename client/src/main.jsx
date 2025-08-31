import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Get the base path from Vite config or default to /app/
const basePath = import.meta.env.BASE_URL || '/app/';

// Ensure the base path ends with a slash
const normalizedBasePath = basePath.endsWith('/') ? basePath : basePath + '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
