let whichSite = document.title;
var cityAPINum;

switch (whichSite){
    case "Preston Home Page":
        cityAPINum = 5604473;
        break;
    case "Soda Springs Home Page":
        cityAPINum = 5607916;
        break;
    case "Fish Haven Home Page":
        cityAPINum = 5585010;
        break;
}

//5607916 Soda Springs
//5585010 Bear Lake Sands, which was closest to Fish Haven
//5604473 Preston
const apiCurrURL = "https://api.openweathermap.org/data/2.5/weather?id="+cityAPINum+"&appid=4fc8b76a49483bd4e1a5b6f9eea8cfae&units=imperial";
const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id="+cityAPINum+"&appid=4fc8b76a49483bd4e1a5b6f9eea8cfae&units=imperial";
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
const iconID = ['.dayForecast#day1Cast img', '.dayForecast#day2Cast img', '.dayForecast#day3Cast img', '.dayForecast#day4Cast img', '.dayForecast#day5Cast img'];
const tempID = ['.dayTemp#day1Temp', '.dayTemp#day2Temp', '.dayTemp#day3Temp', '.dayTemp#day4Temp', '.dayTemp#day5Temp'];
const iconSelector = ["../lesson6/images/sunnyweather.svg", "../lesson6/images/partlycloudy.svg", "../lesson6/images/mostlycloudy.svg", "../lesson6/images/rainy.svg", "../lesson6/images/thunderstorms.svg", "../lesson6/images/snowy.svg", "../lesson6/images/fog.svg"];

fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsForecastObject) => {
        console.log(jsForecastObject);

       for (let i = 5 ; i < 38 ; i = i+8){
            let weatherID = jsForecastObject.list[i].weather[0].id;
            let foreTemp = Math.round(jsForecastObject.list[i].main.temp);
            let desc = jsForecastObject.list[i].weather[0].description;
            let foreIcon = 8;

            if (weatherID >= 803){
                 foreIcon = iconSelector[2];
            }
            else if(weatherID >= 801){
                 foreIcon = iconSelector[1];
            }
            else if(weatherID >= 800){
                 foreIcon = iconSelector[0];
            }
            else if(weatherID >=701){
                 foreIcon = iconSelector[6];
            }
            else if(weatherID >= 600){
                 foreIcon = iconSelector[5];
            }
            else if(weatherID >= 300){
                 foreIcon = iconSelector[3];
            }
            else{
                 foreIcon = iconSelector[4];
            }

            
            
            switch (i){
            case 5:
            document.querySelector(iconID[0]).setAttribute('src', foreIcon);
            document.querySelector(iconID[0]).setAttribute('alt', desc);
            document.querySelector(tempID[0]).innerHTML = foreTemp + " &deg;F";
            break;
            case 13:
            document.querySelector(iconID[1]).setAttribute('src', foreIcon);
            document.querySelector(iconID[1]).setAttribute('alt', desc);
            document.querySelector(tempID[1]).innerHTML = foreTemp + " &deg;F";
            break;
            case 21:
            document.querySelector(iconID[2]).setAttribute('src', foreIcon);
            document.querySelector(iconID[2]).setAttribute('alt', desc);
            document.querySelector(tempID[2]).innerHTML = foreTemp + " &deg;F";
            break;
            case 29:
            document.querySelector(iconID[3]).setAttribute('src', foreIcon);
            document.querySelector(iconID[3]).setAttribute('alt', desc);
            document.querySelector(tempID[3]).innerHTML = foreTemp + " &deg;F";
            break;
            case 37:
            document.querySelector(iconID[4]).setAttribute('src', foreIcon);
            document.querySelector(iconID[4]).setAttribute('alt', desc);
            document.querySelector(tempID[4]).innerHTML = foreTemp + " &deg;F";
            break;
            }
       }

        
    });