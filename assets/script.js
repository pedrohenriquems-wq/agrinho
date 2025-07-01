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
