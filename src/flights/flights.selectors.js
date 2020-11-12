import { createSelector } from 'reselect';

export const flightsListSelectorDep = state =>
  state.flights.flightsListDep;

export const flightsListSelectorAr = state =>
  state.flights.flightsListAr;


export const filterTextSelector = state => {
  return state.flights.filteredTextFlight;
};

export const filteredFlightDep = createSelector(
  [flightsListSelectorDep, filterTextSelector],
  (flightsListDep, filteredTextFlight) => {
    return flightsListDep.filter(flight => {
      return flight.codeShareData[0].codeShare.toLowerCase().includes(filteredTextFlight.toLowerCase());
    });
  },
);

export const filteredFlightArr = createSelector(
  [flightsListSelectorAr, filterTextSelector],
  (flightsListArr, filteredTextFlight) => {
    return flightsListArr.filter(flight => {
      return flight.codeShareData[0].codeShare.toLowerCase().includes(filteredTextFlight.toLowerCase());
    });
  },
);