export function renderAllCountries() {
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

  const countryList = countries.map(country => `
    <div class="countryInList">
      <a href="https://en.wikipedia.org/wiki/${country.name.common}" target="_blank" rel="noopener noreferrer">
        <h2>${country.name.common}</h2>
        <img class="flag" src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
        <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
        <p>Population: ${country.population.toLocaleString()}</p>
      </a>
    </div>
  `).join('');

  main.innerHTML = `<div class="countries">${countryList}</div>`;
}

