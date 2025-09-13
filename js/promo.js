// JavaScript file for the promo page
document.addEventListener('DOMContentLoaded', function() {
    // Add click-to-copy functionality for promo codes
    document.querySelectorAll('.promo-code').forEach(code => {
        code.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.backgroundColor = '#d4edda';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = '#f8f9fa';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
});
