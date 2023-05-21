const btn = document.getElementById("btn");
const bulb = document.getElementById("bulb");

btn.addEventListener("click", function(){
 
    bulb.src = "/bulboff1.jpg";
    btn.innerHTML = "turn off";

   

});
