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


  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="filter">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={filteredTextFlight}
          onChange={e => setName(e.target.value)}
        />
        <Link to={`${direction}?found=${filteredTextFlight}`}>
          <button
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