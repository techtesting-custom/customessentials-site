// Navigation scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    // Handle navbar visibility on scroll
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Show/hide navbar based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down & past threshold - hide navbar
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up or near top - show navbar
            navbar.classList.remove('navbar-hidden');
        }
        
        lastScrollY = currentScrollY;
    });
});