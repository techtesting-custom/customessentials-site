// Main JavaScript file for the home page
document.addEventListener('DOMContentLoaded', function() {
    // No featured projects needed

    // Load featured projects
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        featuredProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-card';
            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <h3>${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <p class="project-details">${project.details}</p>
                <a href="#contact" class="cta-button">Request Quote</a>
            `;
            projectGrid.appendChild(projectElement);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
