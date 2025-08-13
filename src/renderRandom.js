import { fetchImages } from './images.js'
import { renderOne } from './oneCountry.js'

export function renderRandom() {
  const main = document.querySelector('#main');
  if (!main) {
    console.error('Main element not found');
    return;
  }

  const countries = JSON.parse(localStorage.getItem('countries')) || [];
  if (countries.length === 0) {
    main.innerHTML = '<p>No countries available.</p>';
    return;
  }  

  const randomCountry = countries[Math.floor(Math.random() * countries.length)];

  fetchImages(randomCountry.name.common).then((landscapeImage) => {
    console.log('Image fetched for:', randomCountry.name.common);

    main.innerHTML = `
      <div class="randomCountry">
        <div class="countryDetails">
          <h2>${randomCountry.name.common}</h2>
          <p>Capital: ${randomCountry.capital ? randomCountry.capital[0] : 'N/A'}</p>
          <p>Population: ${randomCountry.population.toLocaleString()}</p>
          <a href="https://en.wikipedia.org/wiki/${randomCountry.name.common}" target="_blank" rel="noopener noreferrer">Learn about</a>
        </div>
        <img class="flag" src="${randomCountry.flags.svg}" alt="Flag of ${randomCountry.name.common}" />
      </div>
      <img class="landscape" src="${landscapeImage}" alt="Landscape of ${randomCountry.name.common}" />        

    `;
  }).catch(error => {
    console.error('Error fetching image:', error);
    main.innerHTML = '<p>Error fetching image for the random country.</p>';
  });
}