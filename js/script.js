//--------------------Login Page-------------------
let icon=document.querySelector('body > div.login-page > div > div');
let logbutton=document.querySelector('body > header > div:nth-child(1) > div > div.log-buttons > div:nth-child(1) > a');
let loginpage=document.querySelector("body > div.login-page");

icon.addEventListener("click",() => {
    loginpage.style.display= "none";
})
logbutton.addEventListener("click",() =>{
    loginpage.style.display= "block" ;
})












//--------------------Login Page-------------------

//--------------------- OWL CAROUSEL 

$(document).ready(function(){
    let owl= $(".owl-carousel").owlCarousel({
         loop:true,
        dots:false,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
          autoplayHoverPause:true
    }
        
    );
   });

//--------------------- OWL CAROUSEL ------------