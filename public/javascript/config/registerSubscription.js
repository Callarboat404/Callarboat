// Firebase authentication and user registration
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUWz7jfrt46iBvAnZ-AESn8kNmqtbTlmw",
    authDomain: "callarboat-19b3b.firebaseapp.com",
    projectId: "callarboat-19b3b",
    storageBucket: "callarboat-19b3b.appspot.com",
    messagingSenderId: "68894973461",
    appId: "1:68894973461:web:008be388c45659cb7d781c",
    measurementId: "G-F86YXR2HNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get the form element
const registerForm = document.getElementById('registerSubscription');

// Add an event listener for form submission
registerForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve input field values
    const subplan = document.getElementById('subplan').value;
    const subdate = document.getElementById('subdate').value;
    const subdaterenew = document.getElementById('subdaterenew').value;
    const companyname = document.getElementById('companyname').value;
    const email = document.getElementById('emailUser').value;
    const password = document.getElementById('passwordUser').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Send user data to the server
        const response = await fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subplan,
                subdate,
                subdaterenew,
                companyname,
                email: user.email, // Use the authenticated user's email
                role: 'travel_agencies'
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Subscription created:', data.message);
            alert('Registration successful!');
        } else {
            throw new Error('Failed to create subscription');
        }
    } catch (error) {
        console.error('Error:', error);
        const errorMessage = error.message || 'Failed to log in';

        // Display error message in the designated error-message element
        const errorMessageElement = document.getElementById('errormsg');
        errorMessageElement.textContent = errorMessage;

        // Show both the error-message and errormsg elements
        const errorDivElement = document.getElementById('error-message');
        errorDivElement.style.display = 'block'; // Show the error message div

        // Hide error message after 5 seconds
        setTimeout(function () {
            errorDivElement.style.display = 'none';
        }, 3000); // 5000 milliseconds = 5 seconds
    }
});
