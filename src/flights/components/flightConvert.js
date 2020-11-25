// import { filteredFlightDep } from '../flights.selectors';
// import * as flightsActions from "../flights.actions";
import { statusConvert } from './statusConvert';
import moment from "moment";

export const flightConvert = ({ flight, direction }) => {
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
    term: flight.term,
    localTime: moment(localTime).format('HH:mm'),
    destination,
    status: statusConvert(flight.status, moment(statusTime).format('HH:mm')),
    airline: {
      logo: flight.airline.en.logoSmallName,
      name: flight.airline.en.name
    },
    flightN: flight.codeShareData[0].codeShare
  }
}