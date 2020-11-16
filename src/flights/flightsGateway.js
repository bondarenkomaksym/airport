const baseUrl = "https://api.iev.aero/api/flights/16-11-2020";


export const fetchFlightsList = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error()
  })