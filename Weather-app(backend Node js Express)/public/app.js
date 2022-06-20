const weather = new Weather('Melbourne');
const ui = new UI();


weather.getWeather()
    .then(results => {
        console.log(results);
        ui.passInfo(results);
    })
    .catch(err => console.log(err));



document.getElementById("w-change-btn").addEventListener("click",function() {
    let weatherUpdated = new Weather(document.getElementById("city").value);
    let uiUpdated = new UI();
    weatherUpdated.getWeather()
    .then(results => {
        uiUpdated.passInfo(results);
        console.log(results);
    })
    .catch(err => console.log(err));
    document.getElementById("w-location").textContent = document.getElementById("city").value.toUpperCase();
    
  });
