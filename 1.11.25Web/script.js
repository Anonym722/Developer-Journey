// Popup öffnen
document.querySelector(".openPopupBtn").addEventListener("click", function () {
    document.getElementById("popupForm").style.display = "flex";
});

// Popup schließen (X-Knopf)
document.querySelector(".closeBtn").addEventListener("click", function () {
    document.getElementById("popupForm").style.display = "none";
});

// Popup schließen, wenn man außerhalb klickt
window.addEventListener("click", function (event) {
    const popup = document.getElementById("popupForm");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
