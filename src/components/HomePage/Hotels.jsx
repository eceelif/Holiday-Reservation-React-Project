import React from "react";
import { useNavigate } from "react-router-dom";

const HotelList = () => {
  const navigate = useNavigate(); // useNavigate hook'unu kullanın

  // Otel seçildiğinde rezervasyon sayfasına yönlendirme yapacak fonksiyon
  const redirectToReservationPage = () => {
    navigate("/reservation"); // Rezervasyon sayfasının yolunu buraya ekleyin
  };

  // Örnek otel verileri
  const hotels = [
    {
      name: "Hotel A",
      address: "123 Main Street, City, Country",
      phoneNumber: "+1234567890",
    },
    {
      name: "Hotel B",
      address: "456 Elm Street, City, Country",
      phoneNumber: "+0987654321",
    },
    {
      name: "Hotel C",
      address: "789 Oak Street, City, Country",
      phoneNumber: "+1357924680",
    },
  ];

  return (
    <div>
      <h2>Hotel List</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <h3>{hotel.name}</h3>
            <p>Address: {hotel.address}</p>
            <p>Phone: {hotel.phoneNumber}</p>
            <button onClick={redirectToReservationPage}>Select</button>{" "}
            {/* Her butonun onClick olayını buraya ekleyin */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
