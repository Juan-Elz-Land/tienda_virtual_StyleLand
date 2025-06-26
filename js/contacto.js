    "use strict"
    function Mostrar_Frm_Contacto(){
        document.querySelector(".container-main").innerHTML = `
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
                            <button type="submit">Enviar Mensaje</button>
                        </div>
                    </div>
                </form>
            </div>`

        document.getElementById("frm_contaco").addEventListener("submit",(e)=>{
            e.preventDefault()
            let data = {
                "Nombre" : nombres.value,
                "Email" : email.value,
                "Telefono" : telefono.value,
                "Mensaje" : mensaje.value
            }

            alert("Mensaje ennviado :)")
            console.log(data)
            frm_contaco.reset()
        })
    }
