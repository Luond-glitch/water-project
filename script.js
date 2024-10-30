document.getElementById('loginButton').addEventListener('click', function() {
    alert(prompt('Thank you for your willingness!',""));
    // You can add your login functionality here
});
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', () => {
        alert(`You clicked on: ${step.querySelector('h2').innerText}`);
    });
});