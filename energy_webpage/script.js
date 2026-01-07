function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    // Show selected page
    document.getElementById(pageId).classList.remove('hidden');

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('nav li');
    navItems.forEach(item => item.classList.remove('active'));

    // Add active class to current nav item
    document.getElementById('nav-' + pageId).classList.add('active');
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Load home page by default
showPage('home');
