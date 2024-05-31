import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboardComponent';
import Login from './components/loginComponent';
import Register from './components/registerComponent';
import BusTrack from './components/busTrackComponent';
import RoutesComponent from './components/routesComponent';
import AboutUs from './components/aboutUsComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/busTrack" element={<BusTrack />} />
          <Route path='/busRoutes' element={<RoutesComponent />} />
          <Route path='/aboutUs' element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
