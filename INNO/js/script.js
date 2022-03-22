
AOS.init();
if(body){
  body.classList.add("noscroll");
}
function wait(){
  window.setTimeout(function(){
      loadNow(1);
    }, 5000);
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
  let scrollPos = window.scrollY;
  
  function reomveall(){
    homeMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight"); 
    cahierMenu.classList.remove("highlight");
   }

  // adds 'highlight' class to my menu items
  console.log(scrollPos)
  homeMenu.classList.add("highlight")
  if(window.innerWidth > 960){
    if (  scrollPos>0 && scrollPos < 1195) {
      reomveall();
      homeMenu.classList.add("highlight");
      return;
    } else if (scrollPos> 1195 && scrollPos< 2150) {
      reomveall();
      aboutMenu.classList.add("highlight");
      return;
    } else if (scrollPos> 2150 && scrollPos< 2930) {
      reomveall();
      cahierMenu.classList.add("highlight");
      return;
    }else if (scrollPos > 2930 && scrollPos < 3600) {
      reomveall();
      return;
    }
  }
  else{
    if (scrollPos>0 && scrollPos < 1600) {
      reomveall();
      homeMenu.classList.add("highlight");
      return;
    } else if (scrollPos> 1600 && scrollPos< 3190) {
      reomveall();
      aboutMenu.classList.add("highlight");
      return;
    } else if (scrollPos> 3190 && scrollPos< 4680) {
      reomveall();
      cahierMenu.classList.add("highlight");
      return;
    }else if (scrollPos > 4680 && scrollPos < 6000) {
      reomveall();
      return;
    }
    
    }
  }

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
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

function addUser() {
  console.log("addUser");
}

function validate() {
  var school = document.getElementById("School").value ;
  var team = document.getElementById("team").value;
  var capitain = document.getElementById("Captain").value ;
  var email = document.getElementById("email").value ;
  var first = document.getElementById("first").value ;
  var second = document.getElementById("second").value ;
  var gsm = document.getElementById("gsm").value ;
  var radios = document.getElementsByName("type");
  var formValid = false;
  var i = 0;
  while (!formValid && i < radios.length) {
      if (radios[i].checked) formValid = true;
      i++;        
  }
  if(school !="" && capitain!=""&& email!=""&& team!=""&& gsm !="" && first!=''&& 
  second!='' && formValid){ 
    alert("Enregistrement avec succés " + capitain + '!!');
    var frm = document.getElementById('frm')
    frm.action ="https://script.google.com/macros/s/AKfycby-zuWJb2zz-iFBWiz8E-zS08TzNmsiJsJ7h7yAy8Hhlx_J7mwKPR7wi9wC-Yiu0ONu5w/exec"
  }else{
    alert("Remplir tous les champs " + capitain + '!!');
  }
}