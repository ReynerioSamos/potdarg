const ApodModel = require('../models/APODdataModel')
const greetingModel = require('../models/greetingModel');

class ApodController {
    static async getApodData(req, res) {
        try {
            // get the API data and the Random Greeting
            const apodData = await ApodModel.fetchApodData();
            const randomGreeting = greetingModel.getRandomGreeting();
            
            // If data is received, render it on the index.html template
            if (apodData) {
                res.render('index', { 
                    title: 'NASA Astronomy Picture of the Day',
                    apodData,
                    greeting: randomGreeting,
                    error: null
                });
            } else { // if no data, send an error
                res.render('index', { 
                    title: 'NASA Astronomy Picture of the Day',
                    apodData: null,
                    greeting: randomGreeting,
                    error: 'Failed to fetch data from NASA APOD API'
                });
            }
        } catch (error) { // display the error
            console.error('Server error:', error);
            res.render('index', { 
                title: 'NASA Astronomy Picture of the Day',
                apodData: null,
                greeting: randomGreeting,
                error: 'Server error occurred'
            });
        }
    }
}

module.exports = ApodController;