const axios = require('axios');

// ACTIONS TYPES
export const actionTypes = {
  COUNTRIES: 'COUNTRIES'
};

// STATIC ACTIONS
export const countries = data => {
  return { countries: data, type: actionTypes.COUNTRIES };
};

// ASYNC ACTIONS
export const fetchCountries = () => dispatch => {
  return axios
    .get(`https://restcountries.eu/rest/v2/all`)
    .then(response => {
      dispatch(countries(response.data));
    })
    .catch();
};
