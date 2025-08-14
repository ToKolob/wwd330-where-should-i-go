import { fetchImages } from './images.js'
export function renderOne(country) {
    const main = document.querySelector('#main');
  if (!main) {
    console.error('Main element not found');
    return;
  }

  fetchImages(country.name.common).then((landscapeImages) => {
    console.log('Image fetched for:', country.name.common);

    const imagesHtml = landscapeImages
    .map(url => `<img class="landscape" src="${url}" alt="Paisagem de ${country.name.common}" />`)
    .join('');

    
    main.innerHTML = `
      <div class="singleCountry">
        <div class="countryDetails">
          <h2>${country.name.common}</h2>
          <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
          <p>Population: ${country.population ? country.population.toLocaleString() : 'N/A'}</p>
          <p>Currencies: ${country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
          <p>Languages: ${country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
          <p>Region: ${country.region || 'N/A'}</p>
          <p>Subregion: ${country.subregion || 'N/A'}</p>
          <a href="https://en.wikipedia.org/wiki/${country.name.common}" target="_blank" rel="noopener noreferrer">Learn about</a>
        </div>
        <img class="flag" src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
      </div>
      ${imagesHtml}
    `;
  }).catch(error => {
    console.error('Error fetching image:', error);
    main.innerHTML = '<p>Error fetching image for the random country.</p>';
  });
}