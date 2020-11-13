import React, { useEffect } from 'react';
import moment from "moment";

import { connect } from 'react-redux';
import { flightsListSelectorDep } from '../flights.selectors';
import * as flightsActions from "../flights.actions";


function Home({ flightsListDep, getFlightsList }) {

  // useEffect(() => {
  //   getFlightsList();
  // }, []);


  return (
    <div className="flights__content">
      <h1>Start page</h1>

      {/* <ul className="flights-list">
        {flightsListDep.map(flight => (

          <li key={flight.ID} className="flight-list__commoninfo">
            <span className="info">{flight.term}</span>
            <span className="info">{`${moment(`${flight.timeDepShedule}`).format('HH:mm')}`}</span>
            <span className="info">{`Departed at ${moment(`${flight.actual}`).format('HH:mm')}`}</span>
            <img className='logo_avia' src={`${flight.airline.en.logoSmallName}`} alt="" />
            <span className="info">{flight['airportToID.city']}</span>
            <span className="info">{flight.codeShareData[0].codeShare}</span>

          </li>
        ))}
      </ul> */}
    </div>
  )
};

// const mapState = state => {
//   return {
//     flightsListDep: flightsListSelectorDep(state),
//   }
// }

// const mapDispatch = {
//   getFlightsList: flightsActions.getFlightsList,
// }


export default Home;

// export default connect(mapState, mapDispatch)(Home);