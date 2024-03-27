import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Reservation from "../Reservationx";

const Hotel = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate hook'u ekleniyor
  const hotelName = location.state.hotelName;
  const { hotelId } = useParams();

  const handleReservationClick = () => {
    navigate(`/hotel/${hotelId}/reservation`, { state: { hotelName } });
  };

  return (
    <div className="hotel-details">
      <h2>Otel Adı: {hotelName}</h2>
      <p>
        <strong>Otel ID:</strong> {hotelId}
      </p>
      <button onClick={handleReservationClick}>Rezervasyon Yap</button>
    </div>
  );
};

export default Hotel;
