import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Reservation from "./components/Reservationx";
import HomePage from "./components/HomePage/HomePage";
import WeatherComponent from "./components/WeatherData";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/weather" element={<WeatherComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
