const left = document.getElementsByTagName("Left");
const img = document.getElementById('kitty');
const right = document.getElementsByTagName('Right');


let butlef = function (){
    left.style.padding-left = 80%;
};


left.addEventListener('click', butlef());