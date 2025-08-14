
import { renderHomePage } from "./homePage.js";

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
      <h1 id='homepage'>Where should I go?</h1>
      <!--
      <form id="searchForm">
        <input type="text" id="searchInput" placeholder="Search for a country..." />
        <button type="submit">Search</button>
      </form>
      -->
      `;
  } else {
    console.error('Header element not found');
  }


  document.querySelector('#homepage').addEventListener('click', (event) => {
    event.preventDefault();
    renderHomePage();
  });
}



export function renderFooter() {
  const footer = document.querySelector('#footer');
  if (footer) {
    footer.innerHTML = `
    <p>&copy; 2025 Where Should I Go?</p>
    <p>Powered by <a href="https://restcountries.com">Rest Countries API</a> and <a href="https://unsplash.com/documentation">Unsplash API</a>  </p>
    `;
  } else {
    console.error('Footer element not found');
  }
}