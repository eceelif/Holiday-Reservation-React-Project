import React, { useState, useEffect } from "react";

function PriceCalculator({ day, roomType }) {
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Örnek bir oda türü fiyatı listesi
  const roomPrices = {
    Standard: 100,
    Deluxe: 150,
    Suite: 200,
  };

  // Oda türü değiştikçe fiyatı güncelle
  useEffect(() => {
    setPrice(roomPrices[roomType] || 0);
  }, [roomType]);

  useEffect(() => {
    calculateTotalPrice();
  }, [day, price]);

  const calculateTotalPrice = () => {
    setTotalPrice(day * price);
  };

  return (
    <div>
      <button onClick={calculateTotalPrice}>
        {day} gün için Toplam Tutar: {totalPrice}
      </button>
    </div>
  );
}

export default PriceCalculator;
