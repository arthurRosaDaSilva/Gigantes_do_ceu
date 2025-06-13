// Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Carrossel
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const slideCount = carouselSlides.length;

function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Atualizar dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateCarousel();
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Navegação por dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Auto-play
let interval = setInterval(nextSlide, 5000);

// Pausar auto-play quando o mouse estiver sobre o carrossel
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

carouselContainer.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 5000);
});

// Efeito de rolagem suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});