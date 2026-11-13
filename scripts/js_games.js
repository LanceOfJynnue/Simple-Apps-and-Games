const heading = document.getElementById('main-heading');
const button = document.getElementById('action-btn');
let x = 0;

/*button.addEventListener('click', () => {
    heading.textContent = x;
    x++;
    heading.style.color = "#28a745";
    
    //alert("Just a test.");
});*/

document.addEventListener("DOMContentLoaded", function() {
  fetch('../misc/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });
});
