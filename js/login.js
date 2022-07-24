const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

let Usuario="Admin";
let Contra="Contra123!"

fetch('../json/lista.json')
.then(res => res.json())
.then(res => console.log(data.titulo));
//se asigna evento a boton 
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    //si los valores en las casillas son iguales a esta contraseña y usuario continuar a otra pagina, en caso de que no, mostrar mensaje de error
    // username === Usuario && password === Contra ? location.href = '../pages/altaAutos.html' : loginErrorMsg.style.opacity = 1;

    username === Usuario && password === Contra ? location.href = '../pages/altaAutos.html' : Swal.fire({
        title: 'Usuario o contraseña incorrectos',
        text: 'Introducir parametros correctos',
        icon: 'error',
        confirmButtonText: 'Continuar'
    });
})



