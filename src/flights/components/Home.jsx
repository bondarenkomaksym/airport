// import React from "react";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { flightsListSelector } from '../flights.selectors';
import * as flightsActions from "../flights.actions";


function Home({ flightsList, getFlightsList }) {

  useEffect(() => {
    getFlightsList();
  }, []);

  // let { body } = flightsList.body;
  //.departure[0].codeShareData[0].codeShare

  return (
    <div className="page__content">
      <h1>🏠</h1>
      {/* <ul className="cities-list">
        {flightsList.map(data => (
          <li key={data.id} className="city">
            <span className="city__name">{data.name}</span>
          </li>
        ))}
      </ul> */}
      {console.log(flightsList.body)}
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