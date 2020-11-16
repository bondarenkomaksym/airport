import React from 'react';
import { NavLink } from "react-router-dom";

import '../styles/nav.scss';

function Navigation() {

  return (
    <div className="navigation" >
      <NavLink className="navigation__dep" to="/departures">
        <div>Departures</div>
      </NavLink>

      <NavLink className="navigation__ar" to="/arrivals">
        <div>Arrivals</div>
      </NavLink>
    </div>
  )
};

export default Navigation;
