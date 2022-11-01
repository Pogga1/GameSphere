const signupForm = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim;
    const password = document.querySelector('#password-signup').value.trim;

    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText);
        }
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupForm);


