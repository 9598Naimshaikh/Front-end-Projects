const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

hamburger.onclick = ()=>{
    navbar.classList.toggle("active");
}