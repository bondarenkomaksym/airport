import {
  FLIGHTS_LIST_RECIEVED,
  FILTER_FLIGHTS
} from './flights.actions';

const initialState = {
  flightsListDep: [],
  flightsListAr: [],
  filteredTextFlight: '',
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flightsListDep: action.payload.flightsList.body.departure,
        flightsListAr: action.payload.flightsList.body.arrival,
      }
    case FILTER_FLIGHTS:
      return {
        ...state,
        filteredTextFlight: action.payload.textFromInput
      }
    default:
      return state;
  }
}

export default flightReducer;