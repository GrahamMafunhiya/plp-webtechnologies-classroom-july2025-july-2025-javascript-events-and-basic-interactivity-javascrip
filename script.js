// === Light/Dark Mode Toggle ===
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// === Interactive Counter ===
let count = 0;
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

// === Collapsible FAQ Section ===
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// === Form Validation ===
const signupForm = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let errors = [];

    // Name validation
    if (name.length < 2) {
        errors.push("Name must be at least 2 characters.");
    }

    // Email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Email is invalid.");
    }

    // Password validation
    if (password.length < 6) {
        errors.push("Password must be at least 6 characters.");
    }

    // Show feedback
    if (errors.length > 0) {
        formMessage.style.color = 'red';
        formMessage.innerHTML = errors.join('<br>');
    } else {
        formMessage.style.color = 'green';
        formMessage.textContent = "Form submitted successfully! ✅";
        signupForm.reset();
    }
});
