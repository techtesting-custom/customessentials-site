document.addEventListener('DOMContentLoaded', function() {
    // Add transition class to body
    document.body.classList.add('page-transition');

    // Handle all link clicks for smooth transitions
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.href && !link.href.startsWith('#') && !link.href.includes('mailto:')) {
            e.preventDefault();
            
            // Add exit animation
            document.body.classList.add('page-exit');
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = link.href;
            }, 300);
        }
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            // Position ripple
            const rect = button.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            
            // Add ripple to button
            button.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Handle form submissions with animation
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('[type="submit"]');
            if (submitButton) {
                submitButton.classList.add('loading');
            }
        });
    });
});
