class UI {
    constructor() {
        // this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.uv = document.getElementById('w-uv');
        this.wind = document.getElementById('w-wind');
    }

    passInfo(weather) {
        this.desc.textContent = `Local date and time: ${weather.last_updated}`;
        this.temp.textContent = `Current temperature: ${weather.temp_c} celcius`;
        this.icon.setAttribute('src',weather.condition.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.humidity}`;
        this.feelsLike.textContent = `Feel like: ${weather.feelslike_c} celcius`;
        this.uv.textContent = `UV level: ${weather.uv}`;
        this.wind.textContent = `Wind: ${weather.wind_kph} kph`;
    }
}
