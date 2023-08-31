/* ========================= */
let cartInfo = document.querySelector('.cart-product');
let rowProduct = document.querySelector('.row-product');
let rowProduct2 = document.querySelector('.rowProduct2');
let cajaFactura = document.querySelector('#cajaFactura');
let aceptarFactura = document.querySelector('#aceptarFactura');
let totalGlobalFactura = document.querySelector('#totalGlobalFactura');
let iva = document.querySelector('#iva');
let totalApagarFactura = document.querySelector('#totalApagarFactura');
let gracias = document.querySelector('#gracias');

// Lista de todos los contenedores de productos
let productsList = document.querySelector('.container-items');
let cartProduct2 = document.querySelector('cart-product2');

// Variable de arreglos de Productos
let allProducts = [];

let valorTotal = document.querySelector('.total-pagar');

let countProducts = document.querySelector('#contador-productos');

let pagar = document.querySelector("#pagar");

const cartTotal = document.querySelector('.cart-total');
// console.log(cartInfo)
// console.log(rowProduct)
// console.log(productsList)
// console.log(valorTotal)
// console.log(countProducts)

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentNode.parentNode;

        const infoProducto = {
            cantidad: 1,
            title: product.querySelector('#nombreProductoVentanaEmergenteInicio').textContent,
            price: product.querySelector('#preVentE').textContent
        };

        const exits = allProducts.some(product => product.title === infoProducto.title);

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProducto.title) {
                    product.cantidad++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProducto];
        }
        showHTML();
        console.log(allProducts)
    }
});


rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentNode.parentNode;
        console.log(product)
        const title = product.querySelector('p').textContent;
        allProducts = allProducts.filter(
            product => product.title !== title
        );

            console.log(allProducts);

        showHTML();
    }
});

//mostrar HTML


const showHTML = () => {

    rowProduct.innerHTML = "";
    let total = 0;
    let totalProductos = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement("div");
        containerProduct.classList.add("cart-product");

        containerProduct.innerHTML = `
            <div class="info-cart-produc flex flex-col  min-[420px]:grid min-[420px]:grid-cols-4 mb-[2rem] shadow-md">
                <p id="miId${product.title}" class="titulo-producto-carrito text-[1.5rem] font-medium">${product.title}</p>
                <p class="precio-producto-carrito text-[1.5rem] font-medium">${product.price}$</p>
                <span class="cantidad-producto-carrito text-[1.5rem] font-medium">Cantidad: ${product.cantidad}</span>
                <button class="text-white font-extrabold cursor-pointer rounded-md bg-orange-500 max-w-[4rem] px-[.8rem] py-[.4rem] min-[420px]:justify-self-center  hover:bg-orange-200 hover:text-black hover:shadow-md hover:shadow-orange-900 text-white text-[1.25rem] max-[420px]:ml-[16rem] max-[420px]:mt-[-4.5rem] icon-close ">
                X
                </button>
                <span class="text-transparent min-[420px]:hidden">.</span>
            </div>

        `;
        rowProduct.append(containerProduct);
        total = total + parseInt(product.cantidad * product.price.slice(7));
        totalProductos = totalProductos + product.cantidad;
        
    });
    valorTotal.innerHTML = ` $${total}`;
    countProducts.innerHTML = totalProductos;
    console.log(total);
};

const imprimirFactura = () => {

    rowProduct2.innerHTML = "";
    let total2 = 0;
    let iva$ = 0;
    let totalApagarFactura$ = 0;

    allProducts.forEach(product => {
        const containerProduct2 = document.createElement("div");
        containerProduct2.classList.add("facturaProduct");
        
        containerProduct2.innerHTML = `
            <div class="infoFacturaProduc grid grid-cols-3">
                <p id="miId${product.title}" class="titulo-producto-carrito text-[.9rem] font-medium">${product.title}</p>
                <span class="cantidad-producto-carrito text-[.9rem] font-medium justify-self-center">${product.cantidad}Uni.</span>
                <p class="precio-producto-carrito text-[.9rem] font-medium justify-self-end">Uni/${product.price}$</p>
            </div>
        `;
        rowProduct2.append(containerProduct2); 
        total2 = total2 + parseInt(product.cantidad * product.price.slice(7));
        iva$ = total2 * 0.16;
        totalApagarFactura$ = total2 + iva$;
        
    });
    totalGlobalFactura.innerHTML = ` $${total2}`;
    iva.innerHTML = ` $${iva$}`;
    totalApagarFactura.innerHTML = ` $${totalApagarFactura$}`;
    console.log(total2);
    console.log(iva);
    console.log(totalApagarFactura);
};

//al hacer click en pagar se quitara la clase hidden de cajaFactura yse le agreg la clase block a cajaFactura
pagar.addEventListener('click', () => {
    cajaFactura.classList.remove("hidden");
    cajaFactura.classList.add("block");
    
    imprimirFactura();
});
aceptarFactura.addEventListener('click', () => {
    cajaFactura.classList.remove("block");
    cajaFactura.classList.add("hidden");
    allProducts.splice(0, allProducts.length);
    
    showHTML();

    gracias.classList.remove("hidden");
    gracias.classList.add("block");

    setTimeout(() => {
        gracias.classList.remove("block");
        gracias.classList.add("hidden");
    }, 5000);
});















// pagar.addEventListener('click', () => {
//     allProducts.splice(0, allProducts.length);

//     alert("Factura pagada");
//     showHTML();
// });