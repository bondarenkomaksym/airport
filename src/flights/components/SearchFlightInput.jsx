import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterFlight } from "../flights.actions";
import { filterTextSelector } from "../flights.selectors";

import qs from 'qs';
import { Link, useLocation } from 'react-router-dom';

const SearchFlightInput = ({ filteredTextFlight, filterFlight }) => {

  let { search, pathname } = useLocation();

  const direction = pathname === '/' ? '/departures' : pathname;

  const soughtFlight = qs.parse(search, { ignoreQueryPrefix: true }).found;

  useEffect(() => {
    if (soughtFlight) {
      filterFlight(soughtFlight)
    }
  }, [search])


  return (
    <div className="filter">

      <input
        type="text"
        value={filteredTextFlight}
        onChange={e => { filterFlight(e.target.value) }}
      />

      <Link to={`${direction}?found=${filteredTextFlight}`}>
        <button >Search</button>
      </Link>

    </div>
  )
}

const mapState = state => {
  return {
    filteredTextFlight: filterTextSelector(state)
  }
}

const mapDispatch = {
  filterFlight
}

export default connect(mapState, mapDispatch)(SearchFlightInput);