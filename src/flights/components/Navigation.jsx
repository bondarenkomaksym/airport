import React from 'react';
import classNames from 'classnames';
import { NavLink, useLocation } from "react-router-dom";

import '../styles/nav.scss';

function Navigation() {

  const { search, pathname } = useLocation();
  const direction = pathname.split('/')[1];

  const arrivalBtnClass = classNames('navigation__btn', { 'selected': direction === 'arrivals' })
  const departuresBtnClass = classNames('navigation__btn', { 'selected': direction === 'departures' })

  return (
    <div className="flights__navigation navigation" >
      <NavLink className={departuresBtnClass} to={`/departures${search}`}>
        <div>Departures</div>
      </NavLink>

      <NavLink className={arrivalBtnClass} to={`/arrivals${search}`}>
        <div>Arrivals</div>
      </NavLink>
    </div>
  )
};

export default Navigation;
