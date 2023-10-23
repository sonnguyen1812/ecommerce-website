const users = [
    { username: "admin", password: "admin" },
    { username: "member", password: "member" },
];

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the home page
    } else {
        alert("Login failed. Please check your credentials.");
    }
}

function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (users.some((u) => u.username === username)) {
        alert("Username already exists. Please choose a different one.");
    } else {
        users.push({ username, password });
        alert("Registration successful!");
    }
}
