window.addEventListener('DOMContentLoaded', () => {

    const submitLogin = document.getElementById('submitLogin');
    submitLogin.addEventListener('click', (event) => {
        event.preventDefault();
        const username = document.getElementById('InputCorreo').value;
        const password = document.getElementById('InputPassword').value;
        const rememberMe = document.getElementById('checkRemember').checked;
        
        login(username, password, rememberMe);

    });
});

function login(username, password, rememberMe) {
    if (username === 'name@example.com' && password === 'demodemo') {
        // Simular un inicio de sesión exitoso
        sessionStorage.setItem('loggedIn', 'true'); // Guardar estado de sesión
        localStorage.setItem('username', username); // Guardar nombre de usuario
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        location.href = 'index.html'; // Redirigir a la página principal
    } else {
        alert('Credenciales incorrectas');
    }
}