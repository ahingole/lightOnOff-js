

var button = document.getElementById("btn");
var light = document.querySelector(".light");
var hint = document.getElementById("hint");

function handleClick() {

light.classList.toggle("on");
console.log("jajak")

}

button.addEventListener('click', handleClick)




// by clicking on img 
light.addEventListener('click', function(e){
    e.target.classList.toggle('on');
hint.style.backgroundColor="black";


})

