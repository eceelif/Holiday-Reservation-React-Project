// HotelList.jsx

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
    <div>
      <h2>Hotel List</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <h3>{hotel.name}</h3>
            <p>Address: {hotel.address}</p>
            <p>Phone: {hotel.phoneNumber}</p>
            <button onClick={() => handleHotelSelect(hotel)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
