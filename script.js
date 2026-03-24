document.addEventListener('DOMContentLoaded', () => {
    // 1. A lista de imagens (wallpapers)
    const images = [
        "images/wp9048980-kaiju-universe-wallpapers.jpg",
        "images/wp9100754-battra-wallpapers.jpg",
        "images/wp11723047-kaiju-universe-wallpapers.jpg",
        "images/wp11723048-kaiju-universe-wallpapers (1).jpg",
        "images/wp11723048-kaiju-universe-wallpapers.jpg",
        "images/wp11723109-kaiju-universe-wallpapers.jpg",
        "images/wp11723164-kaiju-universe-wallpapers.jpg",
    ];
    // 2. Variáveis de estado
    const carouselContainer = document.getElementById('background-carousel');
    let currentIndex = 0;
    const intervalTime = 8000; // Tempo em milissegundos para trocar a imagem (8 segundos)

    // 3. Função para definir a imagem de fundo
    function setBackgroundImage() {
        if (images.length === 0) return;

        carouselContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    // 4. Função para avançar para a próxima imagem
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        setBackgroundImage();
    }

    // 5. Inicialização
    setBackgroundImage(); // Mostra a primeira imagem imediatamente

    // Começa o intervalo para trocar as imagens
    setInterval(nextImage, intervalTime);
});