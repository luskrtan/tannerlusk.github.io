function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    if (document.getElementById("primaryNav").className === ""){
            document.querySelector('img#commercehamburger').setAttribute('src', 'images/xicon.svg');
    }
    else{
        document.querySelector('img#commercehamburger').setAttribute('src', 'images/hamburgericon.svg');
    }
}