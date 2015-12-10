var img = document.getElementById("diceimg1");

img.onclick = function(){
var face = Math.round(Math.random()*5+1)
document.getElementById("roll").innerHTML=face;
    
console.log(face)
};