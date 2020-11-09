import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Home from './flights/components/Home';
import Departures from './flights/components/Departures';
import Arrivals from './flights/components/Arrivals';


function App() {
  return (
    <div className="page__content">
      <h1>Flights</h1>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/departures'>
              <Departures />
            </Route>
            <Route path='/arrivals'>
              <Arrivals />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>

    </div>
  )
};

export default App;