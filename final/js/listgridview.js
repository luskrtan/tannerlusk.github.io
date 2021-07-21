function gridView(){
    document.getElementById("toprow").className = "gridview";
    document.getElementById("middlerow").className = "gridview";
    document.getElementById("bottomrow").className = "gridview";
    document.getElementById("listbutton").className = "#";
    document.getElementById("gridbutton").className = "activebutton";
    for (i = 1; i < 10; i++){
        document.getElementById("bus" + i).className = "businesscontainergrid";
    }
}

function listView(){
    document.getElementById("toprow").className = "listview";
    document.getElementById("middlerow").className = "listview";
    document.getElementById("bottomrow").className = "listview";
    document.getElementById("listbutton").className = "activebutton";
    document.getElementById("gridbutton").className = "#";
    for (i = 1; i < 10; i++){
        document.getElementById("bus" + i).className = "businesscontainerlist";
    }
    

}