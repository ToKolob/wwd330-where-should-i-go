import './style.css'
import { fetchCountries } from './countries.js'
import { renderAllCountries } from './allCountries.js'
import { renderFooter, renderHeader } from './utils.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="header">header not loaded</div>
    <div id="main">body not loaded</div>
    <div id="footer">footer not loaded</div>
  </div>
`

renderHeader();
renderFooter();
fetchCountries().then(() => {
  console.log('Countries fetched and saved in localStorage');
  // renderAllCountries();
}).catch(error => {
  console.error('Error fetching countries:', error);
});





