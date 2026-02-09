// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Search functionality
document.querySelector('.search-btn')?.addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input');
    const categorySelect = document.querySelector('.category-select');
    
    if (searchInput.value.trim()) {
        console.log('Searching for:', searchInput.value, 'in category:', categorySelect.value);
        alert(`Searching for: ${searchInput.value}\nCategory: ${categorySelect.value}`);
    } else {
        alert('Please enter a search term');
    }
});

// Product cards - Contact Supplier
document.querySelectorAll('.btn-contact').forEach(btn => {
    btn.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h4').textContent;
        alert(`Contact form would open for: ${productName}\n\nIn a real implementation, this would open a contact modal or redirect to a contact page.`);
    });
});

// Supplier cards - View Company
document.querySelectorAll('.supplier-card .btn-outline').forEach(btn => {
    btn.addEventListener('click', function() {
        const supplierCard = this.closest('.supplier-card');
        const companyName = supplierCard.querySelector('h3').textContent;
        alert(`Viewing company profile: ${companyName}\n\nIn a real implementation, this would navigate to the company's profile page.`);
    });
});

// Category cards click
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent;
        console.log('Category clicked:', categoryName);
        alert(`Browsing category: ${categoryName}\n\nIn a real implementation, this would show products in this category.`);
    });
});

// Service cards
document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceName = this.closest('.service-card').querySelector('h3').textContent;
        alert(`Opening: ${serviceName}\n\nIn a real implementation, this would navigate to the service page.`);
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// CTA Buttons
document.querySelectorAll('.cta-banner button').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent.includes('Buying') ? 'buying' : 'selling';
        alert(`Welcome to AfriTradeHub!\n\nYou selected: Start ${action}\n\nIn a real implementation, this would navigate to registration/onboarding.`);
    });
});

// Hero CTA
document.querySelector('.slide-content .btn-primary')?.addEventListener('click', function() {
    alert('Start Sourcing Now!\n\nIn a real implementation, this would navigate to the product search or signup page.');
});

// Messages and Orders buttons
document.querySelectorAll('.btn-icon').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent.trim();
        alert(`Opening ${action}...\n\nIn a real implementation, this would show your ${action.toLowerCase()} panel.`);
    });
});

// Sign In / Join Free buttons
document.querySelectorAll('.header-actions .btn-secondary, .header-actions .btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent.trim();
        alert(`${action} form would appear here.\n\nIn a real implementation, this would open a login/signup modal or redirect to auth page.`);
    });
});

// Add hover effects to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--primary-color)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--border-color)';
    });
});

// Regional market links
document.querySelectorAll('.region-card a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const location = this.textContent.trim();
        alert(`Browsing suppliers in: ${location}\n\nIn a real implementation, this would filter suppliers by location.`);
    });
});

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    console.log('AfriTradeHub B2B Marketplace loaded successfully!');
    
    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards
    document.querySelectorAll('.product-card, .supplier-card, .service-card, .category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Search on Enter key
document.querySelector('.search-input')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-btn').click();
    }
});

console.log('AfriTradeHub - Africa\'s Leading B2B Marketplace');
