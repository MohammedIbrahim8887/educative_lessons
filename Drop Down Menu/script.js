const submenu = document.getElementsByClassName("sub-menu");
if (submenu.onmouseenter) {
    submenu.style.display = "block";
} else if (submenu.onmouseleave) {
    submenu.style.display = "none";
}