import {firebaseConfig} from './app.js'

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

window.Verify_Authenticate = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            //console.log("Sesión activa ✅", user.email)
            document.getElementById("usuario") ?  document.getElementById("usuario").innerHTML = `Usuario: ${user.email}` : ''
            let element = document.querySelector(".login")
            element.firstElementChild.innerHTML = "Logout "
            let et_i = element.lastElementChild
            et_i.classList.remove("fa-solid", "fa-arrow-right-to-bracket")
            et_i.classList.add("fa", "fa-arrow-left")       
        }
    })
}

Verify_Authenticate()

// Registrar usuario
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 6) {
    showMessage("La contraseña debe tener al menos 6 caracteres.");
    return
  }

  if (!/[A-Z]/.test(password)) {
    showMessage("La contraseña debe tener al menos una letra mayúscula.");
    return
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        showMessage("Registro exitoso ✅")
        Verify_Authenticate()
        setTimeout(() => {
            Mostrar_Productos()
        }, 1000)
    })
    .catch(e => showMessage("Error: " + e.message))
}

// Iniciar sesión
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        showMessage("Inicio de sesión exitoso ✅")
        Verify_Authenticate()
        setTimeout(() => {
            Mostrar_Productos()
        }, 1000)
    })
    .catch(e => showMessage("Error: " + e.message))    
}

function logout(){
    firebase.auth().signOut()
  .then(() => {
    console.log("Sesión cerrada exitosamente ✅")
    let element = document.querySelector(".login")
    element.firstElementChild.innerHTML = "Login "
    let et_i = element.lastElementChild
    et_i.classList.remove("fa", "fa-arrow-left")
    et_i.classList.add("fa-solid", "fa-arrow-right-to-bracket")  
    document.getElementById("usuario").innerHTML = ""  
  })
  .catch((error) => {
    console.error("Error al cerrar sesión ❌", error)
  })

}

// Mostrar mensajes
function showMessage(text) {
  document.getElementById("message").innerText = text
}

window.register = register
window.login = login
window.logout = logout
window.showMessage= showMessage
window.Verify_Authenticate = Verify_Authenticate