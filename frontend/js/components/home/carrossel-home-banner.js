document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelector('.contain-banners');
    const images = document.querySelectorAll('.contain-banners img');
    const prevBtn = document.querySelector('.carrossel-btn.prev');
    const nextBtn = document.querySelector('.carrossel-btn.next');
    const indicadores = document.querySelectorAll('.indicador');
    const carrosselContainer = document.querySelector('.contain-carrossel'); // Container principal
    
    let currentIndex = 0;
    const totalImages = images.length;
    let intervalId;
    
    function updateCarrossel() {
        banners.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Atualiza indicadores
        indicadores.forEach((ind, index) => {
            ind.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarrossel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarrossel();
    }
    
    // Inicia o autoplay
    function startAutoPlay() {
        intervalId = setInterval(nextSlide, 5500);
    }
    
    // Para o autoplay
    function stopAutoPlay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    
    // Event listeners para os botões
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay(); // Pausa quando há interação manual
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay(); // Pausa quando há interação manual
    });
    
    // Event listeners para os indicadores
    indicadores.forEach((ind, index) => {
        ind.addEventListener('click', () => {
            currentIndex = index;
            updateCarrossel();
            stopAutoPlay(); // Pausa quando há interação manual
        });
    });
    
    // Pausa quando o mouse entra no carrossel
    carrosselContainer.addEventListener('mouseenter', stopAutoPlay);
    
    // Retoma quando o mouse sai
    carrosselContainer.addEventListener('mouseleave', startAutoPlay);
    
    // Inicia o carrossel
    startAutoPlay();
});