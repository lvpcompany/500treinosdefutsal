// Funzione per mostrare la data corrente
function updateCurrentDate() {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // getMonth() restituisce 0-11
    const ano = data.getFullYear();
    
    const dataFormatada = `${dia}/${mes}/${ano}`;
    
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = dataFormatada;
    }
}

// Funzione per animazioni al scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.product-column');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
}

// Funzione per effetti hover sui pulsanti
function addButtonEffects() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        ctaButton.addEventListener('click', function(e) {
            // Effetto di click
            this.style.transform = 'translateY(0) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            }, 150);
        });
    }
}

// Funzione per simulare il video player
function setupVideoPlayer() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            this.innerHTML = `
                <div style="color: #37ff00; text-align: center;">
                    <i class="fas fa-spinner fa-spin" style="font-size: 3rem; margin-bottom: 10px;"></i>
                    <p>Caricamento video...</p>
                    <small>Simulazione del player video</small>
                </div>
            `;
            
            setTimeout(() => {
                this.innerHTML = `
                    <div style="color: #37ff00; text-align: center;">
                        <i class="fas fa-play-circle" style="font-size: 4rem; margin-bottom: 10px;"></i>
                        <p>Video in riproduzione</p>
                        <small>+500 Treinos de Futsal</small>
                    </div>
                `;
            }, 2000);
        });
        
        videoPlaceholder.style.cursor = 'pointer';
    }
}

// Funzione per contatore di urgenza (opzionale)
function addUrgencyCounter() {
    const discountBanner = document.getElementById('discount-banner');
    
    if (discountBanner) {
        // Aggiungi un effetto di pulsazione per creare urgenza
        setInterval(() => {
            discountBanner.style.transform = 'scale(1.02)';
            setTimeout(() => {
                discountBanner.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
        
        discountBanner.style.transition = 'transform 0.2s ease';
    }
}

// Funzione per smooth scroll (se necessario)
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inizializzazione quando il DOM è caricato
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentDate();
    handleScrollAnimations();
    addButtonEffects();
    setupVideoPlayer();
    addUrgencyCounter();
    addSmoothScroll();
    
    // Aggiorna la data ogni minuto (opzionale)
    setInterval(updateCurrentDate, 60000);
});

// Gestione del resize della finestra
window.addEventListener('resize', function() {
    // Ricalcola le animazioni se necessario
    handleScrollAnimations();
});

