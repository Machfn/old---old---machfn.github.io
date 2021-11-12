var menuDisplayed = false;
let menuBox = null;

function getX(event) {
    return event.clientX;
}

function getY(event) {
    return event.clientY;
}

window.addEventListener("contextmenu", function() {

    let body = document.querySelector("body");
    let left = getX(event);
    let top = getY(event); 
    
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