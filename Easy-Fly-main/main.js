document.addEventListener('DOMContentLoaded', () => {

    // Código para o menu de navegação
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    const ScrollRevealOption = {
        origin: "bottom",
        distance: "50px",
        duration: 1000
    }

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

    ScrollReveal().reveal('.header_image img', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        reset: true,
    });

    ScrollReveal().reveal(".header_content p", {
        ...ScrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".header_content h1", {
        ...ScrollRevealOption,
        delay: 1000,
    });
    ScrollReveal().reveal(".header_btns", {
        ...ScrollRevealOption,
        delay: 1500,
    });
    ScrollReveal().reveal(".destination_card", {
        ...ScrollRevealOption,
        interval: 400,
        reset: true,
    });

    ScrollReveal().reveal('.showcase_image img', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        reset: true,
    });

    ScrollReveal().reveal(".showcase_content h4", {
        ...ScrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".showcase_content p", {
        ...ScrollRevealOption,
        delay: 1000,
    });
    ScrollReveal().reveal(".showcase_btn", {
        ...ScrollRevealOption,
        delay: 1500,
    });
    ScrollReveal().reveal(".banner_card", {
        ...ScrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".discover_card", {
        ...ScrollRevealOption,
        delay: 500,
    });

    const swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
    });

});