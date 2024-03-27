import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PriceCalculator from "./PriceCalculator";
import Room from "./Rooms";
import HomePageHeader from "./HomePage/HomePageHeader";

function Reservation({ hotelInfo }) {
  const navigate = useNavigate();

  const [day, setDay] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Standard");

  const increase = () => {
    setDay(day + 1);
  };

  const decrease = () => {
    setDay(day - 1 >= 0 ? day - 1 : 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formun gönderilme işlemleri burada gerçekleştirilebilir
    // Örneğin, bir API'ye veri göndermek veya başka bir işlem yapmak
    // Ardından formu temizleyebilirsiniz
    setDay(0);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setIsChecked(false);
    // Yönlendirme işlemi
    navigate(`/hotel/${hotelInfo.id}//${hotelInfo.name}/reservation/success`); // "/success" sayfasına yönlendir
  };

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  return (
    <div>
      <HomePageHeader />
      <h3>{hotelInfo.name}</h3>

      <form onSubmit={handleSubmit}>
        <label>
          gün sayısı: {day}
          <button type="button" onClick={decrease}>
            azalt
          </button>
          <button type="button" onClick={increase}>
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
