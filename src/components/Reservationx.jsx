import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PriceCalculator from "./PriceCalculator";
import Room from "./Rooms";
import HomePageHeader from "./HomePage/HomePageHeader";
import { saveToLocalStorage } from "../LocalStorageHelper";

function Reservation(props) {
  const { hotelInfo } = props;
  console.log("Hotel Name:", hotelInfo.hotelName); // Doğru otel adını gösterdiğinden emin olun

  const navigate = useNavigate();

  const [day, setDay] = useState(0);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Standard");

  const increase = () => {
    setDay(day + 1);
    setChildren(children + 1);
  };
  const AdalutIncrease = () => {
    setAdult(adult + 1);
  };
  const ChildrenIncrease = () => {
    setChildren(children + 1);
  };
  const decrease = () => {
    setDay(day - 1 >= 0 ? day - 1 : 0);
  };
  const AdultDecrease = () => {
    setAdult(adult - 1 >= 0 ? adult - 1 : 0);
  };
  const ChildrenDecrease = () => {
    setChildren(children - 1 >= 0 ? children - 1 : 0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Yerel depolama kullanarak bilgileri kaydet
    saveToLocalStorage("reservationInfo", {
      day,
      adult,
      children,
      firstName,
      lastName,
      email,
      password,
      isChecked,
      selectedRoom,
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
      <form onSubmit={handleSubmit}>
        {/* Form içeriği buraya gelecek */}
        <label>
          gün sayısı: {day}
          <button type="button" onClick={decrease}>
            azalt
          </button>
          <button type="button" onClick={increase}>
            artır
          </button>
        </label>
        <label>
          yetişkin sayısı: {adult}
          <button type="button" onClick={AdultDecrease}>
            azalt
          </button>
          <button type="button" onClick={AdalutIncrease}>
            artır
          </button>
        </label>
        <label>
          Çocuk sayısı:{children}
          <button type="button" onClick={ChildrenDecrease}>
            azalt
          </button>
          <button type="button" onClick={ChildrenIncrease}>
            artır
          </button>
        </label>
        <Room selectedRoom={selectedRoom} onSelectRoom={handleRoomChange} />
        <PriceCalculator day={day} roomType={selectedRoom} />

        <div className="row">
          <div className="col">
            Name:
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col">
            Last name:
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Reservation;
