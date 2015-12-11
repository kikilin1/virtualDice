var img = document.getElementById("diceimg1");

img.onclick = function(){
    var face = Math.round(Math.random()*6);
    
    if(img.src.includes("frame1")){
        img.src="img/dodecahedron.gif";
        //document.getElementById("roll").innerHTML=face;
        setTimeout(function(){
            //change image back to stationary one (png)
            img.src = "img/dodecahedron-frame1.png";
            document.getElementById("roll").innerHTML=face;
        },2000);
    }
    
    

};

