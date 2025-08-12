import { fetchImages } from './images.js'

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
      <div class="countryInList">
        <a href="https://en.wikipedia.org/wiki/${randomCountry.name.common}" target="_blank" rel="noopener noreferrer">
          <h2>${randomCountry.name.common}</h2>
          <img src="${randomCountry.flags.svg}" alt="Flag of ${randomCountry.name.common}" />
          <img src="${landscapeImage}" alt="Landscape of ${randomCountry.name.common}" />
          <p>Capital: ${randomCountry.capital ? randomCountry.capital[0] : 'N/A'}</p>
          <p>Population: ${randomCountry.population.toLocaleString()}</p>
        </a>
      </div>
    `;
  }).catch(error => {
    console.error('Error fetching image:', error);
    main.innerHTML = '<p>Error fetching image for the random country.</p>';
  });
}