const but1 =document.getElementById("num1")
const but2 =document.getElementById("num2")
const but3 =document.getElementById("num3")

but1.addEventListener("click",function sek1(){
document.querySelector("body > div > div.kayar1").classList.add("pin1");
document.querySelector("body > div > div.kayar2").classList.remove("pin1");
document.querySelector("body > div > div.kayar3").classList.remove("pin1");
setTimeout(sek2 ,1000)
});
but2.addEventListener("click",function sek2(){
    document.querySelector("body > div > div.kayar2").classList.add("pin1");
    document.querySelector("body > div > div.kayar1").classList.remove("pin1");
    document.querySelector("body > div > div.kayar3").classList.remove("pin1");
    
});
 but3.addEventListener("click",function sek3(){
    document.querySelector("body > div > div.kayar3").classList.add("pin1");
    document.querySelector("body > div > div.kayar2").classList.remove("pin1");
    document.querySelector("body > div > div.kayar1").classList.remove("pin1");
});



