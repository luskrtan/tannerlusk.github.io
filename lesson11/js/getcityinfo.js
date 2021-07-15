const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let siteName = document.title;
const cityID = [0,2,6];


if (siteName === 'Southeast Idaho Weather Watch'){
  const cityClass = ['sodaSprings','fishHaven','preston'];
  fetch(requestURL)
    .then(function (response) {
        return response.json();
        
    })
    .then(function (jsonObject){
      const towns = jsonObject['towns'];
        console.table(jsonObject);
            for (var i = 0; i < 3; i++){
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');
            

            name.textContent = towns[cityID[i]].name;
            motto.textContent = towns[cityID[i]].motto;
            year.textContent = 'Year Founded: ' + towns[cityID[i]].yearFounded;
            population.textContent = 'Population: ' + towns[cityID[i]].currentPopulation;
            rain.textContent =  'Annual Rain Fall: ' + towns[cityID[i]].averageRainfall;

            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(year);
            card.appendChild(population);
            card.appendChild(rain);

            document.querySelector('article.' + cityClass[i] +'HomeInfo').appendChild(card);
            }
    })
}
else{
  var cityNum;
  switch (siteName){
    case 'Preston Home Page':
      cityNum = cityID[2];
      break;
    case 'Fish Haven Home Page':
      cityNum = cityID[1];
      break;
    case 'Soda Springs Home Page':
      cityNum = cityID[0];
      break;
  }
  fetch(requestURL)
    .then(function (response) {
        return response.json();
        
    })
    .then(function (jsonObject){
      const towns = jsonObject['towns'];
        console.table(jsonObject);
        let card = document.createElement('section');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
        var event4;
        if (siteName === 'Fish Haven Home Page'){
          event4 = document.createElement('p');
        }

        event1.textContent = towns[cityNum].events[0];
        event2.textContent = towns[cityNum].events[1];
        event3.textContent = towns[cityNum].events[2];
        if (siteName === 'Fish Haven Home Page'){
          event4.textContent = towns[cityNum].events[3];
        }

        card.appendChild(event1);
        card.appendChild(event2);
        card.appendChild(event3);
        if (siteName === 'Fish Haven Home Page'){
          card.appendChild(event4);
        }

        document.querySelector('article.upcomingevents').appendChild(card);
  })
}