import './style.css'
import { fetchCountries, fetchCountryImage } from './api.js';

let countries = [];
let currentCountry = null;

async function showRandomCountry() {
  try {
    if (!countries.length) {
      countries = await fetchCountries();
      if (!countries || countries.length === 0) {
        throw new Error('No countries data received');
      }
    }
    
    const idx = Math.floor(Math.random() * countries.length);
    currentCountry = countries[idx];
    
    if (!currentCountry || !currentCountry.name) {
      throw new Error('Invalid country data');
    }
    
    const imageUrl = await fetchCountryImage(currentCountry.name.common);
    renderCountry(currentCountry, imageUrl);
  } catch (error) {
    console.error('Error loading country:', error);
    renderError('Failed to load country data. Please try again.');
  }
}

function formatLanguages(languages) {
  if (!languages) return 'N/A';
  return Object.values(languages).join(', ');
}

function formatCurrencies(currencies) {
  if (!currencies) return 'N/A';
  return Object.values(currencies).map(curr => `${curr.name} (${curr.symbol})`).join(', ');
}

function formatTimezones(timezones) {
  if (!timezones || timezones.length === 0) return 'N/A';
  return timezones.join(', ');
}

function formatArea(area) {
  if (!area) return 'N/A';
  return `${area.toLocaleString()} km²`;
}

function getTriviaFact(country) {
  const facts = [
    `${country.name.common} has a population of ${country.population.toLocaleString()} people.`,
    `${country.name.common} covers an area of ${formatArea(country.area)}.`,
    `${country.name.common} is located in ${country.subregion || country.region}.`,
    `${country.name.common} uses ${formatCurrencies(country.currencies)}.`,
    `The official languages of ${country.name.common} are ${formatLanguages(country.languages)}.`
  ];
  return facts[Math.floor(Math.random() * facts.length)];
}

function renderCountry(country, imageUrl) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Where Should I Go?</h1>
    <div class="country-card">
      <div class="country-header">
        <img src="${country.flags?.png || ''}" alt="Flag of ${country.name.common}" class="country-flag">
        <h2>${country.name.common}</h2>
      </div>
      
      <img src="${imageUrl}" alt="Scenic view of ${country.name.common}" class="country-image"/>
      
      <div class="country-details">
        <div class="detail-row">
          <span class="label">Capital:</span>
          <span class="value">${country.capital ? country.capital[0] : 'N/A'}</span>
        </div>
        
        <div class="detail-row">
          <span class="label">Population:</span>
          <span class="value">${country.population.toLocaleString()}</span>
        </div>
        
        <div class="detail-row">
          <span class="label">Area:</span>
          <span class="value">${formatArea(country.area)}</span>
        </div>
        
        <div class="detail-row">
          <span class="label">Region:</span>
          <span class="value">${country.region}${country.subregion ? ` (${country.subregion})` : ''}</span>
        </div>
        
        <div class="detail-row">
          <span class="label">Currency:</span>
          <span class="value">${formatCurrencies(country.currencies)}</span>
        </div>
        
        <div class="detail-row">
          <span class="label">Languages:</span>
          <span class="value">${formatLanguages(country.languages)}</span>
        </div>
        
        <div class="detail-row">
          <span class="label">Timezones:</span>
          <span class="value">${formatTimezones(country.timezones)}</span>
        </div>
        
        <div class="trivia-fact">
          <strong>💡 Fun Fact:</strong> ${getTriviaFact(country)}
        </div>
      </div>
      
      <div class="action-buttons">
        <button id="spin-btn">Spin Again</button>
        <a href="https://en.wikipedia.org/wiki/${country.name.common}" target="_blank" class="learn-more-btn">Learn More</a>
      </div>
    </div>
  `;
  document.getElementById('spin-btn').onclick = showRandomCountry;
}

function renderError(message) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Where Should I Go?</h1>
    <div class="country-card">
      <p style="color: #e53e3e; font-size: 1.2rem;">${message}</p>
      <button id="retry-btn">Try Again</button>
    </div>
  `;
  document.getElementById('retry-btn').onclick = showRandomCountry;
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', showRandomCountry);
