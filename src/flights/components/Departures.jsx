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
      {flightsListDep.length === 0
        ? <div className="flights__no-flights">No flights</div>
        : <div className="flights__list">
          <div className="flights__headers">
            <div className="flights__headers-info">
              <div className="flights__headers-info-terminal">Terminal</div>
            </div>
            <div className="flights__headers-info">Local time</div>
            <div className="flights__headers-info">Destination</div>
            <div className="flights__headers-info">Status</div>
            <div className="flights__headers-info">Airline</div>
            <div className="flights__headers-info">Flight</div>
          </div>

          {flightsListDep.map(flight => (

            <div key={flight.ID} className="flights__list-commoninfo">
              <div className="flights__list-infocolumn-terminal">
                <div className="letter">{flight.term}</div>
              </div>
              <div className="flights__list-infocolumn">{`${moment(`${flight.timeDepShedule}`).format('HH:mm')}`}</div>
              <div className="flights__list-infocolumn">{flight['airportToID.city_en']}</div>
              <div className="flights__list-infocolumn">{statusConvert(flight.status, moment(flight.timeTakeofFact).format('HH:mm'))}</div>

              <div className="flights__list-infocolumn">
                <div className='flights__logo_avia'>
                  <img src={`${flight.airline.en.logoSmallName}`} alt="" />
                </div>
                {flight.airline.en.name}
              </div>

              <div className="flights__list-infocolumn">{flight.codeShareData[0].codeShare}</div>
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
