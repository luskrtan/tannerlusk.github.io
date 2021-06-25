const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4fc8b76a49483bd4e1a5b6f9eea8cfae&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let currTemp = Math.round(jsObject.main.temp);
        document.getElementById('current-temp').innerHTML = currTemp;

    const imagesrc = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src',imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
    });