// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const contactForm = document.getElementById('contact-form');

    // Add submit event listener to the form
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Here you would typically send this data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear the form
        contactForm.reset();

        // Show a success message (you can replace this with a more user-friendly notification)
        alert('Thank you for your message! We will get back to you soon.');
    });

    // Get the CTA button
    const ctaButton = document.getElementById('cta-button');

    // Add click event listener to the CTA button
    ctaButton.addEventListener('click', function() {
        alert('Great! Let\'s get started with your journey!');
    });
});