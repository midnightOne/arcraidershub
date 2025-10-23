// Load header and footer includes
(function() {
    // Load header
    fetch('/includes/header.html')
        .then(response => response.text())
        .then(html => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = html;
                highlightActiveNav();
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('/includes/footer.html')
        .then(response => response.text())
        .then(html => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = html;
            }
        })
        .catch(error => console.error('Error loading footer:', error));

    // Highlight active navigation item based on current page
    function highlightActiveNav() {
        const path = window.location.pathname;
        const navLinks = document.querySelectorAll('nav a[data-nav]');
        
        navLinks.forEach(link => {
            const navId = link.getAttribute('data-nav');
            const href = link.getAttribute('href');
            
            // Check if current page matches this nav item
            if (
                (navId === 'home' && (path === '/' || path === '/index.html')) ||
                (navId !== 'home' && path.includes(`/${navId}/`))
            ) {
                link.classList.add('active');
            }
        });
    }
})();

