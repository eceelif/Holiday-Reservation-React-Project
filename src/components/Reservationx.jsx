import React, { useState } from "react";
import PriceCalculator from "./PriceCalculator";

function Reservation() {
  const [day, setCount] = useState(0);

  const increase = () => {
    setCount(day + 1);
  };

  const decrease = () => {
    setCount(day - 1);
  };
  return (
    <>
      <form>
        <p>gün sayısı: {day}</p>
        <button onClick={decrease}> azalt</button>
        <button onClick={increase}> artır</button>
        <PriceCalculator day={day} />
        <div className="row">
          <div className="col">
            Name:
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            Last name:
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
      </form>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
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
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Reservation;
