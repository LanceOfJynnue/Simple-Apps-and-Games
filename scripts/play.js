const button = document.getElementById('play-btn');

button.addEventListener('click', () => {
    document.getElementById('page').addAttribute("class", "collapse");
    document.getElementById('game').removeAttribute("class", "collapse");
});