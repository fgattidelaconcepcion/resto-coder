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
*/
//////////////////////////////////////////////////////////