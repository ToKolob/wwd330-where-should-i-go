import { renderAllCountries } from "./allCountries.js";
import { renderRandom } from "./renderRandom.js";

export function saveInLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) { 
    console.error('Error saving to localStorage:', error);
  }
}

export function renderHeader() {
  const header = document.querySelector('#header');
  if (header) {
    header.innerHTML = `
    <h1>Where should I go?</h1>
    <ul>
      <li><a href="#random">Random</a></li>
      <li><a href="#allCountries">All countries</a></li>
    </ul>
    `;
  } else {
    console.error('Header element not found');
  }

  // Add event listeners for navigation
  document.querySelector('a[href="#allCountries"]').addEventListener('click', (event) => {
    event.preventDefault();
    renderAllCountries();
  });
  document.querySelector('a[href="#random"]').addEventListener('click', (event) => {
    event.preventDefault();
    renderRandom();
  });
}



export function renderFooter() {
  const footer = document.querySelector('#footer');
  if (footer) {
    footer.innerHTML = `
    <p>&copy; 2023 Where Should I Go?</p>
    <p>Powered by <a href="https://restcountries.com">Rest Countries API</a></p>
    `;
  } else {
    console.error('Footer element not found');
  }
}