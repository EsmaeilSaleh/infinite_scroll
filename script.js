// Unsplash API
const count = 10;
const apiKey = 'KTgOeWE1tzFkywml7tWC6yBaas097yxoV6rE0p0VCro';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        console.log(data)
    } catch (error) {

    }
}

// On Load
getPhotos()