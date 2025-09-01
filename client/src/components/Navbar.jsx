/* src/components/Navbar.jsx */
import React, { useContext } from 'react';
import { useAuth } from './AuthContext';
import { SidebarContext } from '../App';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { toggleMobileSidebar } = useContext(SidebarContext);

  const handleLogout = () => {
    logout();
    // Redirect ke halaman login setelah logout
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMobileSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
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