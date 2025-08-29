// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import QuestionGenerator from './pages/QuestionGenerator';
import AssessmentPage from './pages/AssessmentPage';
import MaterialPage from './pages/MaterialPage';
import SchedulePage from './pages/SchedulePage';
import HelpPage from './pages/HelpPage';
import './App.css';

function App() {
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