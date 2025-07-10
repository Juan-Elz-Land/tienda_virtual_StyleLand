
    import {  product_collection,getDocs,where,query,limit } from '../js/app.js';        
    let i = 0
    Mostrar_Productos() 

    function init(){        
        document.querySelector(".container-main").innerHTML =`
            <section class="name-user">
                    <span id="usuario"></span>                
            </section>
            </section>
            <div class="title-data">
            </div>
            <section class="container-items">                                 
            </section>`
    
        document.querySelector(".title-data").innerHTML = `<h1>Productos recien llegados</h1>
            <p id="subtitulo">Echa un vistazo a nuestros últimos productos!</p>`            
    }

    export async function Mostrar_Productos(){
        init()   
        i = 0      
        const product_collection_limited = query(product_collection, limit(14));
        const Lista_Productos = await getDocs(product_collection_limited);
        Lista_Productos.forEach(element =>{
        const {Imagen,Precio,Producto} = element.data()
            document.querySelector(".container-items").innerHTML +=`<div class="div-container div-${++i}">
                        <div class="div-img"><img src="${Imagen}" alt="imagen"></div>
                        <h3>${Producto}</h3>
                        <p>${Precio.toLocaleString('es-PE',{style: 'currency',currency: 'PEN'})}</p>
                    </div> `            
        })
        Verify_Authenticate()
    }

    async function Mostrar_Todos_Productos(){
        init()   
        i = 0        
        document.querySelector(".title-data").innerHTML = "<h1>Todos los productos de nuetras líneas</h1>"    
        const Lista_Productos = await getDocs(product_collection);
        Lista_Productos.forEach(element =>{
        const {Imagen,Precio,Producto} = element.data()
            document.querySelector(".container-items").innerHTML +=`<div class="div-container div-${++i}">
                        <div class="div-img"><img src="${Imagen}" alt="imagen"></div>
                        <h3>${Producto}</h3>
                        <p>${Precio.toLocaleString('es-PE',{style: 'currency',currency: 'PEN'})}</p>
                    </div> `                   
        })

        Verify_Authenticate()
    }

    export async function Mostrar_Producto_Categ(categoria){
        init()   
        i = 0
        if (categoria == "Todos"){
            Mostrar_Todos_Productos()
        }else{
            document.querySelector(".container-items").innerHTML = ""
            document.querySelector(".title-data").innerHTML = `<h1>Línea de ${categoria}</h1>
            <p id="subtitulo">Echa un vistazo a nuestros prductos de ${categoria}!</p>`
            const productosFiltrados = query(product_collection, where("Categoria", "==",categoria));
            const Lista_Productos = await getDocs(productosFiltrados);
            Lista_Productos.forEach(element =>{
            const {Imagen,Precio,Producto} = element.data()
                document.querySelector(".container-items").innerHTML +=`<div class="div-container div-${++i}">
                            <div class="div-img"><img src="${Imagen}" alt="imagen"></div>
                            <h3>${Producto}</h3>
                            <p>${Precio.toLocaleString('es-PE',{style: 'currency',currency: 'PEN'})}</p>
                        </div> `            
            })
        }

        Verify_Authenticate()
    }

    window.Mostrar_Productos = Mostrar_Productos   
    window.Mostrar_Producto_Categ = Mostrar_Producto_Categ
