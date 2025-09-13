document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('shipping-popup');
    
    // Show popup with fade in
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 100);

    // Hide popup after 5 seconds
    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500); // Wait for fade out animation
    }, 5000);
});
