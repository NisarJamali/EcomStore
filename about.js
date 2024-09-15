let navmenu = document.querySelector(".navmenu");
let sidemenu = document.querySelector(".sidemenu");
let closebtn = document.querySelector(".close")


sidemenu.addEventListener("click", ()=>{
    navmenu.style.right = 0;
    sidemenu.style.right = "-200px";
})

closebtn.addEventListener("click",()=>{
    navmenu.style.right = "-300px";
    sidemenu.style.right = "20px";
})

