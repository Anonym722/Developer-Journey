// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Öffnungszeiten
function checkOpenStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    let open = false;

    if (day >= 2 && day <= 5 && hour >= 9 && hour < 18) open = true;
    if (day === 6 && hour >= 8 && hour < 14) open = true;

    const el = document.getElementById("openStatus");
    if (el) {
        el.textContent = open ? "Jetzt geöffnet" : "Geschlossen";
        el.classList.toggle("open", open);
        el.classList.toggle("closed", !open);
    }
}

checkOpenStatus();
setInterval(checkOpenStatus, 60000);
