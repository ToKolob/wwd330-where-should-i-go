import { renderOne } from './renderOneCountry.js'

export function renderRandom() {

  const countries = JSON.parse(localStorage.getItem('countries01')) || [];
  if (countries.length === 0) {
    main.innerHTML = '<p>No countries available.</p>';
    return;
  }  

  const randomCountry = countries[Math.floor(Math.random() * countries.length)];

  renderOne(randomCountry);
}