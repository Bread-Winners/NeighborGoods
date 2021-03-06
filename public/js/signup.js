const signupFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#first-name').value.trim();
    const last_name = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();


    if (password != confirmPassword) {
        alert("Passwords must match!")
        return;
    } else {
        if (first_name && last_name && email && password) {
            const response = await fetch('/signup', {
                method: 'POST',
                body: JSON.stringify({ first_name, last_name, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText);
            }
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);