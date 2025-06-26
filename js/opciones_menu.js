
   "use strict"

    Mostrar_Menu_Opciones()

    function Mostrar_Menu_Opciones(){
        let op = opciones.map(op => `<li class="${op.Class}"> <a id="${op.id}" onmouseover="Opcion_Menu('${op.id}')" href="${op.Url}">${op.Page}</a></li>`)
        const nav_menu = document.querySelector(".nav-menu")
        let menu =  `<div class="nav-header"><a href="/tienda_virtual_StyleLand/index.html"><img src="/tienda_virtual_StyleLand/assets/img/logotipp_StyleLan.png" alt="logotipo StyleLand" width="150" height="70"></a>
            <span class="menu-toggle" onclick="toggleMenu()">☰</span></div>
            <ul class="lista_menu">
               ${op.join(' ')}               
            </ul>`
        nav_menu.innerHTML = menu
        
        const sub_menu = document.querySelector(".dropdown")
        let s_op = sub_opciones.map(s_op => `<li onmouseover="Mostrar_Producto_Categ('${s_op.Name}')"> <i class="${s_op.Class}"></i><span> ${s_op.Name}</span></li>`)
        sub_menu.innerHTML += `
                    <ul class="dropdown-menu">
                        ${s_op.join(' ')}
                    </ul>`
    }
