const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
      return response.json();
      
  })
  .then(function (jsonObject){
    const prophets = jsonObject['prophets'];
      console.table(jsonObject);
      for (let i = 0; i < prophets.length; i++){
          let card = document.createElement('section');
          let h2 = document.createElement('h2');
          let birth = document.createElement('p');
          let place = document.createElement('p');
          let photo = document.createElement('img');

          h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
          birth.textContent = 'Date of Birth: ' + prophets[i].birthdate
          place.textContent = 'Place of Birth: ' + prophets[i].birthplace;
          photo.setAttribute('src', prophets[i].imageurl);

          card.appendChild(h2);
          card.appendChild(birth);
          card.appendChild(place);
          card.appendChild(photo);

          document.querySelector('div.cards').appendChild(card);
      }
      
  })

  