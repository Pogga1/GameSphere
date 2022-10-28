if (username && email && password) {
    const response = await fetch('/api/users/signup', {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
    headers: { 'Content-Type': 'application/json' },
    });
}

if (username && email && password) {
    const response = await fetch('/api/users/signup', {
    method: 'DELETE',
    body: JSON.stringify({ username, email, password }),
    headers: { 'Content-Type': 'application/json' },
    });
}