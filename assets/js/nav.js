const mobNav = document.getElementById("mobile-nav-show")
const openNav = document.getElementById("open-mobile-nav") 

openNav.addEventListener("click", function(){
    if (mobNav.style.display == "none") {
        mobNav.style.display = "flex";
        openNav.style.transform = "rotate(180deg)";
    } else {
        mobNav.style.display = "none";
        openNav.style.transform = "rotate(0deg)";
    }
});

window.addEventListener("resize", function() {
    const curScreenWidth = window.innerWidth;
    //In pixels. value at what point to hide mobile nav
    const whenHide = 800;
    if (curScreenWidth > whenHide) {
        mobNav.style.display = "none";
    }
})