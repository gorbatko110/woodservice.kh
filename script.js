// // Получаем элементы для скрытого меню
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Плавный скроллинг и скрытие кнопки при прокрутке
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > header.offsetHeight) {
        menuIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'none';
        navMenu.classList.add('hidden');
    }
});

// Плавный скроллинг для всех ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});