
const formulario = document.querySelector(".newsletter-form")
const btnEnviar = document.getElementById("btn-correo")
const emailInput = document.getElementById("value-correo")
const nombreInput = document.getElementById("nombre")

let listaEmail = [];

eventListeners();

function eventListeners() {
    btnEnviar.addEventListener("click", agregarEmail);
}

function agregarEmail() {

    const datosUsuario = {
        nombre: "",
        email: ""
    }

    datosUsuario.nombre = nombreInput.value
    datosUsuario.email = emailInput.value

    listaEmail = [...listaEmail, datosUsuario]

    const mensajeAlerta = document.createElement("p");
    mensajeAlerta.classList.add("success");
    mensajeAlerta.textContent = "Formulario enviado correctamente";
    formulario.appendChild(mensajeAlerta);

    setTimeout(() => {
        formulario.reset();
        mensajeAlerta.remove(); 
    }, 2000);

    console.log(listaEmail)
}

