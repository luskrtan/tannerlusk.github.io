function membershipInfo(value){
    var mbrLevel = value;

    switch (mbrLevel){
        case "nonprofit":
            document.getElementById('priceamount').innerHTML = '$100';
            document.getElementById('membershipdescription').innerHTML = 'Nonprofit does this.';
            break;
        case "bronze":
            document.getElementById('priceamount').innerHTML = '$200';
            document.getElementById('membershipdescription').innerHTML = 'Bronze does this.';
            break;
        case "silver":
            document.getElementById('priceamount').innerHTML = '$400';
            document.getElementById('membershipdescription').innerHTML = 'Silver does this.';
            break;
        case "gold":
            document.getElementById('priceamount').innerHTML = '$1000';
            document.getElementById('membershipdescription').innerHTML = 'Gold does this.';
            break;
    }

}