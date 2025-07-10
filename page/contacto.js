    import { contactos_Collection,addDoc} from '../js/app.js'
    import {Fecha_Corta} from '../js/utilidades.js'

    export function Mostrar_Frm_Contacto(){
        document.querySelector(".container-main").innerHTML = `
        <div class="name-user"><span id="usuario"></span></div>
        <div class="formulario">
                <h1>Contáctanos</h1>
                <p>Déjanos tu mensaje y nos pondremos  en 
                    contacto contigo</p>
                <form action="" method="post" id="frm_contaco">
                    <div class="inputs">
                        <div>
                            <label for="nombres">Nombre completos:</label>
                            <div><input type="text" class="texto_input" name="nombres" id="nombres" placeholder="juan julca landacay" required></div>
                        </div>
                        <div>
                            <label for="correo">Correro electrónico:</label>
                            <div><input type="email" class="texto_input"  name="correo" id="email" placeholder="juan@gmail.com" required></div>
                        </div>
                        <div>
                            <label for="telefono">Teléfono:</label>
                            <div><input type="text" class="texto_input" name="telefono" id="telefono" placeholder="985 000 225" required></div>
                        </div>
                        <div>
                            <label for="mensaje">Mensaje:</label>
                            <div><textarea name="mensaje" id="mensaje" class="texto_input" placeholder="tu mensaje.............." required></textarea></div>
                        </div>
                        <div>
                            <button class="btn_registrar" type="submit">Enviar Mensaje</button>
                        </div>
                        <p id="message"></p>
                    </div>
                </form>
            </div>`

        Verify_Authenticate()

        document.getElementById("frm_contaco").addEventListener("submit",async (e)=>{
            e.preventDefault()                
                const Nombre =  nombres.value
                const Email = email.value
                const Telefono = telefono.value
                const Mensaje = mensaje.value
                const Fecha = Fecha_Corta()
         
            try {                            
                await addDoc(contactos_Collection,{Email,Mensaje,Nombre,Telefono,Fecha})                
                frm_contaco.reset()
                message.innerHTML = "Su mensaje fue enviado con éxito ✅"
                setTimeout(() => {
                    message.innerHTML = ""
                }, 3000);
            } catch (error) {
                console.error("Error al registrar: ",error)
            }   
        })         
    }

    window.Mostrar_Frm_Contacto = Mostrar_Frm_Contacto
