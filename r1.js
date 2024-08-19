// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission (basic validation and alert)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});