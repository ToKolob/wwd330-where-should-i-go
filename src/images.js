
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
          full: 'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },        urls: {
          full: 'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },        urls: {
          full: 'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },        urls: {
          full: 'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
      },
    ],
  },
};

export async function fetchImages(param, numberOfImages = 4) {
  if (false){// Mocking the API response for testing purposes
    return mockResult.response.results.map(img => img.urls.full); // Returns the mock image URL
  }
  try {
    const result = await unsplash.search.getPhotos({
      query: param,
      page: 1,
      perPage: numberOfImages,
      orientation: 'landscape', 
    });

    if (result.response.results.length > 0) {
      console.log("fetch images response:", result);
      return result.response.results.map(img => img.urls.full); // Returns the full URL of the image
    } else {
      console.log("No image founded.");
    }
  } catch (error) {
    console.error("Error to searsh image:", error);
  }
}

