// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import QuestionGenerator from './pages/QuestionGenerator';
import AssessmentPage from './pages/AssessmentPage';
import MaterialPage from './pages/MaterialPage';
import SchedulePage from './pages/SchedulePage';
import HelpPage from './pages/HelpPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const showLayout = !['/login', '/register'].includes(location.pathname);

  return (
    <div className="app">
      {showLayout && <Navbar />}
      <div className={showLayout ? "main-layout" : ""}>
        {showLayout && <Sidebar />}
        <div className={showLayout ? "content" : ""}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<QuestionGenerator />} />
            <Route path="/questions" element={<QuestionGenerator />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/materials" element={<MaterialPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
