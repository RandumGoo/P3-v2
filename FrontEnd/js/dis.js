// Bunch of Chatgpt generated JS Slop
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Submitting login form'); // Debugging statement
    console.log('Email:', email);
    console.log('Password:', password);

    try {
        const response = await fetch('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        console.log('Response status:', response.status); // Debugging statement

        if (response.ok) {
            const data = await response.json();
            console.log('Login successful, received token:', data.token); // Debugging statement
            localStorage.setItem('token', data.token); // Store the token in local storage
            window.location.href = 'indexv3.html'; // Redirect to the indexv3.html page
        } else {
            console.error('Login failed:', response.statusText); // Debugging statement
            alert('Login failed. Please check your credentials and try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});