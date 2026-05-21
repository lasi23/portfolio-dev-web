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

// animation du slogan — mots non-cassables
    const titre = document.getElementById('anim-slogan');

    titre.innerHTML = titre.textContent
        .split(' ')
        .map(mot => {
            const chars = mot
                .split('')
                .map(c => `<span class="char">${c}</span>`)
                .join('');
            return `<span style="white-space:nowrap">${chars}</span>`;
        })
        .join(' ');

    anime({
        targets: '.char',
        translateY: [-50, 0],
        rotate: [-360, 0],
        opacity: [0, 1],        // ← fade in : invisible au départ
        duration: 200,
        delay: anime.stagger(50),
        easing: 'easeOutBounce',
        loop: false
    });


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
