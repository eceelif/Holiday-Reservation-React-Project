import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hotelName = location.state.hotelName;
  const { hotelId } = useParams();
  const hotelInfo = { id: hotelId, hotelName };

  const handleReservationClick = () => {
    navigate(`/hotel/${hotelId}/reservation`, { state: { hotelInfo } });
  };

  return (
    <div className="p-8">
      <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-3xl font-bold mb-4">Otel Adı: {hotelName}</h2>
        <p className="text-gray-600 mb-2">
          <strong>Otel ID:</strong> {hotelId}
        </p>
        <button
          onClick={handleReservationClick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
        >
          Rezervasyon Yap
        </button>
      </div>
    </div>
  );
};

export default Hotel;
