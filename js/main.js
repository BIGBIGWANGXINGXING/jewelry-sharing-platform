/**
 * Main JavaScript file for JewelryShare Platform
 * Handles all interactive functionality and user interactions
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initSearch();
    initCards();
    initAnimations();
});

/**
 * Initialize navbar functionality
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    // Add scroll event listener for navbar
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Scroll Down
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Scroll Up
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchForm = document.querySelector('.navbar form');
    const searchInput = document.querySelector('.navbar input[type="search"]');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // In a real application, this would redirect to search results
                console.log('Searching for:', searchTerm);
                // You would typically make an API call here
            }
        });
    }
}

/**
 * Initialize card interactions
 */
function initCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Add click event to cards
        card.addEventListener('click', function() {
            // In a real application, this would navigate to the item detail page
            console.log('Card clicked:', this.querySelector('.card-title').textContent);
        });

        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });

        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
}

/**
 * Initialize animations
 */
function initAnimations() {
    // Add animation class to elements when they come into view
    const animatedElements = document.querySelectorAll('.card, .hero-section, .categories-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Handle like button clicks
 * @param {HTMLElement} button - The like button element
 */
function handleLike(button) {
    const icon = button.querySelector('i');
    const count = button.querySelector('.count');
    
    if (icon.classList.contains('far')) {
        // Like
        icon.classList.remove('far');
        icon.classList.add('fas');
        count.textContent = parseInt(count.textContent) + 1;
    } else {
        // Unlike
        icon.classList.remove('fas');
        icon.classList.add('far');
        count.textContent = parseInt(count.textContent) - 1;
    }
}

/**
 * Handle image upload
 * @param {Event} event - The file input change event
 */
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.querySelector('.image-preview');
            if (preview) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
        };
        reader.readAsDataURL(file);
    }
}

/**
 * Initialize image upload functionality
 */
function initImageUpload() {
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
        fileInput.addEventListener('change', handleImageUpload);
    }
}

/**
 * Handle form submission
 * @param {Event} event - The form submit event
 */
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted with data:', Object.fromEntries(formData));
    
    // Show success message
    showNotification('Form submitted successfully!', 'success');
}

/**
 * Show notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (success, error, warning)
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize additional functionality when the page loads
window.addEventListener('load', function() {
    initImageUpload();
    
    // Add form submission handlers
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
}); 