const apiCurrURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4fc8b76a49483bd4e1a5b6f9eea8cfae&units=imperial";
fetch(apiCurrURL)
    .then((response) => response.json())
    .then((jsCurrObject) => {
        console.log(jsCurrObject);
        let currentWeather = jsCurrObject.weather[0].description.charAt(0).toUpperCase() + jsCurrObject.weather[0].description.slice(1);
        document.querySelector('.weatherStatus#curr p').innerHTML = currentWeather;
        let currTemp = Math.round(jsCurrObject.main.temp);
        document.querySelector('.weatherStatus#temp p').innerHTML = currTemp + " &deg;F";
        document.querySelector('.weatherStatus#humid p').innerHTML = jsCurrObject.main.humidity + "&percnt;";

        const windDirectionArray = ['N', 'NE', 'E', 'SE' , 'S', 'SW', 'W', 'NW'];
        let windSelector = 0;
        let windDirection = jsCurrObject.wind.deg;
        if (windDirection > 337.5 || windDirection <= 22.5 ) {
            windSelector = 0;
        } else if (windDirection > 22.5 && windDirection <= 67.5){
            windSelector = 1;
        }  else if (windDirection > 67.5 && windDirection <= 112.5){
            windSelector = 2;
        }  else if (windDirection > 112.5 && windDirection <= 157.5){
            windSelector = 3;
        }  else if (windDirection > 157.5 && windDirection <= 202.5){
            windSelector = 4;
        }  else if (windDirection > 202.5 && windDirection <= 247.5){
            windSelector = 5;
        }  else if (windDirection > 247.5 && windDirection <= 337.5){
            windSelector = 6;
        } else {
            windSelector = 7;
        }
        let windSpeed = jsCurrObject.wind.speed;
        document.querySelector('.weatherStatus#wind p').innerHTML = windDirectionArray[windSelector] + " " + Math.round(windSpeed) + "mph";

        if(currTemp <= 50 && windSpeed >= 4.8){
            var result = Math.round(35.74 + (0.6215 * currTemp) - (35.75 * (windSpeed**0.16)) + (0.4275 * currTemp * (windSpeed**0.16)));
            
        document.querySelector('.weatherStatus#wc p').innerHTML = result + " &deg;F";
        }
        else{
            document.querySelector('.weatherStatus#wc p').innerHTML = "N/A";
        }



    });

const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=4fc8b76a49483bd4e1a5b6f9eea8cfae&units=imperial";
fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsForecastObject) => {
        console.log(jsForecastObject);
    });