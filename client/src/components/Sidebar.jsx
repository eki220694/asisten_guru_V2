/* src/components/Sidebar.jsx */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Generator Soal', path: '/questions' },
    { name: 'Penilaian Ujian', path: '/assessment' },
    { name: 'Bank Materi', path: '/materials' },
    { name: 'Agenda KBM', path: '/schedule' },
    { name: 'Bantuan', path: '/help' },
  ];

  return (
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
  );
};

export default Sidebar;