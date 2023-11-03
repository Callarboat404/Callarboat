document.getElementById('registerSubscription').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/loginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email, password)
        });
        if (response.ok) {
            const data = await response.json();
            // Handle the data received from the server here
            console.log(data);
        } else {
            // Handle errors if the request was not successful
            throw new Error('Login failed');
        }
    } catch (error) {
        console.error('Fetch erorr', error)
    }
});