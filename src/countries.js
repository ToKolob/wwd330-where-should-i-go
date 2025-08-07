import { saveInLocalStorage } from './utils.js';
export async function fetchCountries() {
  if (localStorage.getItem('countries')) {
    console.log('Countries already fetched, using localStorage data.');
    return JSON.parse(localStorage.getItem('countries'));
  }
  try {
    console.log('Fetching countries data...');
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const countries = await response.json();    
    saveInLocalStorage('countries', countries);
    return countries;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}