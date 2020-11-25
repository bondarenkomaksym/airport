import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moment from "moment";
import { statusConvert } from './statusConvert';


const Flights = ({ flightsList, getFlightsList }) => {

  useEffect(() => {
    getFlightsList();
  }, []);

  const { pathname } = useLocation();
  const direction = pathname.split('/')[1];


  let flights = flightsList.map(flight => {
    const localTime = direction === 'departures'
      ? flight.timeDepShedule
      : flight.timeToStand;
    const statusTime = direction === 'departures'
      ? flight.timeTakeofFact
      : flight.timeLandFact;
    const destination = direction === 'departures'
      ? flight['airportToID.city_en']
      : flight['airportFromID.city_en'];

    return {
      id: flight.ID,
      terminal: flight.term,
      localTime: moment(localTime).format('HH:mm'),
      destination,
      status: statusConvert(flight.status, moment(statusTime).format('HH:mm')),
      airline: {
        logo: flight.airline.en.logoSmallName,
        name: flight.airline.en.name
      },
      flightNumber: flight.codeShareData[0].codeShare
    }
  });


  return (
    <div className="flights">
      {flights.length === 0
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

          {flights.map(flight =>
            <div key={flight.id} className="flights__list-commoninfo">
              <div className="flights__list-infocolumn-terminal">
                <div className="letter">{flight.terminal}</div>
              </div>
              <div className="flights__list-infocolumn">{flight.localTime}</div>
              <div className="flights__list-infocolumn">{flight.destination}</div>
              <div className="flights__list-infocolumn">{flight.status}</div>

              <div className="flights__list-infocolumn">
                <div className='flights__logo_avia'>
                  <img src={flight.airline.logo} alt="" />
                </div>
                {flight.airline.name}
              </div>
              <div className="flights__list-infocolumn">{flight.flightNumber}</div>
            </div>
          )}
        </div>
      }
    </div>
  )
}


export default Flights;
