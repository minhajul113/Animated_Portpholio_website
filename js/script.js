// Typing Animation
let typed = new Typed(".multiple-text",{
    strings: ["FrontEnd Developer", "Graphics Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 800,
    loop: true
});


// Cursor Moving Animation
let cursor = document.querySelector(".cursor");
let cursor1 = document.querySelector(".cursor1");

document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor1.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;";
})


// Navbar toggler
let toggleBtn = document.querySelector(".navbar-toggler");
let toggleBtnIcon = document.querySelector(".bx-menu")
let navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", ()=>{
    navbar.classList.toggle("nav-toggle");
    toggleBtnIcon.classList.toggle("bx-menu-alt-right");
})