/*let confirmar = confirm ("Aceptas los terminos y condiciones de nuestro sitio?");

 let respuesta = prompt ("Que edad tenes?");

let nombre = "Franco";
let apellido = "Gatti";


console.log(`El nombre completo es ${nombre} ${apellido}`);

apellido = "De la Concepción";

console.log(`El nombre completo es ${nombre} ${apellido}`);


const multiplicar =  (numero)=> numero * 2 ; Esta es una funcion flecha.

console.log(multiplicar(20));

let i = 3;
while (i<21){
    console.log(`numero de iteración ${i}`);
    i+=3;
}
do {
    numero = prompt ("Ingrese un numero");
    console.log("número");
}while (parseInt(numero));

/*let animal =  prompt ("Elige uno de los siguientes animales : Perro , Vaca, Gato, Pantera");
animal = animal.toLowerCase();
switch (animal){
    case "perro":
      alert("Debe comer dos veces al día");
      break;
    case "vaca":
      alert("Debe comer durante todo el día");
      break;
    case "gato":
      alert("Dejar un plato con comida y rellenarlo cuando el mismo se encuentre vacío");
      break;
    case "pantera":
      alert ("No es legal tener de mascota una pantera");
      break;
    default :
    alert("La opción elegida no es valida, vuelve a intentarlo");
    break;   
}

function saludar(nombre, edad){
    console.log(`Bienvenido ${nombre}, tu edad es de ${edad}`);
}

saludar ("Franco",26);


let resultado = 0;

const restar = function (numeroA,numeroB){
    resultado = numeroA - numeroB;
}

const mostrar = mensaje => console.log(mensaje); Esta es una funcion flecha.

 restar(10,5);

 mostrar(`El resultado es ${resultado}`);
 
function tirarDado(){
  console.log(Math.floor(Math.random()*6+1));
}

tirarDado();
tirarDado();
tirarDado();
tirarDado();

function tirarDadoX(caras){
 console.log(Math.floor(Math.random()*caras+1));  /*Math.floor redondea el numero hacia abajo y Math.random te devuelve un nomero de 0  incluido a 1 sin incluir
}
/*

tirarDadoX(20);

const tirarDadoX=(caras)=>{ 
  console.log(Math.floor(Math.random()*caras+1));  /*Math.floor redondea el numero hacia abajo y Math.random te devuelve un nomero de 0  incluido a 1 sin incluir
 }

 tirarDadoX(15);

 const tirarDadoX = caras => Math.floor(Math.random() * caras) + 1;

 console.log(tirarDadoX(9)); // Esto debería imprimir un número entre 1 y 9
 

 function pedirDatosUsuario(){
  nombre = prompt("Ingresa tu nombre");
  edad = prompt("Ingresa tu edad");
 }

 pedirDatosUsuario();
 

 const sumar = (numeroUno, numeroDos) => numeroUno + numeroDos;

 console.log(sumar(7, 8)); // Esto imprimirá 15
 
//////////////////////////////////////////////////////////////////////////////////
 const producto = { id: 1, nombre: "Arroz" }; // Creo un objeto
 const alacena = [producto, { id: 2, nombre: "Azucar" }]; // Creo un array de objetos
 alacena.push({ id: 3, nombre: "Cafe" }); //Agrego al array objeto numero tresa
 
 const nombres = alacena.map(item => item.nombre); // Extraer los nombres
 console.log(nombres.join("-")); // Unir los nombres con "-"
 //////////////////////////////////////////////////////////

 const productos = []; // creamos un array vacio 

const agregarProducto = () => {
  const id = prompt("Ingrese id del producto");
  const nombre = prompt("Ingrese nombre del producto");
  
  const producto = { id: id, nombre: nombre };
  productos.push(producto); //agrega el producto ingresado al array
};  //Le pedimos al usuario que ingrese id y nombre para agregar producto al array

let continuar = true; 

while (continuar) {
  agregarProducto();
  continuar = confirm("¿Desea agregar otro producto?"); // Preguntamos si quiere ingresar otro porducto
}

const nombres = productos.map(item => item.nombre);
console.log(nombres.join("-")); // Separamos los nombres con guion 
////////////////////////////////////////////////////////////////////////////
const heladera = [];

const producto = { cantidad: 2 ,nombre: 'Manteca'};
const productoDos = {cantidad: 1, nombre: 'Agua'}
const productoTres = {cantidad: 5, nombre: 'Leche'}
const productoCuatro = {cantidad: 2, nombre: 'Crema'}
heladera.push(producto);
heladera.unshift(productoDos);//Agregamos el producto al principio del array.
heladera.unshift(productoCuatro);
heladera.push(productoTres);
const nombres = heladera.map(item => item.nombre);
console.log(nombres.join(':::'));

heladera.shift();

console.log(heladera);
*/////////////////////////////////////////////////////////////////////
/*
const animales = [];

const agregarAnimales = () => {
  const razaAnimal = prompt('Ingrese la raza del animal');
  const nombreAnimal = prompt('Ingrese el nombre del animal');

  const animal = { raza: razaAnimal, nombre: nombreAnimal };
  animales.push(animal);
}

let continuar = true;

while (continuar) {
  agregarAnimales();
  continuar = confirm("¿Desea agregar otro animal?"); 
}

const nombres = animales.map(item => item.nombre);
console.log(nombres.join("-"));
////////////////////////////////////////////////////////////////////

const animales = [
  {raza: 'Perro' , nombre: 'Miseria'},
  {raza: 'Gato' , nombre: 'Firulais'},
  {raza: 'Loro', nombre: 'Pluma'},
  {raza: 'Tortuga' , nombre: 'Flash'},
  {raza: 'Tiburon', nombre: 'Dientes'},
]

for (const animal of animales ){
  console.table(animales); //Vemos nuestro array de objetos en una tabla
}

const eliminarAnimal = () => {
     const eliminarAnimal = prompt ('Ingrese el animal que desea eliminar');
     if() {
      razaAnimal = eliminarAnimal;
      razaAnimal = null;
      nombreAnimal = null;
      else{
       alert('Este animal no existe');
      }
}
}

*///////////////////////////////////////////////////////////
/*
const animales = [];

const agregarAnimales = () => {
  const razaAnimal = prompt('Ingrese la raza del animal');
  const nombreAnimal = prompt('Ingrese el nombre del animal');

  const animal = { raza: razaAnimal, nombre: nombreAnimal };
  animales.push(animal);
};

let continuar = true;

while (continuar) {
  agregarAnimales();
  continuar = confirm("¿Desea agregar otro animal?"); 
}

const nombres = animales.map(item => item.nombre);
console.log(nombres.join("-"));

const eliminarAnimal = () => {
  const nombreAEliminar = prompt('Ingrese el nombre del animal que desea eliminar');
  const index = animales.findIndex(animal => animal.nombre === nombreAEliminar);

  if (index !== -1) {
    animales.splice(index, 1); //En este caso, splice(index, 1) elimina un elemento del array animales a partir de la posición index, y el segundo argumento 1 indica que se debe eliminar un solo elemento.
    alert('Animal eliminado con éxito');
  } else {
    alert('El animal ingresado no existe');
  }
};


eliminarAnimal();

const modificarAnimal = () => {
  const nombreAModificar = prompt('Ingrese el nombre del animal que desea modificar');
  const index = animales.findIndex(animal => animal.nombre === nombreAModificar);

  if (index !== -1) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre del animal');
    // Actualiza el nombre del animal en el array
    animales[index].nombre = nuevoNombre;
    alert('Animal modificado con éxito');
  } else {
    alert('El animal ingresado no existe');
  }
};

modificarAnimal();

*///////////////////////////////////////////////////////////
/*
const animales = [];

const agregarAnimales = () => {
  const razaAnimal = prompt('Ingrese la raza del animal').trim(); 
  const nombreAnimal = prompt('Ingrese el nombre del animal').trim();

  if (razaAnimal && nombreAnimal) {
    const animal = { raza: razaAnimal, nombre: nombreAnimal };
    animales.push(animal);
    alert('Animal agregado con éxito');
  } else {
    alert('La raza y el nombre no pueden estar vacíos');
  }
};

const eliminarAnimal = () => {
  const nombreAEliminar = prompt('Ingrese el nombre del animal que desea eliminar').trim();
  const index = animales.findIndex(animal => animal.nombre === nombreAEliminar);

  if (index !== -1) {
    animales.splice(index, 1);
    alert('Animal eliminado con éxito');
  } else {
    alert('El animal ingresado no existe');
  }
};

const modificarAnimal = () => {
  const nombreAModificar = prompt('Ingrese el nombre del animal que desea modificar').trim();
  const index = animales.findIndex(animal => animal.nombre === nombreAModificar);

  if (index !== -1) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre del animal').trim();
    if (nuevoNombre) {
      animales[index].nombre = nuevoNombre;
      alert('Animal modificado con éxito');
    } else {
      alert('El nuevo nombre no puede estar vacío');
    }
  } else {
    alert('El animal ingresado no existe');
  }
};

const modificarRazaAnimal = () => {
  const razaAModificar = prompt('Ingrese la raza del animal que desea modificar').trim();
  const index = animales.findIndex(animal => animal.raza === razaAModificar);

  if (index !== -1) {
    const nuevaRaza = prompt('Ingrese la nueva raza del animal').trim();
    if (nuevaRaza) {
      animales[index].raza = nuevaRaza;
      alert('Raza del animal modificada con éxito');
    } else {
      alert('La nueva raza no puede estar vacía');
    }
  } else {
    alert('El animal ingresado no existe');
  }
};

const mostrarAnimales = (animales) => {
  if (animales.length === 0) {
    alert('No hay animales en la lista.');
  } else {
    const listaAnimales = animales.map(animal => `Raza: ${animal.raza}, Nombre: ${animal.nombre}`).join('\n');
    alert(`Lista de Animales:\n${listaAnimales}`);
  }
};

const app = () => {
  let continuar = true;

  while (continuar) {
    const opcion = prompt('Seleccione una opción: 1) Agregar 2) Eliminar 3) Modificar Nombre 4) Modificar Raza 5) Ver Animales 6) Salir');
    
    switch (opcion) {
      case '1':
        agregarAnimales();
        break;
      case '2':
        eliminarAnimal();
        break;
      case '3':
        modificarAnimal();
        break;
      case '4':
        modificarRazaAnimal();
        break;
      case '5':
        mostrarAnimales(animales);
        break;
      case '6':
        continuar = false;
        break;
      default:
        alert('Opción no válida. Intente de nuevo.');
    }
  }
};

app(); 


/*Constructores usando clases = class.*/ 

/*const usuarios = [];

class Usuario {
  static contador = 0 //Metodo estatico de la clase , en este caso cada vez que se cree un usuario , el contador aumenta en 1. Se puede usar tambien en funciones o para guardar informacion que siempre va a ser la misma.
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.login = false;
    Usuario.contador++;
  }
  saludar = function() {
    console.log (`Hola, bienvenido/a ${this.nombre}`);                              //Esta es la forma correcta de crear Objetos.
  }
  mostrarDatos() {
    return `Nombre: ${this.nombre} | Edad: ${this.edad} | Estado: ${this.login ? 'Conectado' : 'Desconectado'}`; //Esto es un ternario
  }
}


const usuarioCero = new Usuario('Franco',27);

function agregarUsuarios (nombre,edad){
  usuarios.push(new Usuario(nombre,edad))
}

//console.log(usuarioCero);

//usuarioCero.saludar();

//usuarioCero.mostrarDatos();

agregarUsuarios('Diego' , 35);
agregarUsuarios('Patricia' , 37);
agregarUsuarios('Sandra' , 62);
  
usuarios[1].login = true;

console.table(usuarios);


function mostrarUsuarios() {
  let texto = 'El listado de usuarios es:\n';
  for (const usuario of usuarios) {
    // Llama al método de cada instancia
    texto += usuario.mostrarDatos() + '\n'; 
  }
  return texto;
}

console.log(mostrarUsuarios());

console.log(Usuario.contador);

//////////////////////////////////////////////////////////////////////////////////////////////////////

 //Getters y setters:
 /*
 class Person{
  #firstName;
  #lastName;
  #age;
  #interaction;
  constructor(age, firstName, lastName){
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#age = age;
      this.#interaction = 0;
  }
  stringValidator(string){
      const noSpaceString = string.replace(/\s/g, '' ) //Esto es una expresion regular
      const isString = typeof string === "string"
      const isntEmpty = noSpaceString !== ""
      // console.log(isntEmpty)
      return isString && isntEmpty
  }
  // getter, nombre como si fuese propiedad, muchas veces con get adelante
  get firstName(){
      this.#interaction++
      return this.#firstName
  }
  set setFirstName(string){
      this.#interaction++
      if(this.stringValidator(string)){
          this.#firstName = string
      } else {
          console.warn("El name tiene que ser un string no vacío")
      }
  }
  get lastName(){
      this.#interaction++
      return this.#lastName
  }
  set setLastName(string){
      this.#interaction++
      if(this.stringValidator(string)){
          this.#lastName = string
      }
  }
  get fullName(){
      this.#interaction++
      return this.#lastName + ", " + this.#firstName 
  }
  get age(){
      this.#interaction++
      return this.#age
  }
  set setAge(years){
      this.#interaction++
      const toInterger = parseInt(years)
      const isNumber = (typeof years !=="number")&&(!isNan(toInterger))
      const validNumber = years >= 0 
      const isntInfinite = years !== Infinity

      if(!isNumber){
          console.warn("Age must be a number")
      }
      if(!validNumber){
          console.warn("Age must be a number equal or greater to 0")
      }
      if(!isntInfinite){
          console.warn("Age cant be Infinity")
      }
      if(isNumber && validNumber && isntInfinite){
          this.#age = toInterger
      }
  }
  get interaction(){
      return this.#interaction
  }
}

const juan = new Person(20, "Juan", "Lopez") 
console.log(juan)
// console.log(juan.#firstName)
console.log(juan.firstName)
console.log(juan.fullName)
console.log(juan.interaction)

juan.setFirstName = ""
juan.setFirstName = "Ramiro"

console.log(juan.firstName)


/* 
console.log(juan.firstName) // use getter
console.log(juan.fullName) // use getter

console.log(juan.setFirstName="")
// console.log(juan)
juan.setFirstName= "Pedro"
console.log(juan)

console.log(juan.interaction) */

// getter se usa para acceder a props privadas y/o cuando se quiere hacer logica extra al acceder a una propiedad
/////////////////////////////////////////////////////////////////////////////////


//const numero = 99;

//localStorage.setItem('numeroFavorito',numero); // Asi se guarda el numero en localStorege.

//const numeroObtenido = localStorage.getItem ("numeroFavorito"); //Asi se obtiene el numero anterior guardado.



//console.log(numeroObtenido);////////////

//localStorage.setItem ('usuarios',usuarios);
/*
const usuarios = [];

class Usuario {
  static contador = 0;

  constructor(nombre, edad, login = false) {
    this.nombre = nombre;
    this.edad = edad;
    this.login = login;
    Usuario.contador++;
  }

  saludar() {
    console.log(`Hola, bienvenido/a ${this.nombre}`);
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre} | Edad: ${this.edad} | Estado: ${this.login ? 'Conectado' : 'Desconectado'}`;
  }
}

function agregarUsuarios(nombre, edad, login) {
  usuarios.push(new Usuario(nombre, edad, login));
}

// Agregando usuarios
agregarUsuarios('Diego', 35, true);
agregarUsuarios('Patricia', 37, false);
agregarUsuarios('Sandra', 62, false);

usuarios[1].login = true;

console.table(usuarios);

function mostrarUsuarios() {
  let texto = 'El listado de usuarios es:\n';
  for (const usuario of usuarios) {
    texto += usuario.mostrarDatos() + '\n';
  }
  return texto;
}

console.log(mostrarUsuarios());
console.log(Usuario.contador);

// Función para guardar usuarios en localStorage
function guardarUsuarios() {
  const usuariosJSON = JSON.stringify(usuarios);
  localStorage.setItem('usuarios', usuariosJSON);
}

// Función para eliminar usuarios de localStorage
function eliminarUsuarios() {
  localStorage.removeItem('usuarios');
}

// Función para obtener y crear usuarios desde localStorage
function obtenerUsuarios() {
  const usuariosObtenidos = localStorage.getItem('usuarios');
  if (usuariosObtenidos) {
    const usuariosParseados = JSON.parse(usuariosObtenidos);
    // Crear nuevas instancias de Usuario
    for (const usuario of usuariosParseados) {
      agregarUsuarios(usuario.nombre, usuario.edad, usuario.login);
    }
  }
}

// Guardar usuarios en localStorage
eliminarUsuarios(); // Primero eliminamos cualquier usuario anterior
guardarUsuarios(); // Luego guardamos los nuevos usuarios

// Recuperar usuarios de localStorage
obtenerUsuarios(); // Obtén los usuarios y crea instancias

console.log(usuarios); // Esto mostrará los usuarios recuperados
console.log(mostrarUsuarios()); // Esto mostrará los datos de los usuarios, con métodos disponibles

// Para verificar que los métodos funcionan, prueba llamarlos directamente
usuarios.forEach(usuario => {
  usuario.saludar(); // Esto debería funcionar
  console.log(usuario.mostrarDatos()); // Esto también debería funcionar
});
*/////////////////////////////////////////////////////////////////////////////////////////////////

//Funciones del orden superior y recursividad 

/*class Dado {
  constructor (lados){
    this.lados = lados;
  }
  roll(){
    return Math.floor((Math.random()*this.lados)+1);
  }
}

const d12 = new Dado(12);
console.log(d12.roll());

const factorial  = (numero) =>{
  if(numero <=1){
    return 1
  }
    return numero*factorial(numero -1)
  }
console.log(factorial(6));

/////////////////////////////////////////////////////////////
const IVA = 1.21
const numeros = [12,24,26,34,18]

function paraCada(proceso,lista){
  for (let i=0; i<lista.length; i++){
    proceso (lista[i])
  }
}

function mostrarConIva(numero){
  console.log(`Èl numero ${numero} con IVA es ${numero*IVA}`);
}

function porDos(numero){
 console.log(numero*2);
}

//paraCada(porDos,numeros);
//paraCada(mostrarConIva,numeros);
numeros.forEach(porDos);


numeros.forEach((elemento,indice)=>{
  console.log(indice);
  console.log(elemento);
  console.log(elemento*indice);
})*/
//////////////////////////////////////////////////////////
/*class Usuario {
  constructor(nombre, edad, login) {
    this.nombre = nombre;
    this.edad = edad;
    this.login = login;
  }

  // Mover el método mostrarDatos dentro de la clase Usuario
  mostrarDatos() {
    return `Nombre: ${this.nombre} | Edad: ${this.edad} | Estado: ${this.login ? 'Conectado' : 'Desconectado'}`;
  }
}

const usuarios = [];

function agregarUsuarios(nombre, edad, login) {
  usuarios.push(new Usuario(nombre, edad, login));
}

function mostrarUsuarios() {
  let texto = 'El listado de usuarios es:\n';
  for (const usuario of usuarios) {
    texto += usuario.mostrarDatos() + '\n';  
  }
  return texto;
}

agregarUsuarios('Franco', 26, true);
agregarUsuarios('Pepe', 20, true);
agregarUsuarios('Diego', 24, false);
agregarUsuarios('Francisco', 21, true);
agregarUsuarios('Felipe', 18, false);

//console.log(mostrarUsuarios());

//console.log(usuarios.find(usuario => usuario.nombre === 'Pepe')); 

//console.log(usuarios.filter(usuario => usuario.edad >=18));
//console.log(usuarios.filter(usuario => usuario.login));


//console.log(usuarios.some(usuario => usuario.edad >=18));
//console.log(usuarios.some(usuario => usuario.login));

/*const productos = [{nombre:'Papa', precio:54},{nombre:'Boñato', precio:40},{nombre:'Pera', precio:45},{nombre:'Papa', precio:74}];
const productosIva = productos.map(producto =>{              //El map es un calco del array pero no lo modifica, para que no lo modifique usamos JSON. Este caso es para objetos.
const productoTemporal = JSON.parse(JSON.stringify(producto));
productoTemporal.precio *= 1.21
return productoTemporal;
})*/

//console.log(productosIva);
////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const numeros = [12,24,26,34,18];  

const numerosDobles = numeros.map(x=>x*2);    //Esto es en el caso de un array.
//console.log(numerosDobles);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const carrito = [];

const productos = [
  { nombre: 'Producto 1', precio: 100 },
  { nombre: 'Producto 2', precio: 200 },
  { nombre: 'Producto 3', precio: 300 },
  { nombre: 'Producto 4', precio: 400 },
  { nombre: 'Producto 5', precio: 500 },
  { nombre: 'Producto 6', precio: 600 },
];

function agregarCarrito(elemento, cantidad){
  const temporal = JSON.parse(JSON.stringify(elemento));
  temporal.cantidad = cantidad;
  carrito.push(temporal);
}

agregarCarrito(productos[2], 3);
agregarCarrito(productos[1], 4);
agregarCarrito(productos[5], 2);

//console.log(carrito);

const total = carrito.reduce((acumulador,producto) => {
  return acumulador + producto.cantidad * producto.precio
}, 0);

//console.log(total);

//////////////////////////////////////////////////////////////////////
const ordename = [2,11,24,35,18,23];

ordename.sort();

console.log(ordename);

ordename.sort((primero, segundo) => primero - segundo); // De esta manera los numeros se ordenan de menor a mayor.

console.log(ordename);

ordename.sort((primero, segundo) => segundo - primero); // De esta manera los numeros se ordenan de mayor a menor.

console.log(ordename);

////////////////////////////////////////////////////
//Ejemplo de ordenar usuarios.

class Usuario {
  constructor(nombre, edad, login) {
    this.nombre = nombre;
    this.edad = edad;
    this.login = login;
  }

  // Mover el método mostrarDatos dentro de la clase Usuario
  mostrarDatos() {
    return `Nombre: ${this.nombre} | Edad: ${this.edad} | Estado: ${this.login ? 'Conectado' : 'Desconectado'}`;
  }
}

const usuarios = [];

function agregarUsuarios(nombre, edad, login) {
  usuarios.push(new Usuario(nombre, edad, login));
}

function mostrarUsuarios() {
  let texto = 'El listado de usuarios es:\n';
  for (const usuario of usuarios) {
    texto += usuario.mostrarDatos() + '\n';  
  }
  return texto;
}

agregarUsuarios('Franco', 26, true);
agregarUsuarios('Pepe', 20, true);
agregarUsuarios('Diego', 24, false);
agregarUsuarios('Francisco', 21, true);
agregarUsuarios('Felipe', 18, false);


usuarios.sort((primer, segundo)=>{
 if(primer.login){
  return -1;
 } else if (segundo.login){    // De esta manera se ordenan los usuarios primeros los logeados y despues los que no estan logeados(-1 y 0 los deja en el lugar y 1 los cambia de lugar).
  return 1;
 }else {
  return 0;
 }
})

console.log(usuarios);
*/////////////////////////////////////////////////////////////////////////////////////////
//DOM y EVENTOS.

//const home = document.getElementById("home");
//console.log(home);
//console.dir(home);

/*
const presentacion = document.getElementsByClassName("presentacion"); // No muy recomendable!!
//console.log(presentacion);

const home = document.querySelector("#home.logo");
//console.log(home);

const principal =  document.querySelector("#principal.principal");
console.log(principal);

console.log(principal.innerHTML);
console.log(principal.innerText);
console.log(principal.textContent);


principal.textContent = "Sincer comida y tragos";
principal.textContent = "Sincer food & drinks";

//principal.innerHTML = "<button>HOla</button>"; //Creamos boton mediante el DOM.

//console.log(principal.className);
//console.log(principal.classList);

const botonAceptar = document.querySelector('#btnR.btn-dark');

console.log(botonAceptar);
*/