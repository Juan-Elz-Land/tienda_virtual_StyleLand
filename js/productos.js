
    "use strict"
    let i = 0

    function init(){        
        document.querySelector(".container-main").innerHTML =`
            <div class="title-data">
            </div>
            <section class="container-items">                                 
            </section>`
    
        document.querySelector(".title-data").innerHTML = `<h1>Productos recien llegados</h1>
            <p id="subtitulo">Echa un vistazo a nuestros últimos productos!</p>`            
    }

    function Mostrar_Productos(){
        init()
        i = 0    
        for(let producto of productos){
            document.querySelector(".container-items").innerHTML +=`<div class="div-container div-${++i}">
                        <div class="div-img"><img src="${producto.Imagen}" alt="imagen"></div>
                        <h3>${producto.Producto}</h3>
                        <p>${producto.Precio}</p>
                    </div> `
            if ( i == 14){
                break
            }
        }
    }

    function Mostrar_Todos_Productos(){
        init()     
        i = 0        
        document.querySelector(".title-data").innerHTML = "<h1>Todos los productos de nuetras líneas</h1>"    
        for(let producto of productos){
            document.querySelector(".container-items").innerHTML +=`<div class="div-container div-${++i}">
                        <div class="div-img"><img src="${producto.Imagen}" alt="imagen"></div>
                        <h3>${producto.Producto}</h3>
                        <p>${producto.Precio}</p>
                    </div> `            
        }
    }

    function Mostrar_Producto_Categ(categoria){
        init()   
        i = 0    
        document.querySelector(".container-items").innerHTML = ""
        document.querySelector(".title-data").innerHTML = `<h1>Línea de ${categoria}</h1>
        <p id="subtitulo">Echa un vistazo a nuestros prductos de ${categoria}!</p>`
        for(let cat_prod of productos){
            if (cat_prod.Categoria == categoria){
                document.querySelector(".container-items").innerHTML +=`<div class="div-container div-${++i}">
                        <div class="div-img"><img src="${cat_prod.Imagen}" alt="imagen"></div>
                        <h3>${cat_prod.Producto}</h3>
                        <p>${cat_prod.Precio}</p>
                    </div> `
            }
        }
    }

    
