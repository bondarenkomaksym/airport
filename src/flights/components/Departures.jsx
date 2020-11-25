import Flights from './Flights';

import { connect } from 'react-redux';
import { filteredFlightDep } from '../flights.selectors';
import * as flightsActions from "../flights.actions";


const mapState = state => {
  return {
    flightsList: filteredFlightDep(state),
  }
}

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
}


export default connect(mapState, mapDispatch)(Flights);
