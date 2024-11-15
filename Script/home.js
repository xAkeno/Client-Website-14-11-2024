main();
var check = false; 

function extendMenu() {
    var menu = document.getElementsByClassName('bar')[0]; 
    var shop = document.querySelector(".shop");
    var insideMenu = document.getElementsByClassName('inside-menu')[0];
    var pic = document.getElementsByClassName('left-choice')[0];

    shop.addEventListener('click', () => {
        if (!check) {
            menu.style.height = "25rem";
            insideMenu.style.display = "block";
            menu.style.animation = "appeardown 0.8s backwards"
            check = true;
        } else {
            menu.style.height = "2.5rem";
            insideMenu.style.display = "none";
            menu.style.animation = "appearup 0.7s backwards"
            check = false;
        }
    });
}
function main() {
    extendMenu();
}