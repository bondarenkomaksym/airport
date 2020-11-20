import moment from 'moment';

const today = moment().format('DD-MM-YYYY');

const baseUrl = `https://api.iev.aero/api/flights/${today}`;


export const fetchFlightsList = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error()
  })