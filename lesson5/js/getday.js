let d = new Date();
var dayOfWeek = d.getDay();
var dName = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thur"];
var today = document.getElementById("pancakeBanner");

document.getElementById("todayName").innerHTML = dName[dayOfWeek-1];
document.getElementById("tomName").innerHTML = dName[dayOfWeek];
document.getElementById("day3Name").innerHTML = dName[dayOfWeek+1];
document.getElementById("day4Name").innerHTML = dName[dayOfWeek+2];
document.getElementById("day5Name").innerHTML = dName[dayOfWeek+3];

if (dayOfWeek == 5){
    today.style.display = "block";
} else {
    today.style.display = "none";
}
