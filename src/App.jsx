import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Home from './flights/components/Home';
import Departures from './flights/components/Departures';
import Arrivals from './flights/components/Arrivals';
import SearchFlightInput from './flights/components/SearchFlightInput';
import Navigation from './flights/components/Navigation';

// import "./index.scss";

function App() {

  return (
    <div className="app">
      <div className="app__header_title">SEARCH FLIGHT</div>
      <Provider store={store}>
        <BrowserRouter>
          <SearchFlightInput />
          <Navigation />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/departures'><Departures /></Route>
            <Route path='/arrivals'><Arrivals /></Route>
            <Route path='/*' component={() => <h1>Error 404</h1>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  )
};

export default App;