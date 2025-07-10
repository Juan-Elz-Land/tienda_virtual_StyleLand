function Mostrar_Frm_Login(){

    document.querySelector(".container-main").innerHTML = `<!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/login.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    </head>
    <body>
    <div class="form-container">
        <form>
        <h2>Iniciar Sesión</h2>
        <input type="email" id="email" placeholder="Correo" required>
        <input type="password" id="password" placeholder="Contraseña" required>
        <button type="button" onclick="register()" class="register-btn">Registrarse</button>
        <button type="button" onclick="login()" class="login-btn">Iniciar Sesión</button>
        <p id="message"></p>
        </form>
        </div>
    </body>
    </html>`
}

document.getElementById("login_icon").addEventListener("click",()=>{
    if (login_icon.innerHTML == "Login "){
        Mostrar_Frm_Login()
    }else{
        logout()
    }    
})