
    "use strict"
    let i = 0
    const principal_html = document.getElementById("principal")
   
    Mostrar_Productos()
      
    function Mostrar_Productos(){
        principal_html.innerHTML = ""
        for(let producto of productos){
            principal_html.innerHTML +=`<div class="div-container div-${i++}">
                        <div class="div-img"><img src="${producto.Imagen}" alt="imagen"></div>
                        <h3>${producto.Producto}</h3>
                        <p>${producto.Precio}</p>
                    </div> `
            if ( i == 14){
                break
            }
        }
    }

    function Mostrar_Producto_Categ(categoria){
        principal_html.innerHTML = ""
        for(let cat_prod of productos){
            if (cat_prod.Categoria == categoria){
                principal_html.innerHTML +=`<div class="div-container div-${i++}">
                        <div class="div-img"><img src="${cat_prod.Imagen}" alt="imagen"></div>
                        <h3>${cat_prod.Producto}</h3>
                        <p>${cat_prod.Precio}</p>
                    </div> `
            }
        }
    }
