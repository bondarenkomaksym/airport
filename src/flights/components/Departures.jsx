import { Link } from "react-router-dom";
import React from 'react';

const Departures = () => {


  return (
    <div className="page__content">
      <h1>Departures</h1>
      <p>We are here</p>
      <Link to="/arrivals">Go to Arrivals</Link>
    </div>
  )
}

export default Departures;

// export default connect(mapState, mapDispatch)(Departures);