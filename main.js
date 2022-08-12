const header = document.querySelector('.header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.navigation');

navToggle.addEventListener('click', () => {
    nav.hasAttribute('data-visible')
        ? navToggle.setAttribute('aria-expanded', false)
        : navToggle.setAttribute('aria-expanded', true);

    nav.toggleAttribute('data-visible');
    header.toggleAttribute('data-overlay');
});

