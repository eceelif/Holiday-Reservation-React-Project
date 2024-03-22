import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Reservation from "./components/Reservationx";
import HomePage from "./components/HomePage/HomePage";
import WeatherComponent from "./components/WeatherData";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/weather" element={<WeatherComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
