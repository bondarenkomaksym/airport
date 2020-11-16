import React, { useEffect } from 'react';
import moment from "moment";
// import '../styles/dep.scss';

import { connect } from 'react-redux';
import { filteredFlightDep } from '../flights.selectors';
import * as flightsActions from "../flights.actions";

import { statusConvert } from './statusConvert';

const Departures = ({ flightsListDep, getFlightsList }) => {

  useEffect(() => {
    getFlightsList();
  }, []);


  return (
    <div className="flights">
      {/* <h1>Departures</h1> */}
      {flightsListDep.length === 0
        ? <span>No flights</span>
        : <div className="flights__list">
          <div className="flights__headers">
            <div className="headers_info">Terminal</div>
            <div className="headers_info">Local time</div>
            <div className="headers_info">Destination</div>
            <div className="headers_info">Status</div>
            <div className="headers_info">Airline</div>
            <div className="headers_info">Flight</div>
          </div>

          {flightsListDep.map(flight => (

            <div key={flight.ID} className="flights__list-commoninfo">
              <div className="info">{flight.term}</div>
              <div className="info">{`${moment(`${flight.timeDepShedule}`).format('HH:mm')}`}</div>
              <div className="info">{flight['airportToID.city_en']}</div>
              <div className="info">{statusConvert(flight.status, moment(flight.timeTakeofFact).format('HH:mm'))}</div>
              <div className='flights__logo_avia'>
                <img src={`${flight.airline.en.logoSmallName}`} alt="" />
              </div>
              <div className="info">{flight.airline.en.name}</div>
              <div className="info">{flight.codeShareData[0].codeShare}</div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

const mapState = state => {
  return {
    flightsListDep: filteredFlightDep(state),
  }
}

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
}


export default connect(mapState, mapDispatch)(Departures);
