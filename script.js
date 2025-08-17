// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector('#purchase');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.benefit-item, .testimonial, .access-section, .certificate-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects to testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        testimonial.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click tracking for analytics (placeholder)
    const trackableElements = document.querySelectorAll('.cta-button, .discount-banner');
    trackableElements.forEach(element => {
        element.addEventListener('click', function() {
            // Placeholder for analytics tracking
            console.log('Element clicked:', this.textContent.trim());
        });
    });

    // Add loading animation for video
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('loadstart', function() {
            this.style.opacity = '0.5';
        });
        
        video.addEventListener('canplay', function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.3s ease';
        });
    }

    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            const rate = scrolled * -0.5;
            header.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add countdown timer effect to discount banner
    const discountBanner = document.querySelector('.discount-banner');
    if (discountBanner) {
        setInterval(function() {
            discountBanner.style.transform = 'scale(1.05)';
            setTimeout(function() {
                discountBanner.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Mobile menu toggle (if needed in future)
    function toggleMobileMenu() {
        // Placeholder for mobile menu functionality
        console.log('Mobile menu toggled');
    }

    // Form validation (if forms are added later)
    function validateForm(form) {
        // Placeholder for form validation
        return true;
    }

    // Add loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(function() {
            const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle');
            heroElements.forEach((el, index) => {
                setTimeout(function() {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 100);
    });

    // Add error handling for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.log('Image failed to load:', this.src);
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('cta-button')) {
                focusedElement.click();
            }
        }
    });
});

// Add CSS for initial state
const style = document.createElement('style');
style.textContent = `
    .hero-title, .hero-subtitle {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    body.loaded .hero-title,
    body.loaded .hero-subtitle {
        opacity: 1;
        transform: translateY(0);
    }
    
    .discount-banner {
        transition: transform 0.2s ease;
    }
    
    .testimonial {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

