const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.826&lon=-111.7897&appid=4fc8b76a49483bd4e1a5b6f9eea8cfae&units=imperial";
let d = new Date();

fetch(apiURL)
    .then((response) => response.json())
    .then((jsCurrObject) => {
        console.log(jsCurrObject);
        let currentWeather = jsCurrObject.current.weather[0].description.charAt(0).toUpperCase() + jsCurrObject.current.weather[0].description.slice(1);
        let currentTemp = jsCurrObject.current.temp;
        let currentHumid = jsCurrObject.current.humidity;
        document.getElementById("description").innerHTML = currentWeather;
        document.getElementById("temp").innerHTML = currentTemp + " &deg;F";
        document.getElementById("humidity").innerHTML = currentHumid + "&percnt;";

        let day1 = (d.getMonth() + 1) + "/" + (d.getDate() + 1);
        let day2 = (d.getMonth() + 1) + "/" + (d.getDate() + 2);
        let day3 = (d.getMonth() + 1) + "/" + (d.getDate() + 3);
        let temp1 = jsCurrObject.daily[0].temp.day;
        let temp2 = jsCurrObject.daily[1].temp.day;
        let temp3 = jsCurrObject.daily[2].temp.day;
        let desc1 = jsCurrObject.daily[0].weather[0].description.charAt(0).toUpperCase() + jsCurrObject.daily[0].weather[0].description.slice(1);
        let desc2 = jsCurrObject.daily[1].weather[0].description.charAt(0).toUpperCase() + jsCurrObject.daily[1].weather[0].description.slice(1);
        let desc3 = jsCurrObject.daily[2].weather[0].description.charAt(0).toUpperCase() + jsCurrObject.daily[2].weather[0].description.slice(1);

        document.getElementById("date1").innerHTML = day1;
        document.getElementById("date2").innerHTML = day2;
        document.getElementById("date3").innerHTML = day3;
        document.getElementById("temp1").innerHTML = temp1 + " &deg;F";
        document.getElementById("temp2").innerHTML = temp2 + " &deg;F";
        document.getElementById("temp3").innerHTML = temp3 + " &deg;F";
        document.getElementById("desc1").innerHTML = desc1;
        document.getElementById("desc2").innerHTML = desc2;
        document.getElementById("desc3").innerHTML = desc3;

        if (jsCurrObject.hasOwnProperty("alerts")){
            document.querySelector("div#weatheralert").style.display = "block";
            document.querySelector("div#weatheralert p").innerHTML = "Alert: " + jsCurrObject.alerts[0].description;
        }
        else{
            document.querySelector("div#weatheralert").style.display = "none";
        }  
    });

    function closeAlert() {
        document.querySelector("div#weatheralert").style.display = "none";
        
    }