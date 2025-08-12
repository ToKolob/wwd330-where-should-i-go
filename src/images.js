
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY, // Uses the access key from .env
});

export async function fetchImages(param) {
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

