const heading = document.getElementById('main-heading');
const button = document.getElementById('action-btn');

button.addEventListener('click', () => {
    heading.textContent = "Test";
    
    heading.style.color = "#28a745";
    
    alert("Just a test.");
});
