const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API URL
const count = 10;
const apiKey = '3F6pqZ3Dyzd3cr5opU5pofR4KgZCaGgAi9TTyMAxF2c';
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`;

// Helper function to set Attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for links & photos, then add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });

    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Put <img> inside <a>, then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch error
  }
}

// On load
getPhotos();
