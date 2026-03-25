// scroll barre de navigation
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.left = '0';
    }
});

// menu burger
const burger = document.querySelector('nav img');
const navLinks = document.querySelector('.nav-links');
function resizeHandler() {
    if (window.innerWidth <= 768) {
        burger.style.display = 'block';
    }else {
        burger.style.display = 'none';
    }
}
window.addEventListener('resize', resizeHandler);
resizeHandler(); 

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// animation du slogan
if (window.innerWidth > 768) {
    const titre = document.getElementById('anim-slogan');

    titre.innerHTML = titre.textContent
        .split('')
        .map(char => char === ' ' ? `<span class="char">&nbsp;</span>` : `<span class="char">${char}</span>`)
        .join('');

    anime({
        targets: '.char',
        translateY: [-50, 0],
        rotate: [-360, 0],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutBounce',
        loop: false
    });
}
// animation de l'image de fougère qui s'estompe progressivement après 2 secondes
const img = document.getElementById('img-fougere');
let opacity = 1;
setTimeout(() => {
    const interval = setInterval(() => {
        opacity -= 0.005;
        img.style.opacity = opacity;
        
        if (opacity <= 0.7) {
            clearInterval(interval);
        }
    }, 80); 
}, 2000);

// apparition du boutton scroll to top après 2 secondes
const scrollBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});