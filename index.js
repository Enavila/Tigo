/*
Proyecto de JavaScript - Grupo 9

Fecha de inicio: 16/Julio/2023
Fecha de entrega 29/Julio/2023 (10:00 AM)


Enunciado:
    Crea un simulador de tienda en línea que permita a los usuarios agregar 
    productos a un carrito de compras, realizar compras, calcular el total de 
    la compra y generar una factura - Virtual. 


Requisitos y funcionalidad:
    Los usuarios deberán poder navegar por diferentes categorías de productos, 
    ver detalles de cada producto, agregar o eliminar elementos del carrito y 
    completar el proceso de compra.

    
Debe existir una cuadricula de productos por cada una de las siguientes categorias y subcategorias:

- Hogar: Muebleria, Cocina.
- Alimentos: Bebidas (no alcoholicas), Viveres, Dulces.
- Tecnologia: Computacion, Telefonia.
- Vestuario: Hombre, Mujer, Niños.

Deben existir al menos 8 productos por subgategoria.


Estuctura y visualizacion:

-   Todos los productos deben estar en un unico archivo HTML, y ser de facil acceso desde segun su categoria desde 
    un menu de navegacion anclado bien sea en la parte superior, izquierda o derecha de la pantalla.

-   Cada producto debe estar dentro de un contenedor (div)  que muestre su nombre, precio, y cantidad disponible,
    ademas de dos botones, un boton que permita ver su descripcion al ser presionado (Bien sea como un alert o en un elemendo del DOM)
    y un boton de añadir que permita agregar el producto al carrito.

-   Al final de cada pagina debe existir un boton que diga comprar, y muestre una factura con los detalles de la compra luego de 3 segundos,
    los cuales deben ser, nombre cada producto, cantidad de productos, precio total sin iva (se resta el 16% del precio final), precio total con iva.
    NOTA: en el lapso de tiempo de 3 segundos debe aparecer un mensaje que diga: "Generando factura".

-  Cuando la compra finalce debe aparecer un mensaje en pantalla en el cual se pregunte si se desea realizar una nueva compra, y reiniciar el proceso.


-   NOTA: deberas usar variables, selectores, eventos, arrays, objetos, funciones, metodos de array, operadores aritmeticos, de asignacion, comparativos y logicos
    loops, condicionales, manejar el DOM, iterar.

-   Debe ser responsive al menos un 50% de los elementos

-   Puedes usar Tailwind, SASS, o CSS si lo deseas.

-   Al menos usar una libreria de animaciones como AOS (Recomendado) o Animate.css, por mencionar alguinas.

-  Debe contener un footer con un Copyrigth (inventado).

-  OPCIONAL: Añade un reloj digital donde consideres que quede bien.
-  OPCIONAL: Añade la ubicacion (Falsa) de la tienda.

*/

// ventana emergente

;
Swal.fire({
    title: 'Bienvenido a supermercados Tigo, siempre contigo.',
    color: '#FF931B',
    width: 500,
    padding: '3em',
    icon: 'success',
    iconHtml: '',
    background: '#fff ',
    backdrop: `rgba(0,0,0,0.4)`
});

// Carrusell

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
swiper.autoplay.start(5000);
swiper.el.addEventListener("mouseenter", function() {
    swiper.autoplay.stop(); 
});

swiper.el.addEventListener("mouseleave", function() {
    swiper.autoplay.start(); 
});
/**BOTONERA  */
let inicio = document.getElementById("inicio");
let logo = document.getElementById("logo");
let hogar = document.getElementById("hogar");
let viveres = document.getElementById("viveres");
let tecnologia  = document.getElementById("tecnologia");
let ropa  = document.getElementById("ropa");
let carritoCompras  = document.getElementById("carritoCompras");


let clases = ["inicio", "hogar", "viveres", "tecnologia", "ropa", "carritoCompras"];

inicio.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("inicio")[0];
    clases.map(
        (elemento) => {
            if (elemento === "inicio") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})
logo.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("inicio")[0];
    clases.map(
        (elemento) => {
            if (elemento === "inicio") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

hogar.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("hogar")[0];
    clases.map(
        (elemento) => {
            if (elemento === "hogar") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

viveres.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("viveres")[0];
    clases.map(
        (elemento) => {
            if (elemento === "viveres") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

tecnologia.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("tecnologia")[0];
    clases.map(
        (elemento) => {
            if (elemento === "tecnologia") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})
ropa.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("ropa")[0];
    clases.map(
        (elemento) => {
            if (elemento === "ropa") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})
carritoCompras.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("carritoCompras")[0];
    let ocultarCarrusel = document.querySelector(".ocultoCarrusel");
    let visibleCarrusel = document.querySelector(".visibleCarrusel");
    clases.map(
        (elemento) => {
            if (elemento === "carritoCompras") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");
                

                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
                

            }
        }
    )
})
