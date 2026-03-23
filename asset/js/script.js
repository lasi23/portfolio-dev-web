if (window.innerWidth > 768) {
    const titre = document.getElementById('anim-slogan');

    titre.innerHTML = titre.textContent
        .split('')
        .map(char => char === ' ' ? `<span class="char">&nbsp;</span>` : `<span class="char">${char}</span>`)
        .join('');

    anime({
        targets: '.char',
        translateY: [-20, 0],
        rotate: [-360, 0],
        duration: 1600,
        delay: anime.stagger(20),
        easing: 'easeOutBounce',
        loop: false
    });
}