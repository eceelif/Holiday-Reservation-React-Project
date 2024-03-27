// HomePageHeader.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HomePageHeader.css";

function HomePageHeader() {
  return (
    <div className="title">
      <h1>En güzel tatil planları...</h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePageHeader;
