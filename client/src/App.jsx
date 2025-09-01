// src/App.jsx
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import QuestionGenerator from './pages/QuestionGenerator';
import AssessmentPage from './pages/AssessmentPage';
import MaterialPage from './pages/MaterialPage';
import SchedulePage from './pages/SchedulePage';
import HelpPage from './pages/HelpPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LoadingScreen from './components/LoadingScreen';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

// Create context for sidebar state
export const SidebarContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Toggle mobile sidebar
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Close mobile sidebar
  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  // Close sidebar when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMobileSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <SidebarContext.Provider value={{ isMobileSidebarOpen, setIsMobileSidebarOpen, toggleMobileSidebar, closeMobileSidebar }}>
        <Router>
          <div className="app">
            <Navbar />
            <div className="main-layout">
              <Sidebar />
              <div className="content">
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/" element={
                    <ProtectedRoute>
                      <QuestionGenerator />
                    </ProtectedRoute>
                  } />
                  <Route path="/questions" element={
                    <ProtectedRoute>
                      <QuestionGenerator />
                    </ProtectedRoute>
                  } />
                  <Route path="/assessment" element={
                    <ProtectedRoute>
                      <AssessmentPage />
                    </ProtectedRoute>
                  } />
                  <Route path="/materials" element={
                    <ProtectedRoute>
                      <MaterialPage />
                    </ProtectedRoute>
                  } />
                  <Route path="/schedule" element={
                    <ProtectedRoute>
                      <SchedulePage />
                    </ProtectedRoute>
                  } />
                  <Route path="/help" element={
                    <ProtectedRoute>
                      <HelpPage />
                    </ProtectedRoute>
                  } />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </SidebarContext.Provider>
    </AuthProvider>
  );
}

export default App;