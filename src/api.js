const REST_COUNTRIES_URL = 'https://restcountries.com/v3.1/all';
const UNSPLASH_URL = 'https://api.unsplash.com/search/photos';
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function fetchCountries() {
  try {
    const res = await fetch(REST_COUNTRIES_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    // Silently fallback to our curated list
    return getFallbackCountries();
  }
}

function getFallbackCountries() {
  return [
    {
      name: { common: 'Japan' },
      capital: ['Tokyo'],
      population: 125836021,
      region: 'Asia',
      subregion: 'Eastern Asia',
      area: 377975,
      timezones: ['UTC+09:00'],
      currencies: { JPY: { name: 'Japanese yen', symbol: '¥' } },
      languages: { jpn: 'Japanese' },
      flags: { png: 'https://flagcdn.com/w320/jp.png', svg: 'https://flagcdn.com/jp.svg' }
    },
    {
      name: { common: 'Italy' },
      capital: ['Rome'],
      population: 60360000,
      region: 'Europe',
      subregion: 'Southern Europe',
      area: 301336,
      timezones: ['UTC+01:00'],
      currencies: { EUR: { name: 'Euro', symbol: '€' } },
      languages: { ita: 'Italian' },
      flags: { png: 'https://flagcdn.com/w320/it.png', svg: 'https://flagcdn.com/it.svg' }
    },
    {
      name: { common: 'Brazil' },
      capital: ['Brasília'],
      population: 212559417,
      region: 'Americas',
      subregion: 'South America',
      area: 8515767,
      timezones: ['UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00'],
      currencies: { BRL: { name: 'Brazilian real', symbol: 'R$' } },
      languages: { por: 'Portuguese' },
      flags: { png: 'https://flagcdn.com/w320/br.png', svg: 'https://flagcdn.com/br.svg' }
    },
    {
      name: { common: 'Australia' },
      capital: ['Canberra'],
      population: 25499884,
      region: 'Oceania',
      subregion: 'Australia and New Zealand',
      area: 7692024,
      timezones: ['UTC+05:00', 'UTC+06:30', 'UTC+07:00', 'UTC+08:00', 'UTC+09:30', 'UTC+10:00', 'UTC+10:30', 'UTC+11:00'],
      currencies: { AUD: { name: 'Australian dollar', symbol: '$' } },
      languages: { eng: 'English' },
      flags: { png: 'https://flagcdn.com/w320/au.png', svg: 'https://flagcdn.com/au.svg' }
    },
    {
      name: { common: 'South Africa' },
      capital: ['Pretoria'],
      population: 59308690,
      region: 'Africa',
      subregion: 'Southern Africa',
      area: 1221037,
      timezones: ['UTC+02:00'],
      currencies: { ZAR: { name: 'South African rand', symbol: 'R' } },
      languages: { eng: 'English', afr: 'Afrikaans' },
      flags: { png: 'https://flagcdn.com/w320/za.png', svg: 'https://flagcdn.com/za.svg' }
    },
    {
      name: { common: 'Canada' },
      capital: ['Ottawa'],
      population: 38005238,
      region: 'Americas',
      subregion: 'North America',
      area: 9984670,
      timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:30'],
      currencies: { CAD: { name: 'Canadian dollar', symbol: '$' } },
      languages: { eng: 'English', fra: 'French' },
      flags: { png: 'https://flagcdn.com/w320/ca.png', svg: 'https://flagcdn.com/ca.svg' }
    },
    {
      name: { common: 'India' },
      capital: ['New Delhi'],
      population: 1380004385,
      region: 'Asia',
      subregion: 'Southern Asia',
      area: 3287590,
      timezones: ['UTC+05:30'],
      currencies: { INR: { name: 'Indian rupee', symbol: '₹' } },
      languages: { eng: 'English', hin: 'Hindi' },
      flags: { png: 'https://flagcdn.com/w320/in.png', svg: 'https://flagcdn.com/in.svg' }
    },
    {
      name: { common: 'Mexico' },
      capital: ['Mexico City'],
      population: 128932753,
      region: 'Americas',
      subregion: 'Central America',
      area: 1964375,
      timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00'],
      currencies: { MXN: { name: 'Mexican peso', symbol: '$' } },
      languages: { spa: 'Spanish' },
      flags: { png: 'https://flagcdn.com/w320/mx.png', svg: 'https://flagcdn.com/mx.svg' }
    },
    {
      name: { common: 'France' },
      capital: ['Paris'],
      population: 67391582,
      region: 'Europe',
      subregion: 'Western Europe',
      area: 551695,
      timezones: ['UTC-10:00', 'UTC-09:30', 'UTC-09:00', 'UTC-08:00', 'UTC-04:00', 'UTC-03:00', 'UTC+01:00', 'UTC+03:00', 'UTC+05:00', 'UTC+10:00', 'UTC+11:00', 'UTC+12:00'],
      currencies: { EUR: { name: 'Euro', symbol: '€' } },
      languages: { fra: 'French' },
      flags: { png: 'https://flagcdn.com/w320/fr.png', svg: 'https://flagcdn.com/fr.svg' }
    },
    {
      name: { common: 'Egypt' },
      capital: ['Cairo'],
      population: 102334404,
      region: 'Africa',
      subregion: 'Northern Africa',
      area: 1002450,
      timezones: ['UTC+02:00'],
      currencies: { EGP: { name: 'Egyptian pound', symbol: '£' } },
      languages: { ara: 'Arabic' },
      flags: { png: 'https://flagcdn.com/w320/eg.png', svg: 'https://flagcdn.com/eg.svg' }
    }
  ];
}

export async function fetchCountryImage(countryName) {
  try {
    if (!UNSPLASH_KEY || UNSPLASH_KEY === 'your_unsplash_access_key_here') {
      return getPlaceholderImage(countryName);
    }
    
    const url = `${UNSPLASH_URL}?query=${encodeURIComponent(countryName)}&client_id=${UNSPLASH_KEY}&orientation=landscape`;
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error(`Unsplash API error! status: ${res.status}`);
    }
    
    const data = await res.json();
    const imageUrl = data.results[0]?.urls?.regular || '';
    return imageUrl || getPlaceholderImage(countryName);
  } catch (error) {
    return getPlaceholderImage(countryName);
  }
}

function getPlaceholderImage(countryName) {
  // Use a more reliable placeholder service
  return `https://picsum.photos/400/250?random=${Math.floor(Math.random() * 1000)}`;
}