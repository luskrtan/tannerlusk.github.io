const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
      return response.json();
      
  })
  .then(function (jsonObject){
    const towns = jsonObject['towns'];
      console.table(jsonObject);
          //Code for Preston
          let pCard = document.createElement('section');
          let pName = document.createElement('h2');
          let pMotto = document.createElement('h3');
          let pYear = document.createElement('p');
          let pPopulation = document.createElement('p');
          let pRain = document.createElement('p');
          

          pName.textContent = towns[6].name;
          pMotto.textContent = towns[6].motto;
          pYear.textContent = 'Year Founded: ' + towns[6].yearFounded;
          pPopulation.textContent = 'Population: ' + towns[6].currentPopulation;
          pRain.textContent =  'Annual Rain Fall: ' + towns[6].averageRainfall;

          pCard.appendChild(pName);
          pCard.appendChild(pMotto);
          pCard.appendChild(pYear);
          pCard.appendChild(pPopulation);
          pCard.appendChild(pRain);

          document.querySelector('article.prestonHomeInfo').appendChild(pCard);

          //Code for Fish Haven
          let ssCard = document.createElement('section');
          let ssName = document.createElement('h2');
          let ssMotto = document.createElement('h3');
          let ssYear = document.createElement('p');
          let ssPopulation = document.createElement('p');
          let ssRain = document.createElement('p');
          

          ssName.textContent = towns[0].name;
          ssMotto.textContent = towns[0].motto;
          ssYear.textContent = 'Year Founded: ' + towns[0].yearFounded;
          ssPopulation.textContent = 'Population: ' + towns[0].currentPopulation;
          ssRain.textContent =  'Annual Rain Fall: ' + towns[0].averageRainfall;

          ssCard.appendChild(ssName);
          ssCard.appendChild(ssMotto);
          ssCard.appendChild(ssYear);
          ssCard.appendChild(ssPopulation);
          ssCard.appendChild(ssRain);

          document.querySelector('article.sodaSpringsHomeInfo').appendChild(ssCard);

          //Code for Fish Haven
          let fhCard = document.createElement('section');
          let fhName = document.createElement('h2');
          let fhMotto = document.createElement('h3');
          let fhYear = document.createElement('p');
          let fhPopulation = document.createElement('p');
          let fhRain = document.createElement('p');
          

          fhName.textContent = towns[2].name;
          fhMotto.textContent = towns[2].motto;
          fhYear.textContent = 'Year Founded: ' + towns[2].yearFounded;
          fhPopulation.textContent = 'Population: ' + towns[2].currentPopulation;
          fhRain.textContent =  'Annual Rain Fall: ' + towns[2].averageRainfall;

          fhCard.appendChild(fhName);
          fhCard.appendChild(fhMotto);
          fhCard.appendChild(fhYear);
          fhCard.appendChild(fhPopulation);
          fhCard.appendChild(fhRain);

          document.querySelector('article.fishHavenHomeInfo').appendChild(fhCard);
      
      
  })