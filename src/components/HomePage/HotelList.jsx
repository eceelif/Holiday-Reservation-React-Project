import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HotelList = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState(null);

  const redirectToHotelPage = (hotelId, hotelName) => {
    console.log("redirectToHotelPage is called with:", hotelId, hotelName);
    navigate(`/hotel/${hotelId}`, { state: { hotelName } });
  };

  const hotels = [
    {
      id: 1,
      name: "Hotel A",
      address: "123 Main Street, City, Country",
      phoneNumber: "+1234567890",
    },
    {
      id: 2,
      name: "Hotel B",
      address: "456 Elm Street, City, Country",
      phoneNumber: "+0987654321",
    },
    {
      id: 3,
      name: "Hotel C",
      address: "789 Oak Street, City, Country",
      phoneNumber: "+1357924680",
    },
  ];

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
    redirectToHotelPage(hotel.id, hotel.name);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Hotel List</h2>
      <ul>
        {hotels.map((hotel) => (
          <li
            key={hotel.id}
            className="bg-gray-100 rounded-lg shadow-md p-4 mb-4"
          >
            <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
            <p className="text-gray-600 mb-2">Address: {hotel.address}</p>
            <p className="text-gray-600 mb-4">Phone: {hotel.phoneNumber}</p>
            <button
              onClick={() => handleHotelSelect(hotel)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
