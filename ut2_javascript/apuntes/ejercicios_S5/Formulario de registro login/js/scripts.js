DOM = {
    loginMail: document.getElementById("loginMail"),
    loginPassword: document.getElementById("loginPassword"),

    nombre: document.getElementById("name"),
    surName: document.getElementById("surName"),
    email: document.getElementById("email"),
    age: document.getElementById("age"),
    city: document.getElementById("city"),
    registerPassword: document.getElementById("registerPassword"),
    confirmPassword: document.getElementById("confirmPassword"),

    registerForm: document.getElementById("registerForm"),
    loginForm: document.getElementById("loginForm"),

}

document.addEventListener("DOMContentLoaded", () => {

    DOM.loginForm.addEventListener("submit", handleLogin)

    function handleLogin(){

        if(!localStorage.getItem(DOM.loginMail.value)){
            console.log("Este usuario no existe. Regístrese primero")
            return
        }

        if(!localStorage.getItem(DOM.loginPassword.value) != localStorage.getItem(DOM.loginMail.value).mailUsuario){
            console.log("La contraseña es incorrecta")
            return;
        }
    }

    DOM.registerForm.addEventListener("submit", handleRegister)

    function handleRegister(){

        // Nombre no numeros 
        // edad no letras no mucha edad
        
        if(localStorage.getItem(DOM.email.value)){
            console.log("El mail ya existe")
            return
        }

        let regExpMail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

        if(!DOM.email.value.match(regExpMail)){
            console.log("El correo no es válido")
            return;
        }

        let numChar = /\d/

        if(DOM.nombre.value.test(numChar) || DOM.surName.value.test(numChar)){
            console.log("Ni el nombre ni los apellidos pueden contener numeros")
            return
        }

        if(DOM.age.value > 100 || DOM.age.value < 18){
            console.log("La edad no es válida. El usuario debe ser mayor de edad")
            return
        }

        if(DOM.confirmPassword.value != DOM.registerPassword.value){
            console.log("Las la contraseña de confirmación debe ser igual a la de registro")
            return
        }

        usuario = {
            nombreUsuario: DOM.nombre.value,
            apellidoUsuario: DOM.surName.value,
            mailUsuario: DOM.email.value,
            edadUsuario: DOM.age.value,
            ciudadUsuario: DOM.city.value,
            contraseñaUsuario: DOM.registerPassword.value
        }

        localStorage.setItem(DOM.email, usuario)
    }

})