// Séparer le texte en lettres
const titre = document.getElementById('anim-slogan');
titre.innerHTML = titre.textContent
    .split('')
    .map(char => char === ' ' ? `<span class="char">&nbsp;</span>` : `<span class="char">${char}</span>`)
    .join('');

// Animation des lettres
anime({
    targets: '.char',
    translateY: [-50, 0],   // départ de 50px au-dessus
    rotate: [-360, 0],      // rotation d'un tour complet
    duration: 800,
    delay: anime.stagger(50), // décalage entre chaque lettre
    easing: 'easeOutBounce',
    loop: false
});