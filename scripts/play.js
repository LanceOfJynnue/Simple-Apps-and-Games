const heading = document.getElementById('main-heading');
const button = document.getElementById('play-btn');

document.addEventListener("DOMContentLoaded", function() {
  fetch('../misc/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });
});

button.addEventListener('click', () => {
    document.getElementById('game').removeAttribute("class", "collapse");
    document.getElementById('page').setAttribute("class", "collapse");
});