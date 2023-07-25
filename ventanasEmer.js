//Ventana descuento
function mostrarVentanaEmergente(nombreProducto) {
    var ventanaEmergente = document.getElementById('ventanaEmergente');
    var nombreProductoSpan = document.getElementById('nombreProducto');
    nombreProductoSpan.textContent = nombreProducto;
    ventanaEmergente.classList.remove("hidden");
    ventanaEmergente.classList.add("block");
};
function cerrarVentanaEmergente() {
    var ventanaEmergente = document.getElementById('ventanaEmergente');
    ventanaEmergente.classList.remove("block");
    ventanaEmergente.classList.add("hidden");
};
function mostrarVentanaEmergenteProducto(nombreProducto) {
    var ventanaEmergente = document.getElementById('ventanaEmergenteInicio');
    var nombreProductoSpan = document.getElementById('nombreProductoVentanaEmergenteInicio');
    nombreProductoSpan.textContent = nombreProducto;
    ventanaEmergente.classList.remove("hidden");
    ventanaEmergente.classList.add("block");
};
function cerrarVentanaEmergenteProducto() {
    var ventanaEmergente = document.getElementById('ventanaEmergenteInicio');
    ventanaEmergente.classList.remove("block");
    ventanaEmergente.classList.add("hidden");
};







//
// async function buscarDatos() {
//     try {
//         obtenerDatos = await fetch("./productos.json")
//             .then((respuesta) => {
//                 return respuesta.json()
//             }).then(
//                 (respuesta) => {
//                     console.table(respuesta);
//                     return respuesta;
//                 }
//             )
//             .catch((err) => {
//                 console.log(err)
//             });
        
//         let datosVentaEmergenteInicio = document.getElementById("ventanaEmergenteInicio");
//         let datosInicio = document.getElementById("datosInicio");
//         console.log(obtenerDatos.Inicio.Favoritos[0].nombre);
//         const categoriasInicio = Object.keys(obtenerDatos.Inicio);
//         console.log(categoriasInicio);

//         categoriasInicio.map((categoria) => {
//             console.log(obtenerDatos.Inicio[categoria][0].nombre)
            
//             let nuevoDivCategoria = document.createElement("div");
//             let tituloCategoria = document.createElement("h2");
//             let nuevaCajaPadreProductos = document.createElement("div");
//             let nuevaVentanaEmergente = document.createElement("div");
//             tituloCategoria.classList.add("font-semibold", "text-[2.5rem]");
//             nuevoDivCategoria.classList.add("flex", "flex-col", "items-start", "mt-[1rem]", "mb-[2rem]");
//             nuevaCajaPadreProductos.classList.add("flex", "justify-center", "gap-6", "items-start");
//             nuevaVentanaEmergenteFondo.classList.add("hidden", "fixed", "top-0", "left-0", "w-[100 %]", "h-[100 %]", "bg-[#00000080]");
//             nuevaVentanaEmergente.classList.add("bg-[#fff]", "w-[50%]", "h-[50%]", "p-[20px]", "my-[100px]", "mx-auto", "rounded-md");
//             datosVentaEmergenteInicio.appendChild(nuevaVentanaEmergenteFondo);
//             nuevoDivCategoria.appendChild(tituloCategoria);
//             nuevaVentanaEmergenteFondo.appendChild(nuevaVentanaEmergente);
//             for (let producto in obtenerDatos.Inicio[categoria]) {
//                 console.log(obtenerDatos.Inicio[categoria][producto].nombre)
//                 // creacion de elementos
//                 let nuevoDivProducto = document.createElement("div");
//                 let nuevoParrafo1 = document.createElement("p");
//                 let nuevoParrafo2 = document.createElement("p");
//                 let nuevoParrafo3 = document.createElement("p");
//                 let imagen = document.createElement("img");
                
//                 let nuevoVentanaEmergenteParrafo1 = document.createElement("p");
//                 let nuevoVentanaEmergenteParrafo2 = document.createElement("p");
//                 let nuevoVentanaEmergenteParrafo3 = document.createElement("p");
//                 let nuevoVentanaEmergenteParrafo4 = document.createElement("p");
//                 let imagenVentanaEmergente = document.createElement("img");
//                 let cerrar = document.createElement("button");
//                 //             // // Elementos cargados
//                 tituloCategoria.innerText = `${categoria}`;
//                 nuevoParrafo1.innerText = `Nombre: ${obtenerDatos.Inicio[categoria][producto].nombre}`;
//                 nuevoParrafo2.innerText = `Precio: ${obtenerDatos.Inicio[categoria][producto].precio}`;
//                 nuevoParrafo3.innerText = `cantidadDisponible: ${obtenerDatos.Inicio[categoria][producto].cantidadDisponible}`;
//                 imagen.src = obtenerDatos.Inicio[categoria][producto].imagen;
//                 nuevoVentanaEmergenteParrafo1.innerText = `Nombre: ${obtenerDatos.Inicio[categoria][producto].nombre}`;
//                 nuevoVentanaEmergenteParrafo2.innerText = `Precio: ${obtenerDatos.Inicio[categoria][producto].precio}`;
//                 nuevoVentanaEmergenteParrafo3.innerText = `Cantidad disponible: ${obtenerDatos.Inicio[categoria][producto].cantidadDisponible}`;
//                 nuevoVentanaEmergenteParrafo4.innerText = `Descriccion del producto: ${obtenerDatos.Inicio[categoria][producto].descripcion}`;
//                 cerrar.innerText = "Cerrar";
//                 imagenVentanaEmergente.src = obtenerDatos.Inicio[categoria][producto].imagen;
//                 //             // // Estilos.
//                 nuevoDivProducto.classList.add("flex", "flex-col", "items-center", "col-span-1");
//                 nuevoDivProducto.setAttribute("id", `miIdI${obtenerDatos.Inicio[categoria][producto].nombre}`);
//                 imagen.classList.add("rounded", "rounded-lg", "w-[250px]", "h-[227px]");
//                 nuevoParrafo1.classList.add("font-semibold");
//                 nuevoParrafo2.classList.add("font-semibold");
//                 nuevoParrafo3.style.fontWeight = "600";
                
                
//                 imagenVentanaEmergente.classList.add("rounded", "rounded-lg", "w-[250px]", "h-[227px]");
//                 nuevoVentanaEmergenteParrafo1.classList.add("font-semibold");
//                 nuevoVentanaEmergenteParrafo2.classList.add("font-semibold");
//                 nuevoVentanaEmergenteParrafo3.style.fontWeight = "600";
//                 nuevoVentanaEmergenteParrafo4.style.fontWeight = "700";
//                 cerrar.classList.add("cursor-pointer", "rounded-md", "bg-orange-500", "px-[2%]", "py-[.4rem]", "hover:bg-orange-200", "hover:text-black", "hover:shadow-md", "hover:shadow-orange-900", "text-white", "text-[1.25rem]");
//                 //             // // Agregamos los elementos al div.
//                 nuevoDivProducto.appendChild(imagen);
//                 nuevoDivProducto.appendChild(nuevoParrafo1);
//                 nuevoDivProducto.appendChild(nuevoParrafo2);
//                 nuevoDivProducto.appendChild(nuevoParrafo3);
//                 nuevaVentanaEmergente.appendChild(imagenVentanaEmergente);
//                 nuevaVentanaEmergente.appendChild(nuevoVentanaEmergenteParrafo1);
//                 nuevaVentanaEmergente.appendChild(nuevoVentanaEmergenteParrafo2);
//                 nuevaVentanaEmergente.appendChild(nuevoVentanaEmergenteParrafo3);
//                 nuevaVentanaEmergente.appendChild(nuevoVentanaEmergenteParrafo4);
//                 nuevaVentanaEmergente.appendChild(cerrar);
//                 //             // //Agregamos el producto al div de categoria.
//                 nuevaCajaPadreProductos.appendChild(nuevoDivProducto);
//                 nuevoDivCategoria.appendChild(nuevaCajaPadreProductos);
                
//             }
//             datosInicio.appendChild(nuevoDivCategoria);
            
//         });
//     }
//     catch (error) {
//         console.error(`Ups, ocurrio el error:`);
//         console.error(error);
//     }
// };
// buscarDatos();

//creamos los elementos de la ventanaEmergente
//let nuevaVentanaEmergenteFondo = document.createElement("div");
// let nuevaVentanaEmergente = document.createElement("div");
// let nuevoVentanaEmergenteParrafo1 = document.createElement("p");
// let nuevoVentanaEmergenteParrafo2 = document.createElement("p");
// let nuevoVentanaEmergenteParrafo3 = document.createElement("p");
// let nuevoVentanaEmergenteParrafo4 = document.createElement("p");
// let imagenVentanaEmergente = document.createElement("img");
// let cerrar = document.createElement("button");
// //cargamos los elementos de la ventanaEmergente
// nuevoVentanaEmergenteParrafo1.innerText = `Nombre: ${obtenerDatos.Inicio[categoria][producto].nombre}`;
// nuevoVentanaEmergenteParrafo2.innerText = `Precio: ${obtenerDatos.Inicio[categoria][producto].precio}`;
// nuevoVentanaEmergenteParrafo3.innerText = `Cantidad disponible: ${obtenerDatos.Inicio[categoria][producto].cantidadDisponible}`;
// nuevoVentanaEmergenteParrafo4.innerText = `Descriccion del producto: ${obtenerDatos.Inicio[categoria][producto].descripcion}`;
// cerrar.innerText = "Cerrar";
// imagenVentanaEmergente.src = obtenerDatos.Inicio[categoria][producto].imagen;

// //estilos
// nuevaVentanaEmergenteFondo.classList.add("hidden", "fixed", "top-0", "left-0", "w-[100 %]", "h-[100 %]", "bg-[#00000080]", "z-20");
// nuevaVentanaEmergente.classList.add("bg-[#fff]", "w-[50%]", "h-[50%]", "p-[20px]", "my-[100px]", "mx-auto", "rounded-md");
// imagenVentanaEmergente.classList.add("rounded", "rounded-lg", "w-[250px]", "h-[227px]");
// nuevoVentanaEmergenteParrafo1.classList.add("font-semibold");
// nuevoVentanaEmergenteParrafo2.classList.add("font-semibold");
// nuevoVentanaEmergenteParrafo3.style.fontWeight = "600";
// nuevoVentanaEmergenteParrafo4.style.fontWeight = "700";
// cerrar.classList.add("cursor-pointer", "rounded-md", "bg-orange-500", "px-[2%]", "py-[.4rem]", "hover:bg-orange-200", "hover:text-black", "hover:shadow-md", "hover:shadow-orange-900", "text-white", "text-[1.25rem]");
// // Agregamos los elementos al div.
// nuevaVentanaEmergente.appendChild(imagenVentanaEmergente);
// nuevaVentanaEmergente.appendChild(nuevoVentanaEmergenteParrafo1);
// nuevaVentanaEmergente.appendChild(nuevoVentanaEmergenteParrafo2);
// nuevaVentanaEmergente.appendChild(nuevoVentanaEmergenteParrafo3);
// nuevaVentanaEmergente.appendChild(nuevoVentanaEmergenteParrafo4);
// nuevaVentanaEmergente.appendChild(cerrar);
// // Agregamos la ventana al fondo
// nuevaVentanaEmergenteFondo.appendChild(nuevaVentanaEmergente);

        // cerrar.addEventListener("click", () => {
        //     nuevaVentanaEmergenteFondo.classList.remove("block")
        //     nuevaVentanaEmergenteFondo.classList.add("hidden")
        // });
        