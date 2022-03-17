let btnShowMenu = document.getElementById("btnShowMenu");
let menu = document.getElementById("menu");

btnShowMenu.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
})