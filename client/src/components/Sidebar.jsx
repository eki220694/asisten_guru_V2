/* src/components/Sidebar.jsx */
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from '../App';

const Sidebar = () => {
  const location = useLocation();
  const { isMobileSidebarOpen, setIsMobileSidebarOpen } = useContext(SidebarContext);
  
  const menuItems = [
    { name: 'Generator Soal', path: '/questions' },
    { name: 'Penilaian Ujian', path: '/assessment' },
    { name: 'Bank Materi', path: '/materials' },
    { name: 'Agenda KBM', path: '/schedule' },
    { name: 'Bantuan', path: '/help' },
  ];

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  // Render sidebar yang berbeda untuk mobile dan desktop
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path || (item.path === '/questions' && location.pathname === '/') ? 'active' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile Sidebar (Off-canvas) */}
      <div className={`sidebar-mobile ${isMobileSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMobileSidebar}>
          &times;
        </button>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path || (item.path === '/questions' && location.pathname === '/') ? 'active' : ''}
                onClick={closeMobileSidebar}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Overlay for mobile */}
      {isMobileSidebarOpen && <div className="overlay open" onClick={closeMobileSidebar}></div>}
    </>
  );
};

export default Sidebar;