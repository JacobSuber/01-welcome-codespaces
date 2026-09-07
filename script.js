// Automatically displays the current year in the footer
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();


// Back-to-top button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }

});

backToTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Simple animation when sections enter the screen
const sections = document.querySelectorAll(
    ".project-card, .experience-card, .education-card, .skill-category, .development-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(section);

});