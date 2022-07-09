const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


//se asigna evento a boton 
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    //si los valores en las casillas son iguales a esta contraseña y usuario continuar a otra pagina, en caso de que no, mostrar mensaje de error
    if (username === "Admin" && password === "Contra123!") {
        location.href = '../pages/altaAutos.html';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})