document.addEventListener("DOMContentLoaded", () => {

    let loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", () => {
        // regocer todos los datos del login formulario

    })

    let registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", () => {
        // regocer todos los datos del register formulario
        const name = document.getElementById("name")
        const fullName = document.getElementById("fullName")
        const email = document.getElementById("email")
        const age = document.getElementById("age")
        const city = document.getElementById("city")
        const registerPassword = document.getElementById("registerPassword")
        const confirmPassword = document.getElementById("confirmPassword")

        validarDatosRegister();
    })

    function validarDatosRegister(){

    }

})