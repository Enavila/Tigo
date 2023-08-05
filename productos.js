async function buscarDatos() {
    try {
        obtenerDatos = await fetch("./productos.json")
            .then((respuesta) => {
                return respuesta.json()
            }).then(
                (respuesta) => {
                    // console.table(respuesta);
                    return respuesta;
                }
            )
            .catch((err) => {
                console.log(err)
            });
        // console.log(obtenerDatos.Inicio)

        let datosInicio = document.getElementById("datosInicio");
        const categoriasInicio = Object.keys(obtenerDatos.Inicio);
        categoriasInicio.map((categoria) => {
            // console.log(obtenerDatos.Inicio[categoria][0].nombre)
            let nuevoDivCategoria = document.createElement("div");
            let tituloCategoria = document.createElement("h2");
            let nuevaCajaPadreProductos = document.createElement("div");
            tituloCategoria.classList.add("font-semibold", "text-[2.5rem]");
            nuevoDivCategoria.classList.add("flex", "flex-col", "items-start", "mt-[1rem]", "mb-[2rem]")
            nuevaCajaPadreProductos.classList.add("grid","grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6", "items-start")
            nuevoDivCategoria.appendChild(tituloCategoria);
            for (let producto in obtenerDatos.Inicio[categoria]) {
                // console.log(obtenerDatos.Inicio[categoria][producto].nombre)
                // creacion de elementos
                let nuevoDivProducto = document.createElement("div");
                let nuevoParrafo1 = document.createElement("p");
                let nuevoParrafo2 = document.createElement("p");
                let nuevoParrafo3 = document.createElement("p");
                let imagen = document.createElement("img");
                //             // // Elementos cargados
                tituloCategoria.innerText = `${categoria}`;
                nuevoParrafo1.innerText = `Nombre: ${obtenerDatos.Inicio[categoria][producto].nombre}`;
                nuevoParrafo2.innerText = `Precio: ${obtenerDatos.Inicio[categoria][producto].precio}`;
                nuevoParrafo3.innerText = `CantidadDisponible: ${obtenerDatos.Inicio[categoria][producto].cantidadDisponible}`;
                imagen.src = obtenerDatos.Inicio[categoria][producto].imagen;
                
                // damos id al nuevo producto


                //             // // Estilos.
                nuevoDivProducto.classList.add("flex", "flex-col", "items-center", "col-span-1");
                nuevoDivProducto.setAttribute("onclick", `mostrarVentanaEmergenteProducto('${obtenerDatos.Inicio[categoria][producto].nombre}','${obtenerDatos.Inicio[categoria][producto].imagen}','${obtenerDatos.Inicio[categoria][producto].descripcion}','Precio: ${obtenerDatos.Inicio[categoria][producto].precio}','Cantidad disponible: ${obtenerDatos.Inicio[categoria][producto].cantidadDisponible}')`);
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
            datosInicio.appendChild(nuevoDivCategoria);
        });

        let datosHogar = document.getElementById("datosHogar");
        const categoriasHogar = Object.keys(obtenerDatos.Hogar);
        categoriasHogar.map((categoria) => {
            // console.log(obtenerDatos.Hogar[categoria][0].nombre)
            let nuevoDivCategoria = document.createElement("div");
            let tituloCategoria = document.createElement("h2");
            let nuevaCajaPadreProductos = document.createElement("div");
            tituloCategoria.classList.add("font-semibold", "text-[2.5rem]");
            nuevoDivCategoria.classList.add("flex", "flex-col", "items-start", "mt-[1rem]", "mb-[2rem]")
            nuevaCajaPadreProductos.classList.add("grid","grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6", "items-start")
            nuevoDivCategoria.appendChild(tituloCategoria);
            for (let producto in obtenerDatos.Hogar[categoria]) {
                // console.log(obtenerDatos.Hogar[categoria][producto].nombre)
                // creacion de elementos
                let nuevoDivProducto = document.createElement("div");
                let nuevoParrafo1 = document.createElement("p");
                let nuevoParrafo2 = document.createElement("p");
                let nuevoParrafo3 = document.createElement("p");
                let imagen = document.createElement("img");
                //             // // Elementos cargados
                tituloCategoria.innerText = `${categoria}`;
                nuevoParrafo1.innerText = `Nombre: ${obtenerDatos.Hogar[categoria][producto].nombre}`;
                nuevoParrafo2.innerText = `Precio: ${obtenerDatos.Hogar[categoria][producto].precio}`;
                nuevoParrafo3.innerText = `cantidadDisponible: ${obtenerDatos.Hogar[categoria][producto].cantidadDisponible}`;
                imagen.src = obtenerDatos.Hogar[categoria][producto].imagen;
                //             // // Estilos.
                nuevoDivProducto.classList.add("flex", "flex-col", "items-center", "col-span-1");
                nuevoDivProducto.setAttribute("onclick", `mostrarVentanaEmergenteProducto('${obtenerDatos.Hogar[categoria][producto].nombre}','${obtenerDatos.Hogar[categoria][producto].imagen}','${obtenerDatos.Hogar[categoria][producto].descripcion}','Precio: ${obtenerDatos.Hogar[categoria][producto].precio}','Cantidad disponible: ${obtenerDatos.Hogar[categoria][producto].cantidadDisponible}')`);
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
            datosHogar.appendChild(nuevoDivCategoria);
        });

        let datosAlimentos = document.getElementById("datosAlimentos");
        const categoriasAlimentos = Object.keys(obtenerDatos.Alimentos);
        categoriasAlimentos.map((categoria) => {
            // console.log(obtenerDatos.Alimentos[categoria][0].nombre)
            let nuevoDivCategoria = document.createElement("div");
            let tituloCategoria = document.createElement("h2");
            let nuevaCajaPadreProductos = document.createElement("div");
            tituloCategoria.classList.add("font-semibold", "text-[2.5rem]");
            nuevoDivCategoria.classList.add("flex", "flex-col", "items-start", "mt-[1rem]", "mb-[2rem]")
            nuevaCajaPadreProductos.classList.add("grid","grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6", "items-start")
            nuevoDivCategoria.appendChild(tituloCategoria);
            for (let producto in obtenerDatos.Alimentos[categoria]) {
                // console.log(obtenerDatos.Alimentos[categoria][producto].nombre)
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
                nuevoDivProducto.setAttribute("onclick", `mostrarVentanaEmergenteProducto('${obtenerDatos.Alimentos[categoria][producto].nombre}','${obtenerDatos.Alimentos[categoria][producto].imagen}','${obtenerDatos.Alimentos[categoria][producto].descripcion}','Precio: ${obtenerDatos.Alimentos[categoria][producto].precio}','Cantidad disponible: ${obtenerDatos.Alimentos[categoria][producto].cantidadDisponible}')`);
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

        let datosTecnologia = document.getElementById("datosTecnologia");
        const categoriasTecnologia = Object.keys(obtenerDatos.Tecnologia);
        categoriasTecnologia.map((categoria) => {
            // console.log(obtenerDatos.Tecnologia[categoria][0].nombre)
            let nuevoDivCategoria = document.createElement("div");
            let tituloCategoria = document.createElement("h2");
            let nuevaCajaPadreProductos = document.createElement("div");
            tituloCategoria.classList.add("font-semibold", "text-[2.5rem]");
            nuevoDivCategoria.classList.add("flex", "flex-col", "items-start", "mt-[1rem]", "mb-[2rem]")
            nuevaCajaPadreProductos.classList.add("grid","grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6", "items-start")
            nuevoDivCategoria.appendChild(tituloCategoria);
            for (let producto in obtenerDatos.Tecnologia[categoria]) {
                // console.log(obtenerDatos.Tecnologia[categoria][producto].nombre)
                // creacion de elementos
                let nuevoDivProducto = document.createElement("div");
                let nuevoParrafo1 = document.createElement("p");
                let nuevoParrafo2 = document.createElement("p");
                let nuevoParrafo3 = document.createElement("p");
                let imagen = document.createElement("img");
                //             // // Elementos cargados
                tituloCategoria.innerText = `${categoria}`;
                nuevoParrafo1.innerText = `Nombre: ${obtenerDatos.Tecnologia[categoria][producto].nombre}`;
                nuevoParrafo2.innerText = `Precio: ${obtenerDatos.Tecnologia[categoria][producto].precio}`;
                nuevoParrafo3.innerText = `cantidadDisponible: ${obtenerDatos.Tecnologia[categoria][producto].cantidadDisponible}`;
                imagen.src = obtenerDatos.Tecnologia[categoria][producto].imagen;
                //             // // Estilos.
                nuevoDivProducto.classList.add("flex", "flex-col", "items-center", "col-span-1");
                nuevoDivProducto.setAttribute("onclick", `mostrarVentanaEmergenteProducto('${obtenerDatos.Tecnologia[categoria][producto].nombre}','${obtenerDatos.Tecnologia[categoria][producto].imagen}','${obtenerDatos.Tecnologia[categoria][producto].descripcion}','Precio: ${obtenerDatos.Tecnologia[categoria][producto].precio}','Cantidad disponible: ${obtenerDatos.Tecnologia[categoria][producto].cantidadDisponible}')`);
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
            datosTecnologia.appendChild(nuevoDivCategoria);
        });

        let datosRopa = document.getElementById("datosRopa");
        const categoriasRopa = Object.keys(obtenerDatos.Ropa);
        categoriasRopa.map((categoria) => {
            // console.log(obtenerDatos.Ropa[categoria][0].nombre)
            let nuevoDivCategoria = document.createElement("div");
            let tituloCategoria = document.createElement("h2");
            let nuevaCajaPadreProductos = document.createElement("div");
            tituloCategoria.classList.add("font-semibold", "text-[2.5rem]");
            nuevoDivCategoria.classList.add("flex", "flex-col", "items-start", "mt-[1rem]", "mb-[2rem]")
            nuevaCajaPadreProductos.classList.add("grid","grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6", "items-start")
            nuevoDivCategoria.appendChild(tituloCategoria);
            for (let producto in obtenerDatos.Ropa[categoria]) {
                // console.log(obtenerDatos.Ropa[categoria][producto].nombre)
                // creacion de elementos
                let nuevoDivProducto = document.createElement("div");
                let nuevoParrafo1 = document.createElement("p");
                let nuevoParrafo2 = document.createElement("p");
                let nuevoParrafo3 = document.createElement("p");
                let imagen = document.createElement("img");
                //             // // Elementos cargados
                tituloCategoria.innerText = `${categoria}`;
                nuevoParrafo1.innerText = `Nombre: ${obtenerDatos.Ropa[categoria][producto].nombre}`;
                nuevoParrafo2.innerText = `Precio: ${obtenerDatos.Ropa[categoria][producto].precio}`;
                nuevoParrafo3.innerText = `cantidadDisponible: ${obtenerDatos.Ropa[categoria][producto].cantidadDisponible}`;
                imagen.src = obtenerDatos.Ropa[categoria][producto].imagen;
                //             // // Estilos.
                nuevoDivProducto.classList.add("flex", "flex-col", "items-center", "col-span-1");
                nuevoDivProducto.setAttribute("onclick", `mostrarVentanaEmergenteProducto('${obtenerDatos.Ropa[categoria][producto].nombre}','${obtenerDatos.Ropa[categoria][producto].imagen}','${obtenerDatos.Ropa[categoria][producto].descripcion}','Precio: ${obtenerDatos.Ropa[categoria][producto].precio}','Cantidad disponible: ${obtenerDatos.Ropa[categoria][producto].cantidadDisponible}')`);
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
            datosRopa.appendChild(nuevoDivCategoria);
        });

    }
    catch (error) {
        console.error(`Ups, ocurrio el error:`);
        console.error(error);
    }
};
buscarDatos();