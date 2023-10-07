function openTab(th)
            {
                window.open(th.name,'_blank');
            }
            
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var header=document.getElementById("header")
var navbar=document.getElementById("navbar")

window.onscroll=function(){
    if(window.scrollY>=menu.offsetTop)
}