let d = new Date();
var dayOfWeek = d.getDay();
var dName = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thur"];
let siteTitle = document.title;

document.getElementById("day1Name").innerHTML = dName[dayOfWeek];
document.getElementById("day2Name").innerHTML = dName[dayOfWeek+1];
document.getElementById("day3Name").innerHTML = dName[dayOfWeek+2];
document.getElementById("day4Name").innerHTML = dName[dayOfWeek+3];
document.getElementById("day5Name").innerHTML = dName[dayOfWeek+4];

if (siteTitle === 'Preston Home Page'){
var today = document.getElementById("pancakeBanner");
if (dayOfWeek == 5){
    today.style.display = "block";
} else {
    today.style.display = "none";
}
}
