import { renderAllCountries } from "./allCountries.js";
import { renderRandom } from "./renderRandom.js";
export function renderHomePage() {
  const main = document.querySelector('#main');
  if (!main) {
    console.error('Main element not found');
    return;
  }

  main.innerHTML = `
    <h2>Welcome to the Travel Guide</h2>
    <div id=randomCountry>
      <h3>Discover a random country</h3>
      <p>Click the button below to explore a random country and its beautiful landscapes.</p>

    <p>Explore countries around the world, discover their cultures, and find your next travel destination!</p>
    </div>
    <div id="countryList">
      <h3>Country List</h3>
      <p>Seach for a country or explore all countries.</p>
    </div>
  `;

    document.querySelector('div#countryList').addEventListener('click', (event) => {
      event.preventDefault();
      renderAllCountries();
    });
    document.querySelector('div#randomCountry').addEventListener('click', (event) => {
      event.preventDefault();
      renderRandom();
    });
}