function animateCharts() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const height = bar.getAttribute('data-height');
        bar.style.height = height + '%';
    });
}

window.addEventListener('load', function() {
    setTimeout(animateCharts, 500);
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s, transform 0.8s';
    observer.observe(section);
});

document.querySelectorAll('.timeline-content').forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateX(30px)';
    item.style.transition = 'opacity 0.8s, transform 0.8s';
    observer.observe(item);
});
