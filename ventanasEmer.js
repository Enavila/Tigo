//Ventana descuento
function mostrarVentanaEmergente(nombreProducto) {
    let ventanaEmergente = document.getElementById('ventanaEmergente');
    let nombreProductoSpan = document.getElementById('nombreProducto');
    nombreProductoSpan.textContent = nombreProducto;
    ventanaEmergente.classList.remove("hidden");
    ventanaEmergente.classList.add("block");
};
function cerrarVentanaEmergente() {
    let ventanaEmergente = document.getElementById('ventanaEmergente');
    ventanaEmergente.classList.remove("block");
    ventanaEmergente.classList.add("hidden");
};
function mostrarVentanaEmergenteProducto(nombreProducto, imgProducto, descripcionProducto, precioProducto, cantidadProducto) {
    let ventanaEmergente = document.getElementById('ventanaEmergenteInicio');
    let nombreProductoSpan = document.getElementById('nombreProductoVentanaEmergenteInicio');
    let imgVentE = document.getElementById('imgVentE');
    let desVentE = document.getElementById('desVentE'); 
    let preVentE = document.getElementById('preVentE'); 
    let canVentE = document.getElementById('canVentE'); 
    nombreProductoSpan.innerText = nombreProducto;
    imgVentE.setAttribute("src", `${imgProducto}`)
    desVentE.innerText = descripcionProducto;
    preVentE.innerText = precioProducto;
    canVentE.innerText = cantidadProducto;
    ventanaEmergente.classList.remove("hidden");
    ventanaEmergente.classList.add("block");
};
function cerrarVentanaEmergenteProducto() {
    let ventanaEmergente = document.getElementById('ventanaEmergenteInicio');
    ventanaEmergente.classList.remove("block");
    ventanaEmergente.classList.add("hidden");
};

