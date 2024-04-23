import React from "react";
import { Link } from "react-router-dom";

function HomePageHeader() {
  return (
    <div className="bg-blue-500 py-4">
      <div className="container mx-auto">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">En güzel tatil planları...</h1>
          <ul className="mt-4 flex justify-center space-x-4">
            <li>
              <Link to="/home" className="text-white hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/reservation" className="text-white hover:underline">
                Reservation
              </Link>
            </li>
            <li>
              <Link to="/weather" className="text-white hover:underline">
                Weather
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;
