class Weather {
    constructor(city) {
        this.apiKey = '5b52d51bb07248f2a8f54837221806';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no`);

        const responseData = await response.json();

        return responseData.current;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}



const weather = new Weather('Melbourne');

weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));
