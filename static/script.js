// Add the current year to the footer
function addYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = `&copy; ${currentYear} Designed and Coded by Vishvaa Ravishankar`;
}

// Show list and hide button
function showList() {
    document.getElementById("funList").style.display = "block";
    document.getElementById("showListBtn").style.display = "none";
}

// Toggle 'Read More / Read Less' functionality
document.getElementById("toggleBioBtn").addEventListener("click", function () {
    const longBio = document.getElementById("longBio");
    const button = document.getElementById("toggleBioBtn");

    if (longBio.style.display === "none") {
        longBio.style.display = "block"; // Show long bio
        button.textContent = "Read Less"; // Change button text
    } else {
        longBio.style.display = "none"; // Hide long bio
        button.textContent = "Read More"; // Change button text
    }
});

// Form validation using JavaScript
function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const commentError = document.getElementById("commentError");

    nameError.innerText = emailError.innerText = commentError.innerText = "";

    if (!name.checkValidity()) {
        nameError.innerText = "Name is required.";
        isValid = false;
    }

    if (!email.checkValidity()) {
        emailError.innerText = "Valid email is required.";
        isValid = false;
    }

    if (!comment.checkValidity()) {
        commentError.innerText = "Comment is required.";
        isValid = false;
    }

    return isValid;
}

// Greeting function based on the current hour
function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;

    if (h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h < 20) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    // Update the <h2> element if it exists
    let E = document.getElementById("greeting");
    if (E) {
        E.innerHTML = greeting;
    }
}

// Conditionally invoke the greeting function on index.html
if (window.location.href.includes("index.html")) {
    greetingFunc();
}

// Fetch and display random advice using Advice Slip API
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = "Oops! Something went wrong. Please try again.";
            console.error(error);
        });
}