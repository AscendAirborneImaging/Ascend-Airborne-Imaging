document.addEventListener('DOMContentLoaded', () => {
    const examples = document.querySelectorAll('.example');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    examples.forEach(example => observer.observe(example));
});
document.addEventListener('DOMContentLoaded', () => {
    // Existing IntersectionObserver for .example
    const examples = document.querySelectorAll('.example');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    examples.forEach(example => observer.observe(example));

    // Logo fade-out
    const logo = document.querySelector('header img.logo');
    if (logo) {
        document.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const fadeDistance = 400;
            let opacity = 1 - scrollPosition / fadeDistance;
            if (opacity < 0) opacity = 0;
            logo.style.opacity = opacity;
        });
    }
});