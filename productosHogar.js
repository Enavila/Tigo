async function buscarDatos() {
    try {
        obtenerDatos = await fetch("./productos.json")
            .then((respuesta) => {
                return respuesta.json()
            }).then(
                (respuesta) => {
                    console.table(respuesta);
                    return respuesta;
                }
            )
            .catch((err) => {
                console.log(err)
            });
        console.log(obtenerDatos.Hogar)

        let datosAlimentos = document.getElementById("datosAlimentos");
        console.log(obtenerDatos.Alimentos.Bebidas[0].nombre);
        const categoriasAlimentos = Object.keys(obtenerDatos.Alimentos);
        console.log(categoriasAlimentos);

        categoriasAlimentos.map((categoria) => {
            console.log(obtenerDatos.Alimentos[categoria][0].nombre)
            let nuevoDivCategoria = document.createElement("div");
            let tituloCategoria = document.createElement("h2");
            let nuevaCajaPadreProductos = document.createElement("div");
            tituloCategoria.classList.add("font-semibold", "text-[2.5rem]");
            nuevoDivCategoria.classList.add("flex", "flex-col", "items-start", "mt-[1rem]", "mb-[2rem]")
            nuevaCajaPadreProductos.classList.add("grid", "grid-cols-4", "gap-6", "items-start")
            nuevoDivCategoria.appendChild(tituloCategoria);
            for (let producto in obtenerDatos.Alimentos[categoria]) {
                console.log(obtenerDatos.Alimentos[categoria][producto].nombre)
                // creacion de elementos
                let nuevoDivProducto = document.createElement("div");
                let nuevoParrafo1 = document.createElement("p");
                let nuevoParrafo2 = document.createElement("p");
                let nuevoParrafo3 = document.createElement("p");
                let imagen = document.createElement("img");
                //             // // Elementos cargados
                tituloCategoria.innerText = `${categoria}`;
                nuevoParrafo1.innerText = `Nombre: ${obtenerDatos.Alimentos[categoria][producto].nombre}`;
                nuevoParrafo2.innerText = `Precio: ${obtenerDatos.Alimentos[categoria][producto].precio}`;
                nuevoParrafo3.innerText = `cantidadDisponible: ${obtenerDatos.Alimentos[categoria][producto].cantidadDisponible}`;
                imagen.src = obtenerDatos.Alimentos[categoria][producto].imagen;
                //             // // Estilos.
                nuevoDivProducto.classList.add("flex", "flex-col", "items-center", "col-span-1");
                imagen.classList.add("rounded", "rounded-lg", "w-[250px]", "h-[227px]");
                nuevoParrafo1.classList.add("font-semibold");
                nuevoParrafo2.classList.add("font-semibold");
                nuevoParrafo3.style.fontWeight = "600";
                //             // // Agregamos los elementos al div.
                nuevoDivProducto.appendChild(imagen);
                nuevoDivProducto.appendChild(nuevoParrafo1);
                nuevoDivProducto.appendChild(nuevoParrafo2);
                nuevoDivProducto.appendChild(nuevoParrafo3);
                //             // //Agregamos el producto al div de categoria.
                nuevaCajaPadreProductos.appendChild(nuevoDivProducto);
                nuevoDivCategoria.appendChild(nuevaCajaPadreProductos);
            }
            datosAlimentos.appendChild(nuevoDivCategoria);
        });
    }
    catch (error) {
        console.error(`Ups, ocurrio el error:`);
        console.error(error);
    }
};
buscarDatos();