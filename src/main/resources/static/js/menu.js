/*
// JavaScript to toggle the sidebar menu
function toggleMenu() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}
*/
// JavaScript to toggle the sidebar menu and change icon color
function toggleMenu() {
    const sidebar = document.getElementById("sidebarMenu");
    const overlay = document.getElementById("overlay");
    const menuIcon = document.getElementById("menuIcon");

    const isOpen = sidebar.classList.contains("open");

    if (isOpen) {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
    } else {
        sidebar.classList.add("open");
        overlay.classList.add("active");
}
}
