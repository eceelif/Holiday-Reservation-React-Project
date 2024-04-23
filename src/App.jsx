import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import useGeceModu from "./hooks/GeceModuAc"; // useGeceModu hooks'unu import edin
import HomePage from "./components/HomePage/HomePage";
import HookForm from "./components/HookExampleForm";
import Reservation from "./components/Reservationx";
import WeatherComponent from "./components/WeatherData";
import Hotel from "./components/HomePage/Hotel";
import SuccessPage from "./components/Success";

function App() {
  const [geceModu, toggleGeceModu] = useGeceModu(); // Gece modu hooks'unu kullan

  return (
    <div className={`App ${geceModu ? "gece-modu" : ""}`}>
      <Navbar useGeceModu={geceModu} setGeceModu={toggleGeceModu} />

      <Router>
        <div>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/hook" element={<HookForm />} />
            <Route
              path="/hotel/:hotelId/reservation"
              element={<Reservation hotelInfo={{ name: "Hotel Name" }} />}
            />
            <Route path="/weather" element={<WeatherComponent />} />
            <Route path="/hotel/:hotelId" element={<Hotel />} />
            <Route
              path="/hotel/:hotelId/:reservation/success"
              element={<SuccessPage />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
