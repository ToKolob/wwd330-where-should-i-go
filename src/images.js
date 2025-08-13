
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY, // Uses the access key from .env
});

//mock result
const mockResult = {
  response: {
    results: [
      {
        urls: {
          full: 'https://example.com/image.jpg',
        },
      },
    ],
  },
};

export async function fetchImages(param) {
  if (false) {
    return mockResult.response.results[0].urls.full; // Returns the mock image URL
  }
  try {
    const result = await unsplash.search.getPhotos({
      query: param,
      page: 1,
      perPage: 1,
      orientation: 'landscape', 
    });

    if (result.response.results.length > 0) {
      console.log("fetch images response:", result);
      return result.response.results[0].urls.full; // Returns the full URL of the image
    } else {
      console.log("No image founded.");
    }
  } catch (error) {
    console.error("Error to searsh image:", error);
  }
}

