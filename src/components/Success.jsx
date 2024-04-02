import React from "react";
import { getFromLocalStorage } from "../LocalStorageHelper";
import PriceCalculator from "./PriceCalculator";

function SuccessPage() {
  // LocalStorage'dan rezervasyon bilgilerini al
  const reservationInfo = getFromLocalStorage("reservationInfo");

  return (
    <div>
      <h1>Success!</h1>
      {/* Rezervasyon bilgilerini burada kullanabilirsiniz */}
      {reservationInfo && (
        <div>
          <p>Gün sayısı: {reservationInfo.day}</p>
          <p>Ad: {reservationInfo.firstName}</p>
          <p>Soyad: {reservationInfo.lastName}</p>
          <p>E-posta: {reservationInfo.email}</p>
          <p>Oda Türü: {reservationInfo.selectedRoom}</p>
          <PriceCalculator
            day={reservationInfo.day}
            roomType={reservationInfo.selectedRoom}
          />
          {/* Diğer rezervasyon bilgileri burada gösterilebilir */}
        </div>
      )}
    </div>
  );
}

export default SuccessPage;
