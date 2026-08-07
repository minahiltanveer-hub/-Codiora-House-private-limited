document.addEventListener("DOMContentLoaded", () => {

    console.log("Student Performance Analytics Portal Loaded Successfully");

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        if (link.href === window.location.href) {
            link.classList.add("active");
        }

    });

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 200);

    });

});