document.addEventListener('DOMContentLoaded', () => {
    // Inicialize o ScrollReveal
    ScrollReveal().reveal('.header_image img', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        reset: true  // Adiciona a opção para reiniciar a animação ao entrar e sair da viewport
    });

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
});
