const jsonLink = "json/directory.json";

fetch(jsonLink)
    .then(function (response) {
        return response.json();
        
    })
    .then(function (jsonObject){
        const businesses = jsonObject['businesses'];
        console.table(jsonObject);

        for (i = 0; i < businesses.length; i++){
            document.getElementById("bus" + (i+1) + "logo").setAttribute('src', 'images/businesslogo/' + businesses[i].photo);
            document.getElementById("bus" + (i+1) + "logo").setAttribute('alt', businesses[0].name);
            
            let card = document.createElement('section');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');

            address.textContent = businesses[i].address;
            phone.textContent = businesses[i].phone;
            website.textContent = businesses[i].website;

            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);

            document.getElementById("bus" + (i+1) + "info").appendChild(card);
        }
    })