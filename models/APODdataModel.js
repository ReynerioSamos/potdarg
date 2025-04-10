// Asked almighty AI why fetch wasn't working and it sugested this method of importing which it descibed as:
// a "dynamic import approach that's compatible with Node.js v18+"
// Could've prob just switched to ES Module loading and fixed it that way too
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

class ApodModel {
// The fetch() function to get the actual data
static async fetchApodData() {
    console.log('Attempting to fetch response from Nasa APOD API...');
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`);
        if(!response.ok) { 
            throw new Error("No response received from API...");
        }
        const data = await response.json();

        // Response data parsing w/ logging
        console.log('Image URL:', data.url);
        console.log('Image Title:', data.title);
        console.log('Image Explanation:', data.explanation);
        
        return data;
    } catch(error) {
        console.error(error);
        return null;
    }
}
}

module.exports = ApodModel;