import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterFlight } from "../flights.actions";
import { filterTextSelector } from "../flights.selectors";

import qs from 'qs';
import { Link, useLocation } from 'react-router-dom';

const SearchFlightInput = ({ filteredTextFlight, filterFlight }) => {

  const { search, pathname } = useLocation();

  const direction = pathname === '/' ? '/departures' : pathname;

  const soughtFlight = qs.parse(search, { ignoreQueryPrefix: true }).found;



  useEffect(() => {
    if (soughtFlight) {
      filterFlight(soughtFlight)
    }
  }, [search])

  return (
    <div className="filter">
      <form >
        <input
          type="text"
          defaultValue={filteredTextFlight}
          id="input"
        />

        <Link to={`${direction}?found=${filteredTextFlight}`}>
          <button
            onClick={e => { filterFlight(document.getElementById('input').value) }}
          >Search</button>
        </Link>
      </form>
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