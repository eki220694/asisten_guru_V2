/* src/components/Navbar.jsx */
import React from 'react';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Redirect ke halaman login setelah logout
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <h2>Asisten Guru V2</h2>
      <div>
        {user ? (
          <div className="user-info">
            <span>Halo, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => window.location.href = '/login'}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;