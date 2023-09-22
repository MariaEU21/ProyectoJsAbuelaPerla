// Datos de ejemplo para productos
const productos = [
    // Empanadas
    { id: 1, nombre: 'Empanada de carne', categoria: 'empanadas', precio: 300, descripcion: 'Deliciosa empanada de carne', imagen: 'img/empanadas-carne.jpg', oferta: true },
    { id: 2, nombre: 'Empanada de pollo', categoria: 'empanadas', precio: 300, descripcion: 'Riquísima empanada de pollo', imagen: 'img/epollo.jpg', oferta: false },
    { id: 3, nombre: 'Empanada de jamón y queso', categoria: 'empanadas', precio: 300, descripcion: 'Sabrosa empanada de jamón y queso', imagen: 'img/empanadas-carne.jpg', oferta: true },
    { id: 4, nombre: 'Empanada de verdura', categoria: 'empanadas', precio: 300, descripcion: 'Empanada vegetariana con verduras frescas', imagen: 'img/everduras.jpg', oferta: false },
    { id: 5, nombre: 'Empanada de choclo', categoria: 'empanadas', precio: 300, descripcion: 'Empanada rellena de choclo tierno', imagen: 'img/echoclo.jpg', oferta: false },
    { id: 6, nombre: 'Empanada de cebolla', categoria: 'empanadas', precio: 300, descripcion: 'Empanada rellena de cebolla caramelizada', imagen: 'img/ecebolla.jpg', oferta: false },
    { id: 7, nombre: 'Empanada de pescado', categoria: 'empanadas', precio: 300, descripcion: 'Empanada de pescado fresco', imagen: 'img/epescado.jpg', oferta: false },
    { id: 8, nombre: 'Empanada de champiñones', categoria: 'empanadas', precio: 300, descripcion: 'Empanada con relleno de champiñones', imagen: 'img/ehongos.jpg', oferta: false },
    { id: 9, nombre: 'Empanada de atún', categoria: 'empanadas', precio: 300, descripcion: 'Empanada de atún en su jugo', imagen: 'img/eatun.jpg', oferta: true },
    { id: 10, nombre: 'Empanada de salmón', categoria: 'empanadas', precio: 300, descripcion: 'Empanada de salmón ahumado', imagen: 'img/esalmon.jpg', oferta: false },

    // Pizzas
    { id: 11, nombre: 'Pizza Margarita', categoria: 'pizzas', precio: 1500, descripcion: 'Pizza con tomate, mozzarella y albahaca', imagen: 'img/pizza.jpg', oferta: false },
    { id: 12, nombre: 'Pizza Napolitana', categoria: 'pizzas', precio: 1800, descripcion: 'Pizza con tomate, mozzarella y anchoas', imagen: 'img/napolitana.jpg', oferta: true },
    { id: 13, nombre: 'Pizza BBQ', categoria: 'pizzas', precio: 1400, descripcion: 'Pizza con salsa barbacoa, pollo y cebolla', imagen: 'img/pizza.jpg', oferta: false },
    { id: 14, nombre: 'Pizza Vegetariana', categoria: 'pizzas', precio: 1700, descripcion: 'Pizza con variedad de vegetales frescos', imagen: 'img/vegetariana.jpg', oferta: false },
    { id: 15, nombre: 'Pizza Hawaiana', categoria: 'pizzas', precio: 1300, descripcion: 'Pizza con jamón y piña', imagen: 'img/hawaiana.jpg', oferta: true},
    { id: 16, nombre: 'Pizza Cuatro Quesos', categoria: 'pizzas', precio: 1850, descripcion: 'Pizza con cuatro tipos de queso', imagen: 'img/cuatroquesos.jpg', oferta: false },
    { id: 17, nombre: 'Pizza Pepperoni', categoria: 'pizzas', precio: 2000, descripcion: 'Pizza con pepperoni picante', imagen: 'img/pepperoni.jpg', oferta: false },
    { id: 18, nombre: 'Pizza Calzone', categoria: 'pizzas', precio: 2500, descripcion: 'Pizza cerrada estilo calzone', imagen: 'img/calzone.jpg', oferta: false },
    { id: 19, nombre: 'Pizza Barbacoa', categoria: 'pizzas', precio: 1900, descripcion: 'Pizza con carne y salsa barbacoa', imagen: 'img/barbacoa.jpg', oferta: false },
    { id: 20, nombre: 'Pizza Mexicana', categoria: 'pizzas', precio: 1950, descripcion: 'Pizza con jalapeños y guacamole', imagen: 'img/mexicana.jpg', oferta: true },

    // Hamburguesas y Lomitos
    { id: 21, nombre: 'Hamburguesa Clásica', categoria: 'hamburguesas', precio: 7.0, descripcion: 'Hamburguesa con carne, lechuga y tomate', imagen: 'img/hclasica.jpg', oferta: false },
    { id: 22, nombre: 'Hamburguesa BBQ', categoria: 'hamburguesas', precio: 8.0, descripcion: 'Hamburguesa con salsa barbacoa y cebolla', imagen: 'img/hbarbacoa.jpg', oferta: true },
    { id: 23, nombre: 'Hamburguesa Doble Queso', categoria: 'hamburguesas', precio: 8.5, descripcion: 'Hamburguesa doble con queso cheddar', imagen: 'img/hdobleq.jpg', oferta: false },
    { id: 24, nombre: 'Hamburguesa de Pollo', categoria: 'hamburguesas', precio: 7.5, descripcion: 'Hamburguesa de pollo empanizado', imagen: 'img/hpollo.jpg', oferta: false },
    { id: 25, nombre: 'Lomito Especial', categoria: 'lomitos', precio: 10.0, descripcion: 'Lomito con jamón, huevo y queso', imagen: 'img/lespecial.jpg', oferta: false },
    { id: 26, nombre: 'Hamburguesa de Ternera', categoria: 'hamburguesas', precio: 7.5, descripcion: 'Hamburguesa de ternera con panceta', imagen: 'img/hternera.jpg', oferta: false },
    { id: 27, nombre: 'Hamburguesa Vegetariana', categoria: 'hamburguesas', precio: 7.5, descripcion: 'Hamburguesa de garbanzos y vegetales', imagen: 'img/hvegetariana.jpg', oferta: true },
    { id: 28, nombre: 'Lomito de Ternera', categoria: 'lomitos', precio: 10.0, descripcion: 'Lomito de ternera tierna', imagen: 'img/lternera.jpg', oferta: false },
    { id: 29, nombre: 'Hamburguesa de Pavo', categoria: 'hamburguesas', precio: 7.5, descripcion: 'Hamburguesa de pavo con aguacate', imagen: 'img/hpavo.jpg', oferta: true },
    { id: 30, nombre: 'Lomito de Pollo', categoria: 'lomitos', precio: 8.5, descripcion: 'Lomito de pollo a la parrilla', imagen: 'img/hpollo.jpg', oferta: false }
];

// Función para cargar productos en la sección de menú
function cargarProductos(categoria, mostrarOfertas = false) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    productos.forEach((producto) => {
        if ((categoria === 'todos' || producto.categoria === categoria) && (!mostrarOfertas || producto.oferta)) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <button class="add-to-cart-button" data-id="${producto.id}">Agregar al <img src="img/cart2.png" alt="Carrito de Compras"></button>`;
            productsContainer.appendChild(productCard);
        }
    });

    // Agregar evento click a los botones "Agregar al Carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const productId = parseInt(button.getAttribute('data-id'));
            agregarAlCarrito(productId);
        });
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const productoExistente = carrito.find((item) => item.id === id);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        const producto = productos.find((item) => item.id === id);
        carrito.push({ ...producto, cantidad: 1 });
    }

    // Guarda el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualiza el contador del carrito
    actualizarContadorCarrito();
    // Actualiza el carrito de compras
    actualizarCarrito();
}

// Función para actualizar el carrito de compras en la barra lateral
function actualizarCarrito() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartAside = document.getElementById('cart-aside');

    // Limpia el contenido actual del carrito
    cartItems.innerHTML = '';
    cartTotal.textContent = '0.00';

    if (carrito.length === 0) {
        // Oculta el carrito si no hay productos en él
        cartAside.classList.remove('open');
        return;
    }

    carrito.forEach((producto) => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-info">
                <p class="product-title">${producto.nombre}</p>
                <p class="product-price">$${(producto.precio * producto.cantidad).toFixed(2)}</p>
            </div>
            <div class="quantity-controls">
                <button class="decrement-item" data-id="${producto.id}">-</button>
                <p class="item-quantity">Cantidad: ${producto.cantidad}</p>
                <button class="increment-item" data-id="${producto.id}">+</button>
            </div>
            <button class="remove-from-cart" data-id="${producto.id}"><img src="img/delete.png" alt="eliminar"></button>
        `;

        cartItems.appendChild(cartItem);

        // Agregar evento click al botón de incrementar
        cartItem.querySelector('.increment-item').addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            incrementarCantidad(productId);
        });

        // Agregar evento click al botón de decrementar
        cartItem.querySelector('.decrement-item').addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            decrementarCantidad(productId);
        });
    });

    // Calcula el total de la compra
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    cartTotal.textContent = total.toFixed(2);

    // Agregar evento click a los botones "Eliminar"
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
    removeFromCartButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const productId = parseInt(button.getAttribute('data-id'));
            eliminarDelCarrito(productId);
        });
    });

    // Muestra el carrito en la barra lateral
    cartAside.classList.add('open');
}

// Función para incrementar la cantidad de un producto en el carrito
function incrementarCantidad(id) {
    const producto = carrito.find((item) => item.id === id);

    if (producto) {
        producto.cantidad++;
        actualizarCarrito();
        // Guarda el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}

// Función para decrementar la cantidad de un producto en el carrito
function decrementarCantidad(id) {
    const producto = carrito.find((item) => item.id === id);

    if (producto && producto.cantidad > 1) {
        producto.cantidad--;
        actualizarCarrito();
        // Guarda el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    const productoIndex = carrito.findIndex((item) => item.id === id);

    if (productoIndex !== -1) {
        if (carrito[productoIndex].cantidad > 1) {
            carrito[productoIndex].cantidad--;
        } else {
            carrito.splice(productoIndex, 1);
        }

        // Guarda el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualiza el contador del carrito
        actualizarContadorCarrito();
        // Actualiza el carrito de compras
        actualizarCarrito();
    }
}

// Función para actualizar el contador del carrito en el ícono del carrito
function actualizarContadorCarrito() {
    const cartIcon = document.getElementById('cart-icon');
    const cartItemsCount = document.querySelector('.cart-items-count');

    const totalCount = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cartItemsCount.textContent = totalCount.toString();

    if (totalCount > 0) {
        cartIcon.classList.add('cart-has-items');
    } else {
        cartIcon.classList.remove('cart-has-items');
    }
}

// Inicialización del carrito y actualización del contador
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
actualizarContadorCarrito();
actualizarCarrito();

// Llama a cargarProductos inicialmente para mostrar todos los productos
cargarProductos('todos');

// Agrega event listeners a los botones de filtro
document.getElementById('filter-all').addEventListener('click', function () {
    cargarProductos('todos');
});

document.getElementById('filter-empanadas').addEventListener('click', function () {
    cargarProductos('empanadas');
});

document.getElementById('filter-pizzas').addEventListener('click', function () {
    cargarProductos('pizzas');
});

document.getElementById('filter-hamburguesas').addEventListener('click', function () {
    cargarProductos('hamburguesas');
});
document.getElementById('filter-ofertas').addEventListener('click', function () {
    cargarProductos('todos', true); // Muestra solo ofertas
});

// Función para cerrar el carrito de compras
function cerrarCarrito() {
    const cartAside = document.getElementById('cart-aside');
    cartAside.classList.remove('open');
}

// Agregar evento click al botón "Cerrar Carrito"
document.getElementById('close-cart-button').addEventListener('click', cerrarCarrito);

// Agregar evento click al icono del carrito
document.getElementById('cart-icon').addEventListener('click', function () {
    const cartAside = document.getElementById('cart-aside');
    cartAside.classList.toggle('open'); // Toggle para mostrar/ocultar el carrito
});
// Agregar evento click al icono del menú hamburguesa
document.getElementById('mobile-menu').addEventListener('click', function () {
    const mobileMenuDropdown = document.getElementById('mobile-menu-dropdown');
    mobileMenuDropdown.classList.toggle('show-menu'); // Alternar la clase show-menu
});

// Botón "Comprar"
document.getElementById('buy-button').addEventListener('click', function () {
    
    alert('Compra realizada con éxito. Gracias por tu pedido.');
});

// Botón "Cargar más productos"
document.getElementById('load-more-button').addEventListener('click', function () {
    // Agregar aquí la lógica para cargar más productos
    alert('Agrega mas productos a tu carrito. ¡Disfruta de nuestras delicias!');
});
// Botón "Comprar"
document.getElementById('buy-button').addEventListener('click', function () {
    
    alert('Compra realizada con éxito. Gracias por tu pedido.');
});

// Botón "Cargar más productos"
document.getElementById('load-more-button').addEventListener('click', function () {
    
    alert('Más productos cargados. ¡Disfruta de nuestras delicias!');
});
// Obtén una referencia al botón "Cargar más productos"
const loadMoreButton = document.getElementById('load-more-button');

// Agrega un evento de clic al botón
loadMoreButton.addEventListener('click', function () {
    // Redirige al menú de productos
    window.location.href = '#menu'; // Puedes cambiar '#menu' al ID o la URL del menú de productos
});

// Función para cargar productos en oferta en la sección "Ofertas"
function cargarProductosEnOferta() {
    const productsContainer = document.querySelector('.ofertas');
    productsContainer.innerHTML = '';

    productos.forEach((producto) => {
        if (producto.oferta) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <button class="add-to-cart-button" data-id="${producto.id}">Agregar al <img src="img/cart2.png" alt="Carrito de Compras"></button>`;
            productsContainer.appendChild(productCard);
        }
    });
}

// Agregar evento click al botón "Ver Ofertas"
document.getElementById('filter-ofertas').addEventListener('click', function () {
    cargarProductosEnOferta();
});


document.addEventListener('DOMContentLoaded', function () {
    // Encuentra el botón por su id
    const verOfertasButton = document.getElementById('filter-ofertas');

    // Agrega un evento click para ocultar el botón
    verOfertasButton.addEventListener('click', function () {
        verOfertasButton.classList.add('hidden');
    });
});


