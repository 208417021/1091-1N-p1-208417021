// find menu-btn and looking for click event, then find main-menu to toggle "show"
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".main-menu").classList.toggle("show");
});