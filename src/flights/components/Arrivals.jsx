import React, { useEffect } from 'react';
import moment from "moment";

import { connect } from 'react-redux';
import { filteredFlightArr } from '../flights.selectors';
import * as flightsActions from "../flights.actions";

import { statusConvert } from './statusConvert';

const Arrivals = ({ flightsListAr, getFlightsList }) => {

  useEffect(() => {
    getFlightsList();
  }, []);


  return (
    <div className="flights__content">
      {/* <h1>Arrivals</h1> */}
      {flightsListAr.length === 0
        ? <span>No flights</span>
        : <ul className="flights-list">
          <div className="headers">
            <div className="headers_info">Terminal</div>
            <div className="headers_info">Local time</div>
            <div className="headers_info">Destination</div>
            <div className="headers_info">Status</div>
            <div className="headers_info">Airline</div>
            <div className="headers_info">Flight</div>
          </div>
          {flightsListAr.map(flight => (


            <div key={flight.ID} className="flight-list__commoninfo">
              <div className="info">{flight.term}</div>
              <div className="info">{`${moment(`${flight.timeToStand}`).format('HH:mm')}`}</div>
              <div className="info">{flight['airportFromID.city_en']}</div>
              <div className="info">{statusConvert(flight.status, moment(flight.timeLandFact).format('HH:mm'))}</div>
              <div className='logo_avia'>
                <img src={`${flight.airline.en.logoSmallName}`} alt="" />
              </div>
              <div className="info">{flight.airline.en.name}</div>
              <div className="info">{flight.codeShareData[0].codeShare}</div>
            </div>
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
