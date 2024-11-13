// document.getElementById("loginForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Evita que el formulario se envíe

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Ejemplo básico de autenticación
//     if (username === "admin" && password === "1234") {
//         document.getElementById("message").textContent = "Inicio de sesión exitoso.";
//         document.getElementById("message").style.color = "green";
//     } else {
//         document.getElementById("message").textContent = "Usuario o contraseña incorrectos.";
//     }
// });
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('exampleInputPassword1');
    const icon = this.querySelector('i'); // Selecciona el ícono dentro del botón

    // Alternar entre ver y ocultar contraseña
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
    
});


const emailInput = document.getElementById('exampleInputEmail1');
const password = document.getElementById('exampleInputPassword1');
// Oculta el placeholder al hacer foco
emailInput.addEventListener('focus', function () {
    this.setAttribute('data-placeholder', this.getAttribute('placeholder')); // Guarda el placeholder original
    this.setAttribute('placeholder', ''); // Borra el placeholder temporalmente
});

///passwordf

password.addEventListener('focus', function () {
    this.setAttribute('data-placeholder', this.getAttribute('placeholder')); // Guarda el placeholder original
    this.setAttribute('placeholder', ''); // Borra el placeholder temporalmente
});

// Restaura el placeholder cuando se hace clic fuera del campo (si está vacío)
emailInput.addEventListener('blur', function () {
    if (this.value === '') { // Solo restaura si el campo está vacío
        this.setAttribute('placeholder', this.getAttribute('data-placeholder'));
    }
});

password.addEventListener('blur', function () {
    if (this.value === '') { // Solo restaura si el campo está vacío
        this.setAttribute('placeholder', this.getAttribute('data-placeholder'));
    }
});