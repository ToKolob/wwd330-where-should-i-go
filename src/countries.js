import { saveInLocalStorage } from './utils.js';
export async function fetchCountries() {
  if (localStorage.getItem('countries01')) {
    console.log('Countries already fetched, using localStorage data.');
    return JSON.parse(localStorage.getItem('countries01'));
  }
  try {
    console.log('Fetching countries data...');
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,currencies,languages,region,subregion');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const countries = await response.json();    
    saveInLocalStorage('countries01', countries);
    return countries;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}