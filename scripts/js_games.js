const heading = document.getElementById('main-heading');

document.addEventListener("DOMContentLoaded", function() {
  fetch('misc/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });
});
