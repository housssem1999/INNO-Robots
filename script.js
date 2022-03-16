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
  const timeMenu = document.querySelector("#time-sheet");
  const liveMenu = document.querySelector("#live-page");
  let scrollPos = window.scrollY;
  
  function reomveall(){
    homeMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight"); 
    timeMenu.classList.remove("highlight");
    liveMenu.classList.remove("highlight");
   }

  // adds 'highlight' class to my menu items
  console.log(scrollPos)
  homeMenu.classList.add("highlight")
  if (  scrollPos>0 && scrollPos < 550) {
    reomveall();
    homeMenu.classList.add("highlight");
    return;
  } else if (scrollPos> 550 && scrollPos< 950) {
    reomveall();
    aboutMenu.classList.add("highlight");
    return;
  } else if (scrollPos> 950 && scrollPos < 1100) {
    reomveall();
    timeMenu.classList.add("highlight");
    return;
  } else if (scrollPos > 1100 && scrollPos < 2450) {
    reomveall();
    liveMenu.classList.add("highlight");
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
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
