import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { saveToLocalStorage } from "../LocalStorageHelper";
import UserInformationForm from "./userInformationForm";
import Room from "./Rooms";
import PriceCalculator from "./PriceCalculator";
import HomePageHeader from "./HomePage/HomePageHeader";

function ReservationForm({ hotelInfo }) {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const [selectedRoom, setSelectedRoom] = useState("Standard");

  const onSubmit = (data) => {
    // Yerel depolama kullanarak bilgileri kaydet
    saveToLocalStorage("reservationInfo", {
      day: data.day,
      adult: data.adult,
      children: data.children,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      isChecked: data.isChecked,
      selectedRoom: selectedRoom,
    });

    // Yönlendirme işlemi
    navigate(`/hotel/${hotelInfo.id}/reservation/success`); // "/success" sayfasına yönlendir
  };

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  return (
    <div>
      <HomePageHeader />
      <h3>Otel adı: {hotelInfo.hotelName}</h3>{" "}
      {/* Artık otel adı gösterilebilir */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form içeriği buraya gelecek */}
        <label>
          gün sayısı:{" "}
          <input
            type="number"
            {...register("day")}
            defaultValue={0}
            onChange={() => {}}
          />
        </label>
        <label>
          yetişkin sayısı:{" "}
          <input
            type="number"
            {...register("adult")}
            defaultValue={0}
            onChange={() => {}}
          />
        </label>
        <label>
          Çocuk sayısı:{" "}
          <input
            type="number"
            {...register("children")}
            defaultValue={0}
            onChange={() => {}}
          />
        </label>
        <Room selectedRoom={selectedRoom} onSelectRoom={handleRoomChange} />
        <PriceCalculator day={0} roomType={selectedRoom} />
        <UserInformationForm register={register} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
