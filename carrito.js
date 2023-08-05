/* ========================= */
let cartInfo = document.querySelector('.cart-product');
let rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
let productsList = document.querySelector('.container-items');

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
            <div class="info-cart-product grid grid-cols-4 mb-[1rem]">
                <span class="cantidad-producto-carrito text-[1.5rem] font-medium">Cantidad: ${product.cantidad}</span>
                <p id="miId${product.title}" class="titulo-producto-carrito text-[1.5rem] font-medium">${product.title}</p>
                <span class="precio-producto-carrito text-[1.5rem] font-medium">${product.price}</span>
                <button 
                class="text-white font-extrabold cursor-pointer rounded-md bg-orange-500 w-[3rem] max-w-[3rem] col-end-6 py-[.4rem] hover:bg-orange-200 hover:text-black hover:shadow-md hover:shadow-orange-900 text-white text-[1.25rem] icon-close ">
                X
                </button>
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

pagar.addEventListener('click', () => {
    allProducts.splice(0, allProducts.length);

    alert("Factura pagada");
    showHTML();
});