import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import flightReducer from './flights/flights.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  flights: flightReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;