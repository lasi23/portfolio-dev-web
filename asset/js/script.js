const nav = document.querySelector('nav');
const burger = document.querySelector('nav img');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const allLinks = document.querySelectorAll('.nav-links li a');  
const img = document.getElementById('img-fougere');
const scrollBtn = document.getElementById('scroll-to-top-container');

// scroll barre de navigation
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.left = '0';
    }
});

// navigation dinamique portable

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.id;
        const link = document.querySelector(`a[href="#${id}"]`);

        if (!link) return;

        if (entry.isIntersecting) {
        link.classList.add("show");
        } else {
        link.classList.remove("show");
        }
    });
    }, {
    threshold: 0.5 // 50% visible
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// menu burger

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
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
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

// initialisation aos
function initAOS() {
    AOS.init({
        delay: 200,
        duration: 800,
        disable: window.innerWidth <= 1024 
    });
}

window.addEventListener('load', initAOS);


// apparition du boutton scroll to top après 2 secondes
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
