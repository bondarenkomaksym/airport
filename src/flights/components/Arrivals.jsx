import React, { useEffect } from 'react';
import moment from "moment";

import { connect } from 'react-redux';
import { filteredFlightArr } from '../flights.selectors';
import * as flightsActions from "../flights.actions";

const Arrivals = ({ flightsListAr, getFlightsList }) => {

  useEffect(() => {
    getFlightsList();
  }, []);


  return (
    <div className="flights__content">
      <h1>Arrivals</h1>
      {flightsListAr.length === 0
        ? <span>No flights</span>
        : <ul className="flights-list">
          {flightsListAr.map(flight => (

            <li key={flight.ID} className="flight-list__commoninfo">
              <span className="info">{flight.term}</span>
              <span className="info">{`${moment(`${flight.timeArrShedule}`).format('HH:mm')}`}</span>
              <span className="info">{`Arrived at ${moment(`${flight.actual}`).format('HH:mm')}`}</span>
              <img className='logo_avia' src={`${flight.airline.en.logoSmallName}`} alt="" />
              <span className="info">{flight['airportFromID.city']}</span>
              <span className="info">{flight.codeShareData[0].codeShare}</span>
            </li>
          ))}
        </ul>
      }

    </div>
  )
}

const mapState = state => {
  return {
    flightsListAr: filteredFlightArr(state),
  }
}

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
}


export default connect(mapState, mapDispatch)(Arrivals);
