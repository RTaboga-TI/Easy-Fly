document.addEventListener('DOMContentLoaded', () => {
    // Código para o menu de navegação
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        // Alterna a classe 'open' para mostrar ou esconder o menu
        navLinks.classList.toggle("open");

        // Atualiza o ícone do botão com base no estado do menu
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    // Adiciona um listener para fechar o menu ao clicar em um item do menu
    navLinks.addEventListener("click", () => {
        // Remove a classe 'open' para fechar o menu
        navLinks.classList.remove("open");
        // Atualiza o ícone do botão para o estado de menu fechado
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });

    // Verifique se você tem um elemento com a classe .swiper, se não houver, remova a inicialização do Swiper
    const swiperContainer = document.querySelector(".swiper");
    if (swiperContainer) {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
        });
    }
});