/**
 * Navbar Component JavaScript
 * Handles navbar functionality including login state and active navigation
 */

// Check login status
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loggedInElements = document.querySelectorAll('.logged-in');
    const loggedOutElements = document.querySelectorAll('.logged-out');
    
    if (isLoggedIn) {
        loggedInElements.forEach(el => el.style.display = 'block');
        loggedOutElements.forEach(el => el.style.display = 'none');
        
        // Set user name in dropdown
        const userName = localStorage.getItem('userName') || 'User';
        document.querySelector('.user-name').textContent = userName;
    } else {
        loggedInElements.forEach(el => el.style.display = 'none');
        loggedOutElements.forEach(el => el.style.display = 'block');
    }
}

// Handle logout
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    window.location.href = '/index.html';
}

// Set active navigation item
function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Handle scroll effects
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Initialize navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Check login status
        checkLoginStatus();
        
        // Set active navigation item
        setActiveNavItem();
        
        // Initialize scroll effect
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        
        // Add event listener for logout button
        const logoutBtn = document.querySelector('.dropdown-item:last-child');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }
        
        // Initialize Bootstrap dropdowns
        const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
        dropdownElementList.map(function (dropdownToggleEl) {
            return new bootstrap.Dropdown(dropdownToggleEl);
        });

        // Add animation delay to mobile menu items
        const mobileMenuItems = document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse .input-group, .navbar-collapse .logged-out, .navbar-collapse .logged-in');
        mobileMenuItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });

        // Handle search input focus
        const searchInput = document.querySelector('.input-group .form-control');
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.parentElement.classList.add('focused');
            });
            searchInput.addEventListener('blur', () => {
                searchInput.parentElement.classList.remove('focused');
            });
        }

        console.log('Navbar initialized successfully');
    } catch (error) {
        console.error('Error initializing navbar:', error);
    }
}); 