function membershipInfo(value){
    var mbrLevel = value;

    switch (mbrLevel){
        case "nonprofit":
            document.getElementById('priceamount').innerHTML = '$100';
            document.getElementById('membershipdescription').innerHTML = 'Our Non-profit members enjoy access to our directory listings to increase networking. In addition, they will be featured in a monthly social media post highlighting their business.';
            break;
        case "bronze":
            document.getElementById('priceamount').innerHTML = '$200';
            document.getElementById('membershipdescription').innerHTML = 'Our Bronze members enjoy all the benefits of Non-profit members. In addition, they have access to monthly business trainings taught by different members in the community, as well as bi-monthly social media highlights of their business. Our Bronze members can also receive our Tier 3 sponsorships in advertising.';
            break;
        case "silver":
            document.getElementById('priceamount').innerHTML = '$400';
            document.getElementById('membershipdescription').innerHTML = 'In addition to Bronze benefits, our Silver members are invited to attend our monthly luncheons, to sit down and chat with other members. Silver members also have access to our Tier 2 sponsorships in advertising.';
            break;
        case "gold":
            document.getElementById('priceamount').innerHTML = '$1000';
            document.getElementById('membershipdescription').innerHTML = 'Gold members receive all that we offer. Tier 1 sponsorships in advertising, dedicated to help you put your best foot forward.';
            break;
    }

}