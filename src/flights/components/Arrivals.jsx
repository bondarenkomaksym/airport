import React from "react";
import { Link } from "react-router-dom";

function Arrivals() {
  return (
    <div className="page__content">
      <h1>Arrivals</h1>
      <p>We are here</p>
      <Link to="/departures">Go to Departures</Link>
    </div>
  )
}

export default Arrivals;