// Arreglo para almacenar los productos agregados al carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    console.log('Producto agregado al carrito:', nombre);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    console.log('Actualizando carrito...');
    // Obtener el elemento del carrito
    const carritoElement = document.getElementById('carrito_contenido');

    // Calcular el total de la compra
    let total = 0;

    // Limpiar el contenido anterior del carrito
    carritoElement.innerHTML = '';

    // Generar la lista de productos en el carrito
    carrito.forEach((producto, index) => {
        const productoElement = document.createElement('div');
        productoElement.innerHTML = `${producto.nombre} - $${producto.precio}`;
        carritoElement.appendChild(productoElement);
        total += producto.precio;
    });

    // Mostrar el total de la compra
    const totalElement = document.createElement('div');
    totalElement.innerHTML = `Total: $${total}`;
    carritoElement.appendChild(totalElement);
}

function procesarPago() {
    // Aquí puedes agregar el código para procesar el pago, como enviar los detalles del pedido a un servidor o mostrar un mensaje de confirmación.
    console.log('Procesando pago...');
    alert('¡Gracias por tu compra! El pago ha sido procesado.');
}

function vaciarCarrito() {
    // Vaciar el arreglo de productos del carrito
    carrito = [];
    // Actualizar la visualización del carrito
    actualizarCarrito();
}

function procesarPago() {
    // Verificar que se haya seleccionado un método de pago
    const formaPago = document.querySelector('input[name="formaPago"]:checked');
    if (!formaPago) {
        alert('Por favor, selecciona un método de pago.');
        return;
    }

    // Si se seleccionó tarjeta de crédito, obtener el número de cuotas
    let cuotas = null;
    if (formaPago.value === 'tarjeta') {
        cuotas = document.getElementById('cuotas').value;
    }

    // Aquí puedes agregar el código para procesar el pago
    console.log('Procesando pago...');
    alert('¡Gracias por tu compra! El pago ha sido procesado.');

    // Vaciar el carrito después de procesar el pago
    vaciarCarrito();
}