const baseUrl = "https://api.iev.aero/api/flights/09-11-2020";


export const fetchFlightsList = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error()
  })