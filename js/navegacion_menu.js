    "use strict"
    
    function Opcion_Menu(opcion){
        if (opcion == "index"){
              Mostrar_Productos()
        }else if(opcion == "producto"){           
            //Mostrar_Todos_Productos()
        }else if (opcion == "quines_somos"){
            Mostrar_Quines_Somos()
        }else if(opcion == "contacto"){
            Mostrar_Frm_Contacto()
        }
    }

    Mostrar_Productos()
    Opcion_Menu()
