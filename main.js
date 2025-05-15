document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const burgerSpans = document.querySelectorAll('.burger-menu span');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            
            // Анимация бургера в крестик и обратно
            if (burgerMenu.classList.contains('active')) {
                // Превращаем в крестик
                burgerSpans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                burgerSpans[1].style.opacity = '0';
                burgerSpans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                // Возвращаем в бургер
                burgerSpans[0].style.transform = 'rotate(0) translate(0, 0)';
                burgerSpans[1].style.opacity = '1';
                burgerSpans[2].style.transform = 'rotate(0) translate(0, 0)';
            }
        });

        // Close menu when clicking on a link
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
                // Возвращаем в бургер
                burgerSpans[0].style.transform = 'rotate(0) translate(0, 0)';
                burgerSpans[1].style.opacity = '1';
                burgerSpans[2].style.transform = 'rotate(0) translate(0, 0)';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
                // Возвращаем в бургер
                burgerSpans[0].style.transform = 'rotate(0) translate(0, 0)';
                burgerSpans[1].style.opacity = '1';
                burgerSpans[2].style.transform = 'rotate(0) translate(0, 0)';
            }
        });
    }
});