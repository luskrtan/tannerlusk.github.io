let t = document.getElementById("wcTemp").innerHTML;
let s = document.getElementById("wcWind").innerHTML;
var result;

if(t <= 50 && s >= 4.8){
    result = Math.round(35.74 + (0.6215 * t) - (35.75 * (s**0.16)) + (0.4275 * t * (s**0.16)));
    
document.getElementById("wcResult").innerHTML = result + " &deg;F";
}
else{
    document.getElementById("wcResult").innerHTML = "N/A";
}
