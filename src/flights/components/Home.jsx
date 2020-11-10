// import React from "react";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { flightsListSelector } from '../flights.selectors';
import * as flightsActions from "../flights.actions";


function Home({ flightsList, getFlightsList }) {

  if (!flightsList) {
    return null
  }

  useEffect(() => {
    getFlightsList();
  }, []);

  // .body.departure[0].codeShareData[0].codeShare

  let nameFlight = flightsList.body.departure[0].codeShareData[0].codeShare;

  return (
    <div className="page__content">
      <h1>🏠</h1>

      {/* <ul className="flights-list">
        {flightsList.map(flight => (
          <li className="flight">
            <span className="flight__name">{flight}</span>
          </li>
        ))}
      </ul> */}

      <Link to="/departures">SEARCH</Link>
    </div>
  )
};

const mapState = state => {
  return {
    flightsList: flightsListSelector(state),
  }
}

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
}


// export default Home;

export default connect(mapState, mapDispatch)(Home);