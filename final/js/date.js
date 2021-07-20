let currDate = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("currentyear").innerHTML = currDate.getFullYear();
document.getElementById("currentdate").innerHTML = days[currDate.getDay()] + ", " + currDate.getDate() + " "
+ months[currDate.getMonth()] + " " + currDate.getFullYear();