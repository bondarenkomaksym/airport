import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterFlight } from "../flights.actions";
import { filterTextSelector } from "../flights.selectors";

import qs from 'qs';
import { Link, useLocation } from 'react-router-dom';

const SearchFlightInput = ({ filteredTextFlight, filterFlight }) => {

  // const { location } = useLocation();
  // // let { pathway } = useParams();

  // useEffect(() => {
  //   console.log("route changed");
  // }, [location])

  return (
    <div className="filter">
      <form className="filter-flight">
        <input
          type="text"
          className="filter-flight__input"
          name='filter-flight__input'
          value={filteredTextFlight}
          onChange={e => { filterFlight(e.target.value) }}
        />
        {/* <Link to={`${pathway}?selected=${filteredTextFlight}`}>
          <button
            className="filter-flight__btn"
          >Search</button>
        </Link> */}
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