import React, { useState, useEffect } from "react";

function PriceCalculator({ day }) {
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [day, price]);

  const HandlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  const calculateTotalPrice = () => {
    setTotalPrice(day * price);
  };

  return (
    <div>
      <input
        type="text"
        value={price}
        onChange={HandlePriceChange}
        placeholder="Toplam tutar"
      />
      <button onClick={calculateTotalPrice}>toplam tutar: {totalPrice}</button>
    </div>
  );
}

export default PriceCalculator;
