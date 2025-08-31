// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import QuestionGenerator from './pages/QuestionGenerator';
import AssessmentPage from './pages/AssessmentPage';
import MaterialPage from './pages/MaterialPage';
import SchedulePage from './pages/SchedulePage';
import HelpPage from './pages/HelpPage';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
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
    </Router>
  );
}

export default App;