import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopicPage from './pages/TopicPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/:topicId" element={<TopicPage />} />
          <Route
            path="/"
            element={<h2>Bienvenido. Selecciona una temporada.</h2>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
