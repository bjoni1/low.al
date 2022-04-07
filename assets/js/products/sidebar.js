window.addEventListener("load", start, false);

var sidebar;
var openButton;
var closeButton;

function start() {
    sidebar = document.getElementsByClassName("sidebar")[0];
    openButton = document.getElementsByClassName("opensb")[0];
    closeButton = document.getElementsByClassName("closesb")[0];
    openButton.addEventListener("click", openSidebar, false);
    closeButton.addEventListener("click", closeSidebar, false);
    window.addEventListener("resize", resetSidebar, false);
}

function openSidebar() {
    sidebar.style.width = "100%";
}

function closeSidebar() {
    sidebar.style.width = "0";
}

function resetSidebar() {
    if (getBrowserWidth() >= 576) {
        sidebar.style.width = "100%";
    } else {
        sidebar.style.width = "0";
    }
}

function getBrowserWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}