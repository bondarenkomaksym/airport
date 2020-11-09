import { fetchFlightsList } from './flightsGateway';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';

export const flightsListRecieved = (flightsList) => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    }
  }
}

export const getFlightsList = () => {
  return function (dispatch) {
    fetchFlightsList()
      .then(data => {
        dispatch(flightsListRecieved(data));
      })
  }
}