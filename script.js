// Smooth scrolling functionality for the 'START' button
document.getElementById("start").addEventListener("click", function () {
    window.scrollTo({
        top: 0,  // Scroll to the top of the page
        behavior: "smooth"  // Smooth scrolling effect
    });
});

// Smooth scrolling functionality for the 'FIND' button
document.getElementById("find").addEventListener("click", function () {
    window.scrollTo({
        top: document.body.scrollHeight,  // Scroll to the bottom of the page
        behavior: "smooth"  // Smooth scrolling effect
    });
});

// Functionality for the 'Collaborate' word to show the 'Contact Us' section
document.querySelector('.collaborate').addEventListener('click', function() {
    // Show the Contact Us section
    const contactUsSection = document.getElementById('contact-us');
    contactUsSection.style.display = 'block';  // Make Contact Us section visible
    
    // Scroll the page to the Contact Us section smoothly
    contactUsSection.scrollIntoView({ behavior: 'smooth' });
});
// script.js

// Function to display a simple alert when an email is entered
document.querySelector('.contact-email').addEventListener('focus', function() {
    console.log("You are now typing in the email input field.");
});

// If you want to log any clicks or show confirmation for social icons, you can use something like this
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        alert("You clicked on " + icon.classList[1]);  // Shows which social media icon was clicked
    });
});









// JS for the "START" button click event
document.getElementById("start").addEventListener("click", function() {
    alert("You clicked the Start button!");
    window.location.href = "#";  // You can modify this line to redirect to another page
});
