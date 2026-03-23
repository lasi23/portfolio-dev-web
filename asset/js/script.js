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
        loop: true
    });
}