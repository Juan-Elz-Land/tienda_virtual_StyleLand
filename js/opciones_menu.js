
   "use strict"

    Mostrar_Menu_Opciones()

    function Mostrar_Menu_Opciones(){
        let op = opciones.map(op => `<li> <a id="${op.id}" href="${op.Url}" class="${op.Class}">${op.Page}</a></li>`)
        const nav_menu = document.querySelector(".nav-menu")
        let menu =  `<a href="index.html"><img src="../img/logotipp_StyleLan.png" alt="logotipo StyleLand" width="150" height="70"></a>
            <ul class="lista_menu">
               ${op.join(' ')}               
            </ul>`
        nav_menu.innerHTML = menu
        
        const sub_menu = document.querySelector(".dropdown")
        let s_op = sub_opciones.map(s_op => `<li onmouseover="Mostrar_Producto_Categ('${s_op.Name}')"> <a href="${s_op.Url}"></a><i class="${s_op.Class}"></i><span> ${s_op.Name}</span></li>`)
        sub_menu.innerHTML = `<a id="productos" href="index.html">Productos</a>
                    <ul class="dropdown-menu">
                        ${s_op.join(' ')}
                    </ul>`
    }
