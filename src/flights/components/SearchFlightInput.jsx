import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterFlight } from "../flights.actions";
import { filterTextSelector } from "../flights.selectors";

// import qs from 'qs';

const SearchFlightInput = ({ filteredTextFlight, filterFlight }) => {

  return (
    <div className="filter">
      <form className="filter-flight">
        <input
          type="text"
          className="filter-flight__input"
          name='filter-flight__input'
          value={filteredTextFlight}
          onChange={e => {
            filterFlight(e.target.value)
          }}
        />
        <button
          className="filter-flight__btn"
        // onClick={() => filterFlight(e.target.value)}
        >Search</button>
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