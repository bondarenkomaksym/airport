import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

// import { flightsListSelector } from '../flights.selectors';
// import * as flightsActions from "../flights.actions";

const Departures = () => {

  // useEffect(() => {
  //   getFlightsList();
  // }, []);

  return (
    <div className="page__content">
      <h1>Departures</h1>
      <p>We are here</p>
      {console.log(flightsList)}
      <Link to="/arrivals">Go to Arrivals</Link>
    </div>
  )
}

// const mapState = state => {
//   return {
//     flightsList: flightsListSelector(state),
//   }
// }

// const mapDispatch = {
//   getFlightsList: flightsActions.getFlightsList,
// }

export default Departures;

// export default connect(mapState, mapDispatch)(Departures);