import React from 'react';
import { NavLink } from "react-router-dom";


function Navigation() {

  return (
    <div className="navigation" style={{ display: 'flex' }}>
      <NavLink to="/departures">
        <div style={{ marginRight: 20, listStyle: 'none' }}>Departures</div>
      </NavLink>

      <NavLink to="/arrivals">
        <div style={{ marginRight: 20, listStyle: 'none' }}>Arrivals</div>
      </NavLink>
    </div>
  )
};

export default Navigation;
