function showError(input, errorSpan, message) {
    errorSpan.textContent = message;
    input.classList.add('input-error'); // Add a red border via CSS
}

function validateEmail(email) {
    // Standard email regex pattern
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

validateForm = (event) => {
    let isFormValid = true;

    // Selecting all inputs that have the 'required' attribute
    const requiredInputs = document.querySelectorAll('[required]');
    console.log(requiredInputs);

    requiredInputs.forEach(input => {
        // Find the matching error span based on input ID (e.g., "name" -> "name-error")
        const errorElement = document.getElementById(`${input.id}-error`);

        // Reset styles and messages before checking
        errorElement.textContent = "";
        input.classList.remove('input-error');

        // Checking if input value is empty
        if (input.value.trim() === "") {
            showError(input, errorElement, "This field is required.");
            isFormValid = false;
        }

        // Checking for valid email ID
        else if (input.type === 'email' && !validateEmail(input.value)) {
            showError(input, errorElement, "Please enter a valid email address.");
            isFormValid = false;
        }
    });

    // Preventing submission if any check failed
    if (!isFormValid) {
        event.preventDefault();
    }
}

contactForm = document.getElementById('contact-form')
contactForm.addEventListener('submit', validateForm);
