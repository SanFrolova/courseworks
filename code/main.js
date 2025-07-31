document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const burgerSpans = document.querySelectorAll('.burger-menu span');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            
            if (burgerMenu.classList.contains('active')) {
                burgerSpans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                burgerSpans[1].style.opacity = '0';
                burgerSpans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                burgerSpans[0].style.transform = 'rotate(0) translate(0, 0)';
                burgerSpans[1].style.opacity = '1';
                burgerSpans[2].style.transform = 'rotate(0) translate(0, 0)';
            }
        });
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
                burgerSpans[0].style.transform = 'rotate(0) translate(0, 0)';
                burgerSpans[1].style.opacity = '1';
                burgerSpans[2].style.transform = 'rotate(0) translate(0, 0)';
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
                burgerSpans[0].style.transform = 'rotate(0) translate(0, 0)';
                burgerSpans[1].style.opacity = '1';
                burgerSpans[2].style.transform = 'rotate(0) translate(0, 0)';
            }
        });
    }
});