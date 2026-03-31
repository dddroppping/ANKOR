const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        const expanded = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", String(!expanded));
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("active");
            mobileMenu.classList.remove("active");
            burger.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
            burger.classList.remove("active");
            mobileMenu.classList.remove("active");
            burger.setAttribute("aria-expanded", "false");
        }
    });
}
