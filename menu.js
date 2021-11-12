var menuDisplayed = false;
let menuBox = null;

window.addEventListener("contextmenu", function(event) {

    let body = document.querySelector("body");
    let left = event.clientX;
    let top = event.clientY;
    console.log(left + "," + top);
    
    menuBox = window.document.getElementById("menu");
    menuBox.style.left = `${left}px`;
    menuBox.style.top = `${top}px`;
    menuBox.style.display = "flex";
    
    arguments[0].preventDefault();
    menuDisplayed = true;
}, false);

window.addEventListener("click", function() {
    if (menuDisplayed === true) {
        menuBox.style.display = "none";
    }
}, true);