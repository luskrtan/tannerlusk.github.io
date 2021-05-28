const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    let myInput = document.getElementById("chapter").value;
    if (myInput != ""){

    const listFavChapterItem = document.createElement('li');
    const listFavChapterText = document.createElement('span');
    const listEntryDelete = document.createElement('button');

    listFavChapterItem.appendChild(listFavChapterText);
    listFavChapterText.textContent = document.getElementById("chapter").value;
    listFavChapterItem.appendChild(listEntryDelete);
    listEntryDelete.innerHTML = "&#10060;";
    list.appendChild(listFavChapterItem);

    listEntryDelete.onclick = function(){
        list.removeChild(listFavChapterItem);
        input.focus();
    }
     document.getElementById("chapter").value = '';
     input.focus();
    }

});
