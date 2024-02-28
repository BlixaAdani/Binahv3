document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".login-button").addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        /*Combinación de usuarios y contraseñas*/
        var validCredentials = [
            { username: "Coder", password: "House" },
            { username: "Hola", password: "Tutor" }
        ];

        var isValid = false;

         validCredentials.forEach(function(credential) {
            if (credential.username === username && credential.password === password) {
                isValid = true;
            }
        });

        if (isValid) {
            alert("Login successful!");
            window.location.href = "aviso.html"
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});