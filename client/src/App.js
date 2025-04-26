import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import FeedbackForm from './pages/FeedbackForm';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<FeedbackForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;