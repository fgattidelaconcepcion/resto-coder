// Definición de la clase Reserva
class Reserva {
    constructor(cantidadClientes, fecha, hora) {
        this.cantidadClientes = cantidadClientes; // Almaceno la cantidad de clientes
        this.fecha = fecha; // Almaceno la fecha de la reserva
        this.hora = hora; // Almaceno la hora de la reserva
    }

    imprimirReserva() {
        // Devuelvo un texto formateado con la información de la reserva
        return `Reserva para ${this.cantidadClientes} clientes el ${this.fecha} a las ${this.hora}.`;
    }
}

let listaReservas = []; // Inicializo un arreglo para almacenar las reservas


function mostrarReservas() {
    // Muestro todas las reservas en la consola
    console.log(listaReservas.map(reserva => reserva.imprimirReserva()).join('\n'));
}

// Cargar reservas del local storage al iniciar
function cargarReservasDesdeLocalStorage() {
    const reservasGuardadas = localStorage.getItem('reservas'); // Intento obtener las reservas guardadas en localStorage
    if (reservasGuardadas) {
        // Si se encontraron reservas, las deserializo y las convierto en instancias de Reserva
        listaReservas = JSON.parse(reservasGuardadas).map(reserva => new Reserva(reserva.cantidadClientes, reserva.fecha, reserva.hora));
    }
    mostrarReservas(); // Muestro las reservas en la consola
}

// Guardar reservas en local storage
function guardarReservasEnLocalStorage() {
    // Serializo la lista de reservas y la guardo en localStorage
    localStorage.setItem('reservas', JSON.stringify(listaReservas));
}

function agregarReserva(cantidadClientes, fecha, hora) {
    const nuevaReserva = new Reserva(cantidadClientes, fecha, hora); // Creo una nueva instancia de Reserva
    listaReservas.push(nuevaReserva); // Agrego la nueva reserva a la lista
    guardarReservasEnLocalStorage(); // Guardamos la lista de reservas en localStorage
    mostrarReservas(); // Muestra las reservas en la consola
}

function crearFormularioCliente() {
    const form_cliente = document.createElement('form'); // Creo un formulario para la cantidad de clientes
    const label_cliente = document.createElement('label'); // Creo una etiqueta para el campo de cantidad de clientes
    label_cliente.setAttribute('for', 'clientes'); // Asocio la etiqueta al campo de entrada
    label_cliente.textContent = 'Clientes';

    const input_cliente = document.createElement('input'); // Creo un campo de entrada
    input_cliente.id = 'clientes'; // Asigno un ID al campo
    input_cliente.type = 'text'; // Establezco el tipo de entrada como texto
    input_cliente.placeholder = 'Ingrese cantidad de clientes'; // Establezco un marcador de posición

    form_cliente.appendChild(label_cliente); // Agrego la etiqueta al formulario
    form_cliente.appendChild(input_cliente); // Agrego el campo de entrada al formulario
    return { form_cliente, input_cliente }; // Retorno el formulario y el campo de entrada
}

function crearFormularioFechaHora(input_cliente) {
    const form_fecha_hora = document.createElement('form'); // Creo un formulario para la fecha y hora

    const label_fecha = document.createElement('label'); // Creo una etiqueta para la fecha
    label_fecha.setAttribute('for', 'fecha');
    label_fecha.textContent = 'Fecha:';
    
    const input_fecha = document.createElement('input'); // Creo un campo de entrada para la fecha
    input_fecha.type = 'date';
    input_fecha.id = 'fecha';
    
    const label_hora = document.createElement('label'); // Creo una etiqueta para la hora
    label_hora.setAttribute('for', 'hora');
    label_hora.textContent = 'Hora:';
    
    const input_hora = document.createElement('input'); // Creo un campo de entrada para la hora
    input_hora.type = 'time';
    input_hora.id = 'hora';

    const button = document.createElement('button'); // Creo un botón para enviar el formulario
    button.textContent = 'Aceptar'; // Establezco el texto del botón
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevengo el comportamiento predeterminado del formulario
        const cantidadClientes = input_cliente.value; // Obtengo la cantidad de clientes del campo
        const fecha = input_fecha.value; // Obtengo la fecha del campo
        const hora = input_hora.value; // Obtengo la hora del campo

        // Verifico que todos los campos estén completos antes de agregar la reserva
        if (cantidadClientes && fecha && hora) {
            agregarReserva(cantidadClientes, fecha, hora); // Agrego la reserva
            input_cliente.value = ''; // Limpio el campo de cantidad de clientes
            input_fecha.value = ''; // Limpio el campo de fecha
            input_hora.value = ''; // Limpio el campo de hora
        } else {
            alert("Por favor, completa todos los campos."); // Muestro un mensaje de error si falta información
        }
    });

    // Agrego todos los elementos al formulario de fecha y hora
    form_fecha_hora.appendChild(label_fecha);
    form_fecha_hora.appendChild(input_fecha);
    form_fecha_hora.appendChild(label_hora);
    form_fecha_hora.appendChild(input_hora);
    form_fecha_hora.appendChild(button);

    return form_fecha_hora; // Retorno el formulario de fecha y hora
}

// Crear el encabezado
function crearHeader() {
    const header = document.createElement('header'); // Creo el elemento <header>
    const logo = document.createElement('img'); // Creo el elemento <img> para el logo
    logo.className = 'logo'; // Asigno la clase 'logo' al elemento
    logo.src = '../img/logoPng.png'; // Establezco la fuente de la imagen del logo
    logo.alt = 'Logo del restaurante'; // Establezco el texto alternativo para el logo

    const h1 = document.createElement('h1'); // Creo un elemento <h1> para el título
    h1.textContent = 'Reservas'; // Establezco el texto del título

    // Agrego el logo y el título al encabezado
    header.appendChild(logo);
    header.appendChild(h1);

    document.body.appendChild(header); // Agrego el encabezado al cuerpo del documento
}

// Crear contenido principal
function crearContenidoPrincipal() {
    const main = document.createElement('main'); // Creo el elemento <main>
    main.className = 'reserva'; // Asigno la clase 'reserva' al elemento

    const h2 = document.createElement('h2'); // Creo un elemento <h2> para el subtítulo
    h2.className = 'title-one'; // Asigno la clase 'title-one' al <h2>
    h2.textContent = 'Realizar reserva'; // Establezco el texto del subtítulo

    const h3_cliente = document.createElement('h3'); // Creo un elemento <h3> para la sección de clientes
    h3_cliente.className = 'title-two'; // Asigno la clase 'title-two' al <h3>
    h3_cliente.textContent = 'Seleccionar cantidad de clientes'; // Establezco el texto del encabezado

    const { form_cliente, input_cliente } = crearFormularioCliente(); // Creo el formulario de clientes
    const form_fecha_hora = crearFormularioFechaHora(input_cliente); // Creo el formulario de fecha y hora

    // Agrego todos los elementos al contenido principal
    main.appendChild(h2);
    main.appendChild(h3_cliente);
    main.appendChild(form_cliente);
    main.appendChild(form_fecha_hora);

    document.body.appendChild(main); // Agrego el contenido principal al cuerpo del documento
}

// Crear pie de página
function crearFooter() {
    const footer = document.createElement('footer'); // Creo un elemento <footer>

    const anchor_inicio = document.createElement('a'); // Creo un enlace para volver al inicio
    anchor_inicio.href = '../Index.html'; // Establezco la URL del enlace
    anchor_inicio.className = 'btn btn-primary'; // Asigno la clase para estilos
    anchor_inicio.textContent = 'Volver al inicio'; // Establezco el texto del enlace

    const h3_ubicacion = document.createElement('h3'); // Creo un encabezado <h3> para la ubicación
    h3_ubicacion.textContent = 'Dónde estamos'; // Establezco el texto del encabezado

    const p_telefono = document.createElement('p'); // Creo un elemento <p> para mostrar el teléfono
    p_telefono.textContent = '+59892672437'; // Establezco el número de teléfono

    const iframe = document.createElement('iframe'); // Creo un elemento <iframe> para mostrar el mapa
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1480700270768!2d-54.95765432340618!3d-34.902733473352875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95751a8405737291%3A0x572382dc92d4a1f7!2sHector%20Gutierrez%20Ruiz%20630%2C%2020000%20Maldonado%2C%20Departamento%20de%20Maldonado!5e0!3m2!1ses-419!2suy!4v1722099332497!5m2!1ses-419!2suy"; // Establezco la fuente del mapa
    iframe.width = "400"; // Establezco el ancho del iframe
    iframe.height = "300"; // Establezco el alto del iframe
    iframe.style.border = "0"; // Establezco que no haya borde alrededor del iframe
    iframe.allowFullscreen = true; // Habilito el modo de pantalla completa para el iframe
    iframe.loading = "lazy"; // Habilito la carga diferida para mejorar la velocidad de carga
    iframe.referrerPolicy = "no-referrer-when-downgrade"; // Establezco la política de referencia del iframe

    const anchor_instagram = document.createElement('a'); // Creo un enlace para Instagram
    anchor_instagram.href = "https://www.instagram.com/..."; // Establezco la URL del perfil de Instagram
    anchor_instagram.target = "_blank"; // Habilito que se abra en una nueva pestaña al hacer clic
    anchor_instagram.className = 'btn btn-secondary'; // Asigno la clase para estilos
    anchor_instagram.textContent = 'Nuestro instagram'; // Establezco el texto del enlace

    // Agrego todos los elementos al pie de página
    footer.appendChild(anchor_inicio);
    footer.appendChild(h3_ubicacion);
    footer.appendChild(p_telefono);
    footer.appendChild(iframe);
    footer.appendChild(anchor_instagram);

    document.body.appendChild(footer); // Finalmente, añado el pie de página al cuerpo del documento
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarReservasDesdeLocalStorage(); // Cargar reservas al iniciar
    crearHeader(); // Crear el encabezado
    crearContenidoPrincipal(); // Crear el contenido principal
    crearFooter(); // Crear el pie de página
}); 