import React from 'react';
import { NavLink } from "react-router-dom";


function Navigation() {

  return (
    <ul className="flights-list" style={{ display: 'flex' }}>
      <NavLink to="/departures">
        <li style={{ marginRight: 20, listStyle: 'none' }}>Departures</li>
      </NavLink>

      <NavLink to="/arrivals">
        <li style={{ marginRight: 20, listStyle: 'none' }}>Arrivals</li>
      </NavLink>
    </ul>
  )
};

export default Navigation;
