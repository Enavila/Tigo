// ventana emergente
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
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
swiper.autoplay.start(3000);
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
});
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
});
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
});
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
});
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
});
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
});
carritoCompras.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("carritoCompras")[0];
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
});
