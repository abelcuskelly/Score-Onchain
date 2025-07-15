// Score Onchain - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    initNavigation();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Connect wallet functionality
    initWalletConnection();
    
    // Animated counters
    initCounters();
    
    // Mobile navigation toggle
    initMobileNav();
});

// Navigation highlighting based on scroll position
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', highlightNavLink);
    
    // Update on page load
    highlightNavLink();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Wallet connection functionality
function initWalletConnection() {
    const connectWalletBtn = document.querySelector('.connect-wallet-btn');
    
    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', async function() {
            await connectWallet();
        });
    }
}

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            
            if (accounts.length > 0) {
                const account = accounts[0];
                const shortAddress = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`;
                
                // Update button text
                const connectBtn = document.querySelector('.connect-wallet-btn');
                connectBtn.textContent = shortAddress;
                connectBtn.style.background = '#28a745';
                
                // Store connected state
                localStorage.setItem('walletConnected', 'true');
                localStorage.setItem('walletAddress', account);
                
                showNotification('Wallet connected successfully!', 'success');
            }
        } catch (error) {
            console.error('Error connecting wallet:', error);
            showNotification('Failed to connect wallet. Please try again.', 'error');
        }
    } else {
        // MetaMask not installed
        showNotification('Please install MetaMask to connect your wallet.', 'warning');
        // Redirect to MetaMask website
        window.open('https://metamask.io/download/', '_blank');
    }
}

// Check if wallet is already connected on page load
function checkWalletConnection() {
    const isConnected = localStorage.getItem('walletConnected');
    const walletAddress = localStorage.getItem('walletAddress');
    
    if (isConnected === 'true' && walletAddress) {
        const shortAddress = `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`;
        const connectBtn = document.querySelector('.connect-wallet-btn');
        connectBtn.textContent = shortAddress;
        connectBtn.style.background = '#28a745';
    }
}

// Initialize wallet connection check
document.addEventListener('DOMContentLoaded', checkWalletConnection);

// Animated counters for statistics
function initCounters() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all counter elements
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const updateCounter = () => {
        if (current < target) {
            current += step;
            if (current > target) current = target;
            
            // Format the number based on original format
            const originalText = element.textContent;
            if (originalText.includes('k')) {
                element.textContent = (current / 1000).toFixed(1) + 'k';
            } else if (originalText.includes('~')) {
                element.textContent = '~' + Math.round(current);
            } else {
                element.textContent = Math.round(current);
            }
            
            requestAnimationFrame(updateCounter);
        }
    };
    
    updateCounter();
}

// Mobile navigation toggle
function initMobileNav() {
    // Add mobile menu button if needed
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #667eea;
        cursor: pointer;
        padding: 5px;
    `;
    
    // Insert mobile menu button
    const navContainer = document.querySelector('.nav-container');
    navContainer.insertBefore(mobileMenuBtn, navContainer.lastElementChild);
    
    // Mobile menu toggle functionality
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-open');
    });
    
    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-link');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-open');
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Notification styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    `;
    
    // Set background color based on type
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add mobile menu styles dynamically
function addMobileMenuStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
            }
            
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                padding: 1rem;
                border-radius: 0 0 15px 15px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                transform: translateY(-20px);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s ease;
            }
            
            .nav-links.mobile-open {
                transform: translateY(0);
                opacity: 1;
                pointer-events: all;
            }
            
            .nav-link {
                padding: 0.5rem 0;
                border-bottom: 1px solid rgba(0,0,0,0.1);
            }
            
            .nav-link:last-child {
                border-bottom: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize mobile menu styles
document.addEventListener('DOMContentLoaded', addMobileMenuStyles);

// Quiz card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const quizCards = document.querySelectorAll('.quiz-card');
    
    quizCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add animation to cards when they come into view
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.quiz-card, .step, .feature');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', initScrollAnimations); 