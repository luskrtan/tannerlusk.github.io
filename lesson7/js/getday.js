let d = new Date();
var dayOfWeek = d.getDay();
var today = document.getElementById("pancakeBanner");


if (dayOfWeek == 5){
    today.style.display = "block";
} else {
    today.style.display = "none";
}
