import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Reservation from "./components/Reservationx";
import HomePage from "./components/HomePage/HomePage";
import WeatherComponent from "./components/WeatherData";
import Hotel from "./components/HomePage/Hotel";
import SuccessPage from "./components/Success";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Burada diğer bileşenlerin içeriğini de ekleyebilirsiniz */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/hotel/:hotelId/reservation"
            element={<Reservation hotelInfo={{ name: "Hotel Name" }} />}
          />{" "}
          <Route path="/weather" element={<WeatherComponent />} />
          <Route path="/hotel/:hotelId" element={<Hotel />} />
          <Route
            path="/hotel/:hotelId/:reservation/success"
            element={<SuccessPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
