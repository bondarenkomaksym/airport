import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { filterFlight } from "../flights.actions";
import { filterTextSelector } from "../flights.selectors";

import qs from 'qs';
import { Link, useLocation } from 'react-router-dom';

const SearchFlightInput = ({ filterFlight }) => {

  const [filteredTextFlight, setName] = useState('');
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
      <div className="filter__svg-search">
        <svg width="35" height="35" opacity="0.7" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#95989A" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
      </div>


      <form onSubmit={e => e.preventDefault()}>
        <input
          className="filter__input"
          type="text"
          placeholder="Enter flight #"
          value={filteredTextFlight}
          onChange={e => setName(e.target.value)}
        />
        <Link to={`${direction}?found=${filteredTextFlight}`}>
          <button
            className="filter__button"
            type="submit"
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