main();
var check = false;

function extendMenu() {
  var menu = document.getElementsByClassName("bar")[0];
  var shop = document.querySelector(".shop");
  var insideMenu = document.getElementsByClassName("inside-menu")[0];
  var pic = document.getElementsByClassName("left-choice")[0];

  shop.addEventListener("click", () => {
    if (!check) {
      menu.style.height = "25rem";
      insideMenu.style.display = "block";
      menu.style.animation = "appeardown 0.5s backwards";
      check = true;
    } else {
      menu.style.height = "2.5rem";
      insideMenu.style.display = "none";
      menu.style.animation = "appearup 0.5s backwards";
      check = false;
    }
  });
}
function main() {
  extendMenu();
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var menu = document.getElementsByClassName("bar")[0];
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("taskbar").style.top = "0";
    document.getElementById("taskbar").style.backgroundColor = "#d0042c";
    menu.style.height = "2.5rem";
    menu.style.animation = "appearup 0.5s backwards";
  } else {
    document.getElementById("taskbar").style.top = "-1400px";
    document.getElementById("inside-menu").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
};
