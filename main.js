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

const navHide = document.querySelector('.nav-list');

navHide.addEventListener('click', () => {
    nav.hasAttribute('data-visible')
        ? navToggle.setAttribute('aria-expanded', false)
        : navToggle.setAttribute('aria-expanded', true);

    nav.toggleAttribute('data-visible');
    header.toggleAttribute('data-overlay');
});


function reveal() {
    var reveals = document.querySelectorAll(".scroll-reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);