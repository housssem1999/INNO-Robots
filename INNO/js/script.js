
AOS.init();
if(body){
  body.classList.add("noscroll");
}
function wait(){
  window.setTimeout(function(){
      loadNow(1);
    }, 1000);
}

function loadNow(opacity){
  if(opacity <= 0){
    displayContent();
  }
  else{
    loader.style.opacity = opacity;
    window.setTimeout(function(){
      loadNow(opacity - 0.05)
    }, 30);
  }
}

function displayContent(){
  loader.style.display = "none";
  body.classList.remove("noscroll");
}

document.addEventListener("DOMContentLoaded", function(){
  loader = document.getElementById("loader");
  wait();
});
// menus
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Show Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const el = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const cahierMenu = document.querySelector("#cahier-page");
  const sponsMenu = document.querySelector("#sponsors-page")
  let scrollPos = window.scrollY;
  
  function reomveall(){
    homeMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight"); 
    cahierMenu.classList.remove("highlight");
    sponsMenu.classList.remove("highlight");
   }

  // adds 'highlight' class to my menu items
  console.log(scrollPos)
  homeMenu.classList.add("highlight")
  if (  scrollPos>0 && scrollPos < 1200) {
    reomveall();
    homeMenu.classList.add("highlight");
    return;
  } else if (scrollPos> 1200 && scrollPos< 2260) {
    reomveall();
    aboutMenu.classList.add("highlight");
    return;
  } else if (scrollPos> 2260 && scrollPos< 2930) {
    reomveall();
    cahierMenu.classList.add("highlight");
    return;
  }else if (scrollPos > 2930 && scrollPos < 3600) {
    reomveall();
    return;
  }else if (scrollPos > 3600 && scrollPos < 4000) {
    reomveall();
    sponsMenu.classList.add("highlight");
    return;
  }

  if ((el && window.innerWidth < 960 && scrollPos < 600) || el) {
    el.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("scroll", ()=>{
  const navbar = document.querySelector(".navbar")
  let scrollPos = window.scrollY;
  if(scrollPos>0){
    navbar.classList.add("navbar_onscoling");
  }else{
    navbar.classList.remove("navbar_onscoling");
  }
});
window.addEventListener("click", highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 960 && menuBars) {
    //menu.classList.toggle("is-active");
    //menuLinks.classList.remove("active");
    let myElm = document.createElement("p");
    myElm.innerText = 'test';	
    myElm.style.color = 'red';		
    document.body.appendChild(myElm);
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

function addUser() {
  console.log("addUser");
}

function validate() {
  var name = document.getElementById("Nom").value ;
  var prenom = document.getElementById("Prenom").value;
  var email = document.getElementById("email").value ;
  var team = document.getElementById("team").value ;
  var gsm = document.getElementById("gsm").value ;
  if(name !="" && prenom!=""&& email!=""&& team!=""&& gsm !=""){ 
    alert("Enregistrement avec succés " + name + '!!');
  }
}