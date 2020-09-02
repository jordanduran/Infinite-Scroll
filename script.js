// Unsplash API URL
const count = 10;
const apiKey = '3F6pqZ3Dyzd3cr5opU5pofR4KgZCaGgAi9TTyMAxF2c';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error
  }
}

// On load
getPhotos();
