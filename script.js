// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".bar span");

    skillBars.forEach((bar) => {
        const width = bar.parentElement.dataset.width;
        bar.style.width = width;
    });
});



